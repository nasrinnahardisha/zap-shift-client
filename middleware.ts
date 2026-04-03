import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const currentCookie = request.cookies.get('next-js-token')
  console.log('value of currentCookie:', currentCookie?.value ?? 'undefined')

  const dummyData = {
    role: 'user',
    email: 'john.doe@example.com',
  }

  // কুকি থাকলে সেখান থেকে role নাও, না থাকলে dummyData ব্যবহার করো
  let role = dummyData.role
  if (currentCookie?.value) {
    try {
      const parsed = JSON.parse(currentCookie.value)
      role = parsed.role ?? dummyData.role
    } catch {
      role = dummyData.role
    }
  }

  const isServicesPage = request.nextUrl.pathname.startsWith('/services')
  const isAdmin = role === 'admin'

  if (isServicesPage && !isAdmin) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

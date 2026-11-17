# 🚚 Zap Shift — Smart Parcel Delivery & Logistics Platform

![Zap Shift Banner](https://i.ibb.co.com/Qv0Fwb9b/Screenshot-933.png)

## 📖 Project Overview
**Zap Shift** is a full-stack parcel delivery and courier management web application built to streamline logistics operations. It connects senders, delivery riders, and administrators on a unified platform featuring automated delivery cost calculation, real-time parcel status tracking, role-based access control, and secure online payments via Stripe.

🔗 **Live Demo:** [Visit Zap Shift](https://zap-shift-4c521.web.app/)  
🔗 **Client Repository:** [GitHub Client Repo](https://github.com/nasrinnahardisha/zap-shift-client)  
🔗 **Server Repository:** [GitHub Server Repo](https://github.com/nasrinnahardisha/zap-shift-server)

---

## 🛠️ Main Technologies Used

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React.js, Tailwind CSS, DaisyUI, React Router, TanStack Query |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Atlas) |
| **Authentication & Security** | Firebase Authentication, JWT (JSON Web Token) |
| **Payment Gateway** | Stripe API |
| **Deployment** | Firebase Hosting (Client) & Vercel (Server) |

### 💡 Why These Technologies Were Chosen
- **React.js & TanStack Query:** Ensures smooth client-side navigation, efficient server-state caching, and instant UI updates when tracking parcel statuses.
- **Node.js, Express.js & MongoDB:** Ideal for handling complex logistics data structures, multi-step delivery logs, and user role permissions.
- **Firebase & JWT:** Combines reliable user authentication with custom backend token verification to protect sensitive admin and rider routes.
- **Stripe:** Provides a fast, secure, and developer-friendly payment workflow for parcel booking charges.

---

## ✨ Key Features
- 🔐 **Role-Based Dashboards:** Dedicated interfaces and permissions for **Users/Senders**, **Delivery Riders**, and **Admins**.
- 📦 **Dynamic Parcel Booking & Pricing:** Automated delivery fee calculation based on parcel weight, type, and destination district/region.
- 📍 **Real-Time Shipment Tracking:** Step-by-step parcel lifecycle tracking (Pending, Assigned, Picked Up, In Transit, Delivered) using unique tracking IDs.
- 💳 **Stripe Payment Integration:** Seamless card checkout experience with automated payment confirmation and booking status updates.
- 🚴 **Rider Management System:** Admins can review rider applications, assign deliveries, and monitor overall revenue and parcel metrics.
- 📱 **Responsive UI:** Fully optimized across mobile, tablet, and desktop screens.

---

## 📦 Key Dependencies
- `react` & `react-dom` — Core frontend UI library
- `react-router-dom` — Multi-role routing and protected route guards
- `@tanstack/react-query` — Asynchronous data fetching and state management
- `firebase` — User authentication
- `@stripe/react-stripe-js` & `@stripe/stripe-js` — Secure payment processing
- `axios` — HTTP client with interceptors for JWT headers
- `tailwindcss` & `daisyui` — Responsive styling and component library
- `express`, `cors`, `dotenv`, `mongodb`, `jsonwebtoken` — Backend API and security

---

## 🧩 Challenges Faced & Solutions

1. **Multi-Role Route Protection & Token Verification:**
   - *Challenge:* Preventing unauthorized users from accessing Admin or Rider dashboard endpoints directly via URL manipulation.
   - *Solution:* Implemented custom Express middleware to verify JWT tokens and check user roles from MongoDB on every protected API call, paired with role-specific React route wrappers on the frontend.

2. **Synchronizing Payment Confirmation with Parcel Status:**
   - *Challenge:* Ensuring parcel booking records only update to "Paid" after verified Stripe payment intents without duplicate entries.
   - *Solution:* Handled Stripe PaymentIntent confirmation asynchronously and stored transaction IDs alongside booking updates in MongoDB before displaying the payment receipt.


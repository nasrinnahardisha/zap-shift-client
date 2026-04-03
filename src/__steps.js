/***
 * jwt:::
 * 1:search Axios,Interceptors
 * 
 * 
 *  1.1::   const { user } = UseAuth();
 *      const reqInterceptor = axiosSecure.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${user?.accessToken || ''}`;
            
            return config
        }), (error) => {
            console.log(error);
            return Promise.reject(error);
        })



 * 
        2::    app.get("/payments", async (req, res) => {
      console.log('headers in payments', req.headers);


       3:  const  verifyFBToken = async (req, res, next) => {
    console.log('header in middleware', req.headers);
    next();
   }
 * 

   4::   const  verifyFBToken = async (req, res, next) => {
    // console.log('header in middleware', req.headers);
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    if(!token) {
      return res.status(401).send({ message: "Invalid token" });
    }
    next();
   }


   5:: npm install firebase-admin --save

   6:::var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});



7:: ./firebase-admin-key.json

8::  try{
      const decodedToken = await admin.auth().verifyIdToken(token);
      req.user = decodedToken; // Attach decoded token to request object
       next();  
    }
    catch(error) {
      console.error("Token verification failed:", error);
      return res.status(401).send({ message: "Unauthorized" });
    }


9::: app.get("/parcels", verifyFBToken, async (req, res) => {




  10::      app.get("/payments", verifyFBToken, async (req, res) => {
      // console.log('headers in payments', req.headers);
      try {
        const userEmail = req.query.email;
        console.log('decoded', res.decoded);
        if(req.decoded.email !== userEmail) {
          return res.status(403).send({ message: "Forbidden" });
        }

 */



// // import express, { Request, Response } from 'express';
// // import EcSuppliers from '../models/ec_suppliers';
// // import jwt from 'jsonwebtoken';
// // const supplierLoginRouter = express.Router();
 
// // // POST endpoint for login
// // supplierLoginRouter.post('/login', async (req: Request, res: Response) => {
// //   try {
// //     const { e_mail, password } = req.body;
 
// //     // Check if the email is registered
// //     const supplier = await EcSuppliers.findOne({ where: { e_mail } });
 
// //     if (supplier) {
// //       // If the email is registered, compare the password 
// //       if (password === supplier.password) {
// //         const token=jwt.sign(
// //             {
// //                 userId:supplier.id,
// //             },
// //             'your-secret-key',{
// //                 expiresIn:'24'
// //             }
// //         );

// //         // Passwords match, login successful
// //         res.status(200).json({ message: 'Login successful' });
// //       } else {
// //         // Passwords do not match, unauthorized (401) status
// //         res.status(401).json({ error: 'Invalid password' });
// //       }
// //     } else {
// //       // Email is not registered, unauthorized (401) status
// //       res.status(401).json({ error: 'Email not registered' });
// //     }
// //   } catch (error) {
// //     // Internal server error (500) for unexpected issues
// //     console.error('Error during login:', error);
// //     res.status(500).json({ error: 'Internal server error' });
// //   }
// // });
 
// // export default supplierLoginRouter;

// import { Request, Response } from "express";
// import EcSuppliers from "../../src/models/ec_customers";
// import EcCustomers from "../../src/models/ec_suppliers";
// import jwt from 'jsonwebtoken';
 
// const userLoginRouter = async (req: Request, res: Response): Promise<void> => {
//     const { e_mail, password, client_type } = req.body;

   
//     // try {
//     //     let user;
//     //     if (client_type === "supplier") {
//     //         user = await EcSuppliers.findOne({ where: { e_mail }, raw: true });
//     //     }
//     //     else if (client_type === "customer") {
//     //         user = await EcCustomers.findOne({ where: { e_mail }, raw: true });
//     //     }
//     //     if (user?.password === password) {
//     //         const token = jwt.sign(
//     //             { registrationId: user?.registration_id, client_type },
//     //             'your-secret-key', // Replace with your secret key
//     //             { expiresIn: '24h' } // Token expiration time
//     //         );
//     //         res.status(200).json({ token });
//     //     }
//     //     else {
//     //         res.status(401).json({ message: "Invalid credentials" })
//     //     }
//     // }
//     // catch (error: any) {
//     //     console.log(error);
//     //     res.status(500).json({ message: "Internal Server Error" });
//     // }
// };


import express, { Request, Response } from 'express';
import EcSuppliers from '../models/ec_suppliers';
import jwt from 'jsonwebtoken';
import login from '../controler/userLoginControler';
const userLoginRouter = express.Router();
 
// POST endpoint for login
userLoginRouter.post('/login', async (req: Request, res: Response) => {
    login(req, res);
});
 

export default userLoginRouter;

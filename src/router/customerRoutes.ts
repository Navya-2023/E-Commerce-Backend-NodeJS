import express, { Router } from 'express';
import { Request, Response } from 'express';
import custometrRegistration from '../controler/customers/customerRegistration';
 
const customerRouter = express.Router();
 customerRouter.post("/customerRegistration", async (req: Request, res: Response) => {
    custometrRegistration(req, res);
});

 


// import express from 'express';
// import { Request, Response } from 'express';
// import EcCustomers from '../models/ec_customers';
 
// const customerRouter = express.Router();
 
// customerRouter.get("/", async (req: Request, res: Response) => {
//     try {
//         const { e_mail } = req.query;
//         const data = await EcCustomers.findOne({ where: { e_mail: e_mail }, raw: true });
//         res.status(200).json({ message: `The data ${JSON.stringify(data)}` });
//     }
//     catch (error: any) {
//         console.log(error);
//         res.status(500).json({ error: error.toString() });
//     }
// })

// customerRouter.post("/createCustomer", async (req: Request, res: Response) => {
//     console.log("Received POST request at /createCustomer:", req.body);
//     try {
//       const { full_name, e_mail, password, profile_pic } = req.body;
//       const newCustomer = await EcCustomers.create({
//         full_name,
//         e_mail,
//         password,
//         profile_pic: Buffer.from(profile_pic),
//       }, { raw: true });
   
//       res.status(201).json({ registration_id: newCustomer.registration_id });
//     } catch (error:unknown) {
//       console.error("Error creating customer:", error);
//       res.status(500).json({ error: (error as unknown as string).toString() });
//     }
//   });
    
//   customerRouter.put("/updateCustomer", async (req: Request, res: Response) => {
//     try {
     
   
//       res.status(200).json({ message: "Implement logic to update a customer." });
//     } catch (error) {
//       console.error("Error updating customer:", error);
//       res.status(500).json({ error: "Internal server error." });
//     }
//   });
   
   
//   customerRouter.delete("/deletecustomer", async (req: Request, res: Response) => {
//     try {
     
   
//       res.status(200).json({ message: "Implement logic to delete a customer." });
//     } catch (error) {
//       console.error("Error deleting cust:", error);
//       res.status(500).json({ error: "Internal server error." });
//     }
//   });
export default customerRouter;
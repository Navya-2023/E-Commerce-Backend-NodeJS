import EcCustomers from "../../models/ec_customers";
import { Request, Response } from "express";

const customerRegistration=async(req:Request,res:Response):Promise<void>=>{
    try {
      const { full_name, e_mail, password, profile_pic } = req.body;
      const newCustomer = await EcCustomers.create({
        full_name,
        e_mail,
        password,
        profile_pic: Buffer.from(profile_pic),
      }, { raw: true });
   
      res.status(201).json({ registration_id: newCustomer.registration_id });
    } 
    catch (error:unknown) {
      console.error("Error creating customer:", error);
      res.status(500).json({ error: (error as unknown as string).toString() });
    }}
  
export default customerRegistration;
import EcSuppliers from "../../models/ec_suppliers";
import { Request, Response } from "express";
const supplierRegistration=async(req:Request,res:Response):Promise<void>=>{
    try {
        const { full_name, e_mail, password, profile_pic } = req.body;
        const newSupplier = await EcSuppliers.create({
          full_name,
          e_mail,
          password,
          profile_pic: Buffer.from(profile_pic),
        }, { raw: true });
     
        res.status(201).json({ registration_id: newSupplier.registration_id });
      } catch (error:unknown) {
        console.error("Error creating supplier:", error);
        res.status(500).json({ error: (error as unknown as string).toString() });
      }
    }
    export default supplierRegistration;
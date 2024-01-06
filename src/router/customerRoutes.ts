import express from 'express';
import { Request, Response } from 'express';
import EcCustomers from '../models/ec_suppliers';
 
const customerRouter = express.Router();
 
customerRouter.get("/", async (req: Request, res: Response) => {
    try {
        const { e_mail } = req.query;
        const data = await EcCustomers.findOne({ where: { e_mail: e_mail }, raw: true });
        res.status(200).json({ message: `The data ${JSON.stringify(data)}` });
    }
    catch (error: any) {
        console.log(error);
        res.status(500).json({ error: error.toString() });
    }
})

customerRouter.post("/createSupplier", async (req: Request, res: Response) => {
    console.log("Received POST request at /createSupplier:", req.body);
    try {
      const { full_name, e_mail, password, profile_pic } = req.body;
      const newSupplier = await EcCustomers.create({
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
  });
    
  customerRouter.put("/updateSupplier", async (req: Request, res: Response) => {
    try {
     
   
      res.status(200).json({ message: "Implement logic to update a supplier." });
    } catch (error) {
      console.error("Error updating supplier:", error);
      res.status(500).json({ error: "Internal server error." });
    }
  });
   
   
  customerRouter.delete("/deleteSupplier", async (req: Request, res: Response) => {
    try {
     
   
      res.status(200).json({ message: "Implement logic to delete a supplier." });
    } catch (error) {
      console.error("Error deleting supplier:", error);
      res.status(500).json({ error: "Internal server error." });
    }
  });
export default customerRouter;
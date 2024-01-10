
import { Op } from "sequelize";
import EcCustomers from "../../models/ec_customers";
import { Request, Response } from "express";

// Create customer
const customerRegistration = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { full_name, e_mail, password, profile_pic } = req.body;

    if (!full_name) {
      res.status(400).json({ message: "Name is missing" });
      return;
    }

    const newCustomer = await EcCustomers.create({
      full_name,
      e_mail,
      password,
      profile_pic: Buffer.from(profile_pic),
    });

    console.log(newCustomer);
    res.status(201).json(newCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


const customerProfile = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const { e_mail } = req.query;
  
    if (!e_mail || typeof e_mail !== "string") {
      res.status(400).json({ message: "Invalid E-mail parameter" });
      return;
    }
  
    try {
      const foundCustomer = await EcCustomers.findOne({
        where: { e_mail },
        raw: true,
      });
  
      if (!foundCustomer) {
        res.status(404).json({ message: "Customer not found" });
        return;
      }
  
      console.log(foundCustomer);
      res.status(200).json(foundCustomer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  

export default customerRegistration;
export { customerProfile };

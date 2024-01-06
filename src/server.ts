import sequelize from '../src/config/sequelize-config.ts'
import { Request, Response } from 'express';
import express from 'express';
import  EcSuppliers from './models/ec_suppliers.ts';
import supplierRouter from './router/supplierRoutes.ts';
import supplierLoginRouter from './router/supplierLogin.ts';
import customerRouter from './router/customerRoutes.ts';

const app = express();
const port = process.env.PORT || 3000;
 
// Middleware to parse JSON in the request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
sequelize.sync({force:false})

 

 
app.use('',customerRouter);
app.use('',supplierRouter);
 app.use(supplierLoginRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 
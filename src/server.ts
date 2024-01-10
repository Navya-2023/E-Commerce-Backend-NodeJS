import sequelize from '../src/config/sequelize-config.ts'
import { Request, Response } from 'express';
import express from 'express';
import  EcSuppliers from './models/ec_suppliers.ts';
import supplierRouter from './router/supplierRoutes.ts';
import supplierLoginRouter from './router/userLogin.ts';
import customerRouter from './router/customerRoutes.ts';
import userLoginRouter from './router/userLogin.ts';
import { middlewareExample1, middlewareExample2 } from './middleware/middlewareExample.ts';

const app = express();
const port = process.env.PORT || 3000;
 
// Middleware to parse JSON in the request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
sequelize.sync({force:false})  

app.use((req,res,next)=>{
  console.log("hi from middleware");
  next();
}) 

interface CustomerRequest extends Request{
  customProperty?:object;
}
// app.use((req:CustomerRequest,res,next)=>{
//   middlewareExample1(req, res, next);
// }) 

// app.use((req,res,next)=>{
//   middlewareExample2(req, res, next);
// }) 



app.get('/example',middlewareExample1,middlewareExample2,(req: CustomerRequest,res:Response)=>{
  console.log('route handler handling request');
  const customProperty=req.customProperty;
  res.send(customProperty);
})

 
app.use('',customerRouter);
app.use('',supplierRouter);
 app.use(userLoginRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
import { NextFunction } from "express";
// import { CustomerReques } from "../server";
import { Request, Response } from 'express';
interface CustomerReques extends Request{
    customProperty?:object;
  }
export const middlewareExample1=(req:CustomerReques,res:Response,next : NextFunction)=>{
    req.customProperty={message:'hello'};
    next();
}
export const middlewareExample2=(req:CustomerReques,res:Response,next : NextFunction)=>{
    res.setHeader('contentType','application/json');
  res.setHeader('Set-cookie',['type=ninja','language=javascript']);
  next();
}

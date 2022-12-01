
import { Customer } from "../models/Customer.js";

export const addCus=async (req,res)=>{
    try {
        const customer=new Customer({
            name:req.body.username,
            email:req.body.email,
            password:req.body.password
        });
        customer.save();
        const Customers= await Customer.find();
        res.send({"name":"GeeksforGeeks","Customers":Customers});
        
    } catch (err) {
        res.status(500).json({error:err});
    }
}
export const getCus=async (req,res)=>{
    try {
        const Customers=await Customer.find();
        res.status(200).json(Customers);
        
    } catch (err) {
        res.status(500).json({error:err});
    }
}
import React,{useState} from 'react'
import axios from'axios'
import Alert from'react-bootstrap/Alert'

function Register(){
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[userName,setUserName]=useState("")
    const [alert,setAlert]=useState(null);

    const AlertMessage=({info})=>{
        return info===null?null:(
            <Alert variant={info.type}>{info.message}</Alert>
        )
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault()
       

        const data={
            username:userName,
            email:email,
            password:password,
        }
        if(data.username&&data.email&&data.password){
            axios.post("http://localhost:5000/customers",data).then((res)=>{
                setAlert({type:'danger',message:res.data.name})
                console.log(res.data.Customers)
            });
            
        }
        else{
            alert("can dien day du thong tin")
        }
       

    }
    return(
        <div className="auth-form-container">
        <h2>Register</h2>
    <form onSubmit={(e)=>handleSubmit(e)} className="register-form" >
        <AlertMessage info={alert}></AlertMessage>
        <label htmlFor="name">Full name</label>
        <input onChange={(e)=>setUserName(e.target.value)}  name="name" id="name" placeholder="Full Name" />
        <label htmlFor="email">Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder="********" id="password" name="password" />
        <label ></label>
        <label ></label>
        <button type="submit">Register</button>
    </form>
    <button className="link-btn" >Already have an account? Login here.</button>
</div>



        
       
    )
}
export default Register
import './login.css';
import { useState } from 'react';

const Login = () => {
    
    const [email,changeEmail] = useState("");
    const [password,changePassword] = useState("");

    const handleChangeEmail = (e)=>{changeEmail(e.target.value);};
    const handleChangePassword = (e)=>{changePassword(e.target.value);};
    const loginData = ()=>{

        console.log("email: ",email);
        console.log("password: ",password);
    }
    return ( 
        <div className="center" style={{paddingTop:'50px'}}>
            <div style={{display: 'block',
                         marginLeft: 'auto',
                         marginRight: 'auto',
                         width: '50%',
                         height:'400px',
                         backgroundImage:`url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(122).jpg")`}}>
            
                    <form style={{display: 'block',
                         marginLeft: 'auto',
                         marginRight: 'auto',
                         width: '50%',
                         paddingTop:'100px'
                         }}>
                        <input className="input" onChange={handleChangeEmail} placeholder="Enter your email" type="text" id="email"/>
                        <br/>
                        <br/>
                        <input className="input" onChange={handleChangePassword} placeholder="Enter your password" type="password" id="password"/>
                        <br/>
                        <br/>
                        <button  style={{width:'150px',cursor:'pointer'}} onClick={loginData}>login</button>
                        <br/>
                    </form>
                    <p style={{paddingLeft:'150px',color:'white'}}>Don't have an account yet?</p>
                    <a href="http://localhost:3000/?" style={{paddingLeft:'150px',color:'blue'}}>Create an Account?</a>
            </div>
        </div>
     );
}
 
export default Login;
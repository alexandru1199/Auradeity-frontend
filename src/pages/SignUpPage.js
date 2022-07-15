import styles from './login.module.css'; 
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage(){
    const navigate = useNavigate();
    const onClickCreateAccountButton = () => {
      navigate("/signup", { replace: true })
    } 
    return(
        
        <div className={styles.mainContainer}>
          
            <form className={styles.form}>
                
             <input
                type="email"
                placeholder="Email"
                className={styles.form_input}
                name="email"
              
            />
        
       
    
   
             <input
                type="password"
                placeholder="Password"
                className={styles.form_input}
                name="password"
              
            />
        
       <span>
     
       <button className={styles.loginButton} onClick={onClickCreateAccountButton}>   Sign Up </button> 
       </span>
        
        </form>
      
        </div>
      
     
    )
}
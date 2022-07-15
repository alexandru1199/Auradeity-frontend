import styles from './login.module.css'; 
import React from 'react';
export default function LoginPage(){
   
    return(
        
        <div className={styles.mainContainer}>
            <div className={styles.form}>
            <form className={styles.emailInput}>
                
             <input
                type="email"
                placeholder="Email"
               
                name="email"
                value={formData.email}
            />
        
       
        </form>
        <form className={styles.passwordInput}>
             <input
                type="password"
                placeholder="Password"
               
                name="password"
              
            />
        
       
        </form>
        <button className={styles.loginButton}>Log In</button>
        </div>
        </div>
    )
}
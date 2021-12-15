import React, {useState} from 'react';
import axios from 'axios';

export const AddUser = () => {

    const [User, setUser] = useState({

         firstname: "",
         lastname: "",
         email: "",
         contact: ""
     
     })


     function handlechange (e) {
         const {name, value} = e.target;

         setUser(prevUser => {
             return{
             ...prevUser,
             [name]:value
            }
         })

         
 };

     function handleSubmit (e) {
         e.preventDefault();
         const newUser = {
             firstname: User.firstname,
             lastname: User.lastname,
             email: User.email,
             contact: User.contact
         }

        

         axios.post('/api/v1/users', newUser)
     }

     

     
    
  
    

    return (
        <>
        <h2>Fill this form to register</h2>
       
        <form onSubmit = {handleSubmit} >
            <div className="form-control" >
                <label htmlFor="firstname">Firstname</label>
                <input type="text"
                name= "firstname"
                onChange={handlechange}
                   placeholder="Enter firstname..."
                   User/>
                   

            </div>
            <div className="form-control">
                <label htmlFor="lastname">Lastname</label>
                <input type="text"
                name= "lastname"
                 value={User.lastname}
                 onChange={handlechange}
                   placeholder="Enter lastname..." />
                  
                
            </div>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="text"
                name= "email"
                 value= {User.email}
                 onChange={handlechange}
                   placeholder="Enter email..." />
                   
                
            </div>
            <div className="form-control">
                <label htmlFor="contact">Contact</label>
                <input type="text"
                name= "contact"
                 value={User.contact}
                 onChange={handlechange}
                  placeholder="Enter contact number..."  />
                  
                
            </div>
            <button className="btn">Submit</button>

        </form>
            
        </>
    );

}
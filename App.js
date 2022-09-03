import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";

function App() {
       const myLogin=async (e)=> {

                       e.preventDefault();
                        const email= document.querySelector("#exampleInputEmail1").value;
                        const password= document.querySelector("#exampleInputPassword1").value;
                         console.log(email+password);

                 try{
                      const response= await axios({
                       method:'get',
                       url:"http://localhost:8080/login",
                       params:{email},
                     });
                             console.log(response.data.user.password);

                             if(password === response.data.user.password){
                             alert("Welcome user");
                                          }
                              else{

                                     alert("Incorrect password");
                                  }
                          }
                      catch(err){
                                  console.log(err);
                                   }
                       };
  
   const mySignup=async (e)=> {

    e.preventDefault();
    const firstname= document.querySelector("#firstname").value;
    const lastname= document.querySelector("#lastname").value;
    const age= document.querySelector("#age").value;
    const email= document.querySelector("#email").value;
    const password= document.querySelector("#password").value;
    
    console.log(password);
    
  
  try{
    const response= await axios({
          method:'post',
          url:"http://localhost:8080/signup",
          params:{firstname,lastname,age,email,password},
  });
     
  
     
    }
    catch(err){
      console.log(err);
    }


 };
 




  return (
  <div>
  { <form onSubmit={myLogin}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
  
</form> }


      <form onSubmit={mySignup}>
  <div class="mb-3">
    <label for="firstanme" class="form-label">First Name</label>
    <input type="text" class="form-control" id="firstname" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="lastname" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="lastname" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="age" class="form-label">Age</label>
    <input type="text" class="form-control" id="age" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp"/>
    
  </div>
  
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Signup</button>
  
</form>



    </div>
  );
}

export default App;

import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast} from "react-toast";
import regImg from "../../assets/registration/reg.jpg";
import { AuthContext } from './../../context/AuthProvider';
import useToken from './../../Hooks/useToken';


const Register = () => {
  const { signUp, googleLogin, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [createUserEmail, setCreateUserEmail] = useState('');
  const [token] = useToken(createUserEmail);
  const navigate = useNavigate();
 
  if(token){
    navigate('/')
  }

  const googleProvider = new GoogleAuthProvider();

  const handleSignUpForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    if (password.length < 6) {
      setError("please give your password length at least six characters");
      return;
    }
    setError("");

    signUp(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        setSuccess(true);
        navigate("/");
        form.reset();
        handleUpdateUserProfile(name,email);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  const handleUpdateUserProfile = (name,email) => {
    const profile = {
      displayName: name,
     
    };
    updateUserProfile(profile)
      .then(() => {
        
       saveUser(name,email)
      })
      
      .catch((error) => console.error(error));
  };
  const saveUser = (name , email) =>{
    const user = {name ,email};
    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      setCreateUserEmail(email);
    })
  }

  


  return (
    <div className="hero my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left  p-5">
          <img className="w-full mb-20 my-5" src={regImg} alt=""></img>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Sign Up now!</h1>
          <form onSubmit={handleSignUpForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
           
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="flex flex-col w-full border-opacity-50">
              <div className="form-control mt-6">
                <input
                
                  type="submit"
                  value="login"
                  className="btn btn-primary"
                ></input>
              </div>
              <div className="divider">OR</div>
              <div className="form-control ">
                <input
                  onClick={handleGoogleSignIn}
                  type="submit"
                  value="Login With Google"
                  className="text-md btn btn-outline btn-primary"
                ></input>
              </div>
            </div>
          </form>
          <p className="text-danger">{error}</p>
          {success && toast('sign up')}
          <p className=" w-full text-center pb-5 ">
            Already have an account?
            <Link className="text-purple-600 " to="/login">
              Login now!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

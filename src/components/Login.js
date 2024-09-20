import { useRef, useState } from "react"
import { validate } from "../utils/validate";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Body from "./Body";
import { addUser } from "../utils/userSlice";

const Login = () => {
const [isSignedIn, setIsSignedIn] = useState(true);
const [errMessage, setErrorMessage] = useState(null);
const dispatch = useDispatch();
const navigate = useNavigate();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
  

    const signInHandler = () => {
        setIsSignedIn(!isSignedIn);
    }

    const formSubmitHandler = () => {
        let message;
        if(!isSignedIn){ 
             message = validate(email.current.value, password.current.value, name.current.value, isSignedIn);
            setErrorMessage(message);
        } else {
            message = validate(email.current.value, password.current.value,name,isSignedIn);
        setErrorMessage(message);
        }
        if(message) return;
        if(!isSignedIn){
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;

    updateProfile(auth.currentUser, {
        displayName: name.current.value
      }).then(() => {
        const {uid, displayName, email} = user;
        dispatch(addUser({uid: uid, displayName: displayName, email: email}));
        navigate("/browse");
      })
    console.log(user);
        
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " - " + errMessage);
  });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
        navigate("/browse");

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " - " + errMessage);
  });
        }
    }
  return (
    <div><Body/>
    <div className="relative z-20 w-4/12 bg-black bg-opacity-80 top-36 mx-auto py-8 px-16 text-white">
        <div className="text-3xl font-bold mb-4">{isSignedIn ? "Sign In" : "Sign Up"}</div>
        <form onSubmit={(e) => e.preventDefault()}>
       {!isSignedIn && <div>
                <input ref={name} className="w-full p-4 my-4 bg-transparent border rounded-l" type="text" placeholder="Name"></input>
            </div>}
            <div>
                <input ref={email} className="w-full p-4 my-4 bg-transparent border rounded-l" type="text" placeholder="Email or mobile number"></input>
            </div>
            <div>
            <input ref={password} className="w-full p-4 my-4 bg-transparent border rounded-l" type="password" placeholder="Password"></input>
            </div>
            <div>
                <p className="text-red-500 font-bold">{errMessage}</p>
            <button className="w-full p-4 my-4 bg-red-600 rounded-l" onClick={formSubmitHandler}>{isSignedIn ? "Sign In" : "Sign Up"}</button>
            </div>
        </form>
        <div className="cursor-pointer my-4" onClick={signInHandler}>{isSignedIn ?  <>New to Netflix? <span className="font-bold">Sign up now</span>.</> : <>Already a user? <span className="font-bold">Sign in now</span>.</>}</div>
    </div>
    </div>
  )
}

export default Login
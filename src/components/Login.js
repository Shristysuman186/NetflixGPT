import { useRef, useState } from "react"
import { validate } from "../utils/validate";

const Login = () => {
const [isSignedIn, setIsSignedIn] = useState(true);
const [errMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
  

    const signInHandler = () => {
        setIsSignedIn(!isSignedIn);
    }

    const formSubmitHandler = () => {
        if(!isSignedIn){ let message = validate(email.current.value, password.current.value, name.current.value, isSignedIn);
            setErrorMessage(message);
        } else {
            const message = validate(email.current.value, password.current.value,name,isSignedIn);
        setErrorMessage(message);
        }
    }
  return (
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
  )
}

export default Login
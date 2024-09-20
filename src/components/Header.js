import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, displayName, email} = user;
                dispatch(addUser({uid: uid, displayName: displayName, email: email}));
            } else {
                dispatch(removeUser());
            }
          });
    },[]);
      
const signOutHandler = () => {
    signOut(auth).then(() => {
        navigate("/");
      });
    }
  return (
    <div className="absolute z-20 py-4 px-20 w-screen flex justify-between">
        <div className="w-52"><img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/></div>
        {user && <p className="font-bold text-black" onClick={signOutHandler}>Sign Out</p>}
    </div>
  )
}
export default Header;
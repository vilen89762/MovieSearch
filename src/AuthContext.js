import { createContext,useContext,useEffect,useState } from "react";
import { auth } from "./Firebase";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
const AuthContext = createContext()


export function AuthProvider({children}){
    const [user, setUser] = useState({})

function logOut(){
    return signOut(auth)
}

useEffect(()=>{
    
})


function logIn(email,password){
    return signInWithEmailAndPassword(auth,email,password)
}

    function signup(email,password){
      return createUserWithEmailAndPassword(auth,email,password)
    }

useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth,(currentUser)=>{
     setUser(currentUser)
    }) 
    return () =>{
        unsubcribe()
    }
})

    return(

        <AuthContext.Provider value={{signup,logIn,logOut,  user}}>
        
        {children}
        </AuthContext.Provider>
    )

}


export function userAuth(){
    return useContext(AuthContext)
}
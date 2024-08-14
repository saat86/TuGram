
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";


type authContextData={
    user:User |null
    logIn: typeof logIn,
    signUp:typeof signUp,
    logOut:typeof logOut,

}

const logIn =(email:string, password:string)=> signInWithEmailAndPassword(auth,email,password);
const signUp =(email:string, password:string)=>  createUserWithEmailAndPassword(auth,email,password);
const logOut =()=>signOut(auth);
 
export const authContext =createContext<authContextData>({
    user:null,
    logIn,
    signUp,
    logOut,
})

export const UserAuthProvider: React.FunctionComponent<{children:React.ReactNode} > = ({children})=>{
   
    const[user,setUser]=useState<User | null>(null);

    useEffect(()=>{

        const unsubscribe =onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
                console.log('the logged in user auth context',user);
                
            }

            return ()=>{
                unsubscribe();
            }
        })
    })

    const value :authContextData={

        user,
        logIn,
        signUp,
        logOut,
    }

    return(
        <authContext.Provider value={value}>
        {children}
        </authContext.Provider>
    );
};

export const useUserAuth=()=>{
    return useContext(authContext);
}
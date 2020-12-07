import {auth} from "./config";

export const SigninWithBasic = async (email:string, password:string) =>{
    try {
        const loginUser = await auth.signInWithEmailAndPassword(email,password);
        

    } catch(e){
        console.error(e);

    }
}

export const SignUpwithBasic = async (email:string, password: string)  =>{
    try {
        await auth.createUserWithEmailAndPassword(email,password);
    } catch(e){
        console.error(e);
    }
}

export const SignOut = async () =>{
    try {
        await auth.signOut();
    } catch(e){
        console.error(e);
    }
}
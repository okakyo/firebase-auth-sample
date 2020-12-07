import {provide,inject, InjectionKey, reactive, toRefs} from "@vue/composition-api";

type UserType  = {
    id?:string,
    name:string,
    email:string,
    thumbnail:string,
}

type ErrorType = {
    state:number
    message:string
}


export const UserStateKey:InjectionKey<UserType> =Symbol("UserState");
export const ErrorStateKey: InjectionKey<ErrorType> = Symbol("ErrorState");


export const useUserState = ()=>{
    const userState =reactive<UserType>({
        id:"",
        name:"",
        email:"",
        thumbnail:""
    });
    const setUserState = (state:UserType)=>{
        userState.id= state.id;
        userState.name=state.name;
        userState.email=state.email;
        userState.thumbnail = state.thumbnail;
    },
    const cleanUserState = (state:UserType) =>{
        userState.id=""; 
        userState.name="";
        userState.email="";
        userState.thumbnail="";
    }
    return {
        ...toRefs(userState),
        setUserState,
        cleanUserState
    }
}


export const provideUserState= ()=>{
    const userState:UserType = {
        id:"",
        name:"",
        email:"",
        thumbnail:"",
    }
    provide(UserStateKey,userState);
};

export const injectUserState =()=>{
    const state = inject(UserStateKey);
    if(!state){
        console.error("Unable to install User State");
    }
    return state;

}
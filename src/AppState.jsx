import React,{useContext, useReducer} from "react";

// import { createContext } from "react";
// import App from "./App";

const initialState = {
  url: "http://blog-back-end-rails.herokuapp.com"
};

///////

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//
const AppContext = React.createContext(null)
//
export const AppState = (props) =>{
const [state, dispatch] = useReducer(reducer, initialState);
  return (<AppContext.Provider value={{state, dispatch}}>
    {props.children}
  </AppContext.Provider>);
}

/////
export const useAppState = () =>{
  return React.useContext(AppContext)
}
import React,{useEffect,createContext,useReducer,useContext} from 'react';
import Navbar from './components/navbar';
import {BrowserRouter,Route,useHistory,Switch} from 'react-router-dom'
import Home from './components/screens/home'
import Signin from './components/screens/signin'
import Signup from './components/screens/signup'
import Profile from './components/screens/profile'
import CreatePost from './components/screens/createpost'
import {reducer,initialState} from './reducer/UserReducer'
import './App.css';

export const UserContext=createContext()
//routing was created to access history outside of BrowserRouter tag
const Routing=()=>{
  const history=useHistory()
  const {state,dispatch}=useContext(UserContext)
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
    }else{
      history.push("/signin")
    }
  },[])
  return(
    <Switch>
    <Route exact path='/'>
      <Home/>
    </Route>
    <Route path='/signin'>
      <Signin/>
    </Route>
    <Route path='/signup'>
      <Signup/>
    </Route>
    <Route path="/profile">
      <Profile/>
    </Route>
    <Route path="/createpost">
      <CreatePost/>
    </Route>
    </Switch>
    )
}

function App() {
  const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <Navbar/>
    <Routing/>
    </BrowserRouter>
    </UserContext.Provider>

  );
}

export default App;

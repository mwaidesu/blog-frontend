import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import './App.css'

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path="/" component={Home}></Route>
        <Route path="/auth:form" component={Auth}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
      </Routes>
    </div>
  );
}

export default App


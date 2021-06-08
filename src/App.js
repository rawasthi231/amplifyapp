import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from "./components/navbar";
import './App.css';
import Loading from "./components/loading";
//const Navbar = lazy(() => import("./components/navbar"));
const Home = lazy(() => import("./components/home"));
const Users = lazy(() => import("./components/users"));
const Chat = lazy(() => import("./components/chat"));
const About = lazy(() => import("./components/about"));


function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Navbar />
        <Switch>
          <Route exact path='/' component={() => { return <Suspense fallback={<Loading />}><Home /></Suspense> }} />
          <Route exact path='/about' component={() => { return <Suspense fallback={<Loading />}><About /></Suspense> }} />
          <Route exact path='/users' component={() => { return <Suspense fallback={<Loading />}><Users /></Suspense> }} />
          <Route exact path='/chat' component={() => { return <Suspense fallback={<Loading />}><Chat /></Suspense> }} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

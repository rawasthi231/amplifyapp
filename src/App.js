import React, { lazy, Suspense } from 'react';
import './App.css';
import "bootstrap";
import { Route, Switch } from 'react-router-dom';
import Navbar from "./components/navbar";
import Loading from "./components/loading";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
const Home = lazy(() => import("./components/home"));
const Users = lazy(() => import("./components/users"));
const Chat = lazy(() => import("./components/chat"));
const About = lazy(() => import("./components/about"));


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={() => { return <Suspense fallback={<Loading />}><Home /></Suspense> }} />
        <Route exact path='/about' component={() => { return <Suspense fallback={<Loading />}><About /></Suspense> }} />
        <Route exact path='/users' component={() => { return <Suspense fallback={<Loading />}><Users /></Suspense> }} />
        <Route exact path='/chat' component={() => { return <Suspense fallback={<Loading />}><Chat /></Suspense> }} />
      </Switch>
      <header>
        <AmplifySignOut />
      </header>
    </div>
  );
}

export default withAuthenticator(App);

/*



function App() {
  return (
    <div className="App">
      <div className="container-fluid">

      </div>
    </div>
  );
}

export default App;
*/
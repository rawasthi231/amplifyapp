import React, { lazy, Suspense } from 'react';
import './App.css';
import "bootstrap";
import { Route, Switch } from 'react-router-dom';
import Navbar from "./components/navbar";
import Loading from "./components/loading";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
const Home = lazy(() => import("./components/home"));
const Notes = lazy(() => import("./components/notes"));
const About = lazy(() => import("./components/about"));


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-header">
      <Switch>
        <Route exact path='/' component={() => { return <Suspense fallback={<Loading />}><Home /></Suspense> }} />
        <Route exact path='/about' component={() => { return <Suspense fallback={<Loading />}><About /></Suspense> }} />
        <Route exact path='/notes' component={() => { return <Suspense fallback={<Loading />}><Notes /></Suspense> }} />
      </Switch>
        <AmplifySignOut />
      </div>
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
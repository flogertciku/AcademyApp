import './App.css';
import React from "react";


import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ProfileForm from './components/ProfileForm';
import PersonList from './components/ProfileList';
import ProfileDetail from './components/ProfileDetails';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfileForm />} />
        <Route element={<PersonList/>} path="/profile" />
        <Route element={<ProfileDetail/>} path="/profile/:id" />
       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

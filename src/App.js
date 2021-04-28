import React, { useState } from 'react';
import './App.css';
// import MaterialTable from 'material-table'
import MiniDrawer from "./Components/Drawer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
  from 'react-router-dom';
import Dashboard from './Components/routing/Dasbboard';
import User from './Components/routing/User';
import Roles from './Components/routing/Roles';
import Permissions from './Components/routing/Permissions';
import News from './Components/routing/News';
import Pages from './Components/routing/Pages';
import Menu from './Components/routing/Menu';
import Advanced from './Components/routing/Advanced';
import Logout from './Components/routing/Logout';


function App() {

  return (
    <>
        < MiniDrawer  />  
      
    </>
  );
}

export default App;

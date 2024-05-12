import React, { useState } from 'react'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';
import ListStripLine from './components/ListStripLine';
import Homeslider from './components/Homeslider';
import Categories from './components/Categories';
import ApiCategory from './components/ApiCategory';
import ApiHomeSliderHeadings from './components/ApiHomeSliderHeadings'
import CartSaved from './components/CartSaved';
import SearchApi from './components/SearchApi'


const App = () => {


  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type)=>{
    setAlert({
      msg:msg,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };


  return (
    <>
    <Router>
        <Navbar />
        <Alert alert={alert} />
      <Switch>
        <Route exact path="/">
        <Homeslider />
        <Categories />
        </Route>
        <Route exact path="/login">
          <Login showAlert={showAlert}/>
        </Route>
        <Route exact path="/signup">
          <Signup showAlert={showAlert}/>
        </Route>
        <Route exact path="/listStripLine">
          <ListStripLine />
        </Route>
        <Route exact path="/ApiCategory">
          <ApiCategory />
        </Route>
        <Route exact path="/ApiHomeSliderHeadings">
          <ApiHomeSliderHeadings showAlert={showAlert} />
        </Route>
        <Route exact path="/addtocart">
          <CartSaved />
        </Route>
        <Route exact path="/SearchApi">
          <SearchApi />
        </Route>
      </Switch>
    </Router>
    </>
  )
}

export default App

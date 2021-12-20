import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Hader from './Component/Hader/Hader';
import Footer from './Component/Footer/Footer';
import Insert from './Component/Insert/Insert';
import InsertRating from './Component/InsertRating/InsertRating';
import Ratings from './Component/Ratings/Ratings';
import AllServices from './Component/Services/AllServices';
import Regester from './Component/Login/Regester/Regester';
import AuthProvider from './Component/Context/AuthProvider';
import Login from './Component/Login/Login/Login';
import Order from './Component/Order/Order';
import PrivetRoute from './Component/PrivetRoute/PrivetRoute';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';


function App(props) {
 
  return (
    <div className="App">
       <AuthProvider>
     <BrowserRouter>
   <Hader> </Hader>
     <Switch>
     <Route exact path="/">
    <Home></Home>
    </Route>
    <Route exact path="/home">
    <Home></Home>
    </Route>
    <Route exact path="/rating">
    <Ratings></Ratings>
    </Route>
    <Route exact path="/insert">
    <Insert></Insert>
    </Route>
    <Route exact path="/allservices">
    <AllServices></AllServices>
    </Route>
    {/* <Route exact path="/insertrating">
   <InsertRating></InsertRating>
    </Route> */}
    <Route exact path="/register">
   <Regester></Regester>
    </Route>
    <Route exact path="/login">
   <Login></Login>
    </Route>
    <Route  path="/dashboard">
     <Dashboard></Dashboard>
    </Route>
    <PrivetRoute exact path="/order/:id">
  <Order></Order>
    </PrivetRoute>
     </Switch>
   {/* <Footer></Footer> */}

     
    
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;

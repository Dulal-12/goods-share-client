import TopSection from "./components/TopSection/TopSection";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Privacy from './components/Privacy/Privacy';
import Products from "./components/Products/Products";
import About from "./components/About/About";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PrivateRouteLogin from './components/PrivateRouteLogin/PrivateRouteLogin';
import Login from "./components/Login/Login";
import Prof from './components/Prof/Prof';
import Registration from './components/Registration/Registration';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Information from './components/Information/Information';
import Orders from './components/Orders/Orders';
import { createContext, useState } from "react";
import Membership from "./components/Membership/Membership";
import PrivateRouteSubscribe from "./components/PrivateRouteSubscribe/PrivateRouteSubscribe";
import PrivateRouteCart from "./components/PrivateRouteCart/PrivateRouteCart";
export const memberTaka = createContext();
export const userName = createContext();

function App() {
  const [taka, setTaka] = useState(0);
  const [name,setName] = useState("");

  return (
    <userName.Provider value={[name,setName]}>
    <memberTaka.Provider value={[taka, setTaka]}>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path='/' element={<TopSection></TopSection>}></Route>
          <Route path='/home' element={<TopSection></TopSection>}></Route>
          <Route path='/policy' element={<Privacy></Privacy>}></Route>
          <Route path='/product' element={<Products></Products>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/login' element={<PrivateRouteLogin><Login></Login></PrivateRouteLogin>} />
          <Route path='/profile' element={<PrivateRoute><Prof /></PrivateRoute>} />
          <Route path='/cart' element={<PrivateRoute><Orders /></PrivateRoute>} />
          <Route path='registration' element={<Registration></Registration>}></Route>
          <Route path='/forgotPassword' element={<ForgotPassword></ForgotPassword>}></Route>
          <Route path="/productInformation/:productId" element={<Information></Information>}></Route>
          <Route path='/membership' element={<PrivateRouteSubscribe><Membership/></PrivateRouteSubscribe>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer />
      </div>
    </memberTaka.Provider>
    </userName.Provider>
  );
}

export default App;

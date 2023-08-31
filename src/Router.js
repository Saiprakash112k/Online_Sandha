import { Router, Routes, Route, Link } from 'react-router-dom';
import HeaderComponent from './HeaderComponent/Header';
import HomeComponent from './Pages/Home';
import FruitComponent from './Pages/Fruits';
import VegComponent from './Pages/Vegetable';
import MeatComponent from './Pages/Meat';
import Footer from './Footer/Footer';

const Routing = () => {

    return (
        <>
            <HeaderComponent />          
                <Routes>
                    <Route path='/' exact element={<HomeComponent/>}></Route>
                    <Route path='/Vegetable' exact element={<VegComponent/>}></Route>
                    <Route path='/Friuts' exact element={<FruitComponent/>}></Route>
                    <Route path='/Meat' exact Component={MeatComponent}></Route>
                </Routes>
                <Footer/>

        
        </>
    )




}
export default Routing
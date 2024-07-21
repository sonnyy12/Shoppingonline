import React, { Component } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Menu from './MenuComponent';
import MainMenu from './MainMenuComponent';
import Inform from './InformComponent';
import Home from './HomeComponent';
import Product from './ProductComponent';
import ProductDetail from './ProductDetailComponent';
import Signup from './SignupComponent';
import Active from './ActiveComponent';
import Login from './LoginComponent';
import Myprofile from './MyprofileComponent';
import Mycart from './MycartComponent';
import Myorders from './MyordersComponent';
import Gmap from './GmapComponent';
import Introduction from './IntroductionComponent';

const Main = () => {
  const location = useLocation();

  return (
    <div className="body-customer">
      {location.pathname === '/Intro' ||location.pathname === '/login' ||location.pathname === '/signup' || location.pathname==='/active' ? <Menu /> : <MainMenu />}
      <Inform />
      <Routes>
        <Route path='/' element={<Navigate replace to='/Intro' />} />
        <Route path='/Intro' element={<Introduction />} />
        <Route path='/home' element={<Home />} />
        <Route path='/product/category/:cid' element={<Product />} />
        <Route path='/product/search/:keyword' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/active' element={<Active />} />
        <Route path='/login' element={<Login />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/mycart' element={<Mycart />} />
        <Route path='/myorders' element={<Myorders />} />
        <Route path='/gmap' element={<Gmap />} />
      </Routes>
    </div>
  );
};

export default Main;

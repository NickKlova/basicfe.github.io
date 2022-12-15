import React from 'react';
import ReactDOM from 'react-dom/client';
import GoodsCard from './components/GoodsCardComponent';
import Header from './components/Header';
import { Content } from './components/Content';
import Image from './components/Image';
import MainImageComponent from './components/MainImageComponent'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header></Header>
    <Content></Content>
    <Image></Image>
    <MainImageComponent></MainImageComponent>

    <GoodsCard></GoodsCard>
  </React.StrictMode>
);
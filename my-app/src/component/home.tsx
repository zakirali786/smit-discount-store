import React from 'react';
import{Menu} from 'antd'
import Slider from '../component/carouisal'
import Flex from './card';
import { useSelector } from 'react-redux/es/exports';

const Home = () => {
    return (
        <div className="nv-top">
       
       <Slider/>            
       <Flex />
                </div>
  )}
  export default Home;
  
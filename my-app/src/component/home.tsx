// @ts-nocheck
import React, { useEffect } from 'react';
import{Menu} from 'antd'
import Slider from '../component/carouisal'
import Flex from './card';
import { useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const userDt = useSelector(state => state.user)
    const navigate = useNavigate()
    useEffect(()=>{
        if(!userDt){
           navigate('/login')
        }
    },[])
    return (
        <div className="nv-top">
       
       <Slider/>            
       <Flex />
                </div>
  )}
  export default Home;
  
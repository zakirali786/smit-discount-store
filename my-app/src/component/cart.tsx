// @ts-nocheck

import React, { useEffect, useState } from 'react';
import { Button, Table, Popconfirm} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useDispatch, useSelector } from 'react-redux';
import { filterCart } from '../appredux/reducers';
import { useNavigate } from 'react-router-dom';
import { push, ref } from 'firebase/database';
import { db } from '../appconfigration';


interface DataType {
  key: React.Key;
  name: string;
  price: number;
}
const data: DataType[] = [
  
];
const App: React.FC = () => {
  const [data , setData] = useState([])
  const cartDat  = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const UserDt = useSelector(state => state.user)
  useEffect(()=>{
    if(!userDetail){
      navigate('/login')
    }else{
      setData(cartDat)
    }
 },[])
 const handleDelete = (dt) => {
  const newData = data.filter((item) => item.key !== dt.key);
  setData(newData);
};
const userDetail = useSelector(state => state.user)
const columns: ColumnsType<DataType> = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Price', dataIndex: 'price', key: 'price' },
  {
    title: 'operation',
    dataIndex: 'operation',
    render: (_,record) =>(
      <Popconfirm title="Sure to delete?" onConfirm={()=> handleDelete(record)}> 
     <a>Delete</a>
     </Popconfirm> 
    )
  }
];

 const placeOrder = () =>{
    if(!userDetail){
     navigate('/login') 
    }else{
      console.log(userDetail)
      const userID = userDetail.uid
      push(ref(db , "purchasement/" + userID),{
        checkoutData: data,
        timeStamp: new Date().toString()
      })
      .then(()=>{
        navigate('/orderDetails')
      })
    }
 }
 return(
  <>
  <Table
    columns={columns}
    expandable={{
      rowExpandable: (record) => record.name !== 'Not Expandable',
    }}
    dataSource={data}
  />
    <Button onClick={()=> placeOrder()} >Place Order</Button>
  </>
  
  )
  };

export default App;
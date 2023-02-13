// @ts-nocheck
import { useEffect, useState } from "react"
import Art from "./imgs/download.jpg"
import { Row, Col, Image, Card, Button, } from 'antd';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addToCart } from "../appredux/reducers";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Flex() {
    const [productsData, setProductsData] = useState([
        { name: "item1", price: "000" , key: 1},
        { name: "item2", price: "000" , key: 2},
        { name: "item3", price: "000" , key: 3}
    ]);
    const prDt = useSelector(state => state.product)
    const dispatch = useDispatch()
    const addtocart = (item) => {

        dispatch(addToCart(item))
        toast('Product Added to Cart!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });

    }
    useEffect(()=>{
        setProductsData(prDt)
        
    },[])
    return (
        <div style={{
            marginTop: 50,
            marginBottom: 200
        }}>
            <Row style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around"

            }}>
                {
                    productsData.map((item, key) => {
                        return (
                            <Col key={key}>
                                <Card style={{
                                    backgroundColor: "#efefef",
                                    padding: 10,
                                    width:"12220px !important"

                                }}
                                    hoverable
                                    cover={
                                        [<Image src={Art} style={{
                                            width: 300,
                                            height: 150
                                        }} />]
                                    }
                                    key={key} >
                                    <h4 style={{textAlign:"right"}}>{item.name}</h4>
                                    <p>Rs {item.price}</p>
                                    <Button type="primary" onClick={() => addtocart(item)}>Add to cart</Button>
                                </Card>
                            </Col>
                        )


                    })
                }

            </Row>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
                {/* Same as */}
            <ToastContainer />
        </div>
    );
}
export default Flex;
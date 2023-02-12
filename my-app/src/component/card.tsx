// @ts-nocheck
import { useState } from "react"
import Art from "./imgs/download.jpg"
import { Row, Col, Image, Card, Button, } from 'antd';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addToCart } from "../appredux/reducers";
function Flex() {
    const [productsData , setProductsData] = useState([
        { name: "item1", price: "000"},
        { name: "item2", price: "000" },
        { name: "item3", price: "000" }
    ]);
    const dispatch = useDispatch()
    const addtocart = (item) =>{
        dispatch(addToCart(item))

    } 
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
                    productsData.map((item , key) => {
                        return(
<Col  key={key}>
                            <Card style={{
                                backgroundColor: "#efefef",
                                padding: 10
                            }}
                                hoverable
                                cover={
                                    [<Image src={Art} style={{
                                        width: 300,
                                        height: 150
                                    }} />]
                                }
                            >
                                <h4>{item.name}</h4>
                                <p>Rs {item.price}</p>
                                <Button type="primary" onClick={(item)=> addtocart(item)}>Add to cart</Button>
                            </Card>
                        </Col>
                        )
                        

                            })
                }

            </Row>
        </div>
    );
}
export default Flex;
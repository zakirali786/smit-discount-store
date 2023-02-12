import image1 from "./imgs/baner1.jpg"
import image2 from "./imgs/baner2.png"
import image3 from "./imgs/baner3.jpeg"
import image4 from "./imgs/baner4.jpg"
import {Image} from "antd"
import { Carousel } from "antd"
function Slider(){  
    return(
        <div>
            <Carousel fade
            dots={true}
            autoplay              >
            <div>
            <Image src={image1} className="img" style={{
                width:1700,
                height:600
            }}/>
        </div>
        <div>
            <Image src={image2} className="img" style={{
                width:1700,
                height:600
            }}/>
        </div>
        <div>
            <Image src={image3} className="img"style={{
                width:1700,
                height : 600
            }}/>
        
            </div>
            <div>
            <Image src={image4} className="img"style={{
                width:1700,
                height : 600
            }}/>
        
            </div>
            </Carousel>
</div>

    )   
}
export default Slider
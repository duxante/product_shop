import { useState } from "react";
import { Link } from "react-router-dom";
import Item from "../../../../common/item/item.component";
import "./trendingBar.style.css";
import Heading from "../../../../common/heading/heading.component";

const TrendingBar = () => {
    const [trendingItems, setTrendingItems] = useState([
        {
        img:"https://i5.walmartimages.com/asr/b01df899-f9e3-4a09-bc71-32724940629d.f9990ec43e666813faaf0b9e193db706.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        category:"Laptops",
        name:"HP Pavilion Gaming 15-ec1073dx",
        price:"149,99$",
        imgCart:"https://freepngimg.com/thumb/cart/8-2-cart-picture.png"
        },
        {
        img:"https://i5.walmartimages.com/asr/3e4193f2-eec2-4145-8036-49c30d9145c1.8a2152993ad8079c5c44a23aba3f70d8.jpeg",
        category:"Laptops",
        name:"Lenovo Ideapad Gaming Chromebook",
        price:"249,99$",
        imgCart:"https://freepngimg.com/thumb/cart/8-2-cart-picture.png"
        },
        {
        img:"https://i5.walmartimages.com/asr/04e3b959-6e98-40db-acad-bc446c79b83b.3d3f0072bf2418dbe002f078fe2de401.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        category:"Laptops",
        name:"ASUS ROG Strix G15 15.6",
        price:"329,99$",
        imgCart:"https://freepngimg.com/thumb/cart/8-2-cart-picture.png"
        },
        {
        img:"https://i5.walmartimages.com/asr/32d27d9f-a2e6-4824-b3d7-803098a74773.b2b18b406d91d1d39d735608bca7bf95.jpeg",
        category:"Laptops",
        name:"Acer AN5155759EY Nitro 5 Gaming",
        price:"229,99$",
        imgCart:"https://freepngimg.com/thumb/cart/8-2-cart-picture.png"
        },
        {
        img:"https://i5.walmartimages.com/asr/890a3d87-efb4-4f26-9da5-20668652cfac.9cb5e03a4e075894941b374594af6ba4.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        category:"Laptops",
        name:"Lenovo L340 15 Gaming 15.6 FHD",
        price:"449,59$",
        imgCart:"https://freepngimg.com/thumb/cart/8-2-cart-picture.png"
        },
        {
        img:"https://i5.walmartimages.com/asr/7a4d13ee-794f-4a59-aace-8d1d3375b8bc.91c6c5cd2c8ba735857adec1cfefe82f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        category:"Laptops",
        name:"Acer Nitro 5 15.6 Full HD Gaming",
        price:"480,99$",
        imgCart:"https://freepngimg.com/thumb/cart/8-2-cart-picture.png"
        },
        {
        img:"https://i5.walmartimages.com/asr/cb32ce89-1c6f-4ef7-94ac-3c1882b0a046.a312c0d6faceaf971ba069d7322c47ae.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        category:"Laptops",
        name:"Acer Aspire 3 A315-58-34DA, 15.6",
        price:"549,99$",
        imgCart:"https://freepngimg.com/thumb/cart/8-2-cart-picture.png"
        },
        {
        img:"https://i5.walmartimages.com/asr/1086c122-ce60-4fff-8266-347023cbd831.44c76af7936af9db2a528d664e164b3d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        category:"Laptops",
        name:"Dell Latitude 14 Full HD Laptop",
        price:"339,99$",
        imgCart:"https://freepngimg.com/thumb/cart/8-2-cart-picture.png"
        },
    ]);
    return(
        <div className="trendingbarHolder">
            <Heading headingText="trending items" />
            <div className="trendingBarNavigation">
                {trendingItems.map((oneItem, index) => (
                    <Item 
                        key={index}
                        img={oneItem.img}
                        category={oneItem.category}
                        name={oneItem.name}
                        price={oneItem.price}
                        imgCart={oneItem.imgCart}
                    />
                ))}
            </div>
            <div className="shopAll">
                    <Link to="/shop">SHOP ALL</Link>
            </div>
        
        </div>
    )
}

export default TrendingBar;
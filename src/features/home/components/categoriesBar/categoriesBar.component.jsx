import "./categoriesBar.style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import OneCategory from "../../../../common/category/oneCategory.component";


const CategoriesBar = () => {
    const [categories, setCategories] = useState([
        {
            img:"https://www.evetech.co.za/repository/ProductImages/gaming-laptop-best-deals-banner-v1.png",
            title:"Laptops",
            price:"from 149,00$"
        },
        {
            img:"https://www.transparentpng.com/thumb/tablet/android-tablets-png-clipart-wUmLWH.png",
            title:"Tablets",
            price:"from 89,00$"
        },
        {
            img:"https://www.pngmart.com/files/13/Smartwatch-PNG-Pic.png",
            title:"Smart Watches",
            price:"from 49,00$"
        },
        {
            img:"https://www.pngall.com/wp-content/uploads/2/Console-PNG-Picture.png",
            title:"Consoles",
            price:"from 249,00$"
        },
        {
            img:"https://pngimg.com/d/photo_camera_PNG101644.png",
            title:"Cameras",
            price:"from 349,00$"
        },
        {
            img:"https://www.pngall.com/wp-content/uploads/2016/03/Smartphone-Download-PNG.png",
            title:"Smartphones",
            price:"from 119,00$"
        }
    ]);
    return(
        <div className="categoriesBarHolder">
            <div className="categoriesNavigation">
                {categories.map((oneItem, index) => (
                    <OneCategory 
                        key={index}
                        img={oneItem.img}
                        title={oneItem.title}
                        price={oneItem.price}
                    />
                ))}
            </div>
            <div className="seeAllCategories">
                <Link to="categories">SEE ALL CATEGORIES</Link>
            </div>
        </div>
    )
}

export default CategoriesBar;
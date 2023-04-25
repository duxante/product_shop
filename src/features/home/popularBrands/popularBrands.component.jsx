import { Link } from "react-router-dom";
import "./popularBrands.style.css";
import Heading from "../../../common/heading/heading.component";

const PopularBrands = () => {
    return(
        <div className="popularBrandsHolder">
            <Heading headingText="Popular brands"/>
            <div className="popularBrandsImages">
                <img src="https://pngimg.com/uploads/apple_logo/apple_logo_PNG19676.png" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png" />
                <img src="https://www.sonypicturesnetworks.com/images/logos/SET%20LOGO.png" />
                <img src="https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Intel_Inside_Logo_%281968-2003%29.svg/2233px-Intel_Inside_Logo_%281968-2003%29.svg.png" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png" />
            </div>
            <Link className="allBrandsLink" to="/allBrands">SEE ALL BRANDS</Link>
        </div>
    )
}

export default PopularBrands;
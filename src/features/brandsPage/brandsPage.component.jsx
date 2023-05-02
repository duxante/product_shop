import Heading from "../../common/heading/heading.component";
import "./brandsPage.style.css";
import samsung4logopngtransparent from "../../assets/samsung4logopngtransparent.png";
import Footer from "../footer/footer.component";

const BrandsPage = () => {
    return(
        <div className="popularBrandsPageHolder">
            <Heading headingText="Brands"/>
          <div className="popularBrandsPageImages">  
                <div className="imageAndText">
                <img src="https://pngimg.com/uploads/apple_logo/apple_logo_PNG19676.png" alt="" />
                <p>Apple</p>
                </div>
                <div className="imageAndText">
                <img src={samsung4logopngtransparent} alt="" />
                <p>Samsung</p>
                </div>
                <div className="imageAndText">
                <img src="https://www.sonypicturesnetworks.com/images/logos/SET%20LOGO.png" alt="" />
                <p>Sony</p>
                </div>
                <div className="imageAndText">
                <img src="https://www.freepnglogos.com/uploads/microsoft-window-logo-emblem-0.png" alt="" />
                <p>Microsoft</p>
                </div>
                <div className="imageAndText">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Intel_Inside_Logo_%281968-2003%29.svg/2233px-Intel_Inside_Logo_%281968-2003%29.svg.png" alt="" />
                <p>Intel</p>
                </div>
                <div className="imageAndText">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png" alt="" />
                <p>HP</p>
                </div>
                <div className="imageAndText">
                <img src="https://1000logos.net/wp-content/uploads/2017/03/LG-Logo-2014.png" alt="" />
                <p>LG</p>
                </div>
                <div className="imageAndText">
                <img src="https://1000logos.net/wp-content/uploads/2017/03/Lenovo-Logo-1.png" alt="" />
                <p>Lenovo</p>
                </div>
                <div className="imageAndText">
                <img src="https://seeklogo.com/images/R/rog-republic-of-gamers-logo-84B39C08CE-seeklogo.com.png" alt="" />
                <p>Asus</p>
                </div>
                <div className="imageAndText">
                <img src="https://1000logos.net/wp-content/uploads/2016/09/Acer-Logo.png" alt="" />
                <p>Acer</p>
                </div>
                <div className="imageAndText">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/2048px-Dell_Logo.svg.png" alt="" />
                <p>Dell</p>
                </div>
                <div className="imageAndText">
                <img src="https://1000logos.net/wp-content/uploads/2017/03/Nikon-Logo.png" alt="" />
                <p>Nikon</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BrandsPage;
import { useState } from "react";
import "./blogHolder.style.css";
import Heading from "../../../common/heading/heading.component";
import BlogItem from "../../../common/category/blogItem/blogItem.component";
import { Link } from "react-router-dom";

const Blog = () => {
    const [blog, setBlog] = useState([
        {
            img:"https://www.state.gov/wp-content/uploads/2019/04/Science-Technology-shutterstock_449187505.jpg",
            date:"21.05.2023.",
            blogTitle:"Blog primjer 1",
            blogDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            img:"https://www.macquarie.com/au/en/perspectives/technology/_jcr_content/root/general_hero_copy/mobile-image.coreimg.jpeg/1671162255476/hero-technology-hub.jpeg",
            date:"19.04.2023.",
            blogTitle:"Blog primjer 2",
            blogDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    ])
    return(
        <div className="blogHolder">
            <Heading headingText="Blog" />
            <div className="blogItemHolder">
                {blog.map((oneBlog, index) => (
                    <BlogItem 
                        key={index}
                        img={oneBlog.img}
                        date={oneBlog.date}
                        blogTitle={oneBlog.blogTitle}
                        blogDescription={oneBlog.blogDescription}
                    />
                ))}
            </div>
            <div className="seeAllArticles">
                <Link to="/articles">SEE ALL ARTICLES</Link>
            </div>
        </div>
    )
}

export default Blog;
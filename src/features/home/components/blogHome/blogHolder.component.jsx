import { useState } from "react";
import "./blogHolder.style.css";
import Heading from "../../../../common/heading/heading.component";
import BlogItem from "../../../../common/category/blogItem/blogItem.component";
import { Link } from "react-router-dom";
import allYouNeedToKnowAboutMac from "../../../../assets/allYouNeedToKnowAboutMac.jpeg";
import mobilePhones from "../../../../assets/mobilePhones.jpeg";

const Blog = () => {
    const [blog, setBlog] = useState([
        {
            img: allYouNeedToKnowAboutMac,
            date: "19.04.2023.",
            blogTitle: "All You Need To Know About Mac",
            blogDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae repellendus nihil, odio suscipit provident neque doloribus maxime odit temporibus inventore et, dolorum blanditiis saepe aliquam delectus. Fuga, assumenda aliquid."
        },
        {
            img: mobilePhones,
            date: "25.04.2023.",
            blogTitle: "New iPhone 14 PRO, Worth The Hype?",
            blogDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae repellendus nihil, odio suscipit provident neque doloribus maxime odit temporibus inventore et, dolorum blanditiis saepe aliquam delectus. Fuga, assumenda aliquid."
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
                <Link to="/blogPage">SEE ALL ARTICLES</Link>
            </div>
        </div>
    )
}

export default Blog;
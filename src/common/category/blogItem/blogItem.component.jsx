import "./blogItem.style.css";

const BlogItem = ({img, date, blogTitle, blogDescription}) => {
    return(
        <div className="blogItem">
            <img src={img} />
            <div className="blogItemText">
                <p>{date}</p>
                <h2>{blogTitle}</h2>
                <p>{blogDescription}</p>
            </div>
        </div>
    )
}

export default BlogItem;
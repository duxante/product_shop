import './blogItem.style.css';

const BlogItem = ({ image, date, blogTitle, blogDescription, handleModal, blogData }) => {
  return (
    <div className="blogItem" onClick={() => handleModal(blogData)}>
      {image}
      <div className="blogItemText">
        <p>{date}</p>
        <h2>{blogTitle}</h2>
        <p>{blogDescription}</p>
      </div>
    </div>
  );
};

export default BlogItem;

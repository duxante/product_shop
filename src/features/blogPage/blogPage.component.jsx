import './blogPage.style.css';
import Heading from '../../common/heading/heading.component';
import { useState } from 'react';
import BlogItem from '../../common/blogItem/blogItem.component';
import ModalBlog from './components/modalBlog.component';
import { blog } from '../../data/blog';

const BlogPage = () => {
  const [modalData, setmodalData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleModal = (blogData) => {
    setmodalData(blogData);
    setIsVisible(true);
  };

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <ModalBlog
          modalData={modalData}
          isVisible={isVisible}
          handleCloseModal={handleCloseModal}
        />
      )}
      <div className="blogPageHolder">
        <Heading headingText="Blog" />
        <div className="blogPageItemHolder">
          {blog.map((oneBlog, index) => (
            <BlogItem
              blogData={oneBlog}
              handleModal={handleModal}
              key={index}
              image={oneBlog.image}
              date={oneBlog.date}
              blogTitle={oneBlog.blogTitle}
              blogDescription={oneBlog.blogDescription}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;

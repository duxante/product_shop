import { homeBlogPost } from '../../../../data/blog';
import './blogHolder.style.css';
import Heading from '../../../../common/heading/heading.component';
import BlogItem from '../../../../common/blogItem/blogItem.component';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="blogHolder">
      <Heading headingText="Blog" />
      <div className="blogItemHolder">
        {homeBlogPost.map((oneBlog, index) => (
          <BlogItem
            key={index}
            image={oneBlog.image}
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
  );
};

export default Blog;

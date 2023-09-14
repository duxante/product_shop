import { Link } from 'react-router-dom';
import { blog } from '../../../../data/blog';
import Heading from '../../../../common/heading/heading.component';
import BlogItem from '../../../../common/blogItem/blogItem.component';
import './blogHome.style.css';

const Blog = () => {
  const blogHome = blog.slice(0, 2);
  return (
    <div className="blogHolder">
      <Heading headingText="Blog" />
      <div className="blogItemHolder">
        {blogHome.map((oneBlog, index) => (
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
        <Link to="/blog">SEE ALL ARTICLES</Link>
      </div>
    </div>
  );
};

export default Blog;

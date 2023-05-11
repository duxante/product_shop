import './blogPage.style.css';
import Heading from '../../common/heading/heading.component';
import Modal from './components/modalBlog.component';
import allYouNeedToKnowAboutMac from '../../assets/allYouNeedToKnowAboutMac.jpeg';
import { useState } from 'react';
import BlogItem from '../../common/category/blogItem/blogItem.component';
import mobilePhones from '../../assets/mobilePhones.jpeg';
import camera from '../../assets/camera.jpg';
import ps5 from '../../assets/ps5.jpg';
import garminInstinct from '../../assets/garminInstinct.jpg';
import razer from '../../assets/razer.jpg';
import ModalBlog from './components/modalBlog.component';

const BlogPage = () => {
  const [modalData, setmodalData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [blogPage, setBlogPage] = useState([
    {
      img: allYouNeedToKnowAboutMac,
      date: '19.04.2023.',
      blogTitle: 'All You Need To Know About Mac',
      blogDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae repellendus nihil, odio suscipit provident neque doloribus maxime odit temporibus inventore et, dolorum blanditiis saepe aliquam delectus. Fuga, assumenda aliquid.',
      author: 'Spomenko Dukic',
    },
    {
      img: mobilePhones,
      date: '25.04.2023.',
      blogTitle: 'New iPhone 14 PRO, Worth The Hype?',
      blogDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae repellendus nihil, odio suscipit provident neque doloribus maxime odit temporibus inventore et, dolorum blanditiis saepe aliquam delectus. Fuga, assumenda aliquid.',
      author: 'Spomenko Dukic',
    },
    {
      img: camera,
      date: '27.04.2023.',
      blogTitle: "Nikon's Shows Robust Adventurer",
      blogDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae repellendus nihil, odio suscipit provident neque doloribus maxime odit temporibus inventore et, dolorum blanditiis saepe aliquam delectus. Fuga, assumenda aliquid.',
      author: 'Spomenko Dukic',
    },
    {
      img: ps5,
      date: '01.05.2023.',
      blogTitle: 'Sony Brings Up The Black Edition',
      blogDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae repellendus nihil, odio suscipit provident neque doloribus maxime odit temporibus inventore et, dolorum blanditiis saepe aliquam delectus. Fuga, assumenda aliquid.',
      author: 'Spomenko Dukic',
    },
    {
      img: garminInstinct,
      date: '04.05.2023.',
      blogTitle: 'Garmin Presents 2nd Generation Instinct',
      blogDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae repellendus nihil, odio suscipit provident neque doloribus maxime odit temporibus inventore et, dolorum blanditiis saepe aliquam delectus. Fuga, assumenda aliquid.',
      author: 'Spomenko Dukic',
    },
    {
      img: razer,
      date: '07.05.2023.',
      blogTitle: "Razer's New Beast With RTX4080",
      blogDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae repellendus nihil, odio suscipit provident neque doloribus maxime odit temporibus inventore et, dolorum blanditiis saepe aliquam delectus. Fuga, assumenda aliquid.',
      author: 'Spomenko Dukic',
    },
  ]);
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
          {blogPage.map((oneBlog, index) => (
            <BlogItem
              blogData={oneBlog}
              handleModal={handleModal}
              key={index}
              img={oneBlog.img}
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

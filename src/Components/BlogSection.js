import React from 'react';
import './BlogSection.css'; // Make sure to import your CSS file

const blogs = [
  {
    title: 'Blog Title 1',
    image: './assets/blog1.webp',
  },
  {
    title: 'Blog Title 2',
    image: './assets/blog2.webp',
  },
  {
    title: 'Blog Title 3',
    image: './assets/blog3.webp',
  },
  {
    title: 'Blog Title 4',
    image: './assets/blog4.webp',
  },
];

const BlogSection = () => {
  return (
    <>
    <div className="blog-heading">
        <h1>BLOG</h1>
      </div>
    <div className="blog-section">
      <div className="main-blog">
        <img src={blogs[0].image} alt={blogs[0].title} className="blog-image" />
        <div className="blog-title">{blogs[0].title}</div>
        <div className="arrow-popup">Click to read</div>
      </div>
      <div className="side-blogs">
        {blogs.slice(1).map((blog, index) => (
          <div key={index} className="side-blog">
            <div className="side-blog-image">
              <img src={blog.image} alt={blog.title} />
              <div className="arrow-popup">Click to read</div>
              <div className="blog-title">{blog.title}</div>
            </div>

          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default BlogSection;
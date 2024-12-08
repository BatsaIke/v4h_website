import React from "react";
import { useParams } from "react-router-dom";
import BlogDetailsHeader from "./BlogDetailsHeader";
import CallToAction from "../Blogs/CallToAction/CallToAction";
import BlogDetails from "./BlogDetailsPage/BlogDetails";
import { blogArticles } from "../Blogs/BlogData"; // Import blogArticles

const BlogDetailsPage: React.FC = () => {
  const { blogId } = useParams<{ blogId: string }>();

  // Find the blog by ID
  const blog = blogArticles.find((b) => b.id === blogId);

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <>
      {/* Blog Header */}
      <BlogDetailsHeader
        title={blog.title}
        subtitle={blog.subtitle || blog.category} // Use subtitle or category
        backgroundImage={blog.image}
      />

      {/* Blog Details */}
      <BlogDetails sections={blog.sections} />

      {/* Call To Action */}
      <CallToAction />
    </>
  );
};

export default BlogDetailsPage;

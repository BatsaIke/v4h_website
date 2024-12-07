import React from 'react';
import { useParams } from 'react-router-dom';
import BlogDetailsHeader from './BlogDetailsHeader';
import CallToAction from '../Blogs/CallToAction/CallToAction';
import BlogDetails from './BlogDetailsPage/BlogDetails';
import blogImage1 from '../../assets/images/blog3.jpg'

const blogs = [
  {
    id: "1",
    title: "Top 5 Tendințe în Marketing Digital pentru 2024",
    subtitle: "Learn the top strategies for 2024.",
    sections: [
      {
        title: "Introduction",
        content:
          "Într-o lume digitală în continuă evoluție, strategiile de marketing digital trebuie să țină pasul cu schimbările rapide ale tehnologiei și comportamentului consumatorilor...",
      },
      {
        title: "1. Inteligența Artificială devine standard în marketing",
        content:
          "Utilizarea inteligenței artificiale (AI) în marketing nu mai este doar o opțiune, ci o necesitate. AI ajută la personalizarea conținutului, la automatizarea campaniilor...",
      },
      {
        title: "3. Zero-Click Searches și optimizarea pentru poziția zero",
        content:
          "Căutările fără clicuri (Zero-Click Searches) au crescut exponențial, mai ales datorită modului în care Google prezintă acum informațiile în snippet-uri de răspuns direct.",
        image: "https://via.placeholder.com/760x427",
      },
    ],
    image:blogImage1,
  },
  {
    id: "2",
    title: "Inteligența artificială în business",
    subtitle: "How AI is transforming industries.",
    sections: [
      {
        title: "Introduction",
        content: "Inteligența artificială (AI) a devenit parte integrantă din afaceri...",
      },
    ],
    image: blogImage1,
  },
];

const BlogDetailsPage: React.FC = () => {
  const { blogId } = useParams<{ blogId: string }>();
console.log("Params:", blogId)
console.log("Blog ID:", blogId);
  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <>
      <BlogDetailsHeader
        title={blog.title}
        subtitle={blog.subtitle}
        backgroundImage={blog.image}
      />
      <BlogDetails sections={blog.sections} />
      <CallToAction />
    </>
  );
};

export default BlogDetailsPage;

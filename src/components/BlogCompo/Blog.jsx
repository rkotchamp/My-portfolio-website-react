import { useEffect, useState } from "react";
import localImage from "../../../src/assets/My_Tech_logos/mos-design-EF3JeHSl8ck-unsplash.jpg";
import profile from "../../assets/My_Tech_logos/reuben42.png";
import { createClient } from "contentful";
import { useNavigate } from "react-router-dom";

import "./Blog.css";

function Blog({ data }) {
  const navigate = useNavigate();
  const handleClickNavigate = () => {
    navigate(`/blogDetails/${data.sys.id}`);
  };
  //   const [blogPost, setBlogPost] = useState([]);

  //   const client = createClient({
  //     space: "2kie8sox65km",
  //     accessToken: "neX1QozqUXvZYor7sTu7ByQmB5xX9bDxweVW1AXxec0",
  //   });

  //   useEffect(() => {
  //     const getAllEntries = async () => {
  //       try {
  //         await client.getEntries().then((entries) => {
  //           setBlogPost(entries);
  //         });
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     getAllEntries();
  //   }, []);
  //   console.log(data.sys.id);

  return (
    <div className="blogContainer" onClick={handleClickNavigate}>
      <div className="imageContainer">
        <img
          src={data?.fields?.blogImage?.fields?.file?.url}
          alt={data?.fields?.blogImage?.fields?.file?.fileName}
          className="image"
        />
      </div>
      <div className="titleAndIndustry">
        <p>
          in <span className="topic">{data?.fields?.programmingLanguage}</span>
        </p>
        <h2 className="title">{data?.fields?.blogTitle}</h2>
      </div>
      <div className="authorAndDate">
        <div className="profileContainer">
          <div className="profile">
            <img src={data?.fields?.authorImage?.fields?.file?.url} alt="" />
          </div>
        </div>
        <div className="nameAndDate">
          <p className="name">
            <span>by</span> {data?.fields?.blogAuthor}
          </p>
          <p>{data?.fields?.createdDate}</p>
        </div>
      </div>
      {/* <div className="summary">
        <p>{data?.fields?.blogSummary}</p>
      </div> */}
      {/* <div className="authorAndDate">
        <div className="profileContainer">
          <div className="profile">
            <img src={profile} alt="" />
          </div>
        </div>
        <div className="nameAndDate">
          <p className="name">
            <span>by</span> Reuben Tetteh
          </p>
          <p>December 2,2023</p>
        </div>
      </div> */}
    </div>
  );
}

export default Blog;

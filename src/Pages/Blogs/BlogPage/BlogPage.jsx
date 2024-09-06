import { useEffect, useState } from "react";

import imageSpace from "../../../assets/My_Tech_logos/juanjo-jaramillo-mZnx9429i94-unsplash.jpg";
import Blog from "../../../components/BlogCompo/Blog";
import profile from "../../../assets/My_Tech_logos/reuben42.png";
import { createClient } from "contentful";
import { renderRichText, BlogTry } from "../../blogTry/BlogTry";

import "./BlogPage.css";

// const getHMLData = (rawData) => {
//   const htmlString = marked(rawData);
//   return htmlString;
// };
function BlogPage() {
  const [blogPost, setBlogPost] = useState([]);
  const [getBlog, setGetBlog] = useState([]);

  const client = createClient({
    space: import.meta.env.VITE_VITE_CONTENTFUL_SPACEID_KEY,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESSTOKEN_KEY,
  });

  const getKeyedContent = async (key) => {
    // let result;
    try {
      const entry = await client
        .getEntry({
          content_type: "tryRich",
          "fields.key": key,
        })
        .then((entry) => {
          setGetBlog(entry);
          // console.log(entry);
        });
      return entry;
    } catch (error) {
      console.log(error);
      return null;
    }
    // return result.items[0];
  };

  const waysFetchedKeys = async () => {
    try {
      const entry = client.getEntries({
        content_type: "tryRich",
      });
      // .then((entry) => {
      //   setGetBlog(entry);
      //   console.log(getBlog.items);
      // });
      const keys = (await entry).items.map((entry) => setGetBlog(entry));
      return keys;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const fetchedkeys = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "blog",
      });
      const keys = entries.items.map((item) => item.fields.key);

      return keys;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const getAllEntries = async (key) => {
    try {
      await client
        .getEntries({
          content_type: "blog",
        })
        .then((entries) => {
          setBlogPost(entries);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchedData = async () => {
      const keys = await fetchedkeys();
      await waysFetchedKeys();
      await getAllEntries(keys);
      // await getKeyedContent(secondKey);
    };
    fetchedData();
  }, []);

  // console.log(blogPost);
  console.log(getBlog);

  return (
    <div className="blogPageContainer">
      <div className="latestBlog">
        <div className="latestImageBlog">
          <img src={imageSpace} alt="" />
        </div>
        <div className="titleAndProfiles">
          {/* element1 */}
          <div className="industryAndTile">
            <p>
              in <span>JavaScript</span>
            </p>
            <h2>How to Create a Flutter AppBar (Flutter Beginner Tutorial).</h2>
          </div>
          {/* element2 */}
          <div className="dateAndAuthor">
            <div className="profile_Container">
              <div className="profiles">
                <img src={profile} alt="" />
              </div>
            </div>
            <div className="dateAndName">
              <p className="names">
                <span>by</span> Reuben Tetteh
              </p>
              <p>December 2,2023</p>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              sapiente reiciendis ullam pariatur praesentium, hic blanditiis
              mollitia architecto perferendis sit perspiciatis voluptatem,
              fugiat quos iste optio ea, deleniti culpa odit?
            </p>
          </div>
        </div>
      </div>

      <div className="articlesRender">
        {blogPost?.items?.map((entry, i) => {
          return <Blog data={entry} key={i} />;
        })}
      </div>
    </div>
  );
}

export default BlogPage;

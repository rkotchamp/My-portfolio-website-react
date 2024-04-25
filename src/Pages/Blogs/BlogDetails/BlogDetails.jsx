import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imageSpace from "../../../assets/My_Tech_logos/juanjo-jaramillo-mZnx9429i94-unsplash.jpg";
import user from "../../../assets/My_Tech_logos/reuben42.png";
import { createClient } from "contentful";
// import { marked } from "marked";
import "./BlogDetails.css";

// const getHMLData = (rawData) => {
//   const htmlString = marked(rawData);
//   return htmlString;
// };
function BlogDetails() {
  const [singlePost, setSinglePost] = useState([]);

  const client = createClient({
    space: "2kie8sox65km",
    accessToken: "neX1QozqUXvZYor7sTu7ByQmB5xX9bDxweVW1AXxec0",
  });
  const { id } = useParams();
  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entry) => {
          setSinglePost(entry);
        });
      } catch (error) {
        console.error(error);
      }
    };
    getEntryById();
  }, []);
  console.log(singlePost);

  // console.log(singlePost.fields?.blogAuthor);
  console.log(singlePost.fields?.postContent);
  // const postContent = getHMLData(singlePost.fields?.postContent);
  // console.log(postContent);
  return (
    <div className="detailsContainer">
      <div className="detailedImageContainer">
        <img
          src={singlePost.fields?.blogImage?.fields?.file?.url}
          alt={singlePost.fields?.blogImage?.fields?.file?.fileName}
        />
      </div>
      <div className="titles_And_Profiles">
        <div className="structure">
          <div className="titles">
            <p>
              in <span>{singlePost.fields?.programmingLanguage}</span>
            </p>
            <h1>{singlePost.fields?.blogTitle}</h1>
          </div>
          <div className="nameProfiles">
            <div className="imageProfile">
              <div className="imageProfileContainer">
                <img
                  src={singlePost.fields?.authorImage?.fields?.file?.url}
                  alt={singlePost.fields?.authorImage?.fields?.file?.fileName}
                />
              </div>
            </div>
            <div className="userName">
              <p className="useName">
                <span>by</span> {singlePost.fields?.blogAuthor}
              </p>
              <p>{singlePost.fields?.createdDate}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="articleSpace">
        <div className="paragraphs">
          <p className="firstParagraph">{singlePost.fields?.postContent}</p>
          {/* <p className="secondParagraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
            consequatur reprehenderit! Aspernatur eligendi, porro quasi ab sit
            expedita facere odio mollitia soluta consequuntur aperiam
            accusantium assumenda modi quia! Ipsam minima in suscipit, veniam
            repellendus ducimus, illum, tempore dolorem ex alias cum eaque!
            Facere aspernatur sint animi reprehenderit deserunt dolores error.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            aliquam, accusamus id autem exercitationem quibusdam nostrum ducimus
            voluptatum. Earum consequatur, eius ut explicabo nihil aspernatur
            quo quis dolores rerum non minima ad ex porro exercitationem dolorum
            quidem impedit voluptates nemo modi ratione similique aliquid
            sapiente sit quam! Repellat recusandae pariatur dignissimos quod
            veniam debitis harum aut, tempore provident quaerat non sapiente
            dolores ex rem soluta laborum nostrum totam voluptatibus sed! Earum
            alias ipsum nemo ipsam, voluptatum totam dolore maxime a consectetur
            magni laudantium autem ratione laboriosam veritatis delectus minus
            nulla velit sint officia? Quam quis, hic quibusdam culpa explicabo
            quo animi nemo magnam rem sed fugit numquam corporis iusto nobis
            atque nesciunt modi aspernatur, provident impedit vel repellendus
            laboriosam. Magni non, voluptate impedit animi soluta excepturi iure
            dolores sit aspernatur eveniet amet quis? Id repellat praesentium,
            molestias neque, eius error, fugit ut aspernatur quod magni
            doloribus odit. Atque sit dolorum harum molestiae vel accusamus
            placeat ab, quos sed non earum qui odio a aliquid eligendi dolorem
            laudantium! Repudiandae ipsa quis voluptate, sint natus ducimus
            quidem error consequuntur iste. Distinctio asperiores incidunt sint
            illum doloremque iure eos, animi possimus eveniet, molestiae eaque
            dicta omnis alias deserunt sunt nesciunt vel ullam vero corrupti in!
            Ab sint alias omnis dolorum ipsa dicta beatae ipsam corporis!
            Voluptate, magnam provident officia neque, illum ea enim ex tempora
            tenetur quasi modi quo et qui iure eveniet impedit veniam dolorum
            facere error corrupti velit at? Nobis officiis suscipit delectus
            culpa eligendi, corporis in similique? Quibusdam eius neque
            aspernatur quidem iusto quod minus vel reiciendis voluptates, nemo
            culpa doloribus nesciunt maxime facere officia saepe ratione iste
            dolores quis aperiam et, ullam molestiae delectus. Placeat porro
            aliquid blanditiis. Quam, eius. Aperiam optio eaque molestiae nihil
            non hic accusamus vel mollitia itaque. Perspiciatis totam recusandae
            officiis sequi iure alias autem, similique odio voluptas maiores
            distinctio expedita pariatur dolore doloribus fugiat praesentium
            adipisci exercitationem iste minus quod mollitia? Praesentium
            recusandae saepe unde ipsa ratione, totam eos error sequi velit
            iure, quae tempore corrupti porro corporis tempora numquam, minus
            provident quibusdam ducimus? Illum veritatis sapiente ipsam pariatur
            impedit magni soluta maiores? Eveniet optio odit iusto excepturi
            adipisci ipsum est eum facilis tempora alias vero quis nobis beatae
            eos saepe, quod dolor molestiae culpa. Corrupti quos in
            exercitationem sequi sunt vel explicabo molestias enim. Aliquid quos
            aliquam vero soluta nulla reprehenderit eum. Soluta libero magni
            consectetur repudiandae cupiditate, deserunt totam autem debitis
            officia!
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;

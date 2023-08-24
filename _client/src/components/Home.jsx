import { useContext, useEffect, useState } from "react";
import PostCard from "./PostCard";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [postData, setPostData] = useState();
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:8080/blogposts", {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let finalData = data.data;
        setPostData(finalData);
      });
  }, [setPostData]);

  const handleCreatePost = () => {
    if (userInfo?.id) {
      navigate("/create");
    } else {
      alert("Please Login or, Register!");
    }
  };

  return (
    <div className="home">
      <div>
        <button onClick={handleCreatePost}>+ Create Post</button>
      </div>

      <div className="post">
        <div className="postImg">
          <img
            src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/unj63uuxb8ooxctihr1w"
            alt=""
          />
        </div>
        <div className="content">
          <p>8 Apr 2023</p>
          <h2>The Crunchbase Tech Layoffs Tracker</h2>
          <p>Author : Debabrata</p>
          <p>
            U.S. tech sector layoffs continue. Tech giants Apple and Hyland
            Software were just a couple of the companies that announced sweeping
            layoffs in the past week. Around 131,000 workers in U.S.-based tech
            companies (or tech companies with a large U.S. workforce) have been
            laid off in mass job cuts so far in 2023, according to a Crunchbase
            News tally. That number includes Hyland Software’s 1,000-person cut
            and View‘s 170-person workforce cut.{" "}
          </p>
        </div>
      </div>

      {postData && postData.map((ele, idx) => <PostCard key={idx} {...ele} />)}
    </div>
  );
};

export default Home;

import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const CreatePost = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [value, setValue] = useState({
    title: "",
    summary: "",
    image: "https://via.placeholder.com/260x260",
    date: new Date(),
    userID: userInfo?.id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Here you can add the code to submit the form data, for example, making an API call to save the post.
    const response = await fetch("http://localhost:8080/blogposts", {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (response.status === 200) {
      response.json().then((data) => {
        setUserInfo({ ...userInfo, postsData: data });
        window.location = "/";
      });
    } else {
      alert("Post Creation failed!");
    }

    // Reset the form fields after submission
    setValue({
      title: "",
      summary: "",
      image: "https://via.placeholder.com/260x260",
      date: new Date(),
      userID: userInfo?.id,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="create_post">
      <label htmlFor="title">
        Blog Title
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={value.title}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="summary">
        Blog Summary
        <textarea
          name="summary"
          id="summary"
          cols="30"
          rows="10"
          placeholder="Summary..."
          value={value.summary}
          onChange={handleChange}
        ></textarea>
      </label>

      <button type="submit">Save Post</button>
    </form>
  );
};

export default CreatePost;

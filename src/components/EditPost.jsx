import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../store/postSlice";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector((state) => state.posts.postList);
  const [post, setPost] = useState({});

  useEffect(() => {
    const foundPost = posts.find((p) => p.id === postId);
    if (foundPost) {
      setPost(foundPost);
    }
  }, [posts, postId]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editPost(post));
    navigate("/posts");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 to-blue-400 ">
      {post.title && (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white shadow-sm rounded-lg p-4"
        >
          <h2>Edit Post</h2>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={post.title}
              onChange={handleChange}
              name="title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="content"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Content:
            </label>
            <textarea
              id="content"
              rows="5"
              value={post.content}
              onChange={handleChange}
              name="content"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      )}
      {!post.title && <p>Post not found.</p>}
    </div>
  );
};

export default EditPost;

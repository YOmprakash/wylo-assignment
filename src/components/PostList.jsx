import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../store/postSlice";
import { useNavigate } from "react-router-dom";
import Post from "./Post";

const PostList = () => {
  const posts = useSelector((state) => state.posts.postList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeletePost = (postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(deletePost(postId));
    }
  };

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center text-indigo-900 mb-6">
        Posts
      </h2>
      {posts.length === 0 ? (
        <p className="text-gray-700 text-center">No posts yet.</p>
      ) : (
        <ul className="flex flex-wrap justify-center gap-4 p-4">
          {posts.map((post) => (
            <li
              key={post.id}
              className="rounded-lg bg-white p-4 hover:bg-gray-100 w-full sm:w-1/2 md:w-1/4"
            >
              <Post post={post} />
              <div className="flex justify-end items-center">
                <button
                  className="text-rose-600 hover:underline"
                  onClick={() => handleDeletePost(post.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={() => navigate("/")}
        className="fixed bottom-8 right-8 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md px-4 py-2 z-50"
      >
        Create Post
      </button>
    </div>
  );
};

export default PostList;

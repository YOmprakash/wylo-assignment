import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreatePost />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/edit/:postId" element={<EditPost />} />
      </Routes>
    </Router>
  );
};

export default App;

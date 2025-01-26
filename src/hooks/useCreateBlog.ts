import { useState } from "react";
import { toast } from "react-toastify";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useAuth } from "./AuthContext";
import { db } from "../config/firebaseConfig";

const useCreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const { user } = useAuth();
  const [isPreview, setIsPreview] = useState(false);

  const handleSubmit = async () => {
    if (!title || !content || !tags) {
      toast.error("All fields are required!");
      return;
    }

    try {
      await addDoc(collection(db, "Blogs"), {
        title,
        content,
        tags: tags.split(",").map((tag) => tag.trim()),
        author: user?.displayName || user?.email || "Anonymous",
        createdAt: serverTimestamp(),
      });
      toast.success("Blog created successfully!");
      setTitle("");
      setContent("");
      setTags("");
      setIsPreview(false);
    } catch (error) {
      console.error("Error creating blog: ", error);
      toast.error("Failed to create blog. Please try again.");
    }
  };

  return {
    title,
    setTitle,
    content,
    setContent,
    tags,
    setTags,
    isPreview,
    setIsPreview,
    handleSubmit,
  };
};

export default useCreateBlog;

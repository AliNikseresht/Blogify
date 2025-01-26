import { useState } from "react";
import { toast } from "react-toastify";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../../hooks/AuthContext";
import { db } from "../../config/firebaseConfig";

const CreateBlog = () => {
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

  return (
    <div className="grid grid-cols-2 gap-8 p-8 h-screen">
      {/* Blog Form */}
      <form
        className="p-6 border rounded-lg bg-gray-900"
        onSubmit={(e) => {
          e.preventDefault();
          setIsPreview(true);
        }}
      >
        <h2 className="text-2xl font-bold mb-6 text-green-400">
          Create a New Blog
        </h2>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-green-400 focus:outline-none bg-transparent text-white"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Content
          </label>
          <textarea
            className="w-full px-3 py-2 border border-green-400 focus:outline-none bg-transparent text-white"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your blog content here..."
            rows={5}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Tags (comma separated)
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-green-400 focus:outline-none bg-transparent text-white"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="e.g., React, JavaScript, Firebase"
          />
        </div>
        <button
          type="submit"
          className="border border-green-400 text-green-400 px-4 py-2"
        >
          Preview Blog
        </button>
      </form>

      {/* Blog Preview */}
      {isPreview && (
        <div className="p-6 border rounded-lg bg-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-green-400">Preview</h2>
          <h3 className="text-lg font-semibold mb-2 text-white">
            {title || "Untitled"}
          </h3>
          <p className="mb-4 text-white">{content || "No content provided."}</p>
          <div className="mb-4">
            <span className="text-sm font-bold text-green-400">Tags: </span>
            <span className="text-white">{tags || "No tags"}</span>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setIsPreview(false)}
              className="border border-yellow-500 text-yellow-500 px-4 py-2"
            >
              Edit Blog
            </button>
            <button
              onClick={handleSubmit}
              className="border border-green-400 text-green-400 px-4 py-2"
            >
              Publish Blog
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateBlog;

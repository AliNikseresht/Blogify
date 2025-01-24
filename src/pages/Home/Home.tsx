import { useEffect, useState } from "react";
import { fetchBlogById } from "../../services/firebaseService";

type Blog = {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  tags: string[];
};

const Home: React.FC<{ blogId: string }> = ({ blogId }) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getBlog = async () => {
      try {
        setLoading(true);
        const data = await fetchBlogById(blogId);
        setBlog(data as Blog);
      } catch (err) {
        setError("Failed to load the blog.");
      } finally {
        setLoading(false);
      }
    };

    getBlog();
  }, [blogId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {blog && (
        <>
          <h1>{blog.title}</h1>
          <p>
            <strong>Author:</strong> {blog.author}
          </p>
          <p>
            <strong>Published:</strong>{" "}
            {new Date(blog.createdAt).toLocaleDateString()}
          </p>
          <div>{blog.content}</div>
          <p>
            <strong>Tags:</strong> {blog.tags.join(", ")}
          </p>
        </>
      )}
    </div>
  );
};

export default Home;

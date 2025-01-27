import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TBlog } from "../../types/home";
import Loading from "../../components/ui/Loading";
import { blogByIdService } from "../../services/blogByIdService";
import formatDate from "../../utils/formatDate";

const ViewBlog = () => {
  //state
  const [blog, setBlog] = useState<TBlog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  //hooks
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  //services
  useEffect(() => {
    const loadBlog = async () => {
      try {
        if (id) {
          const blogData = await blogByIdService(id);
          setBlog(blogData);
        }
      } catch (error) {
        console.error("Error loading blog:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBlog();
  }, [id]);

  //loading
  if (loading) {
    return <Loading />;
  }

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 h-screen flex flex-col gap-4 justify-center">
      <button
        onClick={() => navigate(-1)}
        className="c-green border border-green w-28 py-1 mb-[1.5em]"
      >
        Back
      </button>
      <div>
        <h1 className="text-4xl font-bold c-green">{blog.title}</h1>
        <div className="flex items-center gap-2 my-5">
          <p className="c-white text-lg">{blog.author}</p>
          <p className="c-green">{formatDate(blog.createdAt.seconds)}</p>
        </div>
        <div className="text-lg leading-relaxed">{blog.content}</div>
        <div className="flex flex-wrap gap-2 mt-6">
          {blog.tags.map((tagItem, index) => (
            <span
              key={index}
              className="border border-green px-3 py-1 text-sm rounded-full c-green"
            >
              #{tagItem}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewBlog;

import { useEffect, useState } from "react";
import { homeData } from "../../data/home";
import BlogCard from "./_components/BlogCard";
import EmptyState from "./_components/EmptyState";
import Loading from "../../components/ui/Loading";
import { fetchBlogs } from "../../services/blogService";
import { TBlog } from "../../types/home";

const Home = () => {
  //state
  const [blogs, setBlogs] = useState<TBlog[]>([]);
  const [loading, setLoading] = useState(true);

  //service
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const blogsData = await fetchBlogs();
        setBlogs(blogsData);
        console.log(blogsData);
      } catch (error) {
        console.error("Error loading blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  //loading
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col p-[0em] md:p-[3em] gap-[2em] min-h-screen">
      <div className="flex flex-col items-center md:w-10">
        <div className="w-4 h-0.5 bc-green"></div>
        <h1>{homeData.title}</h1>
      </div>
      {blogs.length === 0 ? (
        <EmptyState />
      ) : (
        blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
      )}
    </div>
  );
};

export default Home;

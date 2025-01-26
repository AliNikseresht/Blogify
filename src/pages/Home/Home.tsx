import { useEffect, useState } from "react";
import { homeData } from "../../data/home";
import BlogCard from "./_components/BlogCard";
import EmptyState from "./_components/EmptyState";
import Loading from "../../components/ui/Loading";
import { fetchBlogs } from "../../services/blogService";
import { TBlog } from "../../types/home";

const Home = () => {
  // state
  const [blogs, setBlogs] = useState<TBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [lastDoc, setLastDoc] = useState<any>(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const { blogs: blogsData, lastDoc } = await fetchBlogs();
        setBlogs(blogsData);
        setLastDoc(lastDoc);
      } catch (error) {
        console.error("Error loading blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  const loadMoreBlogs = async () => {
    if (isLoadingMore || !lastDoc) return;

    setIsLoadingMore(true);
    try {
      const { blogs: moreBlogs, lastDoc: newLastDoc } = await fetchBlogs(
        lastDoc
      );
      setBlogs((prevBlogs) => [...prevBlogs, ...moreBlogs]);
      setLastDoc(newLastDoc);
    } catch (error) {
      console.error("Error loading more blogs:", error);
    } finally {
      setIsLoadingMore(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 200
      ) {
        loadMoreBlogs();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastDoc, isLoadingMore]);

  // loading
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
      {isLoadingMore && (
        <div className="flex justify-center my-4">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Home;

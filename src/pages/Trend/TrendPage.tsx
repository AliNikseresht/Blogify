import { useEffect, useState } from "react";
import { TBlog } from "../../types/home";
import { trendingBlogsService } from "../../services/TrendingBlogsService";
import Loading from "../../components/ui/Loading";
import BlogCard from "../Home/_components/BlogCard";

const TrendPage = () => {
  //state
  const [blogs, setBlogs] = useState<TBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [lastDoc, setLastDoc] = useState<any>(null);

  //service
  useEffect(() => {
    const loadTrendingBlogs = async () => {
      try {
        const { blogs: blogsData, lastDoc } = await trendingBlogsService();
        setBlogs(blogsData);
        setLastDoc(lastDoc);
      } catch (error) {
        console.error("Error loading trending blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTrendingBlogs();
  }, []);

  //load more blog
  const loadMoreBlogs = async () => {
    if (isLoadingMore || !lastDoc) return;

    setIsLoadingMore(true);
    try {
      const { blogs: moreBlogs, lastDoc: newLastDoc } =
        await trendingBlogsService(lastDoc);
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

  //loading
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col p-[0em] md:p-[3em] gap-[2em] min-h-screen">
      <div className="flex flex-col items-center md:w-[5.8rem]">
        <div className="w-16 h-0.5 bc-green"></div>
        <h1>Trending Blogs</h1>
      </div>
      {blogs.length === 0 ? (
        <div>No trending blogs available</div>
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

export default TrendPage;

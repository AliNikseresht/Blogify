import { useEffect } from "react";
import { homeData } from "../../data/home";
import BlogCard from "./_components/BlogCard";
import EmptyState from "./_components/EmptyState";
import Loading from "../../components/ui/Loading";
import { useBlogs } from "../../hooks/useBlogs";

const Home = () => {
  const { blogs, loading, isLoadingMore, loadMoreBlogs } = useBlogs();

  // Infinite Scroll handling
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
  }, [loadMoreBlogs]);

  // Loading
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

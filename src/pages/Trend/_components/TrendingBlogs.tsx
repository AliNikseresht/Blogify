import Loading from "../../../components/ui/Loading";
import { trendData } from "../../../data/trend";
import { TBlog } from "../../../types/home";
import BlogCard from "../../Home/_components/BlogCard";
import EmptyState from "../../Home/_components/EmptyState";

interface TrendingBlogsProps {
  blogs: TBlog[];
  loading: boolean;
  isLoadingMore: boolean;
}

const TrendingBlogs: React.FC<TrendingBlogsProps> = ({
  blogs,
  loading,
  isLoadingMore,
}) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col p-[0em] md:p-[3em] gap-[2em] min-h-screen">
      <div className="flex flex-col items-center md:w-[5.8rem]">
        <div className="w-16 h-0.5 bc-green"></div>
        <h1>{trendData.title}</h1>
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

export default TrendingBlogs;

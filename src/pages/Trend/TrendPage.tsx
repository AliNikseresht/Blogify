import { useTrendingBlogs } from "../../hooks/useTrendBlogs";
import TrendingBlogs from "./_components/TrendingBlogs";

const TrendPage: React.FC = () => {
  const { blogs, loading, isLoadingMore } = useTrendingBlogs();

  return (
    <TrendingBlogs
      blogs={blogs}
      loading={loading}
      isLoadingMore={isLoadingMore}
    />
  );
};

export default TrendPage;

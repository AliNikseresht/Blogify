import { useEffect, useState } from "react";
import { TBlog } from "../types/home";
import { trenBlogsService } from "../services/trendBlogService";

interface UseTrendingBlogsReturn {
  blogs: TBlog[];
  loading: boolean;
  isLoadingMore: boolean;
  loadMoreBlogs: () => void;
}

export const useTrendingBlogs = (): UseTrendingBlogsReturn => {
  const [blogs, setBlogs] = useState<TBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [lastDoc, setLastDoc] = useState<any>(null);

  useEffect(() => {
    const loadTrendingBlogs = async () => {
      try {
        const { blogs: blogsData, lastDoc } = await trenBlogsService();
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

  const loadMoreBlogs = async () => {
    if (isLoadingMore || !lastDoc) return;

    setIsLoadingMore(true);
    try {
      const { blogs: moreBlogs, lastDoc: newLastDoc } = await trenBlogsService(
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

  return { blogs, loading, isLoadingMore, loadMoreBlogs };
};

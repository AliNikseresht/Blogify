import { useState, useEffect, useCallback } from "react";
import { fetchBlogs } from "../services/blogService";
import { TBlog } from "../types/home";

export const useBlogs = (pageSize: number = 5) => {
  const [blogs, setBlogs] = useState<TBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [lastDoc, setLastDoc] = useState<any>(null);

  const loadBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const { blogs: blogsData, lastDoc } = await fetchBlogs();
      setBlogs(blogsData);
      setLastDoc(lastDoc);
    } catch (error) {
      console.error("Error loading blogs:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const loadMoreBlogs = useCallback(async () => {
    if (isLoadingMore || !lastDoc) return;

    setIsLoadingMore(true);
    try {
      const { blogs: moreBlogs, lastDoc: newLastDoc } = await fetchBlogs(
        lastDoc,
        pageSize
      );
      setBlogs((prevBlogs) => [...prevBlogs, ...moreBlogs]);
      setLastDoc(newLastDoc);
    } catch (error) {
      console.error("Error loading more blogs:", error);
    } finally {
      setIsLoadingMore(false);
    }
  }, [lastDoc, isLoadingMore, pageSize]);

  useEffect(() => {
    loadBlogs();
  }, [loadBlogs]);

  return { blogs, loading, isLoadingMore, loadMoreBlogs };
};

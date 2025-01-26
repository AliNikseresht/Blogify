import useCreateBlog from "../../hooks/useCreateBlog";
import BlogForm from "./_components/BlogFormItems";
import BlogPreview from "./_components/BlogPreview";

const CreateBlog = () => {
  const {
    title,
    setTitle,
    content,
    setContent,
    tags,
    setTags,
    isPreview,
    setIsPreview,
    handleSubmit,
  } = useCreateBlog();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPreview(true);
  };

  return (
    <div className="grid grid-cols-2 gap-8 p-8 h-screen">
      {/* Blog Form */}
      <BlogForm
        title={title}
        content={content}
        tags={tags}
        setTitle={setTitle}
        setContent={setContent}
        setTags={setTags}
        onSubmit={handleFormSubmit}
      />

      {/* Blog Preview */}
      {isPreview && (
        <BlogPreview
          title={title}
          content={content}
          tags={tags}
          onEdit={() => setIsPreview(false)}
          onPublish={handleSubmit}
        />
      )}
    </div>
  );
};

export default CreateBlog;

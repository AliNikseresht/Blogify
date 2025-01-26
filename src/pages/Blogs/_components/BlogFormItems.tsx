
interface BlogFormProps {
  title: string;
  content: string;
  tags: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  setTags: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: React.FormEvent) => void;
}

const BlogForm: React.FC<BlogFormProps> = ({
  title,
  content,
  tags,
  setTitle,
  setContent,
  setTags,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold mb-6 c-green">Create a New Blog</h2>
      <div className="mb-4">
        <label className="block c-white text-sm font-bold mb-2">Title</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-green focus:outline-none bg-transparent c-white"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter blog title"
        />
      </div>
      <div className="mb-4">
        <label className="block c-white text-sm font-bold mb-2">Content</label>
        <textarea
          className="w-full px-3 py-2 border border-green focus:outline-none bg-transparent c-white"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your blog content here..."
          rows={5}
        />
      </div>
      <div className="mb-4">
        <label className="block c-white text-sm font-bold mb-2">Tags</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-green focus:outline-none bg-transparent c-white"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="e.g., React, JavaScript, Firebase"
        />
      </div>
      <button type="submit" className="border border-green c-green px-4 py-2">
        Preview Blog
      </button>
    </form>
  );
};

export default BlogForm;

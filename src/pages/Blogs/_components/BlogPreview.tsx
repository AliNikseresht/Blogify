interface BlogPreviewProps {
  title: string;
  content: string;
  tags: string;
  onEdit: () => void;
  onPublish: () => void;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({
  title,
  content,
  tags,
  onEdit,
  onPublish,
}) => (
  <div>
    <h2 className="text-3xl font-bold mb-6 c-green">Preview</h2>
    <h3 className="text-lg font-semibold mb-2 c-white">
      {title || "Untitled"}
    </h3>
    <p className="mb-4 c-white">{content || "No content provided."}</p>
    <div className="mb-4">
      <span className="text-sm font-bold c-green">Tags: </span>
      <span className="c-white">{tags || "No tags"}</span>
    </div>
    <div className="flex gap-4">
      <button
        onClick={onEdit}
        className="border border-yellow-500 text-yellow-500 px-4 py-2"
      >
        Edit Blog
      </button>
      <button
        onClick={onPublish}
        className="border border-green c-green px-4 py-2"
      >
        Publish Blog
      </button>
    </div>
  </div>
);

export default BlogPreview;

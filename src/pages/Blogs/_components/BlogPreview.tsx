interface BlogPreviewProps {
  title: string;
  content: string;
  tags: string[];
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
    <div className="mb-4 flex flex-col">
      <span className="text-sm font-bold c-green">Tags: </span>
      <div className="flex items-center gap-2 flex-wrap mt-2">
        {tags.length === 0 ? (
          <span>No tags</span>
        ) : (
          <>
            {tags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center border border-green c-white px-2 py-1 gap-2"
              >
                <span>{tag}</span>
              </div>
            ))}
          </>
        )}
      </div>
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

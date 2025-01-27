import React, { useState } from "react";
import { CgClose } from "react-icons/cg";

interface TagsManagerProps {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagsManager: React.FC<TagsManagerProps> = ({ tags, setTags }) => {
  const [tagInput, setTagInput] = useState<string>("");

  const handleTagInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="mb-4">
      <label className="block c-white text-sm font-bold mb-2">Tags</label>
      <input
        type="text"
        className="w-full px-3 py-2 border border-green focus:outline-none bg-transparent c-white"
        value={tagInput}
        onChange={handleTagInput}
        onKeyDown={addTag}
        placeholder="Press Enter to add a tag"
      />
      <div className="flex items-center gap-2 flex-wrap mt-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center border border-green c-white px-2 py-1 gap-2"
          >
            <span>{tag}</span>
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="text-sm c-red mt-0.5"
            >
              <CgClose />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagsManager;

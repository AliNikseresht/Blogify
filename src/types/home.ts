export type THomedata = {
  title: string;
  NoBlogText: string;
  VPNText: string;
};

export type TBlog = {
  id: string;
  title: string;
  content: string;
  author: string;
  tags: string[];
  createdAt: { seconds: number };
}
export interface Post {
  node: PostNode;
}
export interface PostNode {
    frontmatter: Frontmatter
}
export interface Frontmatter {
    title: string;
    author: string; 
    date: string; 
    description: string; 
    path: string;
    category: string[];
}
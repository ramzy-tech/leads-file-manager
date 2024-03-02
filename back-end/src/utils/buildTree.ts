import { FileType } from "../types/types";

// Function to build the tree structure recursively
export default function buildTree(data: FileType[], parentId: number = 0) {
  const tree = [];

  for (const item of data) {
    if (item.parent === parentId) {
      const children = buildTree(data, item.id);
      if (children.length) {
        item.children = children;
      }
      tree.push(item);
    }
  }

  return tree;
}

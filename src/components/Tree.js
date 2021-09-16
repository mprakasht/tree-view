import { useState } from "react";

const Tree = ({ treeData }) => {
  return (
    <ul id="myUL">
      {treeData && treeData.map((item) => <TreeNode node={item} />)}
    </ul>
  );
};

const TreeNode = ({ node }) => {
  const [childVisible, setChildVisiblity] = useState(false);
  const hasChild = node.children.length > 0 ? true : false;
  const childVisibleClass = !childVisible ? "nested" : "active";
  return (
    <li
      className={hasChild ? (!childVisible ? "caret" : "caret caret-down") : ""}
      onClick={(e) => {
        e.stopPropagation();
        setChildVisiblity(!childVisible);
      }}
      key={node.id}
    >
      {node.text}
      {hasChild && (
        <div className={childVisibleClass}>
          <Tree treeData={node.children} />
        </div>
      )}
    </li>
  );
};

export default Tree;

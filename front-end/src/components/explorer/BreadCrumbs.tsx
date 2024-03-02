import { useContext } from "react";
import { GlobalContext } from "../../contexts/store";

const BreadCrumbs = () => {
  const { currentPath, setCurrentPath, setActiveParent } =
    useContext(GlobalContext);
  const pathChangeHandler = (
    root: boolean,
    pathSegment?: { id: number; name: string },
  ) => {
    if (root) {
      setCurrentPath([]);
      setActiveParent(0);
    } else {
      const indexOfObject = currentPath.findIndex(
        (obj) => obj.id === pathSegment!.id,
      );
      setCurrentPath(currentPath.slice(0, indexOfObject + 1));
      setActiveParent(pathSegment!.id);
    }
  };

  return (
    <div className="gap4 flex text-lg font-semibold italic text-orange-600 ">
      <span
        onClick={() => pathChangeHandler(true)}
        className="cursor-pointer hover:text-orange-400"
      >
        Root
      </span>
      {currentPath.map((pathSegment) => (
        <span
          className="cursor-pointer capitalize hover:text-orange-400"
          key={pathSegment.id}
          onClick={() => pathChangeHandler(false, pathSegment)}
        >
          &nbsp;{`/ ${pathSegment.name}`}
        </span>
      ))}
    </div>
  );
};

export default BreadCrumbs;

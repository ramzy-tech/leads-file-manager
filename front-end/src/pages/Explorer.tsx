import { useContext, useEffect, useState } from "react";
import BreadCrumbs from "../components/explorer/BreadCrumbs";
import AddButtons from "../components/explorer/AddButtons";
import { GlobalContext } from "../contexts/store";
import FolderView from "../components/explorer/FolderView";

const Explorer = () => {
  const { activeParent, updateState } = useContext(GlobalContext);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchTree = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/files/${activeParent}`,
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json();
        setFiles(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTree();
  }, [activeParent, updateState]);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-semibold">Files Browser</h1>
      <div className="flex justify-between">
        <BreadCrumbs />
        <AddButtons />
      </div>
      <FolderView files={files} />
    </div>
  );
};

export default Explorer;

import { useContext, useRef, useState } from "react";
import { GlobalContext } from "../../contexts/store";
import { FileType } from "../../types/types";
import FileIcon from "../svgs/FileIcon";
import FolderIcon from "../svgs/FolderIcon";
import Modal, { ModalApiType } from "../ui/Modal";
import Table from "../ui/Table";
import { USERS_COLUMNS } from "../../constants/columns_definition";

const FileView = ({ file }: { file: FileType }) => {
  const { setActiveParent, setCurrentPath, setUpdateState, settoast } =
    useContext(GlobalContext);
  const modalRef = useRef<ModalApiType>(null);
  const [isLoadingFile, setIsLoadingFile] = useState(false);
  const [isDeletingFile, setIsDeletingFile] = useState(false);
  const [records, setrecords] = useState([]);

  const fileNavigateHandler = async () => {
    if (file.is_file === 0) {
      setActiveParent(file.id);
      setCurrentPath((oldPath) => [
        ...oldPath,
        { id: file.id, name: file.name },
      ]);
    } else {
      try {
        setIsLoadingFile(true);
        const response = await fetch(`http://localhost:8080/users/${file.id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json();

        setrecords(responseData);
        modalRef.current?.open();
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoadingFile(false);
      }
    }
  };

  const deleteFileHandler = async () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete file users!!!",
    );
    if (!confirmDelete) return;

    try {
      setIsLoadingFile(true);
      const response = await fetch(`http://localhost:8080/files/${file.id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setUpdateState((oldValue) => !oldValue);
      modalRef.current?.close();
      settoast({
        display: true,
        title: "File Has Been Deleted Successfuly...",
        message: "",
        status: "SUCCESS",
      });
    } catch (error) {
      console.log(error);
      settoast({
        display: true,
        title: "Something went wrong please try again...",
        message: "",
        status: "ERROR",
      });
    } finally {
      setIsDeletingFile(false);
    }
  };
  const closeTableView = () => {
    setrecords([]);
    modalRef.current?.close();
  };
  return (
    <>
      {(!!records.length || isLoadingFile) && (
        <Modal ref={modalRef} containerStyle="p-6 bg-white flex flex-col gap-3">
          {isLoadingFile ? (
            <h1 className="flex text-2xl italic text-lime-500">
              Loading File Content...
            </h1>
          ) : (
            <>
              <Table columns={USERS_COLUMNS} records={records} />
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="rounded-lg bg-green-600 px-6 py-2 font-semibold italic text-white"
                  onClick={closeTableView}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="rounded-lg bg-red-900 px-6 py-2 font-semibold italic text-white"
                  onClick={deleteFileHandler}
                  disabled={isDeletingFile}
                >
                  {isDeletingFile ? "Deleting...." : "Delete Users"}
                </button>
              </div>
            </>
          )}
        </Modal>
      )}
      <div
        onClick={fileNavigateHandler}
        className="group flex cursor-pointer flex-col items-center capitalize"
      >
        {file.is_file === 1 ? (
          <FileIcon className="w-[60px] text-blue-800 group-hover:text-blue-600" />
        ) : (
          <FolderIcon className="w-[60px] text-blue-800 group-hover:text-blue-600" />
        )}
        <span className="font-semibold">{file.name}</span>
      </div>
    </>
  );
};

export default FileView;

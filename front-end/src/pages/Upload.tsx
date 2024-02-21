import { useContext, useEffect, useRef, useState } from "react";
import Dropzone from "../components/upload/DropZone";
import { ColDefinitionType, RecordType } from "../types/types";
import Modal, { ModalApiType } from "../components/ui/Modal";
import Table from "../components/ui/Table";
import UploadButtons from "../components/upload/UploadButtons";
import { Link } from "react-router-dom";
import { GlobalContext } from "../contexts/store";
import { USERS_Report_COLUMNS } from "../constants/columns_definition";
import transformDataForInsert from "../utils/transformDataForInsert";

const Upload = () => {
  const [columns, setcolumns] = useState<ColDefinitionType[]>([]);
  const [records, setrecords] = useState<RecordType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isReport, setIsReport] = useState(false);

  const { currentPath, activeParent, settoast } = useContext(GlobalContext);

  const modalRef = useRef<ModalApiType>(null);

  useEffect(() => {
    if (records.length) modalRef.current?.open();
  }, [records]);

  const uploadHandler = async () => {
    setIsLoading(true);
    const rows = transformDataForInsert(records);
    try {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rows,
          fileName: records?.[0].file_name,
          parent: activeParent,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const { duplicateRows } = await response.json();

      if (duplicateRows.length) {
        setcolumns(USERS_Report_COLUMNS);
        setrecords(duplicateRows);
        setIsReport(true);
      } else {
        clearHandler();
        modalRef.current?.close();
        settoast({
          display: true,
          title: "File Has Been Uploaded Successfuly...",
          message: "",
          status: "SUCCESS",
        });
      }
    } catch (error) {
      clearHandler();
      modalRef.current?.close();
      settoast({
        display: true,
        title: "Something went wrong please try again...",
        message: "",
        status: "ERROR",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const clearHandler = () => {
    setcolumns([]);
    setrecords([]);
    setIsReport(false);
  };

  const currentPathStr = currentPath
    .map((pathSegment) => pathSegment.name)
    .join(" / ");

  return (
    <>
      {!!records.length && (
        <Modal
          ref={modalRef}
          containerStyle="p-6 bg-white flex flex-col gap-3"
          onClose={clearHandler}
        >
          {isLoading ? (
            <div className="text-2xl italic text-orange-400">Uploading...</div>
          ) : (
            <>
              {isReport && (
                <h1 className="text-2xl capitalize italic text-red-900">
                  these users have already been added to the datalist before
                </h1>
              )}
              <Table columns={columns} records={records} />
              {!isReport && (
                <UploadButtons
                  onUpload={uploadHandler}
                  onClear={clearHandler}
                />
              )}
            </>
          )}
        </Modal>
      )}
      <div className="flex grow flex-col gap-4">
        <div className="flex justify-between">
          <h1 className="text-lg font-semibold">
            Upload Files To{" "}
            <span className="italic text-orange-600">
              Root / {currentPathStr}
            </span>
          </h1>
          <Link
            to=".."
            className="font-semibold italic text-orange-700 hover:text-orange-400"
          >
            Go Back
          </Link>
        </div>
        <Dropzone setcolumns={setcolumns} setrecords={setrecords} />
      </div>
    </>
  );
};

export default Upload;

import Papa from "papaparse";
import { ColDefinitionType, RecordType } from "../../types/types";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import uploadImg from "../../assets/cloud-upload.jpg";

type Props = {
  setcolumns: React.Dispatch<React.SetStateAction<ColDefinitionType[]>>;
  setrecords: React.Dispatch<React.SetStateAction<RecordType[]>>;
};

const Dropzone = ({ setcolumns, setrecords }: Props) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const filesArray = Array.from(acceptedFiles);
      filesArray.forEach((file, index) => {
        Papa.parse<RecordType>(file, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            if (index === 0) {
              const columnsArray = Object.keys(result.data[0]).map(
                (columnName) => ({
                  Header: columnName,
                  accessor: columnName,
                }),
              );
              setcolumns(columnsArray);
            }

            const records = result.data.map((record) => ({
              ...record,
              file_name: file.name,
            }));
            setrecords((oldRecords) => [...oldRecords, ...records]);
          },
        });
      });
    },
    [setcolumns, setrecords],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <div className="flex grow flex-col gap-4">
      <div
        {...getRootProps({
          className:
            "border p-2 border-2 border-dashed border-blue-500 rounded-md grow flex justify-center items-center",
        })}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <div className="gap3 flex flex-col items-center">
            <img src={uploadImg} alt="upload" className="w-[200px]" />
            <p>Drag drop some files here, or click to select files</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropzone;

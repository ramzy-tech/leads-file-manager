import { FileType } from "../../types/types";
import FileView from "./FileView";

const FolderView = ({ files }: { files: FileType[] }) => {
  const foldersArr = files.filter((file) => file.is_file === 0);
  const filesArr = files.filter((file) => file.is_file === 1);

  return (
    <div className="flex flex-col items-start gap-4">
      {!!foldersArr.length && (
        <div>
          <span className="text-lg font-semibold italic">Folders</span>
          <div className="flex gap-4">
            {foldersArr.map((file) => (
              <FileView key={file.id} file={file} />
            ))}
          </div>
        </div>
      )}
      {!!filesArr.length && (
        <div>
          <span className="text-lg font-semibold italic">Files</span>
          <div className="flex gap-4">
            {filesArr.map((file) => (
              <FileView key={file.id} file={file} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FolderView;

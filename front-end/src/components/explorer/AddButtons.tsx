import AddFileButton from "./AddFileButton";
import AddFolderButton from "./AddFolderButton";
const AddButtons = () => {
  return (
    <div className="flex gap-4">
      <AddFileButton />
      <AddFolderButton />
    </div>
  );
};

export default AddButtons;

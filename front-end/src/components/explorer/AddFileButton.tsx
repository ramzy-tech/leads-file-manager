import { Link } from "react-router-dom";
import addFileIcon from "../../assets/add-file.svg";

const AddFileButton = () => {
  return (
    <Link to="/upload">
      <img
        src={addFileIcon}
        alt="add file"
        className="max-w-[30px] outline-none"
      />
    </Link>
  );
};

export default AddFileButton;

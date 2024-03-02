import { FormEvent, useContext, useRef } from "react";
import addFolderIcon from "../../assets/add-folder.svg";
import Modal, { ModalApiType } from "../ui/Modal";
import { GlobalContext } from "../../contexts/store";

const AddFolderButton = () => {
  const modalRef = useRef<ModalApiType>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { activeParent, setUpdateState, currentPath } =
    useContext(GlobalContext);

  const addFolderHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await fetch("http://localhost:8080/files", {
      method: "POST",
      body: JSON.stringify({
        name: inputRef.current?.value,
        is_file: false,
        parent_id: activeParent,
        uploadPath: currentPath
          .map((pathSegment) => pathSegment.name)
          .join("/"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setUpdateState((oldValue) => !oldValue);
    inputRef.current!.value = "";
    modalRef.current?.close();
  };

  return (
    <>
      <Modal ref={modalRef}>
        <form
          onSubmit={addFolderHandler}
          className="flex w-[500px] flex-col gap-6 rounded-lg p-6"
        >
          <input
            ref={inputRef}
            type="text"
            title="folder name"
            className="gap-6 rounded-lg border border-black p-2 outline-none"
            required={true}
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="rounded-lg bg-red-500 p-2 text-white"
              onClick={() => modalRef.current?.close()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-orange-400 p-2 text-white"
            >
              Okay
            </button>
          </div>
        </form>
      </Modal>
      <button type="button" onClick={() => modalRef.current?.open()}>
        <img
          src={addFolderIcon}
          alt="add folder"
          className="w-[30px] outline-none"
        />
      </button>
    </>
  );
};

export default AddFolderButton;

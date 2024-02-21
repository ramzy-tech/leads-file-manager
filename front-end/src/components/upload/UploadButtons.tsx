type Props = { onClear: () => void; onUpload: () => void };

const UploadButtons = ({ onClear, onUpload }: Props) => {
  return (
    <div className="ml-auto flex justify-end gap-3">
      <button
        type="button"
        className="rounded-lg bg-red-700 px-6 py-2 font-semibold text-white"
        onClick={onClear}
      >
        Cancel
      </button>
      <button
        type="button"
        className="rounded-lg bg-sky-400 px-6 py-2 font-semibold text-white"
        onClick={onUpload}
      >
        Upload
      </button>
    </div>
  );
};

export default UploadButtons;

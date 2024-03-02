import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError() as { data: string };
  const navigate = useNavigate();

  return (
    <div className="mx-auto mt-10 h-full max-w-lg rounded-lg border p-6 shadow-md">
      <h1 className="mb-4 text-2xl font-bold capitalize">
        Something went wrong!!!
      </h1>

      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      <div className="mt-4 border border-red-400 bg-red-100 p-4 text-red-700">
        <strong>Error:</strong> {error?.data}
      </div>
    </div>
  );
};

export default Error;

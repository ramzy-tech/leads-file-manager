import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-purple-200 via-purple-300 to-purple-500">
      <div className="flex h-[500px] w-[60%] flex-col gap-6 rounded-lg bg-white p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;

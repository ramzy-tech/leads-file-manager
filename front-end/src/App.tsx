import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import Toast from "./components/ui/Toast";

function App() {
  return (
    <>
      <Toast />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;

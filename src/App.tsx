import { useRoutes } from "react-router-dom";
import routes from "./routes.tsx";
import { ToastContainer } from "react-toastify";

function App() {
  const route = useRoutes(routes);

  return (
    <>
      {route}
      <ToastContainer />
    </>
  );
}

export default App;

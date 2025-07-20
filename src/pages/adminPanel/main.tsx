import { Outlet } from "react-router-dom";

const IndexPanel = () => {
  return (
    <>
      <main
        className="container mx-auto px-6 py-8 flex-grow flex justify-center"
        dir="rtl"
      >
        <Outlet />
      </main>
    </>
  );
};

export default IndexPanel;

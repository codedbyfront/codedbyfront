import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <Link to="/admin-panel">
        <footer className="bg-gray-800 text-gray-400 text-center py-4 w-screen fixed bottom-0 ">
          © ۲۰۲۵ SHO
        </footer>
      </Link>
    </>
  );
};

export default Footer;

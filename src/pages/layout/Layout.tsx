import { ReactNode } from "react";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children}: LayoutProps) {
  const location = useLocation();
  let headerClassName = "bg-black";

  switch (location.pathname) {
    case "/":
      headerClassName = "bg-opacity-50 bg-[#00000080]";
      break;
  }
  return (
    <div>
      <Header className={`w-full ${headerClassName}`}/>
      <main>{children}</main>
    </div>
  );
}

export default Layout;

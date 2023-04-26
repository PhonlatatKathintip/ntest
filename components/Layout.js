// components/Layout.js

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="bg-white">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;

import { type ReactElement } from "react";
import { Navbar, Sidebar, Footer, ScrollToTop } from "./components";
import AppRoutes from "Routes";

function App() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}

export default App;

const Layout: React.FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </>
  );
};

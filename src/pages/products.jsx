import Navbar from "../components/newNavbar";
import Footer from "../components/newFooter";
import ProductsSideBar from "../components/productSideBar";

export default function Products() {
  return (
    <>
      <Navbar />
      <div className="pic"></div>
      <ProductsSideBar />
      <Footer />
    </>
  );
}

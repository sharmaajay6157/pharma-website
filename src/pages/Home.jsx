import Footer from "../components/newFooter";
// import Footer from "../components/Footer";
// import Navbar from "../components/navbar";
import HomeLayout from "../components/homelayout";
import NewNavbar from "../components/newNavbar";

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <NewNavbar />
      <HomeLayout />
      {/* <SecCardRow /> */}
      <Footer />
    </>
  );
}

export default Home;

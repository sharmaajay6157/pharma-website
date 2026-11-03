import Navbar from "../components/newNavbar";
import CareerMainImg from "../assets/CareerMainPic.png";
import Footer from "../components/newFooter";
import CareerFirstCard from "../components/careerFirstCard";
import WhyJoinForwell from "../components/careerWhyJoinForwell";
import CareerSecCard from "../components/careerSecCard";

export default function Career() {
  return (
    <>
      <Navbar />
      <img src={CareerMainImg} alt="Career Banner" className="img-fluid " />
      <CareerFirstCard />
      <WhyJoinForwell />
      <CareerSecCard />
      <Footer />
    </>
  );
}

import Navbar from "../components/newNavbar";
import TheraHeroImg from "../assets/thereHeroImg.png";
import Footer from "../components/newFooter";
import TherapeuticIntro from "../components/therapeuticIntro";
import TherapeuticAreasCards from "../components/therapeuticAreasCards";
import TherapeuticPortfolio from "../components/therapeuticPortfolio";

export default function therapeuticAreas() {
  return (
    <>
      <Navbar />
      <img src={TheraHeroImg} alt="Career Banner" className="img-fluid w-100" />
      <TherapeuticIntro />
      <TherapeuticAreasCards />
      <TherapeuticPortfolio />
      <Footer />
    </>
  );
}

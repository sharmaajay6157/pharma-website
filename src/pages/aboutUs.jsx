import Navbar from "../components/newNavbar";
import AboutUsMainImg from "../components/aboutUsMainImg";
import Footer from "../components/newFooter";
import WhoWeAreCard from "../components/AboutUSwhoWeAreCard";
import AboutUsRedBanner from "../components/aboutUsRedBanner";
import AboutUsQualityCard from "../components/aboutUsQualityCard";
import AboutUsContactSec from "../components/aboutUsContactSec";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <AboutUsMainImg />
      <WhoWeAreCard />
      <AboutUsRedBanner />
      <AboutUsQualityCard />
      <AboutUsContactSec />
      <Footer />
    </>
  );
}

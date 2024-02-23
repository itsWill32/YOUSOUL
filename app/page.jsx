import Slider from "@/components/sliderInf";
import Navbar from "@/components/navbar";
import Cards from "@/components/cards";
import SectionSearch from "@/components/section-search";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <body className="container-main">
        
        <Navbar/>
        <SectionSearch/>
        <Slider />
        <Cards />
        <Footer/>

      </body>
    </>
  );
}

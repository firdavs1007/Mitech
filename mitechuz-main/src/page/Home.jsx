import Main from "../component/HomePage/Main";
import WhyUs from "../component/HomePage/WhyUs";
import ServiceCart from "../component/HomePage/serviceCart";
import HireCard from "../component/HomePage/HireCard";
import Projects from "../component/HomePage/Projects";
import VideoPage from "../component/HomePage/VideoPage";
import BlockAndNews from "../component/HomePage/BlockAndNews";
import ContactUs from "../component/HomePage/ContactUs";

function Home(props) {
  return (
    <div>
      <Main />
      <ServiceCart />
      <WhyUs />
      <HireCard />
      <VideoPage />
      <Projects />
      <BlockAndNews />
      <ContactUs />
    </div>
  );
}

export default Home;

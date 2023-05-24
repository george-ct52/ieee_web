import Navbar from "./components/Navbar";
import "./styles.css";
import Particle from "./components/Particles";
import AboutUs from "./components/AboutUs";
import CardGroup from "./components/CardGroup";
import Carousel from "./components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "./components/Footer";

export default function App() {
  const cards = [
    {
      image:
        "https://backend.cecieee.org/storage/events/January2022/BX0BEm6PrwujfFyAU4e4.jpeg",
      title: "Computing Edge",
      description: "Date : 20-06-2023 "
    },
    {
      image:
        "https://backend.cecieee.org/storage/events/January2022/Wq5EbM7dhu00aorLbmg4.jpeg",
      title: "Spectra",
      description: "Date : 23-06-2023."
    },
    {
      image:
        "https://backend.cecieee.org/storage/events/January2022/hK88Z6a04dvKHLm42Pjp.jpeg",
      title: "Argent 2021",
      description: "Date : 20-08-2021"
    }
  ];
  return (
    <div className="App">
      <Navbar />
      <Particle className="particle" />
      <div className="text-overlay">
        <p className="titlebig">IEEE</p>

        <p className="titlesmall">SB CEC</p>
      </div>
      <div id="about">
        <AboutUs
          companyName="IEEE SB CEC"
          description="IEEE Student Branch College of Engineering Chengannur was formed in mid-1997, with the goal of keeping the students in touch with advancing technology. 
        It is equipped with an IEEE library that was inaugurated in December 1999 and currently functions as the headquarters of IEEE SB CEC. 
        The Student Branch comes under the Kochi Hub of IEEE Kerala Section and is one of the most active Student Branches in the country.
         IEEE SB CEC has made numerous contributions to its student community that has received widespread recognition across the globe and is the first Student Branch in the Asia-Pacific Region to establish a Women in Engineering Affinity Group."
          yearFounded={1997}
        />
      </div>
      <div className="event-heading">Events</div>{" "}
      {/* Use a div for the section heading */}
      <div id="card">
        <br></br>
        <CardGroup cards={cards} />{" "}
      </div>
      <div className="carousel-heading">Gallery</div>
      <div id="carousel">
        <Carousel />
      </div>
      <Footer />
    </div>
  );
}

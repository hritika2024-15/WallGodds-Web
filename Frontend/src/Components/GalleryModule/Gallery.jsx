import Abstract from "./categorieItems/Abstract.svg";
import Nature from "./categorieItems/Nature.svg";
import Anime from "./categorieItems/Anime.svg";
import Art from "./categorieItems/Art.svg";
import Movies from "./categorieItems/Movies.svg";
import Vehicles from "./categorieItems/Vehicles.svg";
import Sports from "./categorieItems/Sports.svg";
import Games from "./categorieItems/Games.svg";
import Travel from "./categorieItems/Travel.svg";
import Spiritual from "./categorieItems/Spiritual.svg";
import Music from "./categorieItems/Music.svg";
import AIGen from "./categorieItems/AIGen.svg";
import sampleBox from "./categorieItems/sample_box.svg"

import Styles from "./Gallery.module.css";
import NavBar from "../CommonModule/NavBarModule/NavBar";
import Footer from "../CommonModule/FooterModule/Footer";
import { useRef, useState } from "react";

// scroll Component

const categories = [
  { title: "Abstract", image: Abstract },
  { title: "Nature", image: Nature },
  { title: "Anime", image: Anime },
  { title: "Art", image: Art },
  { title: "Movies", image: Movies },
  { title: "Vehicles", image: Vehicles },
  { title: "Sports", image: Sports },
  { title: "Gaming", image: Games },
  { title: "Travels", image: Travel },
  { title: "Spiritual", image: Spiritual },
  { title: "Music", image: Music },
  { title: "AI Gen", image: AIGen },
];

const Gallery = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    sliderRef.current.classList.add(Styles.grabbing);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    sliderRef.current.classList.remove(Styles.grabbing);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    sliderRef.current.classList.remove(Styles.grabbing);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };
  return (
    <>
      <div className={Styles.navbarWrapper}>
        <NavBar />
      </div>
      <div className={Styles.container}>
        <div className={Styles.temp}>
          <div>
            <img src={sampleBox} alt="sampleBox" />
          </div>
          <div
            ref={sliderRef}
            className={Styles.scrollItems}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            {categories.map((cat, index) => (
              <div
                key={index}
                className={Styles.categoryCard}
                style={{ backgroundImage: `url(${cat.image})` }}
              >
                <span className={Styles.categoryTitle}>{cat.title}</span>
              </div>
            ))}
          </div>
          {/* {" "}
            <p className={Styles.first}>
              <span className={Styles.desktopText}>
                This section is being designed and will be available for
                contributors soon
              </span>
              <span className={Styles.mobileText}>
                This site is currently not responsive on mobile devices
              </span>
            </p>
            <p className={Styles.second}>
              <span className={Styles.desktopText}>
                Keep an eye on{" "}
                <a
                  href="https://github.com/WallGodds/WallGodds-Web/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>{" "}
                and{" "}
                <a
                  href="https://discord.gg/kTQ5KWANp8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>{" "}
                for updates and announcements
              </span>
              <span className={Styles.mobileText}>
                Contributors can expect mobile responsiveness issues to be
                available by the second week of February
              </span>
            </p>{" "} */}
        </div>
        <div className={Styles.footerWrapper}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Gallery;

// reference of old code:
{
  /* <Routes>
    <Route path="mobile" element={<Mobile />} />
    <Route path="tablet" element={<Tablet />} />
    <Route path="desktop" element={<Desktop />} />
    </Routes>; */
}

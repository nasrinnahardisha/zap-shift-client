import React from "react";
import Marquee from "react-fast-marquee";
import logo1 from "../../assets/brands/amazon.png";
import logo2 from "../../assets/brands/amazon_vector.png";
import logo3 from "../../assets/brands/casio.png";
import logo4 from "../../assets/brands/moonstar.png";
import logo5 from "../../assets/brands/randstad.png";

const LogoMarquee = () => {
  return (
    <div className="my-4" style={{ background: "#f8f8f8", padding: "20px 0" }}>
      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover={true}
      >
        <img src={logo1} alt="logo1" style={{ height: "24px", margin: "0 40px" }} />
        <img src={logo2} alt="logo2" style={{ height: "24px", margin: "0 40px" }} />
        <img src={logo3} alt="logo3" style={{ height: "24px", margin: "0 40px" }} />
        <img src={logo4} alt="logo4" style={{ height: "24px", margin: "0 40px" }} />
        <img src={logo5} alt="logo5" style={{ height: "24px", margin: "0 40px" }} />
      </Marquee>
    </div>
  );
};

export default LogoMarquee;
   
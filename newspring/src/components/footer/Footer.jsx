import { useRef, useEffect } from "react";
import "./footer.css";
import logo from "../../assets/rccglogo.png";
import { Link } from "react-router";
const Footer = () => {
  const observer = useRef(null);
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.current.unobserve(entry.target);
          }
          else{
            entry.target.classList.remove("active")
          }
        });
      },
      { threshold: 0.3 }
    );
    const elements = document.querySelectorAll('.futup')
    elements.forEach((em)=>observer.current.observe(em))
    return () => {
      if(observer.current){
        elements.forEach((em)=>observer.current.unobserve(em))
      };
    };
  }, []);

  return (
    <div className="footer ">
      <div className="subscribe container_flex_between">
        <h2>Stay in Touch</h2>
        <form action="">
          <input type="text" placeholder="Enter Your Email" />
          <button className="btn" type="submit">
            <p>Free Update</p>
          </button>
        </form>
        <div className="socials">
          <Link target="_blank" to="https://www.facebook.com/RCCGNewSprings">
            <i className="fa-brands fa-facebook-f"></i>
          </Link>
          <Link target="_blank" to="https://www.instagram.com/rccgnewsprings/">
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link target="_blank" to="https://www.youtube.com/@RCCGNewSprings">
            <i className="fa-brands fa-youtube"></i>
          </Link>
        </div>
      </div>
      <div className="main_footer container_flex_between">
        <div className="main futup">
          <div className="logo">
            <img src={logo} alt="" />
            <h2>Newspring TIm412</h2>
          </div>
          <p>
            At Newspring Tim412, we are dedicated to guiding youth towards a
            deeper relationship with Jesus Christ. Our mission is to inspire and
            equip the next generation to live out their faith boldly, fostering
            a community rooted in love, service, and spiritual growth.
          </p>
        </div>
        <ul className="explore futup">
          <h2>Explore Link</h2>
          <li>
            <Link to="">
              <span></span>
              <i className="fa-solid fa-blog"></i>Blog
            </Link>
          </li>
          <li>
            <Link to="/about">
              <span></span>
              <i className="fa-solid fa-address-card"></i>About Us
            </Link>
          </li>
          <li>
            <Link to="/services">
              <span></span>
              <i className="fa-brands fa-servicestack"></i>Services
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <span></span>
              <i className="fa-solid fa-id-badge"></i>Contact Us
            </Link>
          </li>
        </ul>
        <div className="footer_details futup">
          <p>
            <small>
              <i className="fa-solid fa-phone"></i>
            </small>{" "}
            09014886877
          </p>
          <a target="_blank" href="https://wa.me/09014886853">
            <p>
              <small>
                <i className="fa-brands fa-whatsapp"></i>
              </small>{" "}
              +123 912 234 4565
            </p>
          </a>
          <a href="mailto:sundayudoh383@gmail.com">
            <p>
              <small>
                <i className="fa-solid fa-envelope"></i>
              </small>{" "}
              Tim412@gmail.com
            </p>
          </a>
          <Link
            target="_blank"
            to={
              "https://www.google.com/maps/search/RCCG+NewSprings,+The+Capital+Building,+332+Ikorodu+Road,+Idiroko+Bus+Stop,+Maryland,+Lagos/@6.5643569,3.3673699,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
            }
          >
            <p>
              <small>
                <i className="fa-solid fa-location-dot"></i> Address:
              </small>{" "}
              The Capital Building, 332 Ikorodu Road, Lagos, Nigeria 100211
            </p>
          </Link>
        </div>
      </div>
      <div className="copyright">
        @2024 All Rights Copyright <span>Tim 412</span>. Design & Developed
        By DavidFoster.
      </div>
    </div>
  );
};

export default Footer;

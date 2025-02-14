import { useRef, useEffect, useState } from "react";
import "./Upcommingevent.css";
import { Link } from "react-router";
import event from "../../assets/rccg18.jpg";

const Upcommingevent = () => {
  const observer = useRef(null);
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.current.unobserve(entry.target);
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.3 }
    );
    const element = document.querySelector(".upcommingevent_container");
    observer.current.observe(element);
    return () => {
      if (observer.current) {
        observer.current.unobserve(element);
      }
    };
  }, []);

  const targetDate = new Date("October 9, 2025 00:00:00 GMT+0000");
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      let timeDifference = targetDate - currentDate;
      if (timeDifference <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }
      let days = Math.floor(timeDifference / (1000*60*60*24))
      let hours = Math.floor((timeDifference % (1000*60*60*24)) / (1000*60*60))
      let minutes = Math.floor((timeDifference % (1000*60*60))/ (1000*60))
      let seconds = Math.floor((timeDifference % (1000*60))/1000)
      setTime({days, hours, minutes, seconds})
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="upcommingevent">
      <h2 className="title">Our Upcoming Events</h2>
      <p className="title_small">
        Join us in celebrating our church anniversary as we reflect on God’s
        faithfulness and build lasting memories together.
      </p>
      <div className="upcommingevent_container">
        <div className="upcomming_image">
          <img src={event} alt="" />
        </div>
        <div className="upcomming_details">
          <h3>Celebrating Our Church Anniversary</h3>
          <p>
            <i className="fa-solid fa-calendar-days"></i>Oct 2, 2025 @ 07:00 -
            15:00
          </p>
          <p>
            <i className="fa-solid fa-location-dot"></i>332, Capital Building,
            Idiroko Bus Stop, Lagos
          </p>
          <div className="countdown">
            <div className="div"><p>Day</p><span>{String(time.days).padStart(2, "0")}</span></div>
            <div className="div"><p>Hours</p><span>{String(time.hours).padStart(2, "0")}</span></div>
            <div className="div"><p>Minutes</p><span>{String(time.minutes).padStart(2, "0")}</span></div>
            <div className="div"><p>Seconds</p><span>{String(time.seconds).padStart(2, "0")}</span></div>
          </div>
          <Link to="/contact" className="btn">
            <p>Contact Us</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Upcommingevent;

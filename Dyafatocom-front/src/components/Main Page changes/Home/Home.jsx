import React from "react";

import logo from "../../../assets/Assets/Images/logo.png";;
import "./Home.css";
import about from "../../../assets/Assets/Images/4.jpg";;
import gallery1 from "../../../assets/Assets/Images/1.jpg";
import gallery2 from "../../../assets/Assets/Images/2.jpg";
import gallery3 from "../../../assets/Assets/Images/3.jpg";
import gallery4 from "../../../assets/Assets/Images/4.jpg";
import gallery5 from "../../../assets/Assets/Images/5.jpg";
import gallery6 from "../../../assets/Assets/Images/6.jpg";
import gallery7 from "../../../assets/Assets/Images/7.jpg";
import gallery8 from "../../../assets/Assets/Images/8.jpg";
// import NavBar from "../NavBar";
export default function Home() {
  return (
    <div>
      {/* <NavBar /> */}

      <div className="container-fluid bg-primary py-5 mb-0 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Experience Authentic Morocco with Locals!
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                Make Memories, Live Local in Morocco!
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  style={{
                    backgroundColor: "#007bff",
                    color: "#fff",
                    padding: "10px 20px",
                    fontSize: "1.2em",
                    marginRight: "10px",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "20px",
                  }}
                >
                  Tourist
                </button>
                <button
                  style={{
                    backgroundColor: "#28a745",
                    color: "#fff",
                    padding: "10px 20px",
                    fontSize: "1.2em",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "20px",
                  }}
                >
                  Local
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="titlepage">
                <h2>About us</h2>
                <p>
                  Our platform is designed to connect travelers with authentic
                  experiences across Morocco. Stay with locals, explore hidden
                  gems, and immerse yourself in the rich culture of Morocco.
                  Whether you're seeking a traditional riad in Marrakech or a
                  cozy home in the Atlas Mountains, MarocLocal offers a wide
                  range of accommodations and experiences tailored to your
                  preferences. Join us and embark on a journey to uncover the
                  true essence of Morocco!{" "}
                </p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="about_img" style={{ maxHeight: "80%" }}>
                <figure>
                  <img src={about} alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Gallery</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img">
                <figure>
                  <img
                    style={{
                      width: "400px",
                      height: "200px",
                      objectFit: "contain",
                    }}
                    src={gallery1}
                    alt="#"
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img">
                <figure>
                  <img
                    style={{
                      width: "400px",
                      height: "200px",
                      objectFit: "contain",
                    }}
                    src={gallery2}
                    alt="#"
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img">
                <figure>
                  <img
                    style={{
                      width: "400px",
                      height: "200px",
                      objectFit: "contain",
                    }}
                    src={gallery3}
                    alt="#"
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img">
                <figure>
                  <img
                    style={{
                      width: "400px",
                      height: "200px",
                      objectFit: "contain",
                    }}
                    src={gallery4}
                    alt="#"
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img">
                <figure>
                  <img
                    style={{
                      width: "400px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                    src={gallery5}
                    alt="#"
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img">
                <figure>
                  <img
                    style={{
                      width: "400px",
                      height: "200px",
                      objectFit: "contain",
                    }}
                    src={gallery6}
                    alt="#"
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img">
                <figure>
                  <img
                    style={{
                      width: "400px",
                      height: "200px",
                      objectFit: "contain",
                    }}
                    src={gallery7}
                    alt="#"
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="gallery_img">
                <figure>
                  <img
                    style={{
                      width: "400px",
                      height: "200px",
                      objectFit: "contain",
                    }}
                    src={gallery8}
                    alt="#"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form id="request" className="main_form">
                <div className="row">
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Name"
                      type="text"
                      name="Name"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Email"
                      type="text"
                      name="Email"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Phone Number"
                      type="text"
                      name="Phone Number"
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="textarea"
                      placeholder="Message"
                      type="text"
                      name="Message"
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <button className="send_btn">Send</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="map_main">
                <div className="map-responsive">
                  <img
                    src={logo}
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{ border: "0", marginLeft: "200px", width: "80%" }}
                    allowFullScreen=""
                    alt="Map"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>Contact Us</h3>
              <ul className="conta">
                <li>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Address
                </li>
                <li>
                  <i className="fa fa-mobile" aria-hidden="true"></i>{" "}
                  06666666666
                </li>
                <li>
                  {" "}
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <a href="#"> DyafaToCom@gmail.com</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Menu </h3>
              <ul className="link_menu">
                <li className="active">
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="about.html"> About Us</a>
                </li>

                <li>
                  <a href="gallery.html">Gallery</a>
                </li>

                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Social Media</h3>
              <form className="bottom_form">
                <input
                  className="enter"
                  placeholder="Enter your email"
                  type="text"
                  name="Enter your email"
                />
                <button className="sub_btn">subscribe</button>
              </form>
              <ul className="social_icon">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <Welcom />
        <About />
        <Gallery />
        <Slider1 />
        <Contact />
        <Footer /> */}
    </div>
  );
}

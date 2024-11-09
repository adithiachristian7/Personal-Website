import "./App.css";
import Header from "./components/header/index.js";

function App() {
  return (
    <div>
      <Header />
      <section className="hero" id="home">
        <div className="main-content" data-aos="none">
          <h4>Hello,</h4>
          <h1>
            I'm <span>Adithia Christian</span>
          </h1>
          <p>I'm a Student at Klabat University and a Junior UIUX Designer</p>
          <div className="social">
            <a href="#">
              <i className="ri-facebook-fill" />
            </a>
            <a href="#">
              <i className="ri-instagram-fill" />
            </a>
            <a href="#">
              <i className="ri-twitter-fill" />
            </a>
          </div>
          <div className="main-btn">
            <a href="#" className="btn btn2">
              Download CV
            </a>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="about-img" data-aos="zoom-in-down">
          <img src="assets/img/adit3.jpg" />
        </div>
        <div className="about-text" data-aos="zoom-in-up">
          <h2>
            I am Product <span>Designer</span>
            <br />
            &amp; Web Developer
          </h2>
          <div className="exp-area">
            <p className="exp">
              Hello! I am a student at Universitas Klabat majoring in
              Information Systems and a junior UI/UX designer. I believe that
              good design can make technology more accessible and
              meaningful&nbsp;for&nbsp;everyone.
            </p>
          </div>
          <a href="#" className="btn">
            View All Projects
          </a>
        </div>
      </section>
      <section className="services" id="services">
        <div className="center-text" data-aos="fade-down">
          <h2>
            My <span>Services</span>
          </h2>
        </div>
        <div className="services-content" data-aos="zoom-in-up">
          <div className="box">
            <img src="./img/s-1.svg" alt="" />
            <h3>UI/UX Design</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
              ipsam quam est ad placeat? Minus!
            </p>
            <a href="#">
              Download Now
              <i className="ri-arrow-right-line" />
            </a>
          </div>
          <div className="box">
            <img src="./img/s-2.svg" alt="" />
            <h3>UI/UX Design</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
              ipsam quam est ad placeat? Minus!
            </p>
            <a href="#">
              Download Now
              <i className="ri-arrow-right-line" />
            </a>
          </div>
          <div className="box">
            <img src="./img/s-3.svg" alt="" />
            <h3>UI/UX Design</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
              ipsam quam est ad placeat? Minus!
            </p>
            <a href="#">
              Download Now
              <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>
      </section>
      <section className="portfolio" id="portfolio">
        <div className="center-text" data-aos="fade-down">
          <h2>
            My <span>Project</span>
          </h2>
        </div>
        <div className="Portfolio-content" data-aos="zoom-in-up">
          <div className="row">
            <img src="./img/port-1.jpg" alt />
            <div className="main-row">
              <div className="row-text">
                <h5>Website Design</h5>
              </div>
              <div className="row-icon">
                <i className="ri-github-fill" />
              </div>
            </div>
            <h4>Website Development For Car Rent</h4>
          </div>
          <div className="row">
            <img src="./img/port-2.jpg" alt />
            <div className="main-row">
              <div className="row-text">
                <h5>Website Design</h5>
              </div>
              <div className="row-icon">
                <i className="ri-github-fill" />
              </div>
            </div>
            <h4>Website Development For Dark X</h4>
          </div>
          <div className="row">
            <img src="./img/port-3.jpg" alt />
            <div className="main-row">
              <div className="row-text">
                <h5>Website Design</h5>
              </div>
              <div className="row-icon">
                <i className="ri-github-fill" />
              </div>
            </div>
            <h4>Website Development For Dark X</h4>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="center-text" data-aos="fade-down">
          <h2>
            Contact<span>me</span>
          </h2>
        </div>
        <div className="contact-form" data-aos="zoom-in">
          <form action>
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Email Address..." required />
            <textarea
              name
              id
              cols={30}
              rows={10}
              placeholder="Write Message Here."
              required
              defaultValue={""}
            />
            <input
              type="submit"
              defaultValue="Send Message"
              className="send-btn"
            />
          </form>
        </div>
      </section>
      <div className="footer">
        <div className="copyright">
          <p>2024 Adithia Christian, All Right Reserved.</p>
        </div>
        <a href="#home" className="scroll-top">
          <i className="ri-arrow-up-s-fill" />
        </a>
      </div>
    </div>
  );
}

export default App;

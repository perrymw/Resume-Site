import React from "react";
import profile from "./pictures/Resume_photo.jpeg";
import firstSlide from "./pictures/git-background.jpeg";
import Contact from "./pictures/download.jpg";
import "./App.css";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Image src={profile} roundedCircle className="App-logo" alt="logo" />
        <h1>Matthew Perry</h1>
        <b>*not the actor</b>
        <h3>Software Developer.</h3>
        <h3>Mathematician.</h3>
        <h3>Astute.</h3>
        <h3>Learner.</h3>
        <h3>Lover of Acronyms.</h3>
      </header>
      <div className="column-2">
        <h2>Information</h2>
        <Carousel>
          <Carousel.Item>
            <Image
              src={firstSlide}
              alt="First slide"
              height="625px"
              width="1000px"
            />
            <Carousel.Caption>
              <h3>Check out all of my projects!</h3>{" "}
              <a
                href="https://github.com/perrymw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button> Github </Button>
              </a>
              <a
                href="https://gitlab.com/mwperry"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button> Gitlab </Button>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={Contact} width="1000px" />
            <Carousel.Caption>
              <div className="SecondSlide">
                <div className="secondSlideBorder">
                  <h3>Feel Free to Contact Me!</h3>
                  <strong>perry357@outlook.com </strong>
                  <a
                    href="https://www.linkedin.com/in/matthewperry357/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button> LinkedIn </Button>
                  </a>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
      </div>
    </div>
  );
};

export default App;

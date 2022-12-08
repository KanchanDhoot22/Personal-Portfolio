import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Spotify Clone",
      description: "A music player website created using HTML,CSS and JS",
      imgUrl: projImg1,
      demoLink : "https://kanchandhoot22.github.io/Spotify-Clone.github.io/",
      SourceCodeLink : "https://github.com/KanchanDhoot22/Spotify-Clone.github.io"
    },
    {
      title: "Movie Streaming Website",
      description: "Movie website created using ReactJS",
      imgUrl: projImg2,
      demoLink : "https://lively-gecko-80a6d0.netlify.app/",
      SourceCodeLink : "https://github.com/KanchanDhoot22/Movie-Streaming-Website.github.io"
    },
    {
      title: "Calculator",
      description: "Calculator created using JavaScript",
      imgUrl: projImg3,
      demoLink : "https://kanchandhoot22.github.io/Basic-Calculator.github.io/",
      SourceCodeLink : "https://github.com/KanchanDhoot22/Basic-Calculator.github.io"
    },
    {
      title: "Food Delivery Website",
      description: "Created using HTML , CSS and JS",
      imgUrl: projImg4,
      demoLink : "https://kanchandhoot22.github.io/Food-Delivery-Website.github.io/",
      SourceCodeLink : "https://github.com/KanchanDhoot22/Food-Delivery-Website.github.io"
    },
    {
      title: "Gym Website",
      description: "Created using HTML , CSS and JS",
      imgUrl: projImg5,
      demoLink : "https://kanchandhoot22.github.io/GymWebsite.github.io/",
      SourceCodeLink : "https://github.com/KanchanDhoot22/GymWebsite.github.io"
    }
    
    
      
     
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are my previously built projects with the github repo and website link.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
import Aos from "aos";
import { useEffect } from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import { ProjectCard } from "../ProjectCard";
import "./index.scss";
import projects from "./projects";

export const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="projects">
      <Container id="projects">
        <Row
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <Col>
            <h2>Projetos</h2>
            <p>
              Aqui estão alguns projetos que desenvolvi:
            </p>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row className="projects-container">
                    {projects.map((el, idx) => (
                      <ProjectCard {...el} pos={idx} key={idx} />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>

      <img src={colorSharp2} className="background-image-right" />
    </section>
  );
};

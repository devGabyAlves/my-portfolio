import Aos from "aos";
import { useEffect } from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import { ArticleCard } from "../ArticlesCard";
import "./index.scss";
import articles from "./articles";

export const Articles = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="articles">
      <Container id="articles">
        <Row
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <Col>
            <h2>Artigos</h2>
            <p>Aqui estão alguns artigos que escrevi:</p>

            <Tab.Container id="articles-tabs" defaultActiveKey="first">
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row className="articles-container">
                    {articles.map((el, idx) => (
                      <ArticleCard {...el} pos={idx} key={idx} />
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

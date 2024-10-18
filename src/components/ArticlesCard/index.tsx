import Aos from "aos";
import { useEffect } from "react";
import { Col } from "react-bootstrap";
import "./index.scss";

interface IArticleCard {
  title: string;
  link: string;
  pos: number;
}

export const ArticleCard = ({ title, link, pos }: IArticleCard) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Col
      sm={6}
      md={4}
      data-aos="flip-left"
      data-aos-duration="2500"
      data-aos-delay={pos * 100}
    >
      <a className="article-card" href={link} target="_blank" rel="noopener noreferrer">
        <div className="article-card-text">
          <h4>{title}</h4>
        </div>
      </a>
    </Col>
  );
};

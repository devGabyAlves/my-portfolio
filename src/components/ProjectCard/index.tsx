import Aos from "aos";
import { useEffect } from "react";
import { Col } from "react-bootstrap";
import "./index.scss";

interface IProjectCard {
  title: string;
  description: string;
  imgUrl: string;
  link: string;
  pos: number;
}

export const ProjectCard = ({
  description,
  imgUrl,
  title,
  link,
  pos,
}: IProjectCard) => {
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
      <a className="project-imgbox" href={link} target="_blank">
        <img src={imgUrl} alt="" />

        <div className="project-txts">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </a>
    </Col>
  );
};

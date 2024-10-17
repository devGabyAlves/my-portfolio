import Aos from "aos";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SiJavascript, 
  SiMysql, SiReact, 
  SiTailwindcss, 
  SiTypescript, 
  SiPython, 
  SiFlask, 
  SiDocker, 
  SiNginx,
  SiGunicorn,
  SiAmazonaws, 
  SiDatadog,
  SiOwasp } from 'react-icons/si';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../assets/img/color-sharp.png";
import "./index.scss";

export const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const responsive = {
    extraLargeScreens: {
      breakpoint: { max: 4000, min: 1401 },
      items: 5,
    },
    superLargeDesktop: {
      breakpoint: { max: 1400, min: 1025 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 769 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 481 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
    },
  };

  const techs = [{
    icon: <SiTypescript color='#3178C6' />, 
    tech: "Typescript",

  }, 
  {
    icon: <SiJavascript color='#F7DF1E' />, 
    tech: "JavaScript",

  },
  {
    icon: <SiReact color='#61DAFB' />, 
    tech: "ReactJs",
  }, 
  {
    icon: <SiTailwindcss color='#38B2AC' />, 
    tech: "TailwindCSS",

  },
  {
    icon: <SiPython color='#3776AB' />, 
    tech: "Python",

  },
  {
    icon: <SiFlask color='#FFFFFFF' />, 
    tech: "Flask",

  },
  {
    icon: <SiDocker color='#2496ED' />, 
    tech: "Docker",

  },
  {
    icon: <SiNginx color='#009639' />, 
    tech: "Nginx",
  },
  {
    icon: <SiGunicorn color='#499848' />, 
    tech: "Gunicorn",
  },
  {
    icon: <SiMysql color='#4479A1' />, 
    tech: "MySQL"
  },
  {
    icon: <SiAmazonaws color='#FF9900' />, 
    tech: "AWS",

  },
  {
    icon: <SiDatadog color='#632CA6' />, 
    tech: "Datadog",

  },
  {
    icon: <SiOwasp color='#FFFFFFF' />, 
    tech: "OWASP",
  }
  ]

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col className="p-0">
            <div
              className="skill-bx"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              <h2>Habilidades</h2>

              <p>
                Minha capacitação é proveniente de cursos e conteúdos
                disponíveis na web. Ao longo de 2 anos e meio na área consegui
                por meios de projetos pessoais aprender:
              </p>

              <Carousel
                responsive={responsive}
                infinite
                className="skill-slider"
              >
                {techs.map((el, idx) => (
                  <div className="item" key={idx}>
                    {el.icon}
                    <h5>{el.tech}</h5>
                  </div>
                ))
                }
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>

      <img src={colorSharp} className="background-image-left" />
    </section>
  );
};

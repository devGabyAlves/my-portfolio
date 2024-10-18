import Aos from "aos";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SiSqlalchemy, 
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
  SiOwasp,
  SiQualys,
  } from 'react-icons/si';
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../assets/img/color-sharp.png";
import "./index.scss";

export const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const frontEnd = [
    { icon: <SiTypescript color='#3178C6' />, tech: "Typescript" },
    { icon: <SiReact color='#61DAFB' />, tech: "ReactJs" },
    { icon: <SiTailwindcss color='#38B2AC' />, tech: "TailwindCSS" },
  ];

  const backEnd = [
    { icon: <SiPython color='#3776AB' />, tech: "Python" },
    { icon: <SiFlask color='#000000' />, tech: "Flask" }, 
    { icon: <SiGunicorn color='#499848' />, tech: "Gunicorn" },
  ];

  const databases = [
    { icon: <SiMysql color='#4479A1' />, tech: "MySQL" },
    { icon: <SiSqlalchemy color='#F7DF1E' />, tech: "SQLAlchemy" }, 
  ];

  const infraDevOps = [
    { icon: <SiDocker color='#2496ED' />, tech: "Docker" },
    { icon: <SiNginx color='#009639' />, tech: "Nginx" },
    { icon: <SiAmazonaws color='#FF9900' />, tech: "AWS" },
    { icon: <SiDatadog color='#632CA6' />, tech: "Datadog" },
  ];

  const security = [
    { icon: <SiOwasp color='#000000' />, tech: "OWASP" }, 
    { icon: <SiQualys color='#D52B1E' />, tech: "Qualys" }, 
  ];

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
              <h2>Skills</h2>
              <p>
              Meus conhecimentos e capacitação foram adquiridos através de conteúdos disponíveis na web, 
              projetos práticos e experiência no ambiente de trabalho. Ao longo de 2 anos e meio na área, 
              desenvolvi habilidades em diversas tecnologias, sendo elas:
              </p>

              <h3>Front-End</h3>
              <div className="skills-grid">
                {frontEnd.map((el, idx) => (
                  <div className="item" key={idx}>
                    {el.icon}
                    <h5>{el.tech}</h5>
                  </div>
                ))}
              </div>

              <h3>Back-End</h3>
              <div className="skills-grid">
                {backEnd.map((el, idx) => (
                  <div className="item" key={idx}>
                    {el.icon}
                    <h5>{el.tech}</h5>
                  </div>
                ))}
              </div>

              <h3>Bancos de Dados</h3>
              <div className="skills-grid">
                {databases.map((el, idx) => (
                  <div className="item" key={idx}>
                    {el.icon}
                    <h5>{el.tech}</h5>
                  </div>
                ))}
              </div>

              <h3>Infraestrutura/DevOps</h3>
              <div className="skills-grid">
                {infraDevOps.map((el, idx) => (
                  <div className="item" key={idx}>
                    {el.icon}
                    <h5>{el.tech}</h5>
                  </div>
                ))}
              </div>

              <h3>Segurança</h3>
              <div className="skills-grid">
                {security.map((el, idx) => (
                  <div className="item" key={idx}>
                    {el.icon}
                    <h5>{el.tech}</h5>
                  </div>
                ))}
              </div>

            </div>
          </Col>
        </Row>
      </Container>

      <img src={colorSharp} className="background-image-left" />
    </section>
  );
};

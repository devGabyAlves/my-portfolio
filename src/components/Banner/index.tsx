import Aos from "aos";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRightCircle } from 'react-icons/bs'
import HeaderImg from "../../assets/img/header-img.svg";
import "./index.scss";

export const Banner = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const toRotate = ["Software Engineer ", "Application Security"];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(
    300 - (Math.random() * (200 - 50 + 1) + 50)
  );

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    if (isDeleting) setDelta((prev) => prev / 1.3);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(600);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      setDelta(300);
    }

    setText(updatedText);
  };

  useEffect(() => {
    const ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row
          className="align-items-center"
          data-aos="fade-down"
          data-aos-duration="2500"
          data-aos-easing="ease-in-out"
        >
          <Col xs={12} md={7} xl={7} className="leftColBanner">
            <span className="tagline">Welcome to My Portfolio</span>

            <h1>
              {"Hi, I'm Gabrielly Alves "}
              <span className="wrap">{text}</span>
            </h1>

            <p>
            Engenheira de Software com uma visão voltada para o desenvolvimento seguro e segurança de aplicações.
            Tenho mais de 2 anos de experiência em desenvolvimento Full-Stack, com um foco em cibersegurança e criação de soluções resilientes e eficientes. 
            Integro práticas de segurança ao longo de todo o ciclo de vida do desenvolvimento de software, garantindo que os produtos que construo sejam tanto funcionais quanto protegidos.
            </p>

            <a href="#connect">
              Let's connect <BsArrowRightCircle size={25} />
            </a>
          </Col>

          <Col xs={12} md={5} xl={5} className="rightColBanner">
            <img src={HeaderImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

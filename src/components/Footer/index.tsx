import { Col, Row } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import { SocialIcons } from '../SocialIcons';
import "./index.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <Row className="w-100">
        <Col className="logo-container">
          <img src={logo} alt="Logo" />
        </Col>

        <Col className="text-center text-sm-end">
          <SocialIcons />

          <p>CopyRight 2024. All Right Reserved</p>
        </Col>
      </Row>
    </footer>
  );
};

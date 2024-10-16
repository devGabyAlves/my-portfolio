import { TfiGithub, TfiLinkedin } from "react-icons/tfi";
import "./index.scss";

export const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a target="_blank" href="https://www.linkedin.com/in/gabriellysthefany-alves/">
        <TfiLinkedin />
      </a>

      <a target="_blank" href="https://github.com/devGabyAlves">
        <TfiGithub />
      </a>
    </div>
  );
};

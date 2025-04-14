import { Container } from "./styles";
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://play.google.com/store/apps/details?id=com.nasd"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>NASD Mobile</h3>
              <p>
                The NASD Mobile App allows organizations, stakeholders, brokers,
                and investors to trade on OTC security exchanges in the Nigerian
                stock market
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>Typescript</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://site.releaf.ng"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Geospatial Mapping Tool</h3>
              <p>
                {" "}
                Geospatial mapping tool helps field agents as well as
                stakeholders in the agricultural sector and other sectors across
                the economy gain an unparalleled insights into the most
                profitable locations for the next factory anywhere in Africa.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>VueJS</li> <li>NodeJS</li> <li>NestJS</li>
                <li>MongoDB</li> <li>Typescript</li> <li>Vuex</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://ventureramp.com.ng/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />{" "}
                </a>
              </div>
            </header>
            <div className="body">
              <h3>VentureRamp</h3>
              <p>
                VentureRamp is the donor crowdfunding platform of NASD PLC that
                provides a transparent structure and scale to accumulate funding
                for social causes. The platform is very suitable for hosting and
                coordinating endowments for small-large scale projects such as
                giving back initiatives of old-school associations, and
                community groups, amongst others
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>TailwindCSS</li>
                <li>Redux Toolkit</li>
                <li>NodeJS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://salt.releaf.ng/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Sourcing and Logistic Tool (SALT)</h3>
              <p>
                SALT software enables stakeholders to directly connect with
                smallholder farmers, make purchases, offer loans intelligently,
                and provide logistics services using USSD, ensuring
                sustainability and profitability for all stakeholders.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>VueJS</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>NodeJS</li>
                <li>NestJS</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

       

  
      </div>
    </Container>
  );
}

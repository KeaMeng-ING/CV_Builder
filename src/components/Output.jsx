import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function Output({
  userData,
  educationSections,
  experienceSections,
}) {
  return (
    <div className="output">
      <div className="cv-paper">
        <div className="cv-header">
          <div className="cv-name">
            <div className="fullNameOutput">
              <h1>{userData.fullName}</h1>
            </div>

            <div className="addressInfo">
              <span className="iconAddress">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>{userData.email}</p>
              </span>
              <span className="iconAddress">
                <FontAwesomeIcon icon={faPhone} />
                <p>{userData.phone}</p>
              </span>
              <span className="iconAddress">
                <FontAwesomeIcon icon={faLocationDot} />
                <p>{userData.location}</p>
              </span>
            </div>
          </div>
        </div>

        <div className="cv-body resume-section">
          <div className="output-education ">
            <h3 className="output-header">Education</h3>
            <div className="output-entry-container">
              {educationSections.map((section, index) => (
                <div key={index} className="output-entry">
                  <div className="education-date">
                    <p>
                      {section.startDate} <span>-</span> {section.endDate}
                    </p>
                    <p>{section.location}</p>
                  </div>

                  <div className="education-degree">
                    <h4>{section.schoolName}</h4>
                    <p>{section.degree}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="output-experience ">
            <h3 className="output-header">Professional Experience</h3>
            <div className="output-entry-container">
              {experienceSections.map((section, index) => (
                <div key={index} className="output-entry">
                  <div className="experience-date">
                    <p>
                      {section.startDate} <span>-</span> {section.endDate}
                    </p>
                    <p>{section.location}</p>
                  </div>

                  <div className="experience-degree">
                    <h4>{section.companyName}</h4>
                    <p>{section.position}</p>
                    <p>{section.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import "./App.css";
import { useState } from "react";
import SectionTitle from "./components/SectionTitle";
import PersonalInput from "./components/PersonalInput";
import Output from "./components/Output";
import EducationInput from "./components/EducationInput";
import ExperienceInput from "./components/ExperienceInput";

function App() {
  const [userData, setUserData] = useState([{}]);

  const [educationSections, setEducationSections] = useState([{}]);

  const [experienceSections, setExperienceSections] = useState([{}]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    console.log(name, value);
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducationSections = [...educationSections];
    updatedEducationSections[index] = {
      ...updatedEducationSections[index],
      [name]: value,
    };
    setEducationSections(updatedEducationSections);
  };

  const handleDeleteEducationSection = (index) => {
    const updatedEducationSections = educationSections.filter(
      (_, i) => i !== index
    );
    setEducationSections(updatedEducationSections);
  };

  const addEducationSection = () => {
    setEducationSections([...educationSections, {}]);
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const updatedExperienceSections = [...experienceSections];
    updatedExperienceSections[index] = {
      ...updatedExperienceSections[index],
      [name]: value,
    };
    setExperienceSections(updatedExperienceSections);
  };

  const handleDeleteExperienceSection = (index) => {
    const updatedExperienceSections = experienceSections.filter(
      (_, i) => i !== index
    );
    setExperienceSections(updatedExperienceSections);
  };

  const addExperienceSection = () => {
    setExperienceSections([...experienceSections, {}]);
  };

  const handleAutoFill = (section) => {
    console.log(section);
    if (section === "personal") {
      setUserData({
        fullName: "John Doe",
        email: "john@example.com",
        phone: "123-456-7890",
        location: "New York, NY",
      });
    } else if (section === "education") {
      console.log("in education");
      setEducationSections([
        {
          schoolName: "University of Example",
          degree: "Bachelor of Science",
          startDate: "08/24",
          endDate: "Present",
          location: "Cambodia",
        },
      ]);
    } else if (section === "experience") {
      setExperienceSections([
        {
          companyName: "Tech Corp",
          position: "Software Engineer",
          startDate: "08/24",
          endDate: "Present",
          location: "Cambodia",
          description:
            "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
        },
      ]);
    }
  };

  const handleClear = (section) => {
    if (section === "personal") {
      setUserData([{}]);
    } else if (section === "education") {
      setEducationSections([{}]);
    } else if (section === "experience") {
      setExperienceSections([{}]);
    }
  };

  return (
    <div className="main">
      <div className="personal-info user-input">
        <SectionTitle
          title="Personal Information"
          className="personal-section"
          onAutoFill={() => handleAutoFill("personal")}
          onClear={() => handleClear("personal")}
        />
        <PersonalInput onChange={handleInputChange} values={userData} />

        <SectionTitle
          title="Education"
          className="education-section"
          onAutoFill={() => handleAutoFill("education")}
        />
        {educationSections.map((section, index) => (
          <div key={index}>
            {index > 0 && <hr />}
            <EducationInput
              key={index}
              index={index}
              onChange={(e) => handleEducationChange(index, e)}
              onDelete={() => handleDeleteEducationSection(index)}
              values={section}
            />
          </div>
        ))}
        <button className="addEducation" onClick={addEducationSection}>
          Add More Education
        </button>

        <SectionTitle
          title="Experience"
          className="experience-section"
          onAutoFill={() => handleAutoFill("experience")}
        />

        {experienceSections.map((section, index) => (
          <div key={index}>
            {index > 0 && <hr />}
            <ExperienceInput
              key={index}
              index={index}
              onChange={(e) => handleExperienceChange(index, e)}
              onDelete={() => handleDeleteExperienceSection(index)}
              values={section}
            />
          </div>
        ))}
        <button className="addExperience" onClick={addExperienceSection}>
          Add More Experience
        </button>
      </div>
      <Output
        userData={userData}
        educationSections={educationSections}
        experienceSections={experienceSections}
      />
    </div>
  );
}

export default App;

// Value

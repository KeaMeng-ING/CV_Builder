export default function ExperienceInput({ index, onChange, onDelete, values }) {
  return (
    <div className="experience">
      <div className="input-header">
        <h3>Experience {index + 1}</h3>
        <i className="fa-solid fa-trash-can" onClick={onDelete}></i>
      </div>
      <div className="input-container">
        <label htmlFor={`companyName-${index}`}>Company Name</label>
        <input
          type="text"
          id={`companyName-${index}`}
          name="companyName"
          onChange={onChange}
          value={values?.companyName || ""}
        />
      </div>
      <div className="input-container">
        <label htmlFor="position">Position</label>
        <input
          type="text"
          id="position"
          name="position"
          onChange={onChange}
          value={values?.position || ""}
        />
      </div>
      <div className="two-input-container">
        <div className="input-container half-container">
          <label htmlFor={`start-date-${index}`}>Start Date</label>
          <input
            type="text"
            id={`start-date-${index}`}
            name="startDate"
            onChange={onChange}
            value={values?.startDate || ""}
          />
        </div>
        <div className="input-container half-container">
          <label htmlFor={`end-date-${index}`}>End Date</label>
          <input
            type="text"
            id={`end-date-${index}`}
            name="endDate"
            onChange={onChange}
            value={values?.endDate || ""}
          />
        </div>
      </div>

      <div className="input-container">
        <label htmlFor={`location-${index}`}>Location</label>
        <input
          type="text"
          id={`location-${index}`}
          name="location"
          onChange={onChange}
          value={values?.location || ""}
        />
      </div>

      <div className="input-container">
        <label htmlFor={`desc-${index}`}>Description</label>
        <textarea
          name="description"
          id={`desc-${index}`}
          onChange={onChange}
          value={values?.description || ""}
        ></textarea>
      </div>
      <br />
    </div>
  );
}

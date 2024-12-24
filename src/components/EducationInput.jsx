export default function EducationInput({ index, onChange, onDelete, values }) {
  return (
    <div className="education">
      <div className="input-header">
        <h3>Education {index + 1}</h3>
        <i className="fa-solid fa-trash-can" onClick={onDelete}></i>
      </div>

      <div className="input-container">
        <label htmlFor={`schoolName-${index}`}>School Name</label>
        <input
          type="text"
          id={`schoolName-${index}`}
          name="schoolName"
          onChange={onChange}
          value={values?.schoolName || ""}
        />
      </div>

      <div className="input-container">
        <label htmlFor={`degree-${index}`}>Degree</label>
        <input
          type="text"
          id={`degree-${index}`}
          name="degree"
          onChange={onChange}
          value={values?.degree || ""}
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
      <br />
    </div>
  );
}

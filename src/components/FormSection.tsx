// import React, { useState } from "react";

// const FormSection: React.FC<{ setResumeData: (data: any) => void }> = ({ setResumeData }) => {
//   const [formData, setFormData] = useState<any>({
//     name: "",
//     photo: "",
//     jobTitle: "",
//     location: "",
//     contact: "",
//     profile: "",
//     skills: [""],
//     experience: [{ title: "", company: "", dates: "", description: "" }],
//     education: [{ degree: "", institution: "", dates: "" }],
//     references: "",
//   });

//   const updateField = (field: string, value: any, index?: number, subField?: string) => {
//     if (index !== undefined && subField) {
//       const updatedArray = [...formData[field]];
//       updatedArray[index][subField] = value;
//       setFormData({ ...formData, [field]: updatedArray });
//     } else if (index !== undefined) {
//       const updatedArray = [...formData[field]];
//       updatedArray[index] = value;
//       setFormData({ ...formData, [field]: updatedArray });
//     } else {
//       setFormData({ ...formData, [field]: value });
//     }
//     setResumeData(formData);
//   };

//   const addItem = (field: string, item: any) => {
//     setFormData({ ...formData, [field]: [...formData[field], item] });
//   };

//   return (
//     <form>
//       <h2>Resume Details</h2>

//       {/* Input Fields */}
//       {[
//         { label: "Name", field: "name" },
//         { label: "Photo URL", field: "photo" },
//         { label: "Job Title", field: "jobTitle" },
//         { label: "Location", field: "location" },
//         { label: "Contact", field: "contact" },
//         { label: "Profile Summary", field: "profile" },
//       ].map((input, idx) => (
//         <label key={idx}>
//           {input.label}:
//           <input
//             type={input.field === "photo" ? "url" : "text"}
//             value={formData[input.field]}
//             onChange={(e) => updateField(input.field, e.target.value)}
//           />
//         </label>
//       ))}

//       {/* Skills */}
//       <h3>Skills</h3>
//       {formData.skills.map((skill: string, idx: number) => (
//         <input
//           key={idx}
//           type="text"
//           value={skill}
//           placeholder={`Skill ${idx + 1}`}
//           onChange={(e) => updateField("skills", e.target.value, idx)}
//         />
//       ))}
//       <button type="button" onClick={() => addItem("skills", "")}>
//         Add Skill
//       </button>

//       {/* Experience */}
//       <h3>Employment History</h3>
//       {formData.experience.map((job: any, idx: number) => (
//         <div key={idx}>
//           {["title", "company", "dates", "description"].map((subField) => (
//             <input
//               key={subField}
//               type="text"
//               placeholder={subField.charAt(0).toUpperCase() + subField.slice(1)}
//               value={job[subField]}
//               onChange={(e) => updateField("experience", e.target.value, idx, subField)}
//             />
//           ))}
//         </div>
//       ))}
//       <button type="button" onClick={() => addItem("experience", { title: "", company: "", dates: "", description: "" })}>
//         Add Job
//       </button>

//       {/* Education */}
//       <h3>Education</h3>
//       {formData.education.map((edu: any, idx: number) => (
//         <div key={idx}>
//           {["degree", "institution", "dates"].map((subField) => (
//             <input
//               key={subField}
//               type="text"
//               placeholder={subField.charAt(0).toUpperCase() + subField.slice(1)}
//               value={edu[subField]}
//               onChange={(e) => updateField("education", e.target.value, idx, subField)}
//             />
//           ))}
//         </div>
//       ))}
//       <button type="button" onClick={() => addItem("education", { degree: "", institution: "", dates: "" })}>
//         Add Education
//       </button>

//       {/* References */}
//       <label>
//         References:
//         <textarea value={formData.references} onChange={(e) => updateField("references", e.target.value)} />
//       </label>
//     </form>
//   );
// };

// export default FormSection;





import React, { useState } from "react";
import { useDispatch } from "react-redux";

const FormSection: React.FC<{ setResumeData: (data: any) => void }> = ({ setResumeData }) => {
  const [formData, setFormData] = useState<any>({
    name: "",
    photo: "",
    jobTitle: "",
    location: "",
    contact: "",
    profile: "",
    skills: [""],
    experience: [{ title: "", company: "", dates: "", description: "" }],
    education: [{ degree: "", institution: "", dates: "" }],
    references: "",
  });

  const dispatch = useDispatch();

  const updateField = (field: string, value: any, index?: number, subField?: string) => {
    if (index !== undefined && subField) {
      const updatedArray = [...formData[field]];
      updatedArray[index][subField] = value;
      setFormData({ ...formData, [field]: updatedArray });
    } else if (index !== undefined) {
      const updatedArray = [...formData[field]];
      updatedArray[index] = value;
      setFormData({ ...formData, [field]: updatedArray });
    } else {
      setFormData({ ...formData, [field]: value });
    }
    setResumeData(formData);
  };

  const addItem = (field: string, item: any) => {
    setFormData({ ...formData, [field]: [...formData[field], item] });
  };

  const saveToRedux = () => {
    dispatch({ type: "SAVE_RESUME_DATA", payload: formData });
  };

  return (
    <form>
      <h2>Resume Details</h2>

      {[{ label: "Name", field: "name" }, { label: "Photo URL", field: "photo" }, { label: "Job Title", field: "jobTitle" }, { label: "Location", field: "location" }, { label: "Contact", field: "contact" }, { label: "Profile Summary", field: "profile" }].map((input, idx) => (
        <label key={idx}>
          {input.label}:
          <input
            type={input.field === "photo" ? "url" : "text"}
            value={formData[input.field]}
            onChange={(e) => updateField(input.field, e.target.value)}
          />
        </label>
      ))}

      <h3>Skills</h3>
      {formData.skills.map((skill: string, idx: number) => (
        <input
          key={idx}
          type="text"
          value={skill}
          placeholder={`Skill ${idx + 1}`}
          onChange={(e) => updateField("skills", e.target.value, idx)}
        />
      ))}
      <button type="button" onClick={() => addItem("skills", "")}>
        Add Skill
      </button>

      <h3>Employment History</h3>
      {formData.experience.map((job: any, idx: number) => (
        <div key={idx}>
          {["title", "company", "dates", "description"].map((subField) => (
            <input
              key={subField}
              type="text"
              placeholder={subField.charAt(0).toUpperCase() + subField.slice(1)}
              value={job[subField]}
              onChange={(e) => updateField("experience", e.target.value, idx, subField)}
            />
          ))}
        </div>
      ))}
      <button type="button" onClick={() => addItem("experience", { title: "", company: "", dates: "", description: "" })}>
        Add Job
      </button>

      <h3>Education</h3>
      {formData.education.map((edu: any, idx: number) => (
        <div key={idx}>
          {["degree", "institution", "dates"].map((subField) => (
            <input
              key={subField}
              type="text"
              placeholder={subField.charAt(0).toUpperCase() + subField.slice(1)}
              value={edu[subField]}
              onChange={(e) => updateField("education", e.target.value, idx, subField)}
            />
          ))}
        </div>
      ))}
      <button type="button" onClick={() => addItem("education", { degree: "", institution: "", dates: "" })}>
        Add Education
      </button>

      <label>
        References:
        <textarea value={formData.references} onChange={(e) => updateField("references", e.target.value)} />
      </label>

      {/* Save to Redux Button */}
      <button type="button" onClick={saveToRedux}>
        Save to Redux
      </button>
    </form>
  );
};

export default FormSection;


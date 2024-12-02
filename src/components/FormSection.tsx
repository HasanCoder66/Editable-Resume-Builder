// import React, { useState } from "react";
// import ResumePreview from "./ResumePreview"; // Import the ResumePreview component

// const ResumeForm: React.FC = () => {
//   const [resumeData, setResumeData] = useState<any>({
//     name: "",
//     photo: "",
//     jobTitle: "",
//     location: "",
//     contact: "",
//     profile: "",
//     skills: [],
//     experience: [],
//     education: [],
//     references: "",
//   });

//   // Add Skill Handler
//   const addSkill = () => {
//     setResumeData((prev: any) => ({
//       ...prev,
//       skills: [...prev.skills, ""],
//     }));
//   };

//   // Add Experience Handler
//   const addExperience = () => {
//     setResumeData((prev: any) => ({
//       ...prev,
//       experience: [...prev.experience, { title: "", company: "", dates: "", description: "" }],
//     }));
//   };

//   // Add Education Handler
//   const addEducation = () => {
//     setResumeData((prev: any) => ({
//       ...prev,
//       education: [...prev.education, { degree: "", institution: "", dates: "" }],
//     }));
//   };

//   // Update Field Handler
//   const handleChange = (field: string, value: any, index?: number, subField?: string) => {
//     if (index !== undefined && subField) {
//       const updatedArray = [...resumeData[field]];
//       updatedArray[index][subField] = value;
//       setResumeData({ ...resumeData, [field]: updatedArray });
//     } else if (index !== undefined) {
//       const updatedArray = [...resumeData[field]];
//       updatedArray[index] = value;
//       setResumeData({ ...resumeData, [field]: updatedArray });
//     } else {
//       setResumeData({ ...resumeData, [field]: value });
//     }
//   };

//   return (
//     <div>
//       <form>
//         <h2>Fill Out Resume Details</h2>

//         {/* Name */}
//         <label>
//           Name:
//           <input
//             type="text"
//             value={resumeData.name}
//             onChange={(e) => handleChange("name", e.target.value)}
//           />
//         </label>

//         {/* Photo */}
//         <label>
//           Photo URL:
//           <input
//             type="text"
//             value={resumeData.photo}
//             onChange={(e) => handleChange("photo", e.target.value)}
//           />
//         </label>

//         {/* Job Title */}
//         <label>
//           Job Title:
//           <input
//             type="text"
//             value={resumeData.jobTitle}
//             onChange={(e) => handleChange("jobTitle", e.target.value)}
//           />
//         </label>

//         {/* Location */}
//         <label>
//           Location:
//           <input
//             type="text"
//             value={resumeData.location}
//             onChange={(e) => handleChange("location", e.target.value)}
//           />
//         </label>

//         {/* Contact */}
//         <label>
//           Contact Details:
//           <input
//             type="text"
//             value={resumeData.contact}
//             onChange={(e) => handleChange("contact", e.target.value)}
//           />
//         </label>

//         {/* Profile */}
//         <label>
//           Profile Summary:
//           <textarea
//             value={resumeData.profile}
//             onChange={(e) => handleChange("profile", e.target.value)}
//           />
//         </label>

//         {/* Skills */}
//         <div>
//           <h3>Skills:</h3>
//           {resumeData.skills.map((skill: string, index: number) => (
//             <input
//               key={index}
//               type="text"
//               value={skill}
//               onChange={(e) => handleChange("skills", e.target.value, index)}
//               placeholder={`Skill ${index + 1}`}
//             />
//           ))}
//           <button type="button" onClick={addSkill}>
//             Add Skill
//           </button>
//         </div>

//         {/* Experience */}
//         <div>
//           <h3>Employment History:</h3>
//           {resumeData.experience.map((job: any, index: number) => (
//             <div key={index}>
//               <input
//                 type="text"
//                 placeholder="Job Title"
//                 value={job.title}
//                 onChange={(e) => handleChange("experience", e.target.value, index, "title")}
//               />
//               <input
//                 type="text"
//                 placeholder="Company"
//                 value={job.company}
//                 onChange={(e) => handleChange("experience", e.target.value, index, "company")}
//               />
//               <input
//                 type="text"
//                 placeholder="Dates"
//                 value={job.dates}
//                 onChange={(e) => handleChange("experience", e.target.value, index, "dates")}
//               />
//               <textarea
//                 placeholder="Description"
//                 value={job.description}
//                 onChange={(e) => handleChange("experience", e.target.value, index, "description")}
//               />
//             </div>
//           ))}
//           <button type="button" onClick={addExperience}>
//             Add Job
//           </button>
//         </div>

//         {/* Education */}
//         <div>
//           <h3>Education:</h3>
//           {resumeData.education.map((edu: any, index: number) => (
//             <div key={index}>
//               <input
//                 type="text"
//                 placeholder="Degree"
//                 value={edu.degree}
//                 onChange={(e) => handleChange("education", e.target.value, index, "degree")}
//               />
//               <input
//                 type="text"
//                 placeholder="Institution"
//                 value={edu.institution}
//                 onChange={(e) => handleChange("education", e.target.value, index, "institution")}
//               />
//               <input
//                 type="text"
//                 placeholder="Dates"
//                 value={edu.dates}
//                 onChange={(e) => handleChange("education", e.target.value, index, "dates")}
//               />
//             </div>
//           ))}
//           <button type="button" onClick={addEducation}>
//             Add Education
//           </button>
//         </div>

//         {/* References */}
//         <label>
//           References:
//           <textarea
//             value={resumeData.references}
//             onChange={(e) => handleChange("references", e.target.value)}
//           />
//         </label>
//       </form>
//     </div>
//   );
// };

// export default ResumeForm;






























import React, { useState } from "react";

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

  return (
    <form>
      <h2>Resume Details</h2>

      {/* Input Fields */}
      {[
        { label: "Name", field: "name" },
        { label: "Photo URL", field: "photo" },
        { label: "Job Title", field: "jobTitle" },
        { label: "Location", field: "location" },
        { label: "Contact", field: "contact" },
        { label: "Profile Summary", field: "profile" },
      ].map((input, idx) => (
        <label key={idx}>
          {input.label}:
          <input
            type={input.field === "photo" ? "url" : "text"}
            value={formData[input.field]}
            onChange={(e) => updateField(input.field, e.target.value)}
          />
        </label>
      ))}

      {/* Skills */}
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

      {/* Experience */}
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

      {/* Education */}
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

      {/* References */}
      <label>
        References:
        <textarea value={formData.references} onChange={(e) => updateField("references", e.target.value)} />
      </label>
    </form>
  );
};

export default FormSection;

import React from "react";

const ResumePreview: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="resume-preview" style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* Header Section */}
      <div style={{ display: "flex", alignItems: "center", borderBottom: "2px solid #ddd", paddingBottom: "10px" }}>
        {data.photo && (
          <img
            src={data.photo}
            alt="Profile"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              marginRight: "20px",
            }}
          />
        )}
        <div>
          <h1 style={{ margin: 0 }}>{data.name || "Muhammad Hasan Ashraf"}</h1>
          <p style={{ margin: 0, fontWeight: "bold", fontSize: "18px" }}>
            {data.jobTitle || "Full Stack Web Developer | MERN Stack Developer"}
          </p>
          <p style={{ margin: 0 }}>{data.location || "Karimabad, Karachi, Pakistan"}</p>
          <p style={{ margin: 0 }}>{data.contact || "+92 300 XXX XXXX | email@example.com"}</p>
        </div>
      </div>

      {/* Profile Section */}
      <section style={{ marginTop: "20px" }}>
        <h2 style={{ borderBottom: "1px solid #ddd" }}>Profile</h2>
        <p>
          {data.profile ||
            "I am a passionate Full Stack Web Developer with 1 year of professional experience specializing in building interactive and scalable web applications using the MERN stack. I have completed 100+ projects, transforming ideas into engaging digital experiences. Currently pursuing AWS certification to enhance my cloud computing expertise."}
        </p>
      </section>

      {/* Skills Section */}
      <section style={{ marginTop: "20px" }}>
        <h2 style={{ borderBottom: "1px solid #ddd" }}>Skills</h2>
        <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
          {(data.skills || [
            "HTML, CSS, JavaScript",
            "React.js, Next.js",
            "Node.js, MongoDB",
            "TypeScript, Material UI, Tailwind CSS",
            "AWS (Associate Developer in progress)",
          ]).map((skill: string, index: number) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* Employment History Section */}
      <section style={{ marginTop: "20px" }}>
        <h2 style={{ borderBottom: "1px solid #ddd" }}>Employment History</h2>
        {(data.experience || [
          {
            title: "Associate Developer",
            company: "XYZ Company",
            dates: "3 Months",
            description:
              "Developed dynamic web pages using Material UI and Tailwind CSS. Collaborated with teams to implement user-centric designs.",
          },
          {
            title: "Freelance Web Developer",
            company: "Upwork & LinkedIn",
            dates: "Since November 2023",
            description:
              "Completed multiple freelance projects focusing on client needs. Delivered high-quality web applications and tutorials.",
          },
        ]).map((job: any, index: number) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <h3 style={{ margin: 0 }}>{job.title}</h3>
            <p style={{ margin: 0, fontStyle: "italic" }}>
              {job.company} | {job.dates}
            </p>
            <p>{job.description}</p>
          </div>
        ))}
      </section>

      {/* Education Section */}
      <section style={{ marginTop: "20px" }}>
        <h2 style={{ borderBottom: "1px solid #ddd" }}>Education</h2>
        {(data.education || [
          {
            degree: "Intermediate in Commerce",
            institution: "Government City College, Moosa Colony",
            dates: "Completed in 2020",
          },
          {
            degree: "AWS Associate Developer (In Progress)",
            institution: "Saylani Mass IT Training",
            dates: "2024",
          },
        ]).map((edu: any, index: number) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <h3 style={{ margin: 0 }}>{edu.degree}</h3>
            <p style={{ margin: 0, fontStyle: "italic" }}>
              {edu.institution} | {edu.dates}
            </p>
          </div>
        ))}
      </section>

      {/* References Section */}
      <section style={{ marginTop: "20px" }}>
        <h2 style={{ borderBottom: "1px solid #ddd" }}>References</h2>
        <p>{data.references || "Available upon request."}</p>
      </section>
    </div>
  );
};

export default ResumePreview;

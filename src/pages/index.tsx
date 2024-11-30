import React, { useState } from "react";
import FormSection from "@/components/FormSection";
import ResumePreview from "@/components/ResumePreview";
import Header from "@/components/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="form-container">
          <FormSection />
        </div>
        <div className="preview-container">
          <ResumePreview data={resumeData}/>
        </div>
      </div>
    </>
  );
};

export default Home;

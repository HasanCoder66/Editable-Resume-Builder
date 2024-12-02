import React, { useState } from "react";
import FormSection from "@/components/FormSection";
import ResumePreview from "@/components/ResumePreview";
import Header from "@/components/Header";
import { Provider } from "react-redux";
import store from "@/redux/store";

const Home: React.FC = () => {
  const [resumeData, setResumeData] = useState<any>({});
  return (
    <Provider store={store}>
      <Header />
      <div className="container">
        <div className="form-container">
          <FormSection setResumeData={setResumeData} />
        </div>
        <div className="preview-container">
          <ResumePreview data={resumeData} />
        </div>
      </div>
    </Provider>
  );
};

export default Home;

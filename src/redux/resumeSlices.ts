import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define types for the resume data structure
interface Experience {
  title: string;
  company: string;
  dates: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  dates: string;
}

interface ResumeData {
  name: string;
  photo: string;
  jobTitle: string;
  location: string;
  contact: string;
  profile: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  references: string;
}

interface ResumeState {
  data: ResumeData;
}

// Initial state for the slice
const initialState: ResumeState = {
  data: {
    name: "",
    photo: "",
    jobTitle: "",
    location: "",
    contact: "",
    profile: "",
    skills: [],
    experience: [],
    education: [],
    references: "",
  },
};

// Create the slice
const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    // Reducer to update the entire resume data
    updateResume: (state, action: PayloadAction<ResumeData>) => {
      state.data = action.payload;
    },

    // Reducer to update specific fields (optional for more granular updates)
    updateField: (
      state,
      action: PayloadAction<{ field: keyof ResumeData; value: any }>
    ) => {
      const { field, value } = action.payload;
      state.data[field] = value;
    },

    // Reducer to add a new skill
    addSkill: (state, action: PayloadAction<string>) => {
      state.data.skills.push(action.payload);
    },

    // Reducer to add a new experience
    addExperience: (state, action: PayloadAction<Experience>) => {
      state.data.experience.push(action.payload);
    },

    // Reducer to add a new education entry
    addEducation: (state, action: PayloadAction<Education>) => {
      state.data.education.push(action.payload);
    },

    // Reducer to reset resume data to its initial state
    resetResume: (state) => {
      state.data = initialState.data;
    },
  },
});

// Export the actions
export const {
  updateResume,
  updateField,
  addSkill,
  addExperience,
  addEducation,
  resetResume,
} = resumeSlice.actions;

// Export the reducer as default
export default resumeSlice.reducer;

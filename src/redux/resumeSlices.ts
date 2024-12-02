import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResumeState {
  data: {
    name: string;
    photo: string;
    jobTitle: string;
    location: string;
    contact: string;
    profile: string;
    skills: string[];
    experience: { title: string; company: string; dates: string; description: string }[];
    education: { degree: string; institution: string; dates: string }[];
    references: string;
  };
}

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

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updateResume: (state, action: PayloadAction<ResumeState["data"]>) => {
      state.data = action.payload;
    },
  },
});

export const { updateResume } = resumeSlice.actions;

export default resumeSlice.reducer;

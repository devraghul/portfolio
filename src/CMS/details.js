import { calculateExperience } from "@/utils/calculate-experience";

export const personalInfo = {
  name: "Raghul R.",
  location: "India, Bengaluru",
  linkedIn: "https://linkedin.com/in/raghul-dev",
  github: "https://github.com/devraghul",
  totalExperience: `${calculateExperience("2021-03-21")}+`,
  appsWorkedOn: "20+",
  companiesWorkedOn: "2",
};

export const cmsStaticData = {
  yearsOfExperience: "Years Experience",
  sassAppsWorkedOn: "real-world SaaS apps.",
  companies: "Companies Worked On",
};

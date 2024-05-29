export type TPortfolio = {
  information: TInformation;
  socailMedia: TSocailMedia[];
  aboutMe: TAboutMe;
  experiences: TExperience[];
  edducation: TEducation;
  activities: TActivity[];
  skills: TSkill[];
  certificates: TCertificate;
};

export type TInformation = {
  name: string;
  position: string;
  phone: string;
  email: string;
  location?: string;
};

export type TSocailMedia = {
  icon: string;
  link: string;
};

export type TAboutMe = string | string[];

export type TExperience = {
  position: string;
  company: string;
  duration: string;
  projects: TProject[];
};

export type TProject = {
  name: string;
  description: string;
  timeSize: number;
  Technologies: string[];
};

export type TEducation = {
  major: string;
  university: string;
  duration: string;
};

export type TActivity = string;

export type TSkill = string;

export type TCertificate = string;

export interface EmailSignupCharacterTypes {
  id: number;
  name: string;
  icon: React.ReactNode;
}

export interface FilterCategory {
  name: string;
  options: FilterOption[];
}

export interface FilterOption {
  display: string;
  checked: boolean;
}

export interface SelectedFilter {
  category: string;
  option: string;
}

export interface NavRoute {
  path: string;
  title: string;
  enabled: boolean;
}

export enum SocialPlatform {
  twitter = "twitter",
  github = "github",
  linkedIn = "linkedin",
}

export interface SocialInfo {
  platform: SocialPlatform;
  username: string;
}

export interface TeamMemberInfo {
  name: string;
  job: string;
  socialMedia: SocialInfo[];
  image: React.ReactNode;
  description: string;
}

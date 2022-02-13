export interface FilterCategory {
  name: string;
  options: FilterOption[];
}

export interface FilterOption {
  value: string;
  display: string;
}
export interface NavRoutes {
  path: string;
  title: string;
}

export enum SocialPlatform {
  twitter = "twitter",
  github = "github",
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

import React from "react";

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
  linkedin = "linkedin",
}

export interface SocialInfo {
  platform: SocialPlatform;
  username: string;
}

export interface SocialIcon {
  name: string;
  image: StaticImageData;
  enabled: boolean;
  url: string;
}

export interface TeamMemberInfo {
  name: string;
  job: string;
  skills: string[];
  socialMedia: SocialInfo[];
  image: React.ReactNode;
  description?: string | React.ReactNode;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQProps {
  question: string;
  answer: string;
}

export interface AstromapItem {
  title: string;
  description: string;
  imagePath: string;
}

export interface Voyager {
  nexusName: string;
  irlName: string;
  description: string;
  image: StaticImageData;
}

export interface RoadmapItem {
  title: string;
  description: string | React.ReactNode;
  icon: React.ReactNode;
}

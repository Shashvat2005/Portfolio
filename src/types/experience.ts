export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
  links?: {
    label: string;
    url: string;
  }[];
}
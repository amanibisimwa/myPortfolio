export interface Project {
  id: string;
  title: string;
  description: string;
  architecture: string;
  techstack: string[];
  thumbnail: string;
  githubLink?: string;
  website?: string;
  updatedAt: Date;
}

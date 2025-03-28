
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X, Code, Link, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ProjectProps {
  id: string;
  title: string;
  techStack: string[];
  description: string;
  features: string[];
  imageUrl: string;
  demoLink?: string;
  githubLink?: string;
  details?: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project-card">
      <div className="relative overflow-hidden group">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="project-card-img transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <button className="view-details-btn">View Details</button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-auto object-cover rounded-lg mb-4"
                />
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                {project.details && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Project Details:</h4>
                    <p>{project.details}</p>
                  </div>
                )}
                
                <div className="flex gap-3 mt-2">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      <Github className="h-4 w-4" />
                      Source Code
                    </a>
                  )}
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      <Link className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <span 
              key={index} 
              className="bg-muted text-muted-foreground px-2 py-0.5 rounded-md text-xs"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="bg-muted text-muted-foreground px-2 py-0.5 rounded-md text-xs">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
          {project.description}
        </p>
        <div className="mt-auto pt-2">
          <Dialog>
            <DialogTrigger asChild>
              <button className="text-sm font-medium text-secondary hover:text-secondary/80 transition-colors inline-flex items-center">
                View Details
                <Code className="ml-1 h-3.5 w-3.5" />
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-auto object-cover rounded-lg mb-4"
                />
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                {project.details && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Project Details:</h4>
                    <p>{project.details}</p>
                  </div>
                )}
                
                <div className="flex gap-3 mt-2">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      <Github className="h-4 w-4" />
                      Source Code
                    </a>
                  )}
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      <Link className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

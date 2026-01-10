import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from '@/lib/data';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      {project.image_url && (
        <div className="aspect-video overflow-hidden rounded-t-lg">
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2">
          {project.tech_stack.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        {project.github_url && (
          <Button asChild variant="outline" size="sm" className="flex-1">
            <a href={project.github_url} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={16} />
              Code
            </a>
          </Button>
        )}
        {project.live_url && (
          <Button asChild size="sm" className="flex-1">
            <a href={project.live_url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2" size={16} />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

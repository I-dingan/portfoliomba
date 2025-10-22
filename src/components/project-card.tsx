
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import type { PROJECTS } from '@/lib/data';

type Project = (typeof PROJECTS)[number];

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const hasLiveUrl = project.liveUrl && project.liveUrl !== '#';
  const hasGithubUrl = project.githubUrl && project.githubUrl !== '#';

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="aspect-video relative mb-4">
          <Image
            src={project.image.imageUrl}
            alt={project.image.description}
            fill
            className="object-cover rounded-md"
            data-ai-hint={project.image.imageHint}
          />
        </div>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full justify-end gap-2">
          {hasGithubUrl && (
            <Button asChild variant="outline" size="sm">
              <Link href={project.githubUrl} target="_blank">
                <Github />
                GitHub
              </Link>
            </Button>
          )}
          {hasLiveUrl && (
            <Button asChild variant="outline" size="sm">
              <Link href={project.liveUrl} target="_blank">
                <ExternalLink />
                Live Demo
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

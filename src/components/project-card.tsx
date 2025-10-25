import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

type ProjectCardProps = {
  title: string;
  description: string;
  image: ImagePlaceholder | undefined;
  tags: string[];
  githubUrl: string;
};

export function ProjectCard({ title, description, image, tags, githubUrl }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
      {image && (
        <div className="aspect-video overflow-hidden">
          <Image
            src={image.imageUrl}
            alt={title}
            width={600}
            height={400}
            className="w-full h-full object-cover"
            data-ai-hint={image.imageHint}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" asChild className="w-full">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            View Code <Icons.Github className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

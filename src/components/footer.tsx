import { personalData } from "@/app/data";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="py-8 bg-secondary border-t">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-muted-foreground text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} {personalData.name}. All Rights Reserved.
        </p>
        <div className="flex items-center gap-2">
          {personalData.socials.map((social) => (
            <Button
              key={social.name}
              variant="ghost"
              size="icon"
              asChild
              className="text-muted-foreground hover:text-primary"
            >
              <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                <social.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}

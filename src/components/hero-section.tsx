import Link from "next/link";
import { personalData } from "@/app/data";
import { Button } from "./ui/button";
import { Icons } from "./icons";

export function HeroSection() {
  return (
    <section id="home" className="py-20 sm:py-24 md:py-32 lg:py-40">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-primary leading-tight">
          {personalData.name}
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
          {personalData.title}
        </p>
        <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-foreground">
          {personalData.intro}
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href={personalData.resumeUrl} target="_blank" rel="noopener noreferrer">
              Download CV <Icons.Download className="ml-2" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">
              Contact Info <Icons.ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          {personalData.socials.map((social) => (
            <Button
              key={social.name}
              variant="outline"
              size="icon"
              asChild
              className="rounded-full h-12 w-12 hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
            >
              <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                <social.icon className="h-6 w-6" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

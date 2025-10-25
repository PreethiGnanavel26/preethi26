import { skills } from "@/app/data";
import { Card, CardContent } from "@/components/ui/card";

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
            Technical Skills
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Technologies and tools I work with.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <Card key={skill.name} className="group transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 aspect-square">
                <skill.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary transition-colors duration-300 group-hover:text-accent" />
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-medium text-center text-foreground">{skill.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

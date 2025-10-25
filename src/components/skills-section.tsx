import { categorizedSkills } from "@/app/data";
import { Progress } from "@/components/ui/progress";

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-medium text-foreground">{name}</span>
      <span className="text-xs font-medium text-muted-foreground">{level}%</span>
    </div>
    <Progress value={level} className="h-2" />
  </div>
);

const SkillCategory = ({ category, skills }: { category: string; skills: { name: string; level: number }[] }) => (
  <div className="mb-8">
    <h3 className="text-xl font-bold font-headline text-primary mb-4">{category}</h3>
    {skills.map((skill) => (
      <SkillBar key={skill.name} name={skill.name} level={skill.level} />
    ))}
  </div>
);

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary inline-block relative">
            Skills
            <span className="absolute -bottom-2 left-0 w-2/3 border-b-4 border-primary"></span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {categorizedSkills.map((category) => (
              <SkillCategory key={category.category} {...category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

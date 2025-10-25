import { personalData } from "@/app/data";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-8 text-primary">
          About Me
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-center text-muted-foreground leading-relaxed">
          {personalData.about}
        </p>
      </div>
    </section>
  );
}

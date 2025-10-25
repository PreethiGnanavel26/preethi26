import { ContactForm } from "./contact-form";
import { personalData, contactInfo } from "@/app/data";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
            Get In Touch
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2 space-y-6">
            {contactInfo.map((info) => (
              <div key={info.name} className="flex items-center gap-4 p-4 rounded-lg bg-secondary">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                  <info.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary">{info.name}</h3>
                  <a href={info.name === 'Email' ? `mailto:${info.value}` : `tel:${info.value}`} className="text-muted-foreground break-all">{info.value}</a>
                </div>
              </div>
            ))}
          </div>

          <div className="md:col-span-3 p-8 rounded-lg bg-secondary shadow-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

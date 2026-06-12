import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import SectionTitle from "./SectionTitle";

const ContactSection = () => (
  <section id="contact" className="py-20 px-6 bg-secondary/30">
    <div className="max-w-6xl mx-auto text-center">
      <SectionTitle title="Get In Touch" subtitle="Let's connect and discuss data!" />
      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Mail className="w-5 h-5 text-primary" />
          <a href="mailto:arzoo7617@gmail.com" className="hover:text-foreground transition-colors">
            arzoo7617@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="w-5 h-5 text-primary" />
          Noida, India
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/arzoo-gupta-50571b238/"
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-bg text-primary-foreground px-6 py-3 rounded-2xl font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <Linkedin className="w-5 h-5" /> LinkedIn
        </a>
        <a
          href="https://github.com/arzoo7617"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-card border border-border px-6 py-3 rounded-2xl font-medium flex items-center gap-2 card-shadow hover:card-shadow-hover transition-all"
        >
          <Github className="w-5 h-5" /> GitHub
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;

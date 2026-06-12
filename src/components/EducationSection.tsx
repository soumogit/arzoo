import { GraduationCap } from "lucide-react";
import SectionTitle from "./SectionTitle";

const education = [
  {
    degree: "B.Tech in Electronics & Communication Engineering",
    school: "Jaypee Institute of Information Technology",
    year: "2021 – 2025",
  },
  {
    degree: "Class XII (CBSE)",
    school: "Kautilya Senior Secondary School",
    year: "",
  },
];

const EducationSection = () => (
  <section id="education" className="py-20 px-6 bg-secondary/30">
    <div className="max-w-6xl mx-auto">
      <SectionTitle title="Education" />
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {education.map((e) => (
          <div key={e.degree} className="bg-card rounded-2xl p-8 card-shadow">
            <GraduationCap className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-1">{e.degree}</h3>
            <p className="text-muted-foreground">{e.school}</p>
            {e.year && <p className="text-sm text-primary mt-2 font-medium">{e.year}</p>}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;

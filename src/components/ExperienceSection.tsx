import { Briefcase } from "lucide-react";
import SectionTitle from "./SectionTitle";

const experiences = [
  {
    role: "Database Management Intern",
    company: "TAuncharted",
    duration: "Apr 2026 – Present",
    points: [
      "Collected, cleaned, validated, and analyzed datasets using Microsoft Excel and SQL",
      "Identified data quality issues and implemented data validation checks",
      "Generated analytical reports and dashboards to support business decision-making",
      "Maintained data accuracy, consistency, and integrity across datasets",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "CodTech IT Solutions",
    duration: "Jun 2024 – Aug 2024",
    points: [
      "Performed exploratory data analysis on Titanic dataset containing 891+ records",
      "Cleaned and preprocessed datasets using Python (Pandas)",
      "Built Linear Regression model on California Housing dataset",
      "Improved dataset quality for better model performance",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Skilledity Solutions Private Limited",
    duration: "Aug 2024 – Mar 2025",
    points: [
      "Developed responsive UI using React and Tailwind CSS",
      "Integrated REST APIs for dynamic data handling",
      "Optimized components for better performance",
      "Collaborated with team using Git and GitHub",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 px-6 bg-secondary/20">
    <div className="max-w-5xl mx-auto">
      <SectionTitle title="Experience" />

      <div className="relative mt-16">
        {/* vertical line */}
        <div className="absolute left-4 top-0 h-full w-[2px] bg-primary/20" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start gap-6">
              
              {/* icon */}
              <div className="relative z-10">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* card */}
              <div className="flex-1 bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <h3 className="font-semibold text-lg">{exp.role}</h3>
                <p className="text-primary font-medium">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {exp.duration}
                </p>

                <ul className="space-y-2">
                  {exp.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
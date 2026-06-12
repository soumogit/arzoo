import SectionTitle from "./SectionTitle";

const skillCategories = [
{
title: "Programming & Querying",
skills: ["Python", "SQL", "C++"]
},
{
title: "Data Analytics",
skills: ["Data Analysis","EDA","Statistical Analysis","KPI Tracking","Data Quality Assessment"]
},
{
title: "Visualization & Reporting",
skills: ["Power BI","Tableau","Excel","DAX","Data Visualization"]
},
{
title: "Databases",
skills: ["MySQL", "MongoDB"]
},
{
title: "Tools & Platforms",
skills: ["Jupyter Notebook","Git","GitHub","VS Code","Postman"]
},
{
  title: "Web Development",
  skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express"]
}
];


const SkillsSection = () => (
  <section
    id="skills"
    className="py-20 px-6 bg-gradient-to-b from-white to-blue-50/40 relative overflow-hidden"
  >
    {/* subtle background glow */}
    <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 opacity-10 blur-3xl rounded-full"></div>

    <div className="relative z-10 max-w-6xl mx-auto">
      <SectionTitle
        title="Skills"
        subtitle="Technologies and tools I work with"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
        {skillCategories.map((cat) => (
          <div
            key={cat.title}
            className="bg-white/70 backdrop-blur-md border border-border rounded-2xl p-6 
            shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
          >
            <h3 className="font-semibold text-lg mb-4 text-foreground group-hover:text-primary transition">
              {cat.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full text-sm font-medium 
                  bg-secondary/60 backdrop-blur border border-border
                  hover:bg-primary/10 hover:text-primary transition"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
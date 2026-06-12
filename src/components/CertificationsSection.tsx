import { Award } from "lucide-react";
import SectionTitle from "./SectionTitle";

const certs = [
  "OCI Data Science Professional – Oracle",
  "OCI Generative AI Professional – Oracle",
  "Data Analysis with Python",
  "SQL for Data Analysis",
];

const CertificationsSection = () => (
  <section className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionTitle title="Certifications" />
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certs.map((c) => (
          <div key={c} className="bg-card rounded-2xl p-6 card-shadow flex items-center gap-4 hover:card-shadow-hover transition-all duration-300">
            <Award className="w-8 h-8 text-primary shrink-0" />
            <p className="font-medium">{c}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;

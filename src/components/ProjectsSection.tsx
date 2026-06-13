import { useState } from "react";
// Added Landmark, Activity, and ShoppingBag to the imports
import {
  X,
  Github,
  BarChart3,
  ShoppingCart,
  Palette,
  CheckCircle2,
  Landmark,
  Activity,
  ShoppingBag
} from "lucide-react";
import SectionTitle from "./SectionTitle";

// Updated paths to match your new files
import vendorImg from "@/assets/project-vendor.jpg";
import zeptoImg from "@/assets/project-zepto.jpg";
import webcamImg from "@/assets/project-webcam.jpg";
import bankingImg from "@/assets/banking-image.png";
import ecommerceImg from "@/assets/e-commerce.png";
import healthAiImg from "@/assets/healthcare.png";
import googleSheetImg from "@/assets/google-sheet.png";
import creditRiskImg from "@/assets/credit-risk.png";

const projects = [
  {
    title: "Vendor Performance Analysis",
    icon: BarChart3,
    summary: "Reduced procurement cost by 72% through data-driven analysis",
    image: vendorImg,
    github: "https://github.com/arzoo7617/Vendor-Performance-Analysis",
    description: "Comprehensive vendor performance analysis project that identified key cost reduction opportunities and optimized procurement processes.",
    highlights: ["Reduced procurement cost by 72%", "Identified $2.71M unsold inventory", "Built interactive Power BI dashboard", "Analyzed vendor performance metrics"],
    technologies: ["Power BI", "Excel", "Data Analysis"],
  },
  {
    title: "Zepto Inventory Dashboard",
    icon: ShoppingCart,
    summary: "Built comprehensive inventory analytics dashboard",
    image: zeptoImg,
    github: "https://github.com/arzoo7617/Zepto-Inventory-Dataset",
    description: "Developed an interactive Power BI dashboard to analyze inventory trends, revenue patterns, and stock management for 3000+ SKUs.",
    highlights: ["Analyzed 3000+ SKUs", "Built Power BI dashboards using DAX", "Visualized revenue and stock trends", "Implemented KPI tracking"],
    technologies: ["Power BI", "DAX", "Data Modeling"],
  },
  {
    title: "Webcam Palette",
    icon: Palette,
    summary: "Gesture-based drawing tool using computer vision",
    image: webcamImg,
    github: "https://github.com/arzoo7617/Webcam_Palette",
    description: "Interactive drawing application that uses computer vision to detect hand gestures and enable drawing in the air using a webcam.",
    highlights: ["Built gesture-based drawing tool", "Used OpenCV and Python", "Implemented color detection", "Real-time gesture recognition"],
    technologies: ["Python", "OpenCV", "Computer Vision"],
  },
  {
      title: "Google Sheet 2024",
      icon: BarChart3,
      summary: "Built a web-based spreadsheet application with real-time data synchronization",
      image: googleSheetImg,
      github: "https://github.com/arzoo7617/Google-Sheet",
      description: "Developed a spreadsheet application inspired by Google Sheets using vanilla JavaScript, HTML, and CSS, featuring live data synchronization and dynamic cell updates.",
      highlights: [
        "Implemented two-way data binding",
        "Built spreadsheet-like grid interface",
        "Enabled real-time cell synchronization",
        "Developed using vanilla JavaScript, HTML, and CSS"
      ],
      technologies: ["JavaScript", "HTML", "CSS", "DOM Manipulation"],
  },
  {
    title: "Credit Risk Analysis",
    icon: BarChart3,
    summary: "Built a credit risk assessment system using logistic regression",
    image: creditRiskImg,
    github: "https://github.com/arzoo7617/Credit-Risk-Analysis",
    description: "Developed an end-to-end credit risk analysis solution leveraging logistic regression-based scorecard modeling to estimate Probability of Default (PD) and support data-driven lending decisions.",
    highlights: [
      "Built logistic regression-based PD scorecard model",
      "Analyzed credit score, DTI, and repayment behavior",
      "Created interactive Power BI risk dashboard",
      "Automated credit grading and approval recommendations"
    ],
    technologies: ["Python", "Logistic Regression", "Pandas", "Scikit-Learn"],
  },
  {
    title: "HealthAI Predictor",
    icon: Activity,
    summary: "Predictive analytics for healthcare providers",
    image: healthAiImg,
    github: "https://github.com/arzoo7617/HealthAI-Predictor",
    description: "A machine learning project that analyzes patient vitals to predict readmission risks with high accuracy.",
    highlights: ["94% Prediction Accuracy", "Real-time Data Visualization", "FastAPI Model Deployment", "Feature Engineering on 1M+ Records"],
    technologies: ["Python", "TensorFlow", "Scikit-Learn", "FastAPI"],
  }
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Projects" subtitle="Featured data analytics projects" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setSelected(i)}
              className="bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover hover:-translate-y-2 transition-all duration-300 text-left group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <p.icon className="w-8 h-8 text-primary drop-shadow-lg" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.summary}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-card rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto card-shadow animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-52 overflow-hidden rounded-t-2xl">
              <img
                src={projects[selected].image}
                alt={projects[selected].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 bg-card/80 backdrop-blur-sm rounded-xl hover:bg-card transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-8 -mt-8 relative">
              <div className="flex items-center gap-3 mb-4">
                {(() => {
                  const Icon = projects[selected].icon;
                  return <Icon className="w-8 h-8 text-primary" />;
                })()}
                <h3 className="font-bold text-xl">{projects[selected].title}</h3>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-2">Description</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {projects[selected].description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Key Highlights</h4>
                <ul className="space-y-2.5">
                  {projects[selected].highlights.map((d) => (
                    <li key={d} className="text-muted-foreground text-sm flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selected].technologies.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1.5 rounded-full gradient-bg text-primary-foreground font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <a
                  href={projects[selected].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 rounded-xl bg-primary px-5 py-3 text-primary-foreground font-medium transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                >
                  <Github className="w-5 h-5" />
                  View Source Code on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;

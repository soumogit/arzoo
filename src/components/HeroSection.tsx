import { ArrowDown, Download, Mail } from "lucide-react";
import heroAvatar from "@/assets/hero-avatar.png";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 px-6 overflow-hidden hero-bg">

      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-20 right-24 grid grid-cols-4 gap-2 opacity-20">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-blue-400 rounded-full"></div>
        ))}
      </div>

      <div className="absolute bottom-32 right-10 grid grid-cols-4 gap-2 opacity-20">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-purple-400 rounded-full"></div>
        ))}
      </div>

      <div className="absolute top-10 right-10 w-40 h-40 border-8 border-blue-100 rounded-full opacity-20"></div>

      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-30"></div>
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-purple-400 rounded-full opacity-30"></div>
      <div className="absolute top-2/3 left-1/2 w-2 h-2 bg-indigo-400 rounded-full opacity-30"></div>

      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-blue-100 to-transparent"></div>

      {/* BLOBS */}
      <div className="blob blob-blue w-72 h-72 top-10 left-10"></div>
      <div className="blob blob-purple w-96 h-96 bottom-10 right-10"></div>
      <div className="blob blob-teal w-52 h-52 top-1/2 left-1/3"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="text-left animate-slide-up">
          <p className="text-primary font-medium mb-2">Hello, I'm</p>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Arzoo <span className="gradient-text">Gupta</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-2 font-medium">
            Full Stack Developer • Data Analyst • Problem Solver
          </p>

          

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-6 py-3 rounded-2xl flex items-center gap-2"
            >
              View Projects <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="bg-card border border-border px-6 py-3 rounded-2xl font-medium flex items-center gap-2 hover:shadow-md transition"
            >
              <Download className="w-4 h-4" /> Resume
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="bg-card border border-border px-6 py-3 rounded-2xl font-medium flex items-center gap-2 hover:shadow-md transition"
            >
              <Mail className="w-4 h-4" /> Contact
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end animate-fade-in">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full gradient-bg p-1">
            <img
              src={heroAvatar}
              alt="Arzoo Gupta"
              className="w-full h-full rounded-full object-cover bg-background"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
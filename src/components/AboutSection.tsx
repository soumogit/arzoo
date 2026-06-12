import { Code, Database, Brain, Zap } from "lucide-react";
import SectionTitle from "./SectionTitle";

const AboutSection = () => (
  <section
    id="about"
    className="py-20 px-6 relative overflow-hidden bg-gradient-to-b from-white to-blue-50/40"
  >
    {/* background glow */}
    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 opacity-10 blur-3xl rounded-full"></div>
    <div className="absolute bottom-10 right-20 w-72 h-72 bg-teal-200 opacity-10 blur-3xl rounded-full"></div>

    <div className="relative z-10 max-w-6xl mx-auto">
      <SectionTitle title="About Me" />

      {/* SHORT INTRO */}
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-6">
        A passionate engineering graduate dedicated to building  
        <span className="text-foreground font-medium"> high-quality software and solving complex problems </span>with simple solutions.
      </p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6 mt-12">

        <div className="p-6 rounded-2xl bg-white/70 backdrop-blur border border-border text-center 
hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group">
          <Code className="w-8 h-8 mx-auto mb-3 text-blue-500" />
          <h3 className="font-semibold mb-1">Full Stack</h3>
          <p className="text-sm text-muted-foreground">Frontend + backend apps</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/70 backdrop-blur border border-border text-center 
hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group">
          <Database className="w-8 h-8 mx-auto mb-3 text-blue-500 group-hover:scale-110 transition" />
          <h3 className="font-semibold mb-1">Backend</h3>
          <p className="text-sm text-muted-foreground">APIs & system logic</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/70 backdrop-blur border border-border text-center 
hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group">
          <Brain className="w-8 h-8 mx-auto mb-3 text-purple-500" />
          <h3 className="font-semibold mb-1">Problem Solving</h3>
          <p className="text-sm text-muted-foreground">DSA & logic building</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/70 backdrop-blur border border-border text-center 
hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group">
          <Zap className="w-8 h-8 mx-auto mb-3 text-yellow-500" />
          <h3 className="font-semibold mb-1">ML</h3>
          <p className="text-sm text-muted-foreground">Predictive models</p>
        </div>

      </div>

      {/* QUICK HIGHLIGHTS */}
      <div className="mt-12 max-w-3xl mx-auto grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
        <p>✔ Built multiple full-stack & data analytics projects</p>
        <p>✔ Experience with real datasets</p>
        <p>✔ Experience with modern web technologies</p>
        <p>✔ Focused on practical impact</p>
      </div>
    </div>
  </section>
);

export default AboutSection;
import { TrendingDown, DollarSign, BarChart, Lightbulb } from "lucide-react";
import SectionTitle from "./SectionTitle";

const achievements = [
  { icon: TrendingDown, label: "Cost Reduction", value: "72%" },
  { icon: DollarSign, label: "Inventory Identified", value: "$2.71M" },
  { icon: BarChart, label: "Interactive Dashboards", value: "Built" },
  { icon: Lightbulb, label: "Data Insights", value: "Delivered" },
];

const AchievementsSection = () => (
  <section className="py-20 px-6 bg-secondary/30">
    <div className="max-w-6xl mx-auto">
      <SectionTitle title="Achievements" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((a) => (
          <div key={a.label} className="bg-card rounded-2xl p-6 card-shadow text-center">
            <a.icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-2xl md:text-3xl font-bold gradient-text mb-1">{a.value}</p>
            <p className="text-sm text-muted-foreground">{a.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;

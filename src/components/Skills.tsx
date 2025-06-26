import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core SAP Technologies",
      skills: [
        "BAPI",
        "BDC",
        "Web-services",
        "RFC",
        "PO",
        "IDOC",
        "BADI",
        "User-Exits",
      ],
    },
    {
      title: "Development Frameworks",
      skills: [
        "Enhancements Framework",
        "Adobe Life Cycle Designer",
        "XLSX Workbench",
        "ZWWW",
        "BOBF",
        "AIF",
      ],
    },
    {
      title: "Modern SAP Stack",
      skills: ["Web Dynpro ABAP", "oData", "CDS", "AMDP", "RF Framework"],
    },
    {
      title: "SAP Modules",
      skills: [
        "MM (Materials Management)",
        "SD (Sales & Distribution)",
        "PP (Production Planning)",
        "FI (Financial Accounting)",
        "TM (Transportation Management)",
        "EHS (Environment, Health & Safety)",
        "OOP (Object-Oriented Programming)",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-6 font-montserrat">
            Технические навыки
          </h2>
          <div className="w-24 h-1 bg-[#9b87f5] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Глубокая экспертиза в SAP технологиях и современных подходах к
            разработке
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow animate-fade-in"
            >
              <CardHeader>
                <CardTitle className="text-xl text-[#1A1F2C] font-semibold">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-[#D6BCFA] text-[#1A1F2C] rounded-full text-sm font-medium hover:bg-[#9b87f5] hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-8 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white">
            <CardContent className="space-y-4">
              <h3 className="text-2xl font-bold">Профессиональный уровень</h3>
              <p className="text-lg">
                Senior-level экспертиза в SAP ABAP разработке с фокусом на
                производительность и качество кода
              </p>
              <div className="flex justify-center space-x-8 text-center">
                <div>
                  <div className="text-3xl font-bold">Advanced</div>
                  <div className="text-sm opacity-90">ABAP OOP</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">Expert</div>
                  <div className="text-sm opacity-90">Integrations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">Senior</div>
                  <div className="text-sm opacity-90">Architecture</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;

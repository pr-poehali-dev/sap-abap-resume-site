import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Experience = () => {
  const experiences = [
    {
      company: "ПАО Газпром",
      position: "Senior SAP ABAP Developer",
      period: "2020 - настоящее время",
      description:
        "Разработка и поддержка корпоративных решений для крупнейшей энергетической компании России",
      achievements: [
        "Оптимизация производительности критических отчетов на 40%",
        "Разработка интеграций между SAP ERP и внешними системами",
        "Внедрение SAP Fiori приложений для мобильного доступа",
      ],
    },
    {
      company: "Сбербанк Технологии",
      position: "SAP ABAP Developer",
      position_en: "SAP ABAP Developer",
      period: "2018 - 2020",
      description:
        "Участие в проектах цифровой трансформации банковских процессов",
      achievements: [
        "Создание автоматизированных workflow для кредитного процесса",
        "Разработка пользовательских BAPI для интеграции с банковскими системами",
        "Поддержка и развитие модулей FI и CO",
      ],
    },
    {
      company: "Консалтинговая группа АДМ",
      position: "Junior SAP ABAP Developer",
      period: "2016 - 2018",
      description:
        "Начало карьеры в SAP разработке, участие в проектах внедрения",
      achievements: [
        "Освоение основ SAP ABAP программирования",
        "Создание пользовательских отчетов и форм",
        "Участие в проектах внедрения SAP ERP",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-6 font-montserrat">
            Опыт работы
          </h2>
          <div className="w-24 h-1 bg-[#9b87f5] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Карьерный путь от junior до senior разработчика в ведущих компаниях
            России
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#D6BCFA] hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:ml-16">
                {/* Timeline dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-[#9b87f5] rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                <Card className="hover:shadow-lg transition-shadow animate-fade-in">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div>
                        <CardTitle className="text-xl text-[#1A1F2C] mb-2">
                          {exp.position}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-[#9b87f5] font-semibold">
                          <Icon name="Building2" size={16} />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Icon name="Calendar" size={16} />
                        {exp.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-[#1A1F2C] mb-3">
                        Ключевые достижения:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map(
                          (achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="flex items-start gap-3"
                            >
                              <Icon
                                name="CheckCircle"
                                size={16}
                                className="text-[#9b87f5] mt-0.5 flex-shrink-0"
                              />
                              <span className="text-gray-700">
                                {achievement}
                              </span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

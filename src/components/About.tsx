import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-6 font-montserrat">
            О себе
          </h2>
          <div className="w-24 h-1 bg-[#9b87f5] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Icon name="User" size={24} className="text-[#9b87f5]" />
                    <span className="text-lg font-semibold">
                      Профессиональная экспертиза
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Более 8 лет разрабатываю корпоративные решения на платформе
                    SAP. Имею глубокие знания в области интеграций,
                    автоматизации бизнес-процессов и оптимизации
                    производительности системы.
                  </p>

                  <div className="flex items-center gap-4">
                    <Icon name="Award" size={24} className="text-[#9b87f5]" />
                    <span className="text-lg font-semibold">Достижения</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Успешно реализовал более 50 проектов различной сложности, от
                    создания пользовательских отчетов до комплексных
                    интеграционных решений. Сертифицированный SAP специалист.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <Icon
                    name="Calendar"
                    size={32}
                    className="text-[#9b87f5] mx-auto"
                  />
                  <div>
                    <div className="text-3xl font-bold text-[#1A1F2C]">8+</div>
                    <div className="text-gray-600">лет опыта</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <Icon
                    name="FolderCheck"
                    size={32}
                    className="text-[#9b87f5] mx-auto"
                  />
                  <div>
                    <div className="text-3xl font-bold text-[#1A1F2C]">50+</div>
                    <div className="text-gray-600">проектов</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <Icon
                    name="Building2"
                    size={32}
                    className="text-[#9b87f5] mx-auto"
                  />
                  <div>
                    <div className="text-3xl font-bold text-[#1A1F2C]">15+</div>
                    <div className="text-gray-600">компаний</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <Icon
                    name="Award"
                    size={32}
                    className="text-[#9b87f5] mx-auto"
                  />
                  <div>
                    <div className="text-3xl font-bold text-[#1A1F2C]">5</div>
                    <div className="text-gray-600">сертификатов</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

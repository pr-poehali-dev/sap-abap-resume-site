import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] text-white"
    >
      <div className="container mx-auto px-6">
        <div className="animate-fade-in flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Профессиональная фотография */}
          <div className="flex-shrink-0 order-2 lg:order-1">
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Иван Петров - Senior SAP ABAP Developer"
                className="w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-2xl border-4 border-white/20 transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Текстовый контент */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-montserrat">
              Иван Петров
            </h1>
            <h2 className="text-2xl md:text-3xl text-[#D6BCFA] mb-8 font-light">
              Senior SAP ABAP Developer
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              Опытный SAP ABAP разработчик с 8+ лет практики создания
              корпоративных решений. Специализируюсь на интеграциях, разработке
              отчетов и оптимизации бизнес-процессов.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("about")}
                className="bg-white text-[#9b87f5] hover:bg-gray-100 px-8 py-3 text-lg"
              >
                Узнать больше
                <Icon name="ArrowDown" size={20} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contacts")}
                className="border-white text-white hover:bg-white hover:text-[#9b87f5] px-8 py-3 text-lg"
              >
                Связаться
                <Icon name="Mail" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

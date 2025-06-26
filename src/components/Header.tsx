import React from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-[#1A1F2C]">Иван Петров</div>
          <div className="hidden md:flex space-x-6">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-[#9b87f5]"
            >
              Главная
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-[#9b87f5]"
            >
              О себе
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("skills")}
              className="text-gray-700 hover:text-[#9b87f5]"
            >
              Навыки
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("experience")}
              className="text-gray-700 hover:text-[#9b87f5]"
            >
              Опыт работы
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contacts")}
              className="text-gray-700 hover:text-[#9b87f5]"
            >
              Контакты
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

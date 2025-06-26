import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const contactInfo = [
    {
      icon: "Mail",
      label: "Email",
      value: "ivan.petrov@email.com",
      link: "mailto:ivan.petrov@email.com",
    },
    {
      icon: "Phone",
      label: "Телефон",
      value: "+7 (999) 123-45-67",
      link: "tel:+79991234567",
    },
    {
      icon: "MapPin",
      label: "Местоположение",
      value: "Москва, Россия",
      link: null,
    },
    {
      icon: "Linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/ivanpetrov",
      link: "https://linkedin.com/in/ivanpetrov",
    },
  ];

  return (
    <section
      id="contacts"
      className="py-20 bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] text-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Контакты
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Готов обсудить новые проекты и возможности сотрудничества
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Свяжитесь со мной</h3>
                  <div className="space-y-6">
                    {contactInfo.map((contact, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <Icon name={contact.icon as any} size={20} />
                        </div>
                        <div>
                          <div className="text-sm opacity-75">
                            {contact.label}
                          </div>
                          {contact.link ? (
                            <a
                              href={contact.link}
                              className="text-lg hover:text-[#D6BCFA] transition-colors"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <div className="text-lg">{contact.value}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Быстрое сообщение
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-white/75 mb-2">
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                        placeholder="Введите ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/75 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/75 mb-2">
                        Сообщение
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                        placeholder="Расскажите о вашем проекте..."
                      />
                    </div>
                    <Button className="w-full bg-white text-[#9b87f5] hover:bg-gray-100 py-3 text-lg font-semibold">
                      Отправить сообщение
                      <Icon name="Send" size={20} className="ml-2" />
                    </Button>
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

export default Contacts;

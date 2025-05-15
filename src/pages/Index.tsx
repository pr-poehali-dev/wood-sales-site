
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeTab, setActiveTab] = useState("каталог");

  const products = [
    {
      id: 1,
      title: "Берёзовые дрова",
      description: "Классические берёзовые дрова с высокой теплоотдачей и приятным ароматом",
      price: 1500,
      unit: "м³",
      image: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Дубовые дрова",
      description: "Премиальные дубовые дрова с длительным временем горения и высокой энергоотдачей",
      price: 2200,
      unit: "м³",
      image: "https://images.unsplash.com/photo-1551526793-2325c12198cf?q=80&w=1469&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Топливные брикеты",
      description: "Экологичные брикеты из спрессованных опилок для удобного использования",
      price: 800,
      unit: "100 кг",
      image: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=1470&auto=format&fit=crop",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Как правильно хранить дрова зимой",
      description: "Полезные советы для длительного хранения дров в холодное время года...",
      date: "12 мая 2025",
      image: "https://images.unsplash.com/photo-1600623471616-8c1966c91ff4?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Различия между видами древесины для отопления",
      description: "Сравнение различных пород дерева и их характеристик для отопления...",
      date: "5 мая 2025",
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1374&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white flex flex-col">
      {/* Шапка */}
      <header className="sticky top-0 z-10 border-b border-gray-800 bg-[#1A1F2C]/90 backdrop-blur-sm">
        <div className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Flame" className="h-8 w-8 text-[#8B5CF6]" />
            <span className="font-bold text-xl md:text-2xl font-['Montserrat']">ТеплоДрев</span>
          </div>
          
          <nav className="hidden md:flex gap-6">
            {["Главная", "Каталог", "Доставка", "Блог", "Контакты"].map((item) => (
              <button 
                key={item} 
                className="hover:text-[#8B5CF6] transition-colors" 
                onClick={() => setActiveTab(item.toLowerCase())}
              >
                {item}
              </button>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Icon name="ShoppingCart" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" />
            </Button>
          </div>
        </div>
      </header>

      {/* Главный баннер */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=1740&auto=format&fit=crop" 
            alt="Дрова" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F2C] to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 py-20 h-full flex flex-col justify-center relative z-1">
          <h1 className="text-4xl md:text-6xl font-bold max-w-2xl font-['Montserrat'] mb-4">
            Качественные дрова с доставкой по всему региону
          </h1>
          <p className="text-lg md:text-xl max-w-xl mb-8 text-gray-300">
            Мы предлагаем отборную древесину высшего качества для отопления вашего дома
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-[#8B5CF6] hover:bg-[#7c4ddb] text-white">
              Выбрать дрова
            </Button>
            <Button variant="outline" className="border-[#8B5CF6] text-[#8B5CF6]">
              Консультация
            </Button>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-[#1F2535]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center font-['Montserrat']">Почему выбирают нас</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "Trees",
                title: "Экологичность",
                description: "Мы предлагаем только экологически чистую древесину из легальных источников"
              },
              {
                icon: "Truck",
                title: "Быстрая доставка",
                description: "Доставляем дрова в течение 1-2 дней после заказа в удобное для вас время"
              },
              {
                icon: "ThumbsUp",
                title: "Гарантия качества",
                description: "Тщательно отбираем и проверяем каждую партию дров перед отправкой"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-[#1A1F2C] p-6 rounded-lg flex flex-col items-center text-center">
                <div className="bg-[#2A304A] p-4 rounded-full mb-4">
                  <Icon name={feature.icon} className="h-8 w-8 text-[#8B5CF6]" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-['Montserrat']">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Основной контент */}
      <main className="flex-1 container mx-auto px-4 md:px-6 py-16">
        <Tabs defaultValue="каталог" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8 bg-[#2A304A] p-1">
            <TabsTrigger value="каталог">Каталог</TabsTrigger>
            <TabsTrigger value="доставка">Доставка</TabsTrigger>
            <TabsTrigger value="блог">Блог</TabsTrigger>
          </TabsList>
          
          <TabsContent value="каталог">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="bg-[#2A304A] border-none overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{product.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between">
                    <span className="text-xl font-bold text-[#8B5CF6]">
                      {product.price} ₽/{product.unit}
                    </span>
                    <Button size="sm">
                      <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                      Заказать
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="доставка">
            <div className="bg-[#2A304A] rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 font-['Montserrat']">Условия доставки</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 font-['Montserrat']">Зоны доставки</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircle" className="h-5 w-5 text-green-500" />
                      <span>Город — 500 ₽</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircle" className="h-5 w-5 text-green-500" />
                      <span>До 30 км от города — 1000 ₽</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircle" className="h-5 w-5 text-green-500" />
                      <span>От 30 до 60 км — 1500 ₽</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="AlertCircle" className="h-5 w-5 text-yellow-500" />
                      <span>Свыше 60 км — по договоренности</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 font-['Montserrat']">Время доставки</h3>
                  <p className="text-gray-300 mb-4">
                    Доставка осуществляется ежедневно с 9:00 до 18:00.
                    Время согласовывается с менеджером при оформлении заказа.
                  </p>
                  <div className="flex items-center gap-2 text-yellow-500">
                    <Icon name="AlertCircle" />
                    <span>При заказе от 5 м³ — доставка бесплатно!</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-[#1A1F2C] rounded-lg">
                <h3 className="text-xl font-bold mb-4 font-['Montserrat']">Как заказать</h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="bg-[#8B5CF6] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold">Выберите товар</h4>
                      <p className="text-gray-400">Из нашего каталога и укажите необходимое количество</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-[#8B5CF6] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold">Оформите заказ</h4>
                      <p className="text-gray-400">По телефону или через форму на сайте</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-[#8B5CF6] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold">Дождитесь звонка</h4>
                      <p className="text-gray-400">Наш менеджер свяжется с вами для уточнения деталей</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-[#8B5CF6] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-bold">Получите дрова</h4>
                      <p className="text-gray-400">В согласованное время наши сотрудники доставят заказ</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="блог">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-[#2A304A] rounded-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 h-60 md:h-auto">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <span className="text-sm text-gray-400">{post.date}</span>
                      <h3 className="text-xl font-bold mt-2 mb-4 font-['Montserrat']">{post.title}</h3>
                      <p className="text-gray-300 mb-4">{post.description}</p>
                      <Button variant="ghost" className="text-[#8B5CF6] hover:text-[#7c4ddb] p-0">
                        Читать далее
                        <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="text-center mt-8">
                <Button variant="outline" className="border-[#8B5CF6] text-[#8B5CF6]">
                  Все статьи
                  <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Форма заказа */}
      <section className="py-16 bg-[#2A304A]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-['Montserrat']">Заказать дрова</h2>
            <p className="text-gray-300 mb-8">Оставьте заявку, и мы свяжемся с вами для уточнения деталей заказа</p>
            
            <div className="bg-[#1A1F2C] p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="bg-[#2A304A] rounded-md p-3 w-full border-transparent focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] outline-none"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="bg-[#2A304A] rounded-md p-3 w-full border-transparent focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] outline-none"
                />
              </div>
              <textarea 
                placeholder="Опишите ваш заказ (тип дров, количество)" 
                rows={4}
                className="bg-[#2A304A] rounded-md p-3 w-full mb-4 border-transparent focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] outline-none"
              />
              <Button className="w-full bg-[#8B5CF6] hover:bg-[#7c4ddb]">
                Отправить заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-[#1A1F2C] border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Flame" className="h-6 w-6 text-[#8B5CF6]" />
                <span className="font-bold text-xl font-['Montserrat']">ТеплоДрев</span>
              </div>
              <p className="text-gray-400">
                Качественные дрова для отопления вашего дома с доставкой
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 font-['Montserrat']">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#8B5CF6]">Берёзовые дрова</a></li>
                <li><a href="#" className="hover:text-[#8B5CF6]">Дубовые дрова</a></li>
                <li><a href="#" className="hover:text-[#8B5CF6]">Топливные брикеты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 font-['Montserrat']">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#8B5CF6]">О компании</a></li>
                <li><a href="#" className="hover:text-[#8B5CF6]">Доставка</a></li>
                <li><a href="#" className="hover:text-[#8B5CF6]">Блог</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 font-['Montserrat']">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4 text-[#8B5CF6]" />
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4 text-[#8B5CF6]" />
                  <span>info@teplodreva.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-4 w-4 text-[#8B5CF6]" />
                  <span>г. Красноярск, ул. Лесная, 42</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">© 2025 ТеплоДрев. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#8B5CF6]">
                <Icon name="Instagram" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#8B5CF6]">
                <Icon name="Facebook" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#8B5CF6]">
                <Icon name="Twitter" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

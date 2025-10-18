import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "User",
    title: "Покупка аватарок",
    description: "Создание аватарок на ваш вкус и цвет, могу предложить свой фон и персонажей",
    price: "30 ₽"
  },
  {
    icon: "Smartphone",
    title: "Мобильные приложения",
    description: "Разработка нативных и кроссплатформенных приложений для iOS и Android",
    price: "от 80 000 ₽"
  },
  {
    icon: "Palette",
    title: "UI/UX Дизайн",
    description: "Проектирование интуитивных интерфейсов и пользовательского опыта",
    price: "от 30 000 ₽"
  },
  {
    icon: "Rocket",
    title: "SEO Оптимизация",
    description: "Продвижение сайта в поисковых системах и увеличение органического трафика",
    price: "от 20 000 ₽"
  },
  {
    icon: "Shield",
    title: "Кибербезопасность",
    description: "Аудит безопасности, защита от взломов и утечек данных",
    price: "от 40 000 ₽"
  },
  {
    icon: "Zap",
    title: "Автоматизация",
    description: "Разработка ботов, скриптов и автоматизация бизнес-процессов",
    price: "от 25 000 ₽"
  }
];

const pricingPlans = [
  {
    name: "Старт",
    price: "15 000",
    period: "мес",
    features: [
      "1 цифровая услуга",
      "Базовая поддержка",
      "Email консультации",
      "Доступ к документации"
    ],
    popular: false
  },
  {
    name: "Профи",
    price: "35 000",
    period: "мес",
    features: [
      "3 цифровые услуги",
      "Приоритетная поддержка",
      "Персональный менеджер",
      "Техническая документация",
      "Аналитика и отчёты"
    ],
    popular: true
  },
  {
    name: "Энтерпрайз",
    price: "75 000",
    period: "мес",
    features: [
      "Неограниченные услуги",
      "24/7 поддержка",
      "Выделенная команда",
      "Индивидуальные решения",
      "Полная аналитика",
      "SLA гарантии"
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: "Алексей Петров",
    role: "CEO, TechStart",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    text: "Отличная работа! Команда разработала нам сайт за 2 недели. Качество на высоте, все пожелания учтены.",
    rating: 5
  },
  {
    name: "Мария Соколова",
    role: "Маркетолог, Digital Pro",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    text: "SEO оптимизация принесла результаты уже через месяц. Трафик вырос в 3 раза. Рекомендую!",
    rating: 5
  },
  {
    name: "Дмитрий Иванов",
    role: "Основатель, StartupHub",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry",
    text: "Профессиональный подход к делу. Создали мобильное приложение точно в срок и в рамках бюджета.",
    rating: 5
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <div className="cyber-grid fixed inset-0 opacity-30 pointer-events-none"></div>
      
      <header className="relative border-b border-primary/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold glow-text">МЕТЕОРИТ STUDIO</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Прайс</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border">
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      <main className="relative">
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge className="bg-primary/20 text-primary border-primary/50 mb-4">
              Цифровые решения будущего
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Превратим ваши идеи в <span className="text-primary glow-text">цифровую реальность</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Разработка сайтов, приложений и цифровых продуктов с использованием передовых технологий
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border text-lg">
                <Icon name="Rocket" className="mr-2" size={20} />
                Начать проект
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-lg">
                <Icon name="Play" className="mr-2" size={20} />
                Посмотреть работы
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Наши <span className="text-primary">услуги</span></h3>
            <p className="text-muted-foreground text-lg">Полный спектр цифровых решений для вашего бизнеса</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:glow-border group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <Icon name={service.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="pricing" className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Тарифы и <span className="text-primary">цены</span></h3>
            <p className="text-muted-foreground text-lg">Выберите подходящий план для вашего проекта</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`bg-card/50 backdrop-blur border-primary/20 relative ${
                  plan.popular ? 'border-primary glow-border scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground"> ₽/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="reviews" className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Отзывы <span className="text-primary">клиентов</span></h3>
            <p className="text-muted-foreground text-lg">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full ring-2 ring-primary/50"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm">{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-primary fill-primary" size={16} />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <Card className="bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/50 glow-border">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Готовы начать свой <span className="text-primary glow-text">цифровой проект</span>?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Свяжитесь с нами сегодня и получите бесплатную консультацию по вашему проекту
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border text-lg">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="relative border-t border-primary/20 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-primary" size={24} />
              <span className="font-bold">МЕТЕОРИТ STUDIO</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Все права защищены
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
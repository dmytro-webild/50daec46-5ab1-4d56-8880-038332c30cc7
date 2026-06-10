"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Award, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="large"
        background="noise"
        cardStyle="subtle-shadow"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Главная",
          id: "#hero",
        },
        {
          name: "О нас",
          id: "#about",
        },
        {
          name: "Подход",
          id: "#approach",
        },
        {
          name: "Услуги",
          id: "#services",
        },
        {
          name: "Интерьер",
          id: "#interior",
        },
        {
          name: "Отзывы",
          id: "#testimonials",
        },
        {
          name: "Контакты",
          id: "#contact",
        },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=su7jtx"
      logoAlt="Black Cut Logo"
      brandName="Black Cut"
      button={{
        text: "Записаться",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "plain",
      }}
      title="Black Cut Barbershop"
      description="Искусство стрижки и бритья в Алматы. Откройте для себя ваш идеальный образ."
      buttons={[
        {
          text: "Записаться",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/handsome-stylish-bearded-male-with-tattoo-arm-dressed-flannel-shirt-holding-juice-while-getting-haircut_613910-5727.jpg"
      imageAlt="Modern dark barbershop interior"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/young-handsome-man-correcting-shirt-brick-wall_176420-14646.jpg",
          alt: "Клиент доволен стрижкой",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-man-hair-salon_23-2150665449.jpg",
          alt: "Улыбающийся клиент",
        },
        {
          src: "http://img.b2bpic.net/free-photo/three-bearded-interracial-friends-drink-craft-beer-brewery-two-hipster-workers-aprons-drink-beer-with-their-friend-brewery-factory_613910-20510.jpg",
          alt: "Мужчина с новой прической",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-attractive-bearded-young-man-from-spain-elegant-gray-shirt_181624-58370.jpg",
          alt: "Стильный клиент после бритья",
        },
        {
          src: "http://img.b2bpic.net/free-photo/brutal-bearded-male-with-crossed-arms-dressed-yellow-plaid-shirt_613910-1818.jpg",
          alt: "Молодой человек с ухоженной бородой",
        },
      ]}
      avatarText="Более 1000 довольных клиентов"
      marqueeItems={[
        {
          type: "text",
          text: "Идеальные стрижки",
        },
        {
          type: "text",
          text: "Королевское бритье",
        },
        {
          type: "text",
          text: "Уход за бородой",
        },
        {
          type: "text",
          text: "Стильный образ",
        },
        {
          type: "text",
          text: "Премиум сервис",
        },
      ]}
      marqueeSpeed={30}
      showMarqueeCard={true}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="О нас"
      title="Традиции и Мастерство"
      description="Black Cut – это не просто барбершоп, это место, где традиции мужской стрижки встречаются с современными трендами. Мы создаем идеальный образ, подчеркивающий вашу индивидуальность."
      subdescription="Наша философия основана на безупречном качестве, внимании к деталям и комфортной атмосфере для каждого клиента."
      icon={Award}
      imageSrc="http://img.b2bpic.net/free-photo/brush-element-shaving-tool-close-up-berber-shop_1303-20672.jpg"
      imageAlt="Classic barbershop interior with barber tools"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="approach" data-section="approach">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Искусство Каждой Детали"
      description="Мы верим, что настоящая красота кроется в деталях. Наш подход к каждому клиенту – это тщательно продуманный ритуал, который начинается с консультации и заканчивается идеальным результатом."
      tag="Наш Подход"
      accordionItems={[
        {
          id: "approach-1",
          title: "Консультация и Диагностика",
          content: "Перед каждой стрижкой наш мастер проводит индивидуальную консультацию, чтобы понять ваши пожелания и особенности структуры волос.",
        },
        {
          id: "approach-2",
          title: "Индивидуальный Подбор Стиля",
          content: "На основе ваших предпочтений и типа лица мы подбираем идеальный стиль, который подчеркнет вашу мужественность и индивидуальность.",
        },
        {
          id: "approach-3",
          title: "Мастерское Выполнение",
          content: "Наши опытные барберы используют только лучшие инструменты и техники, чтобы обеспечить безупречное качество каждой стрижки и бритья.",
        },
        {
          id: "approach-4",
          title: "Уход и Рекомендации",
          content: "После процедуры вы получите рекомендации по уходу за волосами и бородой, а также советы по стайлингу для поддержания идеального образа.",
        },
      ]}
      mediaAnimation="slide-up"
      mediaPosition="left"
      imageSrc="http://img.b2bpic.net/free-photo/funny-worker-amusing-colleague-office-telling-joke_482257-102093.jpg"
      imageAlt="Barber shaving client's face with precision"
    />
  </div>

  <div id="services" data-section="services">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "service-1",
          badge: "Базовая",
          price: "3 000 тг",
          subtitle: "Мужская стрижка любой сложности.",
          buttons: [
            {
              text: "Записаться",
              href: "#contact",
            },
          ],
          features: [
            "Консультация стилиста",
            "Мытье головы и укладка",
            "Уход за волосами",
          ],
        },
        {
          id: "service-2",
          badge: "Для Бороды",
          price: "2 000 тг",
          subtitle: "Профессиональный уход и коррекция бороды.",
          buttons: [
            {
              text: "Записаться",
              href: "#contact",
            },
          ],
          features: [
            "Моделирование бороды",
            "Окантовка и бритье",
            "Уход бальзамом",
          ],
        },
        {
          id: "service-3",
          badge: "Премиум",
          badgeIcon: Sparkles,
          price: "5 000 тг",
          subtitle: "Комплексный уход и королевское бритье.",
          buttons: [
            {
              text: "Записаться",
              href: "#contact",
            },
          ],
          features: [
            "Мужская стрижка",
            "Моделирование бороды",
            "Королевское бритье горячим полотенцем",
            "Маска для лица",
          ],
        },
      ]}
      title="Наши Услуги и Цены"
      description="Выбирайте идеальный стиль с нашими профессионалами. Качество, которое вы заслуживаете."
    />
  </div>

  <div id="interior" data-section="interior">
      <MetricCardEleven
      animationType="opacity"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "metric-1",
          value: "",
          title: "Уютная Зона Ожидания",
          description: "Расслабьтесь в комфортной обстановке, наслаждаясь чашкой кофе или просматривая последние журналы.",
          imageSrc: "http://img.b2bpic.net/free-photo/barber-equipment-working-surface-by-mirror-barbershop_627829-8282.jpg",
          imageAlt: "Barbershop lounge area with dark leather sofa",
        },
        {
          id: "metric-2",
          value: "",
          title: "Современное Рабочее Место",
          description: "Наши рабочие места оборудованы по последнему слову техники для идеальной стрижки и бритья.",
          imageSrc: "http://img.b2bpic.net/free-photo/child-getting-their-hair-blown-salon_23-2150462513.jpg",
          imageAlt: "Barber chair close up in a modern barbershop",
        },
        {
          id: "metric-3",
          value: "",
          title: "Премиальная Косметика",
          description: "Мы используем только высококачественные средства по уходу за волосами и бородой.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-male-self-care-items_23-2150347099.jpg",
          imageAlt: "Barbershop product display on shelves",
        },
      ]}
      title="Наш Интерьер"
      description="Погрузитесь в атмосферу комфорта и стиля, где каждая деталь продумана для вашего удобства."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "test-1",
          name: "Азамат К.",
          role: "Предприниматель",
          testimonial: "Всегда идеальная стрижка и отличный сервис. Лучший барбершоп в Алматы, куда хочется возвращаться.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-man-sitting-chair_23-2149220530.jpg",
          imageAlt: "Фото довольного клиента Азамата",
        },
        {
          id: "test-2",
          name: "Данияр М.",
          role: "Финансист",
          testimonial: "Мастера своего дела! Борода всегда выглядит ухоженной, а стрижка держит форму долго. Рекомендую Black Cut всем друзьям.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-men-bachelor-party_23-2149275459.jpg",
          imageAlt: "Фото довольного клиента Данияра",
        },
        {
          id: "test-3",
          name: "Ерлан С.",
          role: "ИТ-специалист",
          testimonial: "Отличная атмосфера и профессиональный подход. После визита в Black Cut чувствую себя обновленным и стильным.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-mature-woman-drinking-cup-tea-cafeteria_231208-10725.jpg",
          imageAlt: "Фото довольного клиента Ерлана",
        },
        {
          id: "test-4",
          name: "Рамиль И.",
          role: "Дизайнер",
          testimonial: "Каждый раз это как ритуал. Мастера Black Cut точно знают, что нужно, и всегда превосходят ожидания. Просто топ!",
          imageSrc: "http://img.b2bpic.net/free-photo/shot-gloomy-young-bald-male-with-bushy-beard-being-dissatisfied-with-unfair-results-competition-pursuing-lips-trying-hide-his-anger_343059-1713.jpg",
          imageAlt: "Фото довольного клиента Рамиля",
        },
        {
          id: "test-5",
          name: "Тимур Б.",
          role: "Студент",
          testimonial: "Сюда прихожу не только за стрижкой, но и за хорошим настроением. Всегда душевно и профессионально. Мой выбор – Black Cut.",
          imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-redhead-bearded-male-dressed-suit-sunglasses-grey-background_613910-3531.jpg",
          imageAlt: "Фото довольного клиента Тимура",
        },
        {
          id: "test-6",
          name: "Арман Ж.",
          role: "Маркетолог",
          testimonial: "Превосходное обслуживание и внимание к деталям. Стрижка держится идеально, а атмосфера в барбершопе всегда на высоте.",
          imageSrc: "http://img.b2bpic.net/free-photo/rhinoplasty-surgery-concept-with-man-model_23-2150036904.jpg",
          imageAlt: "Фото довольного клиента Армана",
        },
      ]}
      title="Что говорят наши клиенты"
      description="Отзывы тех, кто уже оценил мастерство Black Cut и вернулся за идеальным образом."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      text="Запишитесь на стрижку или бритье в Black Cut сегодня. Мы находимся в самом сердце Алматы и ждем вас!\n\nТелефон: +7 (777) 123-45-67\nАдрес: ул. Панфилова, 100, Алматы\nРабочие часы: Пн-Вс: 10:00 - 22:00"
      buttons={[
        {
          text: "Записаться",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=su7jtx"
      logoAlt="Black Cut Logo"
      logoText="Black Cut"
      columns={[
        {
          title: "Услуги",
          items: [
            {
              label: "Стрижки",
              href: "#services",
            },
            {
              label: "Бритье",
              href: "#services",
            },
            {
              label: "Уход за бородой",
              href: "#services",
            },
          ],
        },
        {
          title: "О нас",
          items: [
            {
              label: "Наша История",
              href: "#about",
            },
            {
              label: "Мастера",
              href: "#about",
            },
            {
              label: "Философия",
              href: "#approach",
            },
          ],
        },
        {
          title: "Контакты",
          items: [
            {
              label: "Связаться",
              href: "#contact",
            },
            {
              label: "Карта",
              href: "#contact",
            },
            {
              label: "WhatsApp",
              href: "https://wa.me/77771234567",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Black Cut. Все права защищены."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

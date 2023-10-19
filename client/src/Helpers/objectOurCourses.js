import hairdresser from './../img/Courses/hairdresser.png';
import barber from './../img/Courses/Barber.png';
import manicure from './../img/Courses/manicure.png';
import hair_extension from './../img/Courses/hair_extension.png';
import brow_maker from './../img/Courses/brow_maker.png';
import lashmaker from './../img/Courses/lashmaker.png';
import da from './../img/Courses/image 22.png';
import aga from './../img/Courses/image 23.png';
import net from './../img/Courses/image 24.png';
const objectOurCourses = [
  {
    img: hairdresser,
    title: 'Парикмахер-стилист',
    price: '20 000',
    aboutImg1: da,
    aboutImg2: aga,
    aboutText1:
      'Если Вы хотите и считаете, что Ваше призвание делать людей красивыми, приходите и станьте образованным и счастливым парикмахером, визажистом, имиджмейкером вместе с нами.',
    aboutText2:
      'В нашей школе Вы сами выбираете удобное для Вас день и время для изучения теории и прохождения индивидуальной практики',
    aboutImg3: net,
    whatYouGetTitle: "-АКТУАЛЬНЫЕ НАВЫКИ-", 
    whatYouGetText: " Кроме базовых техник, основной упор мы даем на трендовые и востребованные навыки! Проработке не только hard, но и soft скиллов для успешной реализации в профессии.",
    whatYouGetTitle2: "-РЕАЛЬНАЯ ПРАКТИКА-",
    whatYouGetText2: "80% отработки на моделях. Работа в малых группах до 8 человек под руководством преподавателя и ассистентов. Ученики отрабатывают минимум по 1-2 модели за занятие.",
    whatYouGetTitle3: "-БУДУЩЕЕ В ВАШИХ РУКАХ-",
    whatYouGetText3: "Наши выпускники получают диплом с государственной лицензией, а мы помогаем им освоиться в профессии. Стажируем и трудоустраиваем лучших.",
  },
  {
    img: barber,
    title: 'Барбер с нуля',
    price: '80 000',
    lessons : {
      lesson1: "История барберинга, введение",
      lesson2: "Основы трихологии",
      lesson3: "Психология общения с клиентами",
      lesson4: "Техника удлиненных стрижек",
      lesson5: "Техника разделения волос на зоны",
    }
  },
  {
    img: manicure,
    title: 'Начинающий мастер маникюра',
    price: '45 000',
  },
  {
    img: hair_extension,
    title: 'Топ-мастер по наращиванию',
    price: '50 000',
  },
  {
    img: brow_maker,
    title: 'Начинающий brow-maker',
    price: '30 000',
  },
  {
    img: lashmaker,
    title: 'Lashmaker за 20 дней',
    price: '18 000',
  },
];

export { objectOurCourses };

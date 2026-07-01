import drillingImage from '../assets/drilling1.webp'
import diamondImage from '../assets/image.webp'
import drilling2Image from '../assets/drilling2.webp'
import drilling3Image from '../assets/drilling3.webp'
import drilling4Image from '../assets/drilling4.webp'

// Short, real brand for the logo/footer. Keyword phrases live in page <h1>s and meta.
export const BRAND = 'РезМастер'
export const TAGLINE = 'Алмазная резка и бурение бетона · Бишкек'
export const COMPANY_NAME = 'Алмазная резка бетона Бишкек'
export const SITE_URL = 'https://rezmaster.kg'

export const contactInfo = {
  city: 'Бишкек',
  locationText: 'Бишкек, Кыргызстан',
  locationLink: 'https://maps.google.com/?q=Bishkek+Kyrgyzstan',
  mapEmbed: 'https://maps.google.com/maps?q=Bishkek%20Kyrgyzstan&t=&z=11&ie=UTF8&iwloc=&output=embed',
  phoneDisplay: '0503 62 12 12',
  phoneLink: 'tel:+996503621212',
  whatsappLink: 'https://wa.me/996503621212',
  email: 'eldarttyy@proton.me',
  emailLink: 'mailto:eldarttyy@proton.me',
  instagram: 'https://instagram.com/rezmaster.kg',
  facebook: 'https://facebook.com/rezmaster.kg',
}

export const services = [
  {
    slug: 'diamond-cutting',
    title: 'Алмазная резка бетона',
    description:
      'Точная резка плит, балок и панелей с чистой кромкой и строгой геометрией для сложных строительных задач.',
    image: diamondImage,
    details:
      'Наши алмазные системы обеспечивают контролируемую резку с минимальной вибрацией, снижая нагрузку на конструкцию и время уборки.',
  },
  {
    slug: 'core-drilling',
    title: 'Алмазное бурение',
    description:
      'Точное бурение отверстий под инженерные сети, вентиляцию, электрику и анкеры с минимальными помехами на объекте.',
    image: drillingImage,
    details:
      'От малых проходок до больших диаметров: выполняем чистые отверстия в железобетоне с применением профессиональных установок и пылеконтроля.',
  },
  {
    slug: 'wall-sawing',
    title: 'Стенорезные работы',
    description:
      'Резка стен по направляющим для вертикальных и горизонтальных резов в проектах реконструкции и расширения.',
    image: drilling2Image,
    details:
      'Выполняем глубокие и ровные резы под двери, окна и конструктивные изменения с использованием гидравлического оборудования.',
  },
  {
    slug: 'floor-sawing',
    title: 'Резка полов и плит',
    description:
      'Мощная резка полов для дорожных работ, траншей и разделения плит с быстрым выездом на объект.',
    image: drilling3Image,
    details:
      'Наши самоходные швонарезчики работают по асфальту и железобетону, сохраняя точную глубину и ровную линию на больших участках.',
  },
]

export const projects = [
  {
    slug: 'industrial-floor-sawing',
    title: 'Промышленная резка полов и устройство траншей',
    location: 'Бишкек',
    completed: '180 м резки траншей с пылеконтролем',
    description:
      'Выполнили точную резку полов под инженерные траншеи на действующем производстве при строгом соблюдении техники безопасности.',
    image: drilling3Image,
  },
  {
    slug: 'commercial-opening-creation',
    title: 'Создание проемов в коммерческом объекте',
    location: 'Бишкек',
    completed: '12 конструктивных проемов под коммерческий формат',
    description:
      'Выполнена стенорезная резка под новые входы и технические проходы в многоуровневом коммерческом здании.',
    image: drilling2Image,
  },
  {
    slug: 'concrete-wall-drilling',
    title: 'Бурение бетонных стен',
    location: 'Бишкек',
    completed: 'Серия точных проходок в несущих стенах',
    description:
      'Выполнили алмазное бурение бетонных стен под инженерные сети и технологические вводы с точной привязкой по проекту.',
    image: drilling4Image,
  },
]

export const faqItems = [
  {
    question: 'В каких городах вы работаете?',
    answer:
      'Наша основная зона работы — Бишкек. Также выполняем выезды по всему Кыргызстану для крупных и срочных проектов.',
  },
  {
    question: 'Безопасно ли вы режете железобетон?',
    answer:
      'Да. Мы специализируемся на резке железобетона профессиональным алмазным оборудованием с соблюдением всех требований безопасности.',
  },
  {
    question: 'Как быстро вы предоставляете смету?',
    answer:
      'Обычно мы отвечаем в тот же день. Для срочных проектов позвоните нам, и мы оперативно организуем оценку.',
  },
  {
    question: 'Выполняете ли вы промышленные и коммерческие проекты?',
    answer:
      'Да. Мы оснащены для работы на промышленных площадках, в коммерческих зданиях и на инфраструктурных объектах.',
  },
]

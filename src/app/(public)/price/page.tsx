import { CheckCircle } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/src/shared/ui/card';
import { Badge } from '@/src/shared/ui/badge';
import { Button } from '@/src/shared/ui/button';
import Title from '@/src/shared/ui/Title/Title';

interface PricingItem {
  title: string;
  description: string;
  price: string;
  features: string[];
  popular: boolean;
  unit?: string;
}

const Price = (): JSX.Element => {
  const exitData: PricingItem[] = [
    {
      title: 'Эконом',
      description: 'Замеры + экспресс расчет',
      price: '3 000',
      unit: 'за услугу',
      features: [
        'Консультация по выбранной вами услуге',
        'Замер одного-двух обьектов отделки',
        'Расчет общей суммы',
      ],
      popular: false,
    },
    {
      title: 'Базовый',
      description: 'Сметный расчет отделки',
      price: '5 000',
      unit: 'за услугу',
      features: [
        '«Базовый» — включает «Эконом» плюс',
        'Материалы + работы + доставки',
        'Отправка на вашу почту/мессенджер',
      ],
      popular: true,
    },
    {
      title: 'Премиум',
      description: 'Геодезия + расчет в отметках',
      price: '10 000',
      unit: 'за услугу',
      features: [
        '«Премиум» — включает «Базовый» плюс',
        'Геодезия',
        'Работа невелиром',
        'Требуемые объемы песка, щебня и т.п.',
        'Расчет машино-механизмов',
        'Расчет всех доп.работ и материалов',
        'Водоотведение',
      ],
      popular: false,
    },
  ];

  const decorativeData: PricingItem[] = [
    {
      title: 'Монтаж утеплителя ЭППС (кв.м)',
      description: 'Толщина 50мм. Под ключ: материал+работы',
      price: '1500',
      unit: 'за м²',
      features: [
        'Подготовка основания/зачистка/смывка',
        'Нанесение грунтовки',
        'Монтаж листа ЭППС на монтажный клей под гребенку',
        'Крепление листа фасадными дюбелями',
      ],
      popular: false,
    },
    {
      title: 'Армирующий / базовый слой (кв.м)',
      description: 'Армирующий/базовый слой. Под ключ: работы+материалы',
      price: '900',
      unit: 'за м²',
      features: [
        'Подготовка основания',
        'Нанесение грунтовки',
        'Устройство грунтовочного слоя',
        'Устройство армирующего слоя / фасадная сетка',
        'Выравнивание армирующего слоя',
      ],
      popular: false,
    },
  ];

  const printedConcreteData = [
    {
      title: 'Водоотведение / лотки ливневки (пог.м)',
      description: 'Стоимость монтажа пластиковых лотков работы+материалы:',
      price: '2000',
      unit: 'пог.м',
      features: [
        'Подготовка жестких, монтажных растворов',
        'Установка лотка в отметках и разуклонках',
        'Защита лотка от повреждений при укладке бетона',
        'Работа с примыканиями: лоток-бетон, кромкователем',
        'Герметизация швов примыкания',
        'Доставка материалов',
      ],
      popular: false,
    },
    {
      title: 'Водоотведение / корзина дождеприемника (шт):',
      description: 'Стоимость монтажа дождеприемника работы+материалы:',
      price: '2500',
      unit: 'шт',
      features: [
        'Подготовка жестких, монтажных растворов',
        'Установка корзины в отметках и разуклонках',
        'Защита корзины от повреждений при укладке бетона',
        'Работа с примыканиями: дождеприемник-бетон, кромкователем',
        'Герметизация швов примыкания',
        'Доставка материалов',
      ],
      popular: false,
    },
  ];

  const concreteWorksData = [
    {
      title: 'крыльцо из бетона (куб.м)',
      description: 'В стоимость входит работы+материалы:',
      price: '75000',
      unit: 'куб.м',
      features: [
        'Выемка грунта без перемещения (фундаментная плита)',
        'Укладка нетканого материала (Дарнит)',
        'Устройство песчаной подушки до 10 см (мытый/речной)',
        'Уплотнение песка виброплитой',
        'Щебневая подготовка до 20 см (фракция 5*20 прочность м11200)',
        'Уплотнение щебня виброплитой',
        'Укладка гидроизоляции',
        'Монтаж опалубки',
        'Армирование',
        'Укладка бетона B22.5/M300 на граните',
        'Разбор опалубки',
        'Доставки материалов',
      ],
      popular: false,
    },
  ];

  return (
    <div className="w-full bg-gray-50 mt-[72px]">
      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Цены на бетонную укладку
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Профессиональные услуги по укладке различных типов бетонных стяжек.
            Выберите подходящий вариант для вашего проекта.
          </p>
        </div> */}
        <div className="p-5">
          <Title color="primary" line={false}>
            Выезд - Расчеты
          </Title>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exitData.map((item: PricingItem, index: number) => (
            <Card
              key={index}
              className={`relative h-full flex flex-col ${item.popular ? 'ring-2 ring-orange-500 shadow-lg' : 'hover:shadow-md'} transition-shadow duration-200`}
            >
              {item.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 hover:bg-orange-600">
                  Популярный
                </Badge>
              )}

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-gray-900">
                      {item.price}
                    </span>
                    <span className="text-sm text-gray-600">₽</span>
                  </div>
                  {item.unit && (
                    <p className="text-sm text-gray-500">{item.unit}</p>
                  )}
                </div>

                <Button
                  className={`w-full ${
                    item.popular
                      ? 'bg-orange-600 hover:bg-orange-700'
                      : 'bg-gray-800 hover:bg-gray-900'
                  }`}
                >
                  Заказать расчет
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="p-5">
          <Title color="primary" line={false}>
            Декоративный бетон
          </Title>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {decorativeData.map((item: PricingItem, index: number) => (
            <Card
              key={index}
              className={`relative h-full flex flex-col ${item.popular ? 'ring-2 ring-orange-500 shadow-lg' : 'hover:shadow-md'} transition-shadow duration-200`}
            >
              {item.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 hover:bg-orange-600">
                  Популярный
                </Badge>
              )}

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-gray-900">
                      {item.price}
                    </span>
                    <span className="text-sm text-gray-600">₽</span>
                  </div>
                  {item.unit && (
                    <p className="text-sm text-gray-500">{item.unit}</p>
                  )}
                </div>

                <Button
                  className={`w-full ${
                    item.popular
                      ? 'bg-orange-600 hover:bg-orange-700'
                      : 'bg-gray-800 hover:bg-gray-900'
                  }`}
                >
                  Заказать расчет
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="p-5">
          <Title color="primary" line={false}>
            Печатный бетон
          </Title>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {printedConcreteData.map((item, index) => (
            <Card
              key={index}
              className={`relative h-full flex flex-col ${item.popular ? 'ring-2 ring-orange-500 shadow-lg' : 'hover:shadow-md'} transition-shadow duration-200`}
            >
              {item.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 hover:bg-orange-600">
                  Популярный
                </Badge>
              )}

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-gray-900">
                      {item.price}
                    </span>
                    <span className="text-sm text-gray-600">₽</span>
                  </div>
                  {item.unit && (
                    <p className="text-sm text-gray-500">{item.unit}</p>
                  )}
                </div>

                <Button className="w-full bg-gray-800 hover:bg-gray-900">
                  Заказать расчет
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="p-5">
          <Title color="primary" line={false}>
            Бетонные работы
          </Title>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concreteWorksData.map((item, index) => (
            <Card
              key={index}
              className={`relative h-full flex flex-col ${item.popular ? 'ring-2 ring-orange-500 shadow-lg' : 'hover:shadow-md'} transition-shadow duration-200`}
            >
              {item.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 hover:bg-orange-600">
                  Популярный
                </Badge>
              )}

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-gray-900">
                      {item.price}
                    </span>
                    <span className="text-sm text-gray-600">₽</span>
                  </div>
                  {item.unit && (
                    <p className="text-sm text-gray-500">{item.unit}</p>
                  )}
                </div>

                <Button className="w-full bg-gray-800 hover:bg-gray-900">
                  Заказать расчет
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Price;

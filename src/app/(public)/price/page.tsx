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
import PackageHeader from '@/src/shared/ui/PackageHeader';

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

  const simpleGeometryData: PricingItem[] = [
    {
      title: '"Эконом"',
      description: 'Наши только работы, материалы и доставки все ваши',
      price: '2000',
      unit: '/м2',
      features: [],
      popular: false,
    },
    {
      title: '"Базовый"',
      description:
        'Наши работы и спец.материалы. С вас только арматура и бетон',
      price: '4000',
      unit: '/м2',
      features: [],
      popular: false,
    },
    {
      title: '"Премиум"',
      description: 'Услуга под ключ, наши гарантии на все работы и материалы',
      price: '5500',
      unit: '/м2',
      features: [],
      popular: false,
    },
  ];

  const crushedStoneData: PricingItem[] = [
    {
      title: '"Эконом"',
      description: 'наши только работы, материалы и машино-механизмы ваши',
      price: '500',
      unit: '/м2',
      features: [],
      popular: false,
    },
    {
      title: '"Базовый"',
      description:
        'Наши работы, отметки и машино-механизмы. С вас все материалы.',
      price: '800',
      unit: '/м2',
      features: [],
      popular: false,
    },
    {
      title: '"Премиум"',
      description:
        'услуга под ключ: наши работы, материалы, механизмы, доставки',
      price: '1500',
      unit: '/м2',
      features: [],
      popular: true,
    },
  ];

  const terracesData: PricingItem[] = [
    {
      title: '"Эконом"',
      description: 'Наши только работы, материалы и доставки все ваши',
      price: '4000',
      unit: '/м2',
      features: [],
      popular: false,
    },
    {
      title: '"Базовый"',
      description:
        'Наши работы и спец.материалы. С вас только арматура и бетон',
      price: '6000',
      unit: '/м2',
      features: [],
      popular: false,
    },
    {
      title: '"Премиум"',
      description: 'Услуга под ключ, наши гарантии на все работы и материалы',
      price: '8000',
      unit: '/м2',
      features: [],
      popular: true,
    },
  ];

  const stepsFinishingData: PricingItem[] = [
    {
      title: '"Эконом"',
      description: 'наши только работы, с вас все материалы',
      price: '5000',
      unit: '/пог.м',
      features: [],
      popular: false,
    },
    {
      title: '"Базовый"',
      description: 'с вас только арматура, бетон и их доставка',
      price: '6500',
      unit: '/пог.м',
      features: [],
      popular: false,
    },
    {
      title: '"Премиум"',
      description: 'услуга под ключ: работа+материалы+доставка',
      price: '7500',
      unit: '/пог.м',
      features: [],
      popular: false,
    },
  ];

  const stepsFinishingDecorData: PricingItem[] = [
    {
      title: '"Эконом"',
      description: 'наши только работы, с вас все материалы',
      price: '5000',
      unit: '/пог.м',
      features: [],
      popular: false,
    },
    {
      title: '"Базовый"',
      description: 'с вас только арматура, спец.смеси',
      price: '6300',
      unit: '/пог.м',
      features: [],
      popular: false,
    },
    {
      title: '"Премиум"',
      description: 'услуга под ключ: работа+материалы+доставки',
      price: '8500',
      unit: '/пог.м',
      features: [],
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

        <div className="px-5 pb-0 pt-5">
          <Title color="primary" line={false}>
            Пакеты услуг
          </Title>
        </div>

        <div className="p-5">
          <PackageHeader
            title="Дорожки, парковки, отмостки, зоны отдыха"
            description="Простая геометрия / Толщина бетона В25/М350 - 10 см"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {simpleGeometryData.map((item, index) => (
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
                {item.features.length > 0 && (
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
                )}
              </CardContent>

              <CardFooter className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-gray-900">
                      {item.price}
                    </span>
                    <span className="text-sm text-gray-600">{item.unit}</span>
                  </div>
                </div>

                <Button className="w-full bg-gray-800 hover:bg-gray-900">
                  Заказать расчет
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="p-5">
          <PackageHeader
            title="Щебневая подготовка"
            description="Простая геометрическая форма / Толщина подготовки - 20 см"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {crushedStoneData.map((item, index) => (
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
                {item.features.length > 0 && (
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
                )}
              </CardContent>

              <CardFooter className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-gray-900">
                      {item.price}
                    </span>
                    <span className="text-sm text-gray-600">{item.unit}</span>
                  </div>
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
          <PackageHeader
            title="Террасы, веранды, входные группы"
            description="Сложная геометрия, высокие отметки, трудный доступ, стеснённые условия"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {terracesData.map((item, index) => (
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
                {item.features.length > 0 && (
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
                )}
              </CardContent>

              <CardFooter className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-gray-900">
                      {item.price}
                    </span>
                    <span className="text-sm text-gray-600">{item.unit}</span>
                  </div>
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
          <PackageHeader
            title="Отделка ступеней и парапетов"
            description="Печатный бетон"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stepsFinishingData.map((item, index) => (
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
                {item.features.length > 0 && (
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
                )}
              </CardContent>

              <CardFooter className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-gray-900">
                      {item.price}
                    </span>
                    <span className="text-sm text-gray-600">{item.unit}</span>
                  </div>
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

        {/* Секция: Отделка ступеней и парапетов — Декоративный бетон */}
        <div className="p-5">
          <PackageHeader
            title="Отделка ступеней и парапетов"
            description="Декоративный бетон"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stepsFinishingDecorData.map((item, index) => (
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
                {item.features.length > 0 && (
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
                )}
              </CardContent>

              <CardFooter className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-gray-900">
                      {item.price}
                    </span>
                    <span className="text-sm text-gray-600">{item.unit}</span>
                  </div>
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

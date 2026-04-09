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
  const simpleGeometryData: PricingItem[] = [
    {
      title: '"Минимальный"',
      description: 'Наши только работы по печатному бетону, без подготовки основания и земляных работ',
      price: '5000',
      unit: '/м2',
      features: ['Заливка бетона', 'Окрашивание бетонной поверхности', 'Печать штампов, создание декоративного рисунка', 'Изготовление деформационных швов', 'Покрытие защитным лаком в 2 слоя'],
      popular: false,
    },
    {
      title: '"Базовый"',
      description:
        'Наши только работы по печатному бетону и подготовке основания из щебня до 20см., гидроизоляция монтаж опалубки и укладка армирующей сетки',
      price: '7000',
      unit: '/м2',
      features: ['Заливка бетона', 'Окрашивание бетонной поверхности', 'Печать штампов, создание декоративного рисунка', 'Изготовление деформационных швов', 'Покрытие защитным лаком в 2 слоя', 'Отсыпка щебнем с вибротрамбовкой', 'Гидроизоляция', 'Монтаж опалубки и монтаж армирующей сетки'],
      popular: false,
    },
    {
      title: '"Премиум"',
      description: 'Услуга под ключ, включая земляные работы',
      price: '8500',
      unit: '/м2',
      features: ['Заливка бетона', 'Окрашивание бетонной поверхности', 'Печать штампов, создание декоративного рисунка', 'Изготовление деформационных швов', 'Покрытие защитным лаком в 2 слоя', 'Отсыпка щебнем с вибротрамбовкой', 'Гидроизоляция', 'Монтаж опалубки и монтаж армирующей сетки', 'Топосъемка', 'Земляные работы (снятие растительного слоя или грунта на 20см.)'],
      popular: true,
    },
  ];

  return (
    <div className="w-full bg-gray-50 mt-[72px]">
      <div className="container mx-auto px-4">
        <p>Выезд в черте города - бесплатно</p>
        <div className="px-5 pb-0 pt-5">
          <Title color="primary" line={false}>
            Пакеты услуг
          </Title>
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
      </div>
    </div>
  );
};

export default Price;

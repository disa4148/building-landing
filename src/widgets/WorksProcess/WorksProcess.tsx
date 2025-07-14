import { Ruler, Droplets, Palette, Shield } from 'lucide-react';

import Title from '@/src/shared/ui/Title/Title';

import css from './WorksProcess.module.scss';

const steps = [
  {
    number: '01',
    title: 'Подготовка основания',
    description: 'Тщательно выравниваем поверхность',
    icon: Ruler,
  },
  {
    number: '02',
    title: 'Заливка бетона',
    description: 'Используем армированные смеси с добавками для прочности',
    icon: Droplets,
  },
  {
    number: '03',
    title: 'Нанесение декора',
    description: 'Штампуем выбранный рисунок или текстуру',
    icon: Palette,
  },
  {
    number: '04',
    title: 'Финишная обработка',
    description: 'Покрытие защитными составами для долговечности',
    icon: Shield,
  },
];

export default function WorkProcess(): JSX.Element {
  return (
    <section className={css.section} id="process">
      <Title color="primary">Как мы работаем</Title>
      <div className={css.container}>
        <div className={css.grid}>
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className={css.card}>
                <div className={css.iconWrap}>
                  <IconComponent className={css.icon} />
                </div>
                <div className={css.number}>{step.number}</div>
                <h3 className={css.stepTitle}>{step.title}</h3>
                <p className={css.description}>{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

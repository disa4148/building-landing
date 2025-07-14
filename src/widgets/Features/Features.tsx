import Title from '@/src/shared/ui/Title/Title';

import css from './Features.module.scss';

const features = [
  {
    title: 'Качество',
    text: 'Используем проверенные материалы и строго соблюдаем технологию',
  },
  {
    title: 'Особый подход',
    text: 'Создаем уникальные текстуры под любой стиль',
  },
  {
    title: 'Надежность',
    text: 'Гарантируем прочность и долговечность покрытий',
  },
  {
    title: 'Современные решения',
    text: 'Реализуем любые дизайнерские идеи',
  },
];

const Features = (): JSX.Element => (
  <section className={css.section} id="features">
    <div className={css.container}>
      <Title color="secondary">Наши преимущества</Title>
      <div className={css.grid}>
        {features.map((f, i) => (
          <div className={css.card} key={i}>
            <div className={css.title}>{f.title}</div>
            <div className={css.text}>{f.text}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;

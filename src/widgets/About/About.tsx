import Title from '@/src/shared/ui/Title/Title';
import LinkButton from '@/src/shared/ui/LinkButton';

import css from './About.module.scss';

const About = (): JSX.Element => {
  return (
    <section className={css.aboutSection} id="about">
      <Title>О компании</Title>
      <div className={css.aboutContainer}>
        <div className={css.left}>
          <div className={css.company}>
            ООО &quot;Стройресурс&quot; – молодая, но перспективная компания из
            Кемерово, специализирующаяся на производстве и укладке печатного
            (декоративного) бетона.
          </div>
          <div className={css.projects}>
            Несмотря на то, что мы работаем относительно недавно, нам уже
            удалось реализовать несколько успешных проектов, получивших высокие
            оценки от заказчиков.
          </div>
          <div className={css.markers}>
            <div className={css.marker}>
              <span className={css.dot} />
              <span className={css.text}>Высокие оценки</span>
            </div>
            <div className={css.marker}>
              <span className={css.dot} />
              <span className={css.text}>Качество</span>
            </div>
          </div>
        </div>
        <div className={css.right}>
          <div className={css.card}>
            <div className={css.logo}>LOGO</div>
            <div className={css.title}>ООО “Стройресурс”</div>
            <div className={css.text}>Специализация: печатный бетон</div>
            <div className={css.text}>Город: Кемерово</div>
            <div className={css.btn}>
              <LinkButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

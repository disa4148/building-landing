import LinkButton from '@/src/shared/ui/LinkButton';

import css from './PromoBanner.module.scss';

const PromoBanner = (): JSX.Element => {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <h1>
          Прочность в деталях, <span>красота — в каждом шаге!</span>{' '}
        </h1>
        <p>
          ООО “Стройресурс”- Кемеровская компания, которая подарит вам
          современный взгляд на бетон. Мы создаём прочные и эстетичные покрытия
          под камень, кирпич или дерево, используя современные технологии.
        </p>
        <div className={css.btn}>
          <LinkButton />
        </div>
        <div className={css.call}>
          <h4>
            Звоните прямо сейчас: <span>+7 (923) 483-93-77</span>
          </h4>
          <h4>г. Кемерово</h4>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;

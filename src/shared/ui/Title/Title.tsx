import React from 'react';

import css from './Title.module.scss';

interface TitleProps {
  children: React.ReactNode;
  color?: 'primary' | 'secondary';
}

const Title = ({ children, color = 'primary' }: TitleProps): JSX.Element => (
  <div className={css.wrapper}>
    <h2 className={color === 'primary' ? css.text : css.textSecondary}>
      {children}
    </h2>
    <div className={color === 'primary' ? css.line : css.lineSecondary} />
  </div>
);

export default Title;

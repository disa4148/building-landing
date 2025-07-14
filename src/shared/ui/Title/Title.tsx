import React from 'react';

import css from './Title.module.scss';

interface TitleProps {
  children: React.ReactNode;
  color?: 'primary' | 'secondary';
  line?: boolean;
}

const Title = ({
  children,
  color = 'primary',
  line = true,
}: TitleProps): JSX.Element => (
  <div className={css.wrapper}>
    <h2 className={color === 'primary' ? css.text : css.textSecondary}>
      {children}
    </h2>
    {line && (
      <div className={color === 'primary' ? css.line : css.lineSecondary} />
    )}
  </div>
);

export default Title;

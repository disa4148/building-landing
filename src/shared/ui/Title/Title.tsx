import React from 'react';

import css from './Title.module.scss';

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps): JSX.Element => (
  <div className={css.wrapper}>
    <h2 className={css.text}>{children}</h2>
    <div className={css.line} />
  </div>
);

export default Title;

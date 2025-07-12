import Link from 'next/link';

import { Button } from './button';

const LinkButton = (): JSX.Element => {
  return (
    <Link href={'http://wa.me/+79234839377'} target="_blank">
      <Button size={'lg'} variant={'outline'}>
        Связаться
      </Button>
    </Link>
  );
};

export default LinkButton;

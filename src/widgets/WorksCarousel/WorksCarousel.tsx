import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/src/shared/ui/carousel';
import Title from '@/src/shared/ui/Title/Title';

import css from './WorksCarousel.module.scss';

const images = Array.from(
  { length: 25 },
  (_, i) => `/assets/images/carousel/item${i + 1}.jpg`,
);

const WorksCarousel = (): JSX.Element => {
  return (
    <div className={css.wrapper} id="works">
      <Title color="secondary">Наши работы</Title>
      <Carousel className={css.carousel}>
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className={css.carouselItem}>
              <div className={css.imageWrapper}>
                <Image
                  src={src || '/placeholder.svg'}
                  alt={`Carousel image ${index + 1}`}
                  fill
                  className={css.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1300px"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={css.prevButton} />
        <CarouselNext className={css.nextButton} />
      </Carousel>
      <div className={css.description}>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
};

export default WorksCarousel;

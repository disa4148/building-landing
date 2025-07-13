import PromoBanner from '@/src/widgets/PromoBanner/PromoBanner';
import About from '@/src/widgets/About/About';
import WorksCarousel from '@/src/widgets/WorksCarousel/WorksCarousel';

const Home: React.FC = () => {
  return (
    <>
      <PromoBanner />
      <About />
      <WorksCarousel />
    </>
  );
};
export default Home;

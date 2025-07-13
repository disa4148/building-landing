import PromoBanner from '@/src/widgets/PromoBanner/PromoBanner';
import About from '@/src/widgets/About/About';
import WorksCarousel from '@/src/widgets/WorksCarousel/WorksCarousel';
import WorkProcess from '@/src/widgets/WorksProcess/WorksProcess';
import Features from '@/src/widgets/Features/Features';

const Home: React.FC = () => {
  return (
    <>
      <PromoBanner />
      <About />
      <WorksCarousel />
      <WorkProcess />
      <Features />
    </>
  );
};
export default Home;

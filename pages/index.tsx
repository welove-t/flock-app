import Head from 'next/head';
import Features from '../components/lp/Features';
import Header from '../components/lp/Header';
import Hero from '../components/lp/Hero';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  return {
    props: {
      noLayout: true,
    },
  };
};

import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <Image src="/images/hero.png" layout="fill" objectFit="cover" />
    </div>
  );
};

export default Hero;

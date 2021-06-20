import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center">
      <Image src="/images/hero.png" layout="fill" objectFit="cover" />
      <div className="relative container">
        <p className="text-5xl font-bold text-white leading-relaxed mb-6">
          おい、イベントを
          <br />
          はじめよう。
        </p>
        <a className="bg-white font-bold rounded-full py-4 px-10 shadow">
          アカウントを作成
        </a>
      </div>
    </div>
  );
};

export default Hero;

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative py-20 lg:h-screen flex items-center">
      <Image src="/images/hero.png" alt="" layout="fill" objectFit="cover" />
      <div className="relative container">
        <p className="lg:text-5xl text-2xl font-bold text-white lg:leading-relaxed mb-6">
          おい、イベントを
          <br />
          はじめよう。
        </p>
        <Link href="/login">
          <a className="bg-white font-bold rounded-full py-4 px-10 shadow">
            アカウントを作成
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

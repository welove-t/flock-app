import Image from 'next/image';
import React from 'react';

const Features = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="lg:flex py-32 items-center">
            <div className="lg:w-1/2 mb-20 lg:mb-0">
              <h2 className="font-bold text-3xl leading-relaxed mb-8">
                だれでも無料で
                <br />
                イベントを主催できます
              </h2>
              <p>
                急に有料化する可能性が常にあります。私たちは常にそのタイミングを見計っています
              </p>
            </div>
            <div className="lg:w-1/2 text-center font-bold">
              <span className="text-9xl mr-2">0</span>
              <span className="text-2xl">YEN</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-500">
        <div className="container">
          <div className="lg:flex py-32 items-center">
            <div className="lg:w-1/2 text-white order-1 mb-20 lg:mb-0">
              <h2 className="font-bold text-3xl leading-relaxed mb-8">
                シンプルな操作で
                <br />
                つかいやすい
              </h2>
              <p>気が向いたら新機能を追加するかもしれません。</p>
            </div>
            <div className="lg:w-1/2">
              <div className="w-1/2 mx-auto">
                <Image
                  src="/images/feature-1.png"
                  width={567}
                  height={567}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="lg:flex py-32 items-center">
            <div className="lg:w-1/2 mb-20 lg:mb-0">
              <h2 className="font-bold text-3xl leading-relaxed mb-8">
                壊滅的な集客力
              </h2>
              <p>
                このサービスには一切の集客力がないので、TwitterやYoutubeのフォロワーが多い人にしかおすすめできません。
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="w-1/2 mx-auto">
                <Image
                  src="/images/feature-2.png"
                  width={404}
                  height={317}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;

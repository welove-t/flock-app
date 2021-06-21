import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="bg-yellow-500">
      <header className="container h-16 flex space-x-4 items-center">
        <Link href="/">
          <a className="font-bold text-2xl">eveent</a>
        </Link>
        <span className="flex-1"></span>
        <Link href="/mypage">
          <a>マイページ</a>
        </Link>
        <Link href="/create">
          <a>イベントを作成</a>
        </Link>
        <div className="bg-gray-600 w-10 h-10 rounded-full"></div>
      </header>
      {children}
    </div>
  );
};

export default Layout;

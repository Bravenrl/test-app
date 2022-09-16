import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../config/app.config';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <header className='shadow bg-slate-300'>
        <div className='mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 flex-center-between flex-wrap'>
          <Link
            to={AppRoute.Home}
            className='text-3xl font-bold tracking-tight text-gray-900 flex-shrink-0'
          >
            Test Task App
          </Link>
          <span className='text-xl block overflow-hidden text-ellipsis max-w-xs'>
            braven@gmail.dom
          </span>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};
export default MainLayout;

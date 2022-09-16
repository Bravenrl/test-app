import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import ButtonBig from '../../components/ui/button-big/button-big';
import { AppRoute } from '../../config/app.config';
import { useActions } from '../../hooks/use-actions';
import { useAuth } from '../../hooks/use-auth';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isAuth } = useAuth();
  const {logout, toggleModalAuth} = useActions();

  return (
    <>
      <header className='shadow bg-slate-300'>
        <div className='mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 flex-center-between flex-wrap'>
          <Link
            to={AppRoute.Home}
            className='text-3xl font-bold tracking-tight text-gray-900 flex-shrink-0'
          >
            Test App
          </Link>
          {isAuth ? (
            <ButtonBig
              buttonClickHandler={logout}
              classNameButton={
                'bg-green-700 hover:bg-green-800 focus:ring-green-300'
              }
              classNameBox={'hover:ring-green-500 hover:border-green-500'}
            >
              Logout
            </ButtonBig>
          ) : (
            <ButtonBig
              buttonClickHandler={toggleModalAuth}
              classNameButton={'bg-red-700 hover:bg-red-800 focus:ring-red-300'}
              classNameBox={'hover:ring-red-500 hover:border-red-500'}
            >
              Login
            </ButtonBig>
          )}
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};
export default MainLayout;

import cx from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../config/app.config';

type AuthLinkProps = {
  isAuth: boolean;
  isModalOpen: boolean;
  handleModalOpen: () => void;
};
const AuthLink = ({ isAuth, handleModalOpen, isModalOpen }: AuthLinkProps) => {
  return isAuth ? (
    <Link
      to={AppRoute.Contacts}
      className={cx(
        'bg-green-400 h-44 w-1/2 flex-center rounded-xl shadow-lg active:shadow-none hover:bg-green-500 transition-opacity max-w-lg',
        {
          'opacity-0 scale-0': isModalOpen,
        }
      )}
    >
      <p className='text-4xl text-black-100 p-3 text-center'>
        You are authorized. <br /> Click here to watch contacts
      </p>
    </Link>
  ) : (
    <span
      className={cx(
        'bg-red-400 h-44 w-1/2 flex-center rounded-xl shadow-lg active:shadow-none hover:bg-red-500 transition-opacity max-w-lg',
        {
          'opacity-0': isModalOpen,
        }
      )}
    >
      <p className='text-4xl text-zinc-100 p-3 text-center'>
        You don`t authorize. <br /> Plz login
      </p>
    </span>
  );
};
export default AuthLink;

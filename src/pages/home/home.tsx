import ModalAuth from '../../components/modal-auth/modal-auth';
import AuthLink from '../../components/ui/auth-link/auth-link';
import MainLayout from '../../layouts/main-layout/main-layout';

const Home = () => {
  return (
    <MainLayout>
      <div className='mx-auto py-40 sm:px-6 lg:px-8 flex-center w-3/4 h-max'>
        <AuthLink />
      </div>
      <ModalAuth />
    </MainLayout>
  );
};
export default Home;

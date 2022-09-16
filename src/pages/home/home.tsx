import ModalAuth from '../../components/modal-auth/modal-auth';
import AuthButton from '../../components/ui/auth-link/auth-linl';
import { useModal } from '../../hooks/use-modal';
import MainLayout from '../../layouts/main-layout/main-layout';
import ModalLayout from '../../layouts/modal-layout/modal-layout';

const Home = () => {
  const {isModalOpen, handleModalClose, handleModalOpen}= useModal()

  return (
    <MainLayout>
      <div className='mx-auto py-40 sm:px-6 lg:px-8 flex-center w-3/4 h-max'>
        <AuthButton
          isAuth={false}
          handleModalOpen={handleModalOpen}
          isModalOpen={isModalOpen}
        />
      </div>
      {isModalOpen && (
        <ModalLayout
        handleModalClose={handleModalClose}
        >
          <ModalAuth handleModalClose={handleModalClose} />
        </ModalLayout>
      )}
    </MainLayout>
  );
};
export default Home;

import ContactsList from '../../components/contacts-list/contacts-list';
import ModalContact from '../../components/modal-contact/modal-contact';
import CreateButton from '../../components/ui/create-button/create-button';
import FormSearch from '../../components/ui/form-search/form-search';
import { useModal } from '../../hooks/use-modal';
import MainLayout from '../../layouts/main-layout/main-layout';
import ModalLayout from '../../layouts/modal-layout copy/modal-layout';

const Contacts = () => {
  const { isModalOpen, handleModalClose, handleModalOpen } = useModal();
  const contacts = [
    {
      name: 'Roman Lozinskyddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
      city: 'London',
      phone: '+7 (555) 555-55-55',
      email: 'example@example.com',
      id: 1,
    },
    {
      name: 'Roman Lozinskyddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
      city: 'London',
      phone: '+7 (555) 555-55-55',
      email: 'example@example.com',
      id: 2,
    },
    {
      name: 'Roman Lozinskyddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
      city: 'London',
      phone: '+7 (555) 555-55-55',
      email: 'example@example.com',
      id: 3,
    },
    {
      name: 'Roman Lozinskyddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
      city: 'London',
      phone: '+7 (555) 555-55-55',
      email: 'example@example.com',
      id: 4,
    },
  ];
  return (
    <MainLayout>
      <div className='mx-auto w-1/2 py-6 px-4 sm:px-6 lg:px-8 flex-center-between flex-wrap max-w-2xl'>
        <FormSearch />
        <CreateButton handleModalOpen={handleModalOpen}/>
      </div>
      <ContactsList items={contacts} handleModalOpen={handleModalOpen}/>
      {isModalOpen && (
        <ModalLayout handleModalClose={handleModalClose}>
          <ModalContact handleModalClose={handleModalClose} />
        </ModalLayout>
      )}
    </MainLayout>
  );
};
export default Contacts;

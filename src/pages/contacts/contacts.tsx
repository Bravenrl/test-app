import ContactsList from '../../components/contacts-list/contacts-list';
import ModalContact from '../../components/modal-contact/modal-contact';
import ButtonBig from '../../components/ui/button-big/button-big';
import FormSearch from '../../components/ui/form-search/form-search';
import { useActions } from '../../hooks/use-actions';
import MainLayout from '../../layouts/main-layout/main-layout';

const Contacts = () => {
  const { toggleModalContact } = useActions();

  return (
    <MainLayout>
      <div className='mx-auto w-1/2 py-6 px-4 sm:px-6 lg:px-8 flex-center-between flex-wrap max-w-2xl'>
        <FormSearch />
        <ButtonBig
          buttonClickHandler={toggleModalContact}
          classNameButton={'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300'}
          classNameBox={'hover:ring-blue-500 hover:border-blue-500'}
        >
          Add contact
        </ButtonBig>
      </div>
      <ContactsList />
      <ModalContact />
    </MainLayout>
  );
};
export default Contacts;

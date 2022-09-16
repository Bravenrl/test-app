import { Contact } from '../../types/data.types';
import Card from '../ui/card/card';

type ContactsListProps = {
  items: Contact[];
  handleModalOpen: () => void;
};
const ContactsList = ({items, handleModalOpen}: ContactsListProps) => {
  return (
    <ul
      className={'grid grid-cols-3 items-center p-4 list-none gap-x-4'}
    >
      {items.map((item) => (
        <Card key={item.id} contact={item} handleModalOpen={handleModalOpen}/>
      ))}
    </ul>
  );
};
export default ContactsList;

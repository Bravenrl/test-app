import { useGetContactsQuery } from '../../api/contactsApi';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { getSearchTerm } from '../../store/process/process-selectors';
import Card from '../ui/card/card';

const ContactsList = () => {
  const searchTerm = useTypedSelector(getSearchTerm);
  const {data=[]} = useGetContactsQuery(searchTerm);
  
  return (
    <ul className={'grid grid-cols-3 items-center p-4 list-none gap-x-4'}>
      {data.map((item) => (
        <Card key={item.id} contact={item} />
      ))}
    </ul>
  );
};
export default ContactsList;

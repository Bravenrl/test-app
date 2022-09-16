import Card from '../ui/card/card';

const ContactsList = () => {
  const items = [
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
    <ul className={'grid grid-cols-3 items-center p-4 list-none gap-x-4'}>
      {items.map((item) => (
        <Card key={item.id} contact={item} />
      ))}
    </ul>
  );
};
export default ContactsList;

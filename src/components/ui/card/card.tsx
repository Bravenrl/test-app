import { Contact } from '../../../types/data.types';
import MaterialIcon from '../material-icon/material-icon';

type CardProps = {
  contact: Contact;
  handleModalOpen: () => void;
};
const Card = ({ contact: { name, city, phone, email }, handleModalOpen }: CardProps) => {
  return (
    <div className='w-full h-full max-w-xl max-h-xl py-4'>
      <div className='rounded-lg mx-auto py-3 px-3 flex bg-white justify-around shadow-lg border border-gray-200 flex-nowrap'>
        <div className='w-3/4 self-center '>
          <p className='text-xl text-gray-800 tracking-wide leading-5 md:leading-6 overflow-hidden text-ellipsis'>
            {name}
          </p>
          <p className='text-lg text-purple-500 tracking-wide leading-5 md:leading-6 overflow-hidden text-ellipsis'>
            {city}
          </p>
          <a
            href={`mailto:${phone}`}
            className='text-sm text-gray-500 leading-5 md:leading-6 overflow-hidden text-ellipsis block'
          >
            {email}
          </a>
          <a
            href={`tel:${phone}`}
            className='text-sm text-gray-500 leading-5 md:leading-6 overflow-hidden text-ellipsis'
          >
            {phone}
          </a>
        </div>
        <div className='flex flex-col justify-around self-center h-28'>
          <button onClick={handleModalOpen}
            type='button'
            aria-label='Edit'
            className='text-indigo-600 hover:text-indigo-800 active:opacity-20'
          >
            <MaterialIcon name='MdEdit' />
          </button>
          <button
            type='button'
            aria-label='Delete'
            className='text-indigo-600 hover:text-indigo-800 active:opacity-20'
          >
            <MaterialIcon name='MdDelete' />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;

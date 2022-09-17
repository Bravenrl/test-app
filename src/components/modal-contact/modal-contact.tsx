import { useActions } from '../../hooks/use-actions';
import { useModal } from '../../hooks/use-modal';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import ModalLayout from '../../layouts/modal-layout/modal-layout';
import { getCurrentContact } from '../../store/process/process-selectors';
import Button from '../ui/button/button';
import ModalCloseButton from '../ui/modal-close-button/modal-close-button';

const ModalContact = () => {
  const { isModalContactOpen } = useModal();
  const { toggleModalContact, clearCurrentContact } = useActions();
  const { name, phone, city, email } = useTypedSelector(getCurrentContact);
  const isCreate = name === undefined;


  

  if (!isModalContactOpen) return null;
  return (
    <ModalLayout>
      <div
        onClick={(e) => {
          e.stopPropagation();
          clearCurrentContact();
        }}
        className='bg-white z-10 rounded-2xl py-10 px-8 relative min-h-max min-w-max max-w-2xl w-1/2'
      >
        <ModalCloseButton
          handleModalClose={() => {
            toggleModalContact();
            clearCurrentContact();
          }}
        />
        <div>
          <h2 className='mt-2 text-center text-3xl font-bold tracking-tight text-gray-900'>
            {isCreate ? 'Create contact' : 'Edit contact'}
          </h2>
        </div>
        <form className='mt-8 space-y-6'>
          <div className='-space-y-px rounded-md shadow-sm flex flex-col gap-4'>
            <div>
              <label htmlFor='name' className='sr-only'>
                Name
              </label>
              <input
                id='name'
                name='name'
                type='text'
                autoComplete='false'
                required
                className='relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Name'
                defaultValue={name}
              />
            </div>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                className='relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Email address'
                defaultValue={email}
                required
              />
            </div>
            <div>
              <label htmlFor='phone' className='sr-only'>
                Phone
              </label>
              <input
                id='phone'
                name='phone'
                type='tel'
                required
                className='relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Phone'
                defaultValue={phone}
              />
            </div>
            <div>
              <label htmlFor='city' className='sr-only'>
                City
              </label>
              <input
                id='city'
                name='city'
                type='text'
                className='relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='City'
                defaultValue={city}
              />
            </div>
          </div>
          <div className='flex items-center justify-center text-sm text-red-700'>
            Check the entered data
          </div>

          <div className='flex items-center justify-around'>
            <Button type='submit'>{isCreate ? 'Create' : 'Edit'}</Button>
          </div>
        </form>
      </div>
    </ModalLayout>
  );
};
export default ModalContact;

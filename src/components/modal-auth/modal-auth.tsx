import Button from '../ui/button/button';
import ModalCloseButton from '../ui/modal-close-button/modal-close-button';

type AuthModalProps = {
  handleModalClose: () => void;
};

const ModalAuth = ({ handleModalClose }: AuthModalProps) => {
  return (
    <div className='bg-white z-10 rounded-2xl py-10 px-8 relative max-w-4xl min-w-max'>
      <ModalCloseButton handleModalClose={handleModalClose} />
      <div>
        <h2 className='mt-2 text-center text-3xl font-bold tracking-tight text-gray-900'>
          Sign in to your account
        </h2>
        <p className='mt-2 text-center text-sm text-gray-600'>
          Or register if you don`t have account
        </p>
      </div>
      <form className='mt-8 space-y-6'>
        <div className='-space-y-px rounded-md shadow-sm'>
          <div>
            <label htmlFor='email-address' className='sr-only'>
              Email address
            </label>
            <input
              id='email-address'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
              placeholder='Email address'
            />
          </div>
          <div>
            <label htmlFor='password' className='sr-only'>
              Password
            </label>
            <input
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              required
              className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
              placeholder='Password'
            />
          </div>
        </div>
        <div className='flex items-center justify-center text-sm text-red-700'>
          Check the entered data
        </div>

        <div className='flex items-center justify-around'>
          <Button type='submit'>Sign In</Button>
          <Button type='submit'>Register</Button>
        </div>
      </form>
    </div>
  );
};
export default ModalAuth;

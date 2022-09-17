import { FormEvent, useRef, useState } from 'react';
import { useActions } from '../../hooks/use-actions';
import { useAuth } from '../../hooks/use-auth';
import { useModal } from '../../hooks/use-modal';
import ModalLayout from '../../layouts/modal-layout/modal-layout';
import { AuthDataReq } from '../../types/data.types';
import Button from '../ui/button/button';
import ModalCloseButton from '../ui/modal-close-button/modal-close-button';

const ModalAuth = () => {
  const { isLoading, err } = useAuth();
  const { isModalAuthOpen } = useModal();
  const { toggleModalAuth, registration, login } = useActions();
  const [submitType, setSubmitType] = useState<'register' | 'login' | ''>('');
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  if (!isModalAuthOpen) return null;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    } as AuthDataReq;
    if (submitType === 'register') {
      registration(data);
    }
    if (submitType === 'login') {
      login(data);
    }
  };

  return (
    <ModalLayout>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='bg-white rounded-2xl py-10 px-8 relative max-w-4xl min-w-max z-10'
      >
        <ModalCloseButton handleModalClose={toggleModalAuth} />
        <div>
          <h2 className='mt-2 text-center text-3xl font-bold tracking-tight text-gray-900'>
            Sign in to your account
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Or register if you don`t have account
          </p>
        </div>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <div className='-space-y-px rounded-md shadow-sm'>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                ref={emailRef}
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
                ref={passwordRef}
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
            {!!err ? 'Check the entered data' : ''}
          </div>

          <div className='flex items-center justify-around'>
            <Button
              type={'submit'}
              isDisabled={isLoading}
              onClickHandler={() => {
                setSubmitType('login');
              }}
            >
              Sign In
            </Button>
            <Button
              type={'submit'}
              isDisabled={isLoading}
              onClickHandler={() => {
                setSubmitType('register');
              }}
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </ModalLayout>
  );
};
export default ModalAuth;

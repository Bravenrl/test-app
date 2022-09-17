import { FormEvent, useRef, useState } from 'react';
import { useMutateContactMutation } from '../api/contactsApi';
import { mailRegExp, phoneRegExp } from '../config/regexp.config';
import { Contact } from '../types/data.types';
import { useActions } from './use-actions';

export const useContactForm = (id: number | null = null) => {
  const { toggleModalContact, clearCurrentContact } = useActions();
  const [mutateContact, { isLoading }] = useMutateContactMutation();
  const [isError, setIsError] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nameRef.current?.value) {
      setIsError(true);
      return;
    }
    if (
      !emailRef.current?.value ||
      !emailRef.current?.value.match(mailRegExp)
    ) {
      setIsError(true);
      return;
    }
    if (
      !phoneRef.current?.value ||
      !phoneRef.current?.value.match(phoneRegExp)
    ) {
      setIsError(true);
      return;
    }

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      city: cityRef.current?.value,
      id
    } as Contact;

    setIsError(false);
    await mutateContact(data);
    clearCurrentContact();
    toggleModalContact();
  };

  return {
    nameRef,
    cityRef,
    phoneRef,
    emailRef,
    isLoading,
    isError,
    handleSubmit,
    toggleModalContact,
    clearCurrentContact,
  };
};

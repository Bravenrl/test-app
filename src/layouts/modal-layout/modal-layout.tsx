import { ReactNode } from 'react';
import { useActions } from '../../hooks/use-actions';

type ModalLayoutProps = {
  children: ReactNode;
};
const ModalLayout = ({ children }: ModalLayoutProps) => {
  const { closeAllModals } = useActions();
  return (
    <div onClick={()=>closeAllModals()}
      className='bg-black bg-opacity-20 w-screen h-screen z-0 absolute top-0'
      
    >
      <div className='fixed w-full h-full flex-center'>{children}</div>
    </div>
  );
};
export default ModalLayout;

type ModalLayoutProps = {
  handleModalClose: () => void;
  children: JSX.Element;
};
const ModalLayout = ({ handleModalClose, children }: ModalLayoutProps) => {
  return (
    <div onClick={handleModalClose} className='bg-black bg-opacity-20 w-screen h-screen z-0 absolute top-0'>
      <div className='fixed w-full h-full flex-center'>
        {children}
        </div>
    </div>
  );
};
export default ModalLayout;

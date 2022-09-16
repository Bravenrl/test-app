import MaterialIcon from '../material-icon/material-icon';

type ModalCloseButtonProps = {
  handleModalClose: () => void;
};
const ModalCloseButton = ({handleModalClose}: ModalCloseButtonProps) => {
  return (
    <button
      type='button'
      className='absolute rounded-2xl top-5 right-5 p-1 hover:bg-red-400 active:opacity-30'
      onClick={()=>handleModalClose()}
    >
      <MaterialIcon name='MdClose' />
    </button>
  );
};
export default ModalCloseButton;

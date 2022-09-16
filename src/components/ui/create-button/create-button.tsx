type CreateButtonProps = {
  handleModalOpen: () => void;
};

const CreateButton = ({ handleModalOpen }: CreateButtonProps) => {
  return (
    <div className='block p-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 hover:ring-blue-500 hover:border-blue-500'>
      <button
        onClick={handleModalOpen}
        type='button'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'
      >
        Create contact
      </button>
    </div>
  );
};
export default CreateButton;

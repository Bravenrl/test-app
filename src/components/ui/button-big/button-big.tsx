import cx from 'classnames';

type ButtonBigProps = {
  buttonClickHandler: () => void;
  classNameBox: string;
  classNameButton: string;
  children: string;
};

const ButtonBig = ({
  buttonClickHandler,
  classNameButton,
  classNameBox,
  children,
}: ButtonBigProps) => {
  return (
    <div
      className={cx(
        'block p-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 max-w-lg min-w-[8rem]',
        classNameBox
      )}
    >
      <button
        onClick={()=>buttonClickHandler()}
        type='button'
        className={cx(
          'text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 w-full',
          classNameButton
        )}
      >
        {children}
      </button>
    </div>
  );
};
export default ButtonBig;

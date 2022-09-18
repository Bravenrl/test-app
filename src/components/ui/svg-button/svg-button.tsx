import { TypeMaterialIcon } from "../../../types/icon.types";
import MaterialIcon from "../material-icon/material-icon"

type SvgButtonProps = {
    onClickHandler: () => void;
    name: TypeMaterialIcon;
    label: string;
    className?: string;
}
const SvgButton = ({onClickHandler, name, label, className}: SvgButtonProps) => {
  return (
    <button
    onClick={onClickHandler}
    type='button'
    aria-label={label}
    className='text-indigo-600 hover:text-indigo-800 active:opacity-20'
  >
    <MaterialIcon name={name} className={className} />
  </button>
  )
}
export default SvgButton
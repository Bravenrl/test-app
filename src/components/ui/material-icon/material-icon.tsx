import * as MaterialIcons from 'react-icons/md';
import { TypeMaterialIcon } from '../../../types/icon.types';

type MaterialIconProps = {
  name: TypeMaterialIcon;
};

const MaterialIcon = ({ name }: MaterialIconProps) => {
  const IconComponent = MaterialIcons[name];

  return <IconComponent /> || <MaterialIcons.MdDragIndicator />
  }
export default MaterialIcon;
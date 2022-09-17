import { IconContext } from 'react-icons';
import * as MaterialIcons from 'react-icons/md';
import { TypeMaterialIcon } from '../../../types/icon.types';

type MaterialIconProps = {
  name: TypeMaterialIcon;
  className?: string;
};

const MaterialIcon = ({ name, className }: MaterialIconProps) => {
  const IconComponent = MaterialIcons[name];

  return (
    <IconContext.Provider value={{ className }}>
      <IconComponent />
    </IconContext.Provider>
  );
};
export default MaterialIcon;

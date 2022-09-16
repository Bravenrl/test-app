import { TypeRootState } from "../store/root-reducer";
import { useSelector, TypedUseSelectorHook } from 'react-redux'

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector

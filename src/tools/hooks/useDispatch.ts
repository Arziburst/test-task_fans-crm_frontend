// Core
import { useDispatch as useReduxDispatch } from 'react-redux';

// Types
import { AppDispatch } from '../../init';

export const useDispatch = useReduxDispatch.withTypes<AppDispatch>();
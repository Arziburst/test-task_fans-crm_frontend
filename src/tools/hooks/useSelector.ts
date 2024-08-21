// Core
import { useSelector as useReduxSelector } from 'react-redux';

// Types
import { RootState } from '../../init';

export const useSelector = useReduxSelector.withTypes<RootState>();


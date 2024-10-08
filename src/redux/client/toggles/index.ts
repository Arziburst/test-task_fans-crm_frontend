// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

// Types
export type InitialStateToggles = {
    isInitialized: boolean
}

const initialState: InitialStateToggles = {
    isInitialized: false,
};

// Types
export type TogglesKeys = keyof typeof initialState;
type Options = { type: TogglesKeys, value: boolean };

// Slice
export const togglesSlice = createSlice({
    name:     'toggles',
    initialState,
    reducers: {
        toggleCreatorAction: (state, action: PayloadAction<Options>) => ({
            ...state,
            [ action.payload.type ]: action.payload.value,
        }),
        resetTogglesToInitialAction: () => initialState,
    },
});

// Interfaces
export const togglesActions = togglesSlice.actions;
export default togglesSlice.reducer;

export const useTogglesRedux = () => {
    const dispatch = useDispatch();

    return {
        togglesRedux:          useSelector(({ toggles }) => toggles),
        setToggleAction:       (options: Options) => void dispatch(togglesActions.toggleCreatorAction(options)),
        resetTogglesToInitial: () => void dispatch(togglesActions.resetTogglesToInitialAction()),
    };
};


// Tools
import { useDispatch, useSelector } from '../../tools/hooks';

// Slice
import { profileActions } from './slice';

// Types
import {Profile} from './types';

export const useProfile = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile);

    return {
      profile,
      setProfile: (profile: Profile) => dispatch(profileActions.setProfile(profile)),
      resetProfile: () => dispatch(profileActions.resetProfile()),
    };
};

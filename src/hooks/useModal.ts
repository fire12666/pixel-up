import { useState } from 'react';
import { POPUP_EXIT_DURATION } from '../utils/constants';

export const useModal = () => {
    const [isShown, setIsShown] = useState<boolean>(false);
    const toggle = () => {
        if (isShown) {
            setTimeout(() => {
                setIsShown(!isShown);
            }, POPUP_EXIT_DURATION);
        } else {
            setIsShown(!isShown);
        }
    }

    return {
        isShown,
        toggle,
    };
};

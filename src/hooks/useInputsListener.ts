import { useEffect } from 'react';

type Params = {
    isEnable: boolean,
    allowedInputs: readonly string[], // TODO: make it more strict
    callback: (key: string) => void;
}

export function useInputsListener({ isEnable, allowedInputs, callback }: Params) {
    useEffect(() => {
        function listenInput(event: KeyboardEvent) {
            if (allowedInputs.includes(event.key)) {
                callback(event.key);
            }
        }

        if (isEnable) {
            document.addEventListener('keydown', listenInput);
        } else {
            document.removeEventListener('keydown', listenInput);
        }

        return () => {
            document.removeEventListener('keydown', listenInput);
        };
    }, [isEnable, allowedInputs]);
}

import 'reflect-metadata';
import { useEffect, useRef, useState } from 'react';
import { LayoutState } from './Layout.state';

export function LayoutHook() {
    const [componentState, setcomponentState] = useState(new LayoutState());
    const initialized = useRef(false);

    async function loadData(): Promise<void> {
        const pageState: LayoutState = componentState.copy();
        await pageState.init();
        setcomponentState(pageState);
    }

    useEffect(() => {
        // userEffect implement here
        if (initialized.current) return;
        initialized.current = true;
        loadData();
    }, []);
    return {
        componentState
    };
}
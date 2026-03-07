import 'reflect-metadata';
import { useEffect, useState } from 'react';
import { LayoutState } from './Layout.state';

export function LayoutHook() {
    const [componentState, setcomponentState] = useState(new LayoutState());

    async function loadData(): Promise<void> {
        const pageState: LayoutState = componentState.copy();
        await pageState.init();
        setcomponentState(pageState);
    }

    useEffect(() => {
        // userEffect implement here
        loadData();
    }, []);
    return {
        componentState
    };
}
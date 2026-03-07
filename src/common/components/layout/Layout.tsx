import React from 'react';
import './Layout.scss';
import { LayoutHook } from './Layout.hook';
import LanguageHook from '../../hooks/languageHook';
import NotReady from '../notReady/NotReady';
import { AppRouterName } from '../../../AppRouter';

function Layout({ children }: { children?: React.ReactNode }): React.JSX.Element {
    const language = LanguageHook();
    const elHook = LayoutHook();
    if (elHook.componentState.isReady) {
        return (
            <div className="layout-view flex-1 flex flex-col">
                <div className="navbar min-h-16 px-40 app-navbar flex justify-between items-center">
                    <div className="navbar-logo">
                        <a href={AppRouterName.home} className="flex">
                            <img className='h-10' src='/logo.svg' alt='header-log'></img>
                        </a>
                    </div>
                    <div className="navbar-end flex">
                        <a
                            href="#"
                            className="btn btn-ghost btn-sm text-white hover:text-primary flex gap-1.5 font-light min-w-40 min-h-12 flex justify-center items-center">
                            <img className='h-8' src='/icon_memo.svg' alt='menu-item-01'></img>
                            {language.layout.menuItem01}
                        </a>
                        <a
                            href="#"
                            className="btn btn-ghost btn-sm text-white hover:text-primary flex gap-1.5 font-light min-w-40 min-h-12 flex justify-center items-center">
                            <img className='h-8' src='/icon_challenge.svg' alt='menu-item-02'></img>
                            {language.layout.menuItem02}
                        </a>
                        <a
                            href="#"
                            className="btn btn-ghost btn-sm text-white hover:text-primary flex gap-1.5 font-light min-w-40 min-h-12 flex justify-center items-center">
                            <div className='relative'>
                                <img className='h-8' src='/icon_info.svg' alt='menu-item-03'></img>
                                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                                    1
                                </span>
                            </div>
                            {language.layout.menuItem03}
                        </a>
                        <button className="btn btn-ghost btn-sm cursor-pointer ms-4" title="btn-menu">
                            <img className='h-8' src='/icon_menu.svg' alt='menu-item-icon'></img>
                        </button>
                    </div>
                </div>
                <div className='flex flex-1'>{children}</div>
            </div>
        );
    }
    else {
        return (
            <NotReady></NotReady>
        );
    }
}

export default Layout;
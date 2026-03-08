import React from 'react';
import './Home.scss';
import LanguageHook from '../../common/hooks/languageHook';
import { HomeHook } from './Home.hook';
import NotReady from '../../common/components/notReady/NotReady';
import Layout from '../../common/components/layout/Layout';

function Home(): React.JSX.Element {
    const language = LanguageHook();
    const elHook = HomeHook();
    if (elHook.componentState.isReady) {
        return (
            <Layout>
                <div className="home-view flex-1 flex flex-col">
                    <div className='home-analytics h-78 flex'>
                        <div className="home-analytics--progressing flex w-full md:w-135 justify-center items-center">
                            <div className="radial-progress"
                                style={{ "--value": elHook.componentState.model.analyticsData.progressing, "--size": "181px", "--thickness": "4px" } as React.CSSProperties}
                                aria-valuenow={elHook.componentState.model.analyticsData.progressing} role="progressbar">
                                <div className='flex gap-1'>
                                    <span className='text-[18px] leading-5.5 pt-1.75' >{elHook.componentState.model.analyticsData.working}/{elHook.componentState.model.analyticsData.total}</span>
                                    <span className='text-[25px] leading-7.5'>{elHook.componentState.model.analyticsData.progressing}%</span>
                                </div>
                            </div>
                        </div>
                        <div className='home-analytics--chart flex-1'>
                            <canvas id="homeAnalyticsChart"></canvas>
                        </div>
                    </div>
                    <div className='home-menu flex gap-16 justify-center py-6'>
                        {
                            elHook.componentState.model.menu.map((item) => {
                                return (
                                    <a href='' className='home-menu--item w-34 h-34 flex flex-col justify-center items-center cursor-hand' key={item.title}>
                                        <img className='w-14 h-14' src={item.icon} alt='icon-knife'></img>
                                        <span className='text-xl'>{item.title}</span>
                                    </a>
                                )
                            })
                        }
                    </div>
                    <div className='home-menu-list flex-1 flex flex-col justify-center'>
                        <div className='home-menu-list--data flex-1 flex flex-wrap gap-2 justify-center'>
                            {
                                elHook.componentState.model.menuItemList.map((item, index) => {
                                    return (
                                        <div className='home-menu-list--item w-58.5 h-58.5' style={{ backgroundImage: `url('${item.image}')` }} key={`item-${index}`}>
                                            <div className='home-menu-list--item---info w-fit p-1.75 ps-2 text-[15px] leading-4.5'>
                                                <span>{elHook.componentState.formatMenuListItemDate(item.date)}.</span>
                                                <span>{item.title}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='flex justify-center pt-7 pb-16'>
                            <button
                                onClick={() => { elHook.loadMore(); }}
                                className="btn border-none shadow-none text-white font-light min-w-[288px] min-h-14 text-[16px] px-1 pt-3.5 pb-4 bg-linear-to-b from-orange-300 to-yellow-300">
                                {language.home.loadMore}
                            </button>
                        </div>
                    </div>

                </div>
            </Layout>
        );
    }
    else {
        return (
            <NotReady></NotReady>
        );
    }
}

export default Home;
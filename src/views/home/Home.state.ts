import { ComponentState } from '../../common/types/componentState';
import { AuthProfileObject } from '../../types/authObject';
import { MenuItemObject } from '../../types/menuItemObject';
import { HomeAnalytics, HomeAnalyticsChartData, HomeModel } from './Home.model';
import { Chart, registerables } from 'chart.js';

export class HomeState extends ComponentState {
    public model: HomeModel = new HomeModel();
    public modelPropName = 'model';
    public currentProfile!: AuthProfileObject;

    public async init(): Promise<void> {
        const me = this;
        Chart.register(...registerables);
        me.model.analyticsData = await me.getAnalyticsData();
        me.getHomeMenu();
        me.model.menuItemList = [];
        me.getHomeMenuList();
        me.isReady = true;
    }

    private async getAnalyticsData(): Promise<HomeAnalytics> {
        const chartData = {
            labels: ["6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月"],
            datasets: [
                {
                    name: "A",
                    data: [95, 90, 70, 80, 75, 65, 78, 68, 60, 57, 53, 58]
                },
                {
                    name: "B",
                    data: [97, 88, 76, 74, 60, 59, 52, 50, 47, 35, 32, 29]
                }
            ]
        } as HomeAnalyticsChartData;
        const data = {
            working: 5,
            total: 12,
            progressing: 75,
            chartData: chartData
        } as HomeAnalytics;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    resolve(data);
                } catch (err) {
                    console.log(err);
                    reject(undefined)
                }
                resolve(data);
            }, 200); // fake 200ms
        });
    }

    public getHomeMenu(): void {
        const me = this;
        me.model.menu = [
            {
                icon: '/assests/images/icon_knife.svg',
                title: me.languageService.text.home.monrning
            },
            {
                icon: '/assests/images/icon_knife.svg',
                title: me.languageService.text.home.lunch
            },
            {
                icon: '/assests/images/icon_knife.svg',
                title: me.languageService.text.home.dinner
            },
            {
                icon: '/assests/images/icon_knife.svg',
                title: me.languageService.text.home.snack
            },
        ]
    }

    public getHomeMenuList(): void {
        const me = this;
        const menuItems: MenuItemObject[] = [
            {
                image: '/assests/images/m01.jpg',
                title: 'Morning',
                date: new Date('2024-05-21')
            },
            {
                image: '/assests/images/l03.jpg',
                title: 'Lunch',
                date: new Date('2024-05-21')
            },
            {
                image: '/assests/images/d01.jpg',
                title: 'Dinner',
                date: new Date('2024-05-21')
            },
            {
                image: '/assests/images/l01.jpg',
                title: 'Snack',
                date: new Date('2024-05-21')
            },
            {
                image: '/assests/images/m01.jpg',
                title: 'Morning',
                date: new Date('2024-05-20')
            },
            {
                image: '/assests/images/l02.jpg',
                title: 'Lunch',
                date: new Date('2024-05-20')
            },
            {
                image: '/assests/images/d02.jpg',
                title: 'Dinner',
                date: new Date('2024-05-20')
            },
            {
                image: '/assests/images/s01.jpg',
                title: 'Snack',
                date: new Date('2024-05-21')
            }
        ];
        me.model.menuItemList.push(...menuItems);
    }

    public loadMore(): void {
        const me = this
        me.getHomeMenuList();
    }

    public formatMenuListItemDate(date: Date) {
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${month}.${day}`;
    };
}
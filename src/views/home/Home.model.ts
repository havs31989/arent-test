import { BaseModel } from '../../common/types/baseModel';
import { MenuItemObject } from '../../types/menuItemObject';

export interface HomeAnalyticsChartData {
    labels: string[],
    datasets: {
        name: string;
        data: number[];
    }[]
}

export interface HomeAnalytics {
    working: number;
    total: number;
    progressing: number;
    chartData: HomeAnalyticsChartData
}

export interface HomeMenu {
    icon: string;
    title: string;
}

export class HomeModel extends BaseModel {
    public analyticsData: HomeAnalytics = {} as HomeAnalytics;
    public menu: HomeMenu[] = [];
    public menuItemList: MenuItemObject[] = [];

    public isValid(): boolean {
        return true;
    }
}
import { ComponentState } from '../../common/types/componentState';
import { AuthProfileObject } from '../../types/authObject';
import { HomeModel } from './Home.model';

export class HomeState extends ComponentState {
    public model: HomeModel = new HomeModel();
    public modelPropName = 'model';
    public currentProfile!: AuthProfileObject;

    public async init(): Promise<void> {
        const me = this;
        me.isReady = true;
    }
}
import { ComponentState } from '../../types/componentState';
import { BaseModel } from '../../types/baseModel';

export class LayoutState extends ComponentState {

    public model = {} as BaseModel;
    public modelPropName = 'model';

    public async init(): Promise<void> {
        const me = this;
        me.isReady = true;
    }
}
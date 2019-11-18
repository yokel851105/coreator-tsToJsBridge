// import {hellolib} from "./TSTOJS";


import {hellolib} from "./TSTOJS";
import World = hellolib.World;

const {ccclass, property} = cc._decorator;
@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    start() {
        // init logic
        this.label.string = this.text;
        World.prototype.init();
        World.prototype.initHippoSDK();
    }
}

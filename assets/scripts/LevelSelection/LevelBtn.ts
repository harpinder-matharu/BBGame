
import { _decorator, Component, Node, spriteAssembler, Sprite, Label, Color } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = LevelBtn
 * DateTime = Fri Mar 25 2022 11:06:41 GMT+0530 (India Standard Time)
 * Author = harpinder_singh
 * FileBasename = LevelBtn.ts
 * FileBasenameNoExtension = LevelBtn
 * URL = db://assets/scripts/LevelSelection/LevelBtn.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('LevelBtn')
export class LevelBtn extends Component {
    @property(Sprite)
    star1:Sprite = null!;

    @property(Sprite)
    star2:Sprite = null!;

    @property(Sprite)
    star3:Sprite = null!;

    @property(Label)
    levelNum:Label = null!;

    @property(Label)
    score:Label = null!;

    start () {
        this.setLevelProgress(1,0);
    }

    setLevelNum(level:number){
        this.score.string = "LEVEL "+this.levelNum.toString();
    }

    setLevelProgress(stars:number,score:number){

        1<=stars?this.star1.color = new Color(0,0,0,0):this.star1.color = new Color(0,0,0,255);
        2<=stars?this.star2.color = new Color(0,0,0,0):this.star2.color = new Color(0,0,0,255);
        3<=stars?this.star3.color = new Color(0,0,0,0):this.star3.color = new Color(0,0,0,255);

        this.score.string = "SCORE "+score.toString();
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */


import { _decorator, Component, Node, ProgressBar, Label } from 'cc';
import { ResourceUtils } from './managers/ResourceUtils';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Loading
 * DateTime = Fri Mar 25 2022 10:00:40 GMT+0530 (India Standard Time)
 * Author = harpinder_singh
 * FileBasename = Loading.ts
 * FileBasenameNoExtension = Loading
 * URL = db://assets/scripts/Loading.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('Loading')
export class Loading extends Component {
    
    @property(ProgressBar)
    progressBar:ProgressBar = null!
    interval: any;
    @property(Label)
    loadingPercent: Label = null!;

    

    start () {
        this.loadResources();
    }

    loadResources(){

        let time = 0;
        let percent = 0;
        this.interval = setInterval(()=>{
            time += 0.005;
            
            if(this.progressBar){
                if(this.progressBar.progress >= 1){
                    this.loadingPercent.string = "100%";
                    // this.showMetaMaskButton();
                    // clearInterval(this.interval);
                }
                else{
                    percent = Math.min(time, 1);
                    this.progressBar.progress = percent;
                    this.loadingPercent.string = (percent*100).toFixed(0)+"%";
                }
            }
        }, 100);

        ResourceUtils.getInstance().loadRoomResource("Prefab").then((res)=>{
            
            clearInterval(this.interval);

            this.interval = setInterval(()=>{
                time += 0.005;
                
                if(this.progressBar){
                    percent = Math.min(time, 1);
                    this.progressBar.progress = percent;
                    
                    if(this.progressBar.progress == 1){
                        this.loadingPercent.string = "100%";
                        this.showLevelSelevtion();
                        clearInterval(this.interval);
                    }
    
                    this.loadingPercent.string = (percent*100).toFixed(0)+"%";
                }
            }, 0.5);

        }).catch((err)=>{
            this.loadResources();
        });
    }
    showLevelSelevtion(){
    
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


import { _decorator, Component, Node, resources, Asset, Prefab } from 'cc';
import { LOG_VISIBILITY } from '../common/Constants';

const { ccclass, property } = _decorator;

//Loads all the resources on login.

@ccclass('ResourceUtils')
export class ResourceUtils extends Component {
    
    _gameResource :Record<string,any>={};
    public static _instance: ResourceUtils;

    start () {
        
    }

    public static getInstance(){
        if(!ResourceUtils._instance){
            ResourceUtils._instance = new ResourceUtils();
        }
        return ResourceUtils._instance;
    }

    loadRoomResource(directoryName:string){
        return new Promise((resolve,reject)=>{

            if(this._gameResource[directoryName]){
                resolve(this._gameResource[directoryName]);
            }
            else{
                resources.loadDir(directoryName,(err:Error|null,data: Asset[])=>{
                    if(err){
                        if(LOG_VISIBILITY.INFO)
                            console.log(err);

                        reject(err);
                    }else{
                        if(LOG_VISIBILITY.INFO)
                            console.log("Data : ",data);
                        this._gameResource[directoryName] = data;
                    }
                    if(LOG_VISIBILITY.INFO)
                        console.log(this._gameResource[directoryName]);
                    
                    resolve(this._gameResource[directoryName]);
                });
            }
        });
    }

    public getPrefab(name:string) : Prefab|undefined{
        if(this._gameResource["Prefab"]){
            let prefab : Prefab|undefined= this._gameResource["Prefab"].find(prefab => prefab.data.name == name);

            // this._gameResource["Prefab"].find(prefab => {
            //     console.log(prefab.data.name)});
            
            return prefab ;
        }

        return undefined;
    }
}

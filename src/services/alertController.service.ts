import {AlertController} from 'ionic-angular';
import {Injectable} from '@angular/core';
/*objects*/
import {AlertControllerViewModel} from './../objects/AlertControllerViewModel.object';

@Injectable()
export class AlertControllerService{
    constructor(public alertController:AlertController){
    }
    Create(success:any, failed:any, vm:AlertControllerViewModel):any{
        const salert=this.alertController.create({
            title:vm.title,
            subTitle:vm.subtitle,
            buttons:[{
                      text:vm.buttonCancelLabel,
                      handler:()=>{
                        failed();
                      }
                    },
                    {
                      text:vm.buttonConfirmLabel,
                      handler:()=>{
                        success();
                      }
                    }]
          });
          return salert;
    }

    

}


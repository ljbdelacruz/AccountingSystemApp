export class AlertControllerViewModel{
    title:string;
    subtitle:string;
    buttonCancelLabel:string;
    buttonConfirmLabel:string;
    constructor(title:string, subtitle:string, buttonCancelLabel:string, buttonConfirmLabel:string){
        this.title=title;
        this.subtitle=subtitle;
        this.buttonCancelLabel=buttonCancelLabel;
        this.buttonConfirmLabel=buttonConfirmLabel;
    }
}
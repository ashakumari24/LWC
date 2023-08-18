import { LightningElement, api } from 'lwc';

export default class Parent extends LightningElement {
    childOneSel= "Deselected";
    childTwoSel= "Deselected";
    childThreeSel= "Deselected";

    @api parentReset(){
        this.childOneSel = "Deselected";
        this.childTwoSel = "Deselected";
        this.childThreeSel = "Deselected";
        this.template.querySelector('c-first-child').childReset();
        this.template.querySelector('c-second-child').childReset();
        this.template.querySelector('c-third-child').childReset();
    }
    handleChild(event){
        switch(event.target.childName){
            case "ChildOne":
                event.target.btnSelection === "Select" ? this.childOneSel = "Selected" : this.childOneSel = "Deselected";
                break;
            case "ChildTwo":
                event.target.btnSelection === "Select" ? this.childTwoSel = "Selected" : this.childTwoSel = "Deselected";
                break;
            case "ChildThree":
                event.target.btnSelection === "Select" ? this.childThreeSel = "Selected" : this.childThreeSel = "Deselected";
                break;
        }
    }
}
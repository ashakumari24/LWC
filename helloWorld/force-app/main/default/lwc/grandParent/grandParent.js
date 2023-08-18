import { LightningElement } from 'lwc';

export default class GrandParent extends LightningElement {
    numChildSel = 0;

    handleChild(event){
        event.detail === "Select" ? this.numChildSel += 1 : this.numChildSel -= 1;
    }

    handleReset(event){
        this.numChildSel = 0
        this.template.querySelector('c-parent').parentReset();
    }
}
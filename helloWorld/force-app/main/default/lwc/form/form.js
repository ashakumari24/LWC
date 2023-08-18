import { LightningElement,track,wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getAccount from '@salesforce/apex/AccountHelper.createAccount'; 
export default class Form extends LightningElement {
  value="value from form";
  @track searchValue;

    name;
    rating;
    phone;
    handleName(event){
     this.name = event.target.value;
    }
    handleRating(event){
     this.rating= event.target.value;
    }
    handlePhone(event){
     this.phone = event.target.value;
    }
    submit(event){
        event.preventDefault();
        getAccount({AcName:this.name,accPhNo:this.phone,rating:this.rating})
        .then((result) => {
            console.log(result);
           console.log(result[0].Id);
           if(result[0].Id){
            const event = new ShowToastEvent({
                title: 'Success',
                message:'Created Successfully',
                variant:'success',
            });
            this.dispatchEvent(event);
           }
        }).catch(error =>{
            console.log(error);
            const event = new ShowToastEvent({
                title: 'Error',
                message:error.body.message,
                variant:'error',
            });
            this.dispatchEvent(event);
        })
    }
   
    handleSearchValue(event){
        console.log('event' + event);
        this.searchValue=event.detail;
    }
    
}
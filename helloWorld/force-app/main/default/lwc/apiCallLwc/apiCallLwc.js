import { LightningElement} from 'lwc';
export default class ApiCallLwc extends LightningElement {
     username;
     user={};
    storeUserName(event){
        this.username=event.target.value;
    }
    searchProfile(event){
        console.log('Hello');
        fetch('https://api.github.com/users/'+this.username)
        .then(response => response.json())
        .then(data =>{
            console.log(data);
                this.user = {
                    id: data.id,
                    name: data.name,
                    image: data.avatar_url,
                    blog: data.blog,
                    about: data.bio,
                    repos: data.public_repos,
                    followers: data.followers
                };
        })
        console.log(this.user);
    }
    
}
import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count1:1,
            user:{
                login:"waz"
            }
           

        }
    }

    async componentDidMount() {
        const userData = await fetch("https://api.github.com/users/Wasifa-git");
        const userjson = await userData.json();
        console.log(userjson);
        this.setState({user:userjson});

        this.timer = setInterval(()=>{
            console.log("koko");
        },2000);

    }
    componentDidUpdate(){
        console.log("component did mount update ");
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    
    render( ){
        const {count1,count2} = this.state;
        const {name,location }= this.props;
        return ( <div>
            <h1>{count1}</h1>
            <h1>{name}</h1>
            <h2>{location}</h2>
            <h3>{this.state.user.login}</h3>
            <img src={this.state.user.avatar_url}/>
        </div>)
    }
    
}
export default UserClass;
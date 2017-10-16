import React,{ Component } from 'react'
import Channels from './Channels'
import { getChannelInformation } from './Api'


class Home extends Component{

    constructor(props){
        super(props)

        this.state ={
            users: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", 
                    "habathcx", "RobotCaleb", "noobs2ninjas", "storbeck","brunofin", "comster404"],
            displayNames: [],
            logos : [],
            status: [],
            previewLogo: [],
            currentStream: [],
            allClass:"active",
            onlineClass:"",
            offlineClass:"",
            streamUrl:[]
        }
        this.sortAllStatus = this.sortAllStatus.bind(this)
        this.sortOnlineStatus = this.sortOnlineStatus.bind(this)
        this.sortOfflineStatus = this.sortOfflineStatus.bind(this)
    }

    componentDidMount(){
        //  User Information
        const { users } = this.state; let nameString = "", logoString = "", streamUrl = "";
        // Stream Information
        let statuses = "", previewUrl="",streamDesc=""

        for ( let i =0;i<users.length;i++){

            // Gets Channel Information
            getChannelInformation(users[i])
            .then(({userInfo: user, streamInfo: stream}) => {

                if (user.name === undefined) { user.name = users[i]; user.logo = 'img/closed.png';}
                if (user.logo === null) { user.logo = 'img/null.png';}
                streamUrl += user.name === undefined?'# ':`${user.name} ` 
                nameString += user.name + " "; logoString += user.logo + " "
                let nameArr = nameString.split(' '), logoArr = logoString.split(' '), streamUrlArr = streamUrl.split(' ')
                if (nameArr.length === 11) { nameArr.pop(); logoArr.pop(); streamUrlArr.pop() }

                this.setState({ displayNames: nameArr})
                this.setState({ logos: logoArr, streamUrl: streamUrlArr})
                
                statuses += stream.status+" "
                let statusArr = statuses.split(" ")

                previewUrl += stream.preview+" "
                let previewArr = previewUrl.split(" ")

                streamDesc += stream.currentStream+"^"
                let streamArr = streamDesc.split("^")

                if(statusArr.length === 11){
                    statusArr.pop(); previewArr.pop(); streamArr.pop()
                }

                this.setState({ status:statusArr,previewLogo:previewArr, currentStream: streamArr })
            })
        }
        
    }

    sortAllStatus(){
        this.setState({ allClass:"active", onlineClass:"", offlineClass:""})
         let allStatuses = document.querySelectorAll('h2.channel-tv-status')
        allStatuses.forEach(function(element) {
                element.parentNode.parentNode.className="show channel-list-container"
        }, this);
    }
    sortOnlineStatus(){
        this.setState({ allClass:"", onlineClass:"active", offlineClass:""})
        let allStatuses = document.querySelectorAll('h2.channel-tv-status')
        allStatuses.forEach(function(element) {
            if(element.innerHTML==="offline" || element.innerHTML==="account closed"){
                element.parentNode.parentNode.className="hide channel-list-container"
            }
            else{
                element.parentNode.parentNode.className="show channel-list-container"
            }
        }, this);
    }

    sortOfflineStatus(){
        this.setState({ allClass:"", onlineClass:"", offlineClass:"active"})
        let allStatuses = document.querySelectorAll('h2.channel-tv-status')
        allStatuses.forEach(function(element) {
            if(element.innerHTML==="live" || element.innerHTML==="account closed"){
                element.parentNode.parentNode.className="hide channel-list-container"
            }
            else{
                element.parentNode.parentNode.className="show channel-list-container"
            }
        }, this);
    }



    render(){
        const { displayNames, logos, previewLogo,status, currentStream, streamUrl } = this.state

        return(
            <div className="container">
                <div className="logo">
                    <img src="/img/logo.png" alt="Twitch logo"/>
                </div>
                
                <div className="channel-container">
                    <div className="status-header">
                        <ul>
                            <li className={ this.state.allClass } onClick={ this.sortAllStatus }>All</li>
                            <li className={ this.state.onlineClass } onClick={ this.sortOnlineStatus } >Online</li>
                            <li className={ this.state.offlineClass } onClick={ this.sortOfflineStatus } >Offline</li>
                        </ul>
                    </div>
                    <hr/>
                    { displayNames.map((data, index) =>
                        <Channels
                        name={ data } 
                        previewLogo={ previewLogo[index] } 
                        logoUrl={ logos[index] } 
                        status={ status[index] }
                        description={ currentStream[index] }
                        streamUrl={ `https://www.twitch.tv/${streamUrl[index]}`}
                        key={ index }/> 
                    )}
                </div>
            </div>
        )
    }
}

export default Home

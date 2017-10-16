import { get, all, spread } from 'axios'

module.exports.getChannelInformation = (username) => {
    return new Promise((resolve, reject) => {

            all([
                get(`https://wind-bow.glitch.me/twitch-api/users/${username}`),
                get(`https://wind-bow.glitch.me/twitch-api/streams/${username}`)
                ])
                .then(spread(function (userInfo, streamInfo) {

                     let usernames={}
                     usernames.name = userInfo.data.display_name
                     usernames.logo = userInfo.data.logo

                     let userStream = {}
                     if( streamInfo.data.stream === null){
                         userStream.currentStream = 'Stream Closed'
                         userStream.status = "offline"
                         userStream.preview = 'img/offline.gif'
                     }else{
                        userStream.status = streamInfo.data.stream.stream_type
                        userStream.currentStream = streamInfo.data.stream.game
                        userStream.preview = streamInfo.data.stream.preview.medium
                     }
                     resolve({ userInfo: usernames, streamInfo: userStream })

                }))
                //.then(response => this.setState({ vehicles: response.data }))
                .catch(error => console.log(error));
            
    })
}
import React, { Component } from 'react'

class Channels extends Component{
    render(){
        let { name, logoUrl, previewLogo, status, description, streamUrl } = this.props
        if( logoUrl==='img/closed.png'){
            previewLogo='img/404_02.jpg'
            status = 'account closed'
            description=""
        }
        let colorStyle= {
            backgroundColor: '#1BA39C'
        }
        let offlineStyle={
            backgroundColor: '#D24D57'
        }
        let closedStyle= {
            backgroundColor: '#065A76'
        }
        let style = status==='live'?colorStyle:offlineStyle
        return(
            <div className="channel-list-container" style={ status==='account closed'?closedStyle:style }>
                <div className="channel-desc">
                    <a href={ streamUrl }><h3 className="channel-name">{ name }</h3></a>
                    <a href={ streamUrl }><img src={ logoUrl } alt="Channel Logo" className="channel-logo"/></a>
                    <a href={ streamUrl }><h3 className="channel-tv-description">{ description }</h3></a>
                </div>
                <div className="channel-status">
                    <a href={ streamUrl }><img src={ previewLogo } alt="Channel Live Preview" className="channel-live-preiew"/></a>
                    <h2 className="channel-tv-status">{ status }</h2>
                </div>
            </div>
        )
    }
}

export default Channels

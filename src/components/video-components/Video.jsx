import React, { Component } from 'react'

export class Video extends Component {
    render() {
        return (
            <div>
                <iframe src=''
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                />
            </div>
        )
    }
}

export default Video

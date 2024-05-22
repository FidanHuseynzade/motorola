import React from 'react'
import "./index.scss"

const Map = () => {
    return (
        <div className="google-map-code">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12158.994003742937!2d49.8154458!3d40.3701006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc397d94dc3%3A0x617bc46b47244c00!2sAz%C9%99rbaycan%20Texniki%20Universiteti!5e0!3m2!1saz!2saz!4v1700606796840!5m2!1saz!2saz"
                width="100%" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>

    )
}

export default Map
import React, { Component } from "react";

class SocialProfile extends Component {
    render() {
        const {link, image } = this.props.socialProfile;
        return(
            <div>
                <a href={link}><img src={image} alt="social-profile" /></a>
            </div>

        );
    }
}

export default SocialProfile;
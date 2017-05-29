import React from 'react';

class StatusImg extends React.Component {
    constructor(props) {
        super(props);
        this.state = { status: 'loading' };
    }
    handleImageLoaded() {
        this.setState({ status: 'loaded' });
    }
    handleImageErrored() {
        this.setState({ status: 'failed' });
    }
    render(props) {
        return (
            <img
                src={this.props.src}
                alt={this.props.alt}
                onLoad={this.handleImageLoaded.bind(this)}
                onError={this.handleImageErrored.bind(this)}
                className={this.state.status}
            />
        )
    }
}

export default StatusImg;

import React from 'react';

class ProjectThumb extends React.Component {
    render() {
        return (
            <div className="project">
                <div className="wrap">
                    <div className="image" style={{ backgroundImage: 'url('+this.props.img+')' }}></div>
                    <div className="infos">
                        <div className="center">
                            <div className="name">{this.props.name}</div>
                            <div className="techs">{this.props.techs}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectThumb;

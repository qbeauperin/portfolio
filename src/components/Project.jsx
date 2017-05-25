import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Project extends React.Component {
    render() {
        return (
            <CSSTransitionGroup
                transitionName="project"
                transitionAppear={true}
                transitionAppearTimeout={400}
                transitionEnterTimeout={0}
                transitionLeaveTimeout={0}>
                <div className={"project" + (this.props.name ? ' active' : '')}>
                    <div className="image" style={{ backgroundImage: 'url('+this.props.img+')' }}></div>
                    <dl className="content">
                        <dt>Name</dt>
                        <dd>{this.props.name}</dd>
                        <dt>Techs</dt>
                        <dd>{this.props.techs}</dd>
                    </dl>
                </div>
            </CSSTransitionGroup>
        );
    }
}

export default Project;

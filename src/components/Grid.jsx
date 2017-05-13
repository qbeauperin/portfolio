import React from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Grid extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            elements: [this.props.elements[0]]
        };
    }
    addElement(){
        this.setState(Object.assign({}, this.state, {
            elements: this.state.elements.concat([this.props.elements[this.state.elements.length]])
        }));
        if(this.state.elements.length >= this.props.elements.length) clearInterval(this.animation);
    }
    componentDidMount(){
        this.animation = setInterval(() => this.addElement(), this.props.delay || 50);
    }
    componentWillUnmount(){
        clearInterval(this.animation);
    }
    render() {
        return (
            <div className="grid">
                <CSSTransitionGroup
                    transitionName="grid"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnterTimeout={0}
                    transitionLeaveTimeout={0}>
                    {this.state.elements}
                </CSSTransitionGroup>
            </div>
        );
    }
}

Grid.PropTypes = {
    elements: PropTypes.array.isRequired,
    delay: PropTypes.number
}

export default Grid;

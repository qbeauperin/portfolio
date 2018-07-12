import React from 'react';
import Swiper from 'react-id-swiper';
import StatusImg from './StatusImg';
import './Project.css';
import '../styles/swiper.css';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = { state: '' };
    }
    componentDidMount() {
        this.timeout = setTimeout(() => {
            if(this.props.name) {
                this.setState({ state: 'active' });
            }
        }, this.props.timeout || 200);
    }
    componentWillUnmount() {
        if(this.timeout) {
            clearTimeout(this.timeout);
        }
    }
    render() {
        const techs = (!this.props.techs) ? '' : this.props.techs.map((tech, key) => (
            <li key={key}>{tech}</li>
        ));
        const features = (!this.props.features) ? '' : this.props.features.map((feature, key) => (
            <li key={key}>{feature}</li>
        ));
        const comments = (!this.props.comments) ? '' : this.props.comments.map((comment, key) => (
            <li key={key}>{comment}</li>
        ));
        const slides = (!this.props.imgs) ? '' : this.props.imgs.map((img, key) => (
            <div key={key} className="swiper-slide">
                <div className={'slide ' + img.type}>
                    <div className="slide-wrapper">
                        <div className="swiper-lazy-preloader"><span></span></div>
                        <StatusImg src={img.src} alt={this.props.name + ' ' + key}/>
                    </div>
                </div>
            </div>
        ));
        const params = {
            lazyLoading: true,
            preloadImages: false,
            lazyLoadingInPrevNext: true,
            watchSlidesVisibility: true,
            spaceBetween: 40,
            autoplay: 4000,
            breakpoints: {
                1024: {
                    spaceBetween: 0
                }
            },
            onInit: (swiper) => {
                this.swiper = swiper
            }
        };
        const imgs = (!this.props.imgs) ? '' : (
            <Swiper {...params}>{slides}</Swiper>
        );
        return (
            <div className={"project " + this.state.state}>
                <div className="images">{imgs}</div>
                <div className="content">
                    <dl className="techs">
                        <dt className="underline">Techs</dt>
                        <dd>
                            <ul>{techs}</ul>
                        </dd>
                    </dl>
                    <dl className="features">
                        <dt className="underline">Features</dt>
                        <dd>
                            <ul>{features}</ul>
                        </dd>
                    </dl>
                    <dl className="comments">
                        <dt className="underline">Comments</dt>
                        <dd>
                            <ul>{comments}</ul>
                        </dd>
                    </dl>
                </div>
            </div>
        );
    }
}

export default Project;

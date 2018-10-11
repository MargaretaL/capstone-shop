/**
 * Created by lilit on 2018-10-01.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselCaption,
    NavLink
} from 'reactstrap';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {activeIndex: 0};
    }

    onExiting = () => {
        this.animating = true;
    };

    onExited = () => {
        this.animating = false;
    };

    next = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.props.items && this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({activeIndex: nextIndex});
    };

    previous = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.items && this.props.items.length - 1 : this.state.activeIndex - 1;
        this.setState({activeIndex: nextIndex});
    };

    goToIndex = (newIndex) => {
        if (this.animating) return;
        this.setState({activeIndex: newIndex});
    };

    render() {

        const {activeIndex} = this.state;

        const slides = !this.props.items ? [] : this.props.items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key="key">
                    <div className="carousel-image-c">
                        <Link to={`/product/${item.name}`}><img style={{maxHeight: 200, maxWidth: '100%'}}
                                                                src={item.imagelink} alt="alt"/></Link>
                    </div>
                </CarouselItem>
            );
        });

        return (
            <div>
                <div>
                    <h1 className="text-center">Welcome!</h1>
                </div>
                <hr className="my-2"/>
                <div className="m-auto w-50 bg-dark" style={{marginTop: 500}}>
                    <Carousel
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous} top height="150px"
                        width="auto">
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous"
                                         onClickHandler={this.previous}/>
                        <CarouselControl direction="next" directionText="Next"
                                         onClickHandler={this.next}/>
                    </Carousel>
                </div>
                <button>
                    <NavLink to="/shopping">Shop</NavLink>
                </button>
            </div>

        );
    }
}
const mapStateToProps = ({items}) => {
    return {
        items
    }
};
export default connect(mapStateToProps)(Home);
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
    Button
} from 'reactstrap';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            toggle: false
        };
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

        const slides = !this.props.items ? [] : this.props.items.map((item, index) => {
            return (
                <CarouselItem

                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={index}>
                    <div className="carousel-image-c">
                        <Link to={`/product/${item.name}`}><img style={{maxHeight: 200, maxWidth: '100%'}}
                                                                src={item.imagelink} alt="alt"/></Link>
                    </div>
                </CarouselItem>
            );
        });
        return (
            <div className="text-center m-5">
                <div>
                    <h1 className="text-center">Welcome!</h1>
                </div>
                <hr className="my-2"/>
                <div className="m-auto col-lg-6 bg-dark">
                    <Carousel
                        interval={this.state.toggle===true? 3000: 0}
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous} top height="150px"
                        width="auto" className="m-5">
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous"
                                         onClickHandler={this.previous}/>
                        <CarouselControl direction="next" directionText="Next"
                                         onClickHandler={this.next}/>
                    </Carousel>
                </div>
                <label className="switch">
                    <input type="checkbox" value={this.state.toggle} onChange={(e) => this.setState({toggle:e.target.checked})}/>
                    <span>Toggle Slide Show</span>
                </label>
                <Button className="m-5 btn-outline-success">
                    <Link to="/shopping">Shop All</Link>
                </Button>
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
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

//The user should see a product carousel that contains at least 3 slides of products,
// with each slide having between 1 and 4 product images.
// rubric01

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
                        {/* If the user clicks on a product image, they should be taken to a
                         product page that is populated with the details of the clicked
                         product, rubric09*/}
                        <Link to={`/product/${item.name}`}><img style={{maxHeight: 200, maxWidth: '100%'}}
                                                                src={item.imagelink} alt="alt"/></Link>
                    </div>
                </CarouselItem>
            );
        });
        return (
            <div className="text-center m-5">
                <div>
                    {/*The user should see some text welcoming them to the website. rubric04*/}
                    <h1 className="text-center">Welcome!</h1>
                </div>
                <hr className="my-2"/>
                <div className="m-auto col-lg-6 bg-dark">

            {/*        If the “Toggle Slide Show” switch is checked, the product carousel
                    should automatically move forward one slide every 3 seconds, rubric10
             Whenever the product carousel changes it slide, it should do in
             an animated way, rubric11
                    */}
                    <Carousel
                        interval={this.state.toggle === true ? 3000 : 0}
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous} top height="150px"
                        width="auto" className="m-5">
                        {slides}
                        {/*   //The user should see a button that resembles a left arrow key to
                         //the left of the product carousel
                         //rubric02
                         Clicking on the left arrow should move the product carousel one
                         slide back.rubric08*/}
                        <CarouselControl direction="prev" directionText="Previous"
                                         onClickHandler={this.previous}/>
                        {/*     The user should see a button that resembles a right arrow key to
                         the right of the product carousel
                         rubric03
                         Clicking on the right arrow should move the product carousel one
                         slide forward, rubric07
                         */}
                        <CarouselControl direction="next" directionText="Next"
                                         onClickHandler={this.next}/>
                    </Carousel>
                </div>
                {/*The user should see a toggle switch labeled “Toggle Slide Show”, rubric06*/}
                <label className="switch">
                    <input type="checkbox" value={this.state.toggle}
                           onChange={(e) => this.setState({toggle: e.target.checked})}/>
                    <span>Toggle Slide Show</span>
                </label>
                {/*The user should see a button labeled “Shop All”, rubric05
                 If the user clicks on the “Shop All” button, the user should be
                 taken to the shopping page, rubric12
                */}
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
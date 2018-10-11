/**
 * Created by lilit on 2018-10-01.
 */

import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const About = (props) => {
    return (
        <div>
            <Jumbotron style={{backgroundColor: '#8FC33A'}}>
                <h1 className="display-3">We love our customers and our products!</h1>
                <p className="lead">You mean everything to us, that is why we strive to give you the best this world has to offer.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Button color="info">Learn More</Button>
                </p>
            </Jumbotron>
        </div>
    );
};

export default About;
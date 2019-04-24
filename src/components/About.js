/**
 * Created by lilit on 2018-10-01.
 */

import React from 'react';
import { Jumbotron } from 'reactstrap';

const About = (props) => {
    return (
        <div className="mt-5">
            {/*About page is visually appealing (score 1-3) rubric63*/}
            <Jumbotron className="bg-success">
                <h1 className="display-3 text-light">We love our customers and our products!</h1>
                <p className="lead text-light">You mean everything to us, that is why we strive to give you the best this world has to offer.</p>
                <hr className="my-2" />
            </Jumbotron>
        </div>
    );
};

export default About;
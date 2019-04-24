/**
 * Created by lilit on 2018-10-09.
 */

import React from 'react';


class Contact extends React.Component {

    state = {
        formMessage: ''
    };

    handleChange = (e) => {
        this.setState({formMessage: e.target.value});
    };

    onSubmit = () => {
        alert(this.state.formMessage)
    };

    render() {
        return (
            <div className="mt-5 col-lg-10 m-auto">
            <form className="m-5 bg-white shadow-lg border-secondary p-4" onSubmit={this.onSubmit}>
                <fieldset>
                    <legend>Contact us</legend>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="firstname"/>
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="lastname"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="email"/>
                    </div>
                    <div className="form-group col-md-4">
                        <select id="inputState" className="form-control">
                            <option>Choose Subject</option>
                            <option>Products</option>
                            <option>Shopping</option>
                            <option>Shipping</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="Write a message" onChange={this.handleChange}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Send</button>
                    </fieldset>
            </form>
                <aside className="m-5">
                    <p>Phone: +111 111 111</p>
                    <p>Email: supershopper@shop.com</p>
                </aside>
            </div>
        );
    }
}

export default Contact;
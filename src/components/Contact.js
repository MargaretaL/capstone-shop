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

/*    The send button should create an alert based on the message
    sent
    rubric60*/

    onSubmit = () => {
        alert(this.state.formMessage)
    };

    render() {
        return (
            <div className="mt-5 col-lg-10 m-auto">
    {/*            The user should see a form with text input fields for name and
                email, a dropdown list for subject, and a text area for a message.
                These fields should have placeholders to show what they
                represent
                rubric57*/}
            <form className="m-5 bg-white shadow-lg border-secondary p-4" onSubmit={this.onSubmit}>
                <fieldset>
                    <legend>Contact us</legend>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    {/*    The form should show validation errors if the form isn’t filled out
                        correctly and the send button is pressed rubric61*/}
                        <input type="text" className="form-control" placeholder="firstname" required={true}/>
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="lastname" required={true}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="email" required={true}/>
                    </div>
                    <div className="form-group col-md-4">
                        <select id="inputState" className="form-control required">
                            <option value="" disabled selected>Choose Subject</option>
                            <option>Products</option>
                            <option>Shopping</option>
                            <option>Shipping</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="Write a message" onChange={this.handleChange} required={true}/>
                    </div>
                </div>
                    {/*The user should see a button labeled “Send” rubric59*/}
                    <button type="submit" className="btn btn-success">Send</button>
                    </fieldset>
            </form>
                <aside className="m-5">
                  {/*  The user should see description that shows an email and phone
                    number for the contacting the business rubric58*/}
                    <p>Phone: +111 111 111</p>
                    <p>Email: supershopper@shop.com</p>
                </aside>
            </div>
        );
    }
}

export default Contact;
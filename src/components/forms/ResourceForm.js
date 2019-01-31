import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createResource } from "./../../actions/resourceAction";
import { reduxForm, Field } from "redux-form";
import Input from "./fields/Input";
import { Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class ResourceForm extends Component {
    onResourceFormSubmit = async (formValues) => {
        const { title, description, link } = formValues;
        const { createResource, token } = this.props;
        createResource({ title, description, link }, token)
            .then(() => this.props.history.push("/resources"))
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <ModalHeader toggle={this.toggle}>Create a new resource</ModalHeader>
                <form onSubmit={handleSubmit(this.onResourceFormSubmit)}>
                    <ModalBody>
                        <p>
                            <label htmlFor="title">Title</label>
                            <Field
                                type="text"
                                name="title"
                                component={Input}
                            />
                        </p>
                        <p>
                            <label htmlFor="description">Description</label>
                            <Field
                                type="text"
                                name="description"
                                component={Input}
                            />
                        </p>
                        <p>
                            <label htmlFor="link">Link</label>
                            <Field
                                type="text"
                                name="link"
                                component={Input}
                            />
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="info" type="submit">Create</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </form>
            </div>
        );
    }
}

const WrappedResourceForm = reduxForm({
    form: "resource",
    validate: ({ title, description, link }) => {
        const errors = {};

        if (!title) {
            errors.title = "Title is required!"
        }

        if (!description) {
            errors.url = "Description is required!"
        }

        if (!link) {
            errors.url = "Link is required!"
        }

        return errors;
    }
})(ResourceForm);

const mapStateToProps = (state) => {
    return {
        resources: state.resources,
        token: state.auth.token
    }
}

export default connect(mapStateToProps, { createResource })(withRouter(WrappedResourceForm));
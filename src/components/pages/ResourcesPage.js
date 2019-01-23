import React, { Component } from 'react';
import ResourceItems from '../structure/ResourceItems';
import { Jumbotron } from 'reactstrap';

class ResourcesPage extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Resources</h1>
                    <p className="lead">Contribute with our projects on GitHub</p>
                    <hr className="my-2" />
                    <a href="https://github.com/node-girls-australia" ><i class="fab fa-5x fa-github"></i></a>
                </Jumbotron>
                <ResourceItems />

            </div>
        );
    }
}

export default ResourcesPage;
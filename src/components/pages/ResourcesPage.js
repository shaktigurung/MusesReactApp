import React, { Component } from 'react';
import ResourceItems from '../structure/ResourceItems';

class ResourcesPage extends Component {
    render() {
        return (
            <div>
                <ResourceItems resourceTitle="React Tutorial" resourceLink="https://reactjs.org/tutorial/tutorial.html" />
                <ResourceItems resourceTitle="Getting started with Redux" resourceLink="https://redux.js.org/introduction/getting-started" />
                <ResourceItems resourceTitle="Introduction to Git" resourceLink="https://medium.freecodecamp.org/what-is-git-and-how-to-use-it-c341b049ae61" />
            </div>
        );
    }
}

export default ResourcesPage;

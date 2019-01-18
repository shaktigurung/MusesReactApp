import React, { Component } from 'react';
import Description from '../structure/Description';
import ResourceItems from '../structure/ResourceItems';

class ResourcesPage extends Component {
    render() {
        return (
            <div>
                <Description>
                    <h1>Contribute with our projects:</h1>
                    <a href="https://github.com/node-girls-australia" target="_blank" >Icon to GitHub profile</a>
                    <p>
                        Find here some useful links to our resources:
                    </p>
                </Description>
                <ResourceItems resourceTitle="React Tutorial" resourceLink="https://reactjs.org/tutorial/tutorial.html" />
                <ResourceItems resourceTitle="Getting started with Redux" resourceLink="https://redux.js.org/introduction/getting-started" />
                <ResourceItems resourceTitle="Introduction to Git" resourceLink="https://medium.freecodecamp.org/what-is-git-and-how-to-use-it-c341b049ae61" />
            </div>
        );
    }
}

export default ResourcesPage;

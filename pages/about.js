import React from 'react';
import Nav from '../components/nav';

export default class About extends React.Component {

    static getInitialProps({req}) {
        const name = req ? 'server': 'client';
        return {
            name: name
        };
    }

    render() {
        return (
            <div>
                <h1>ABOUT PAGE</h1>
                <Nav></Nav>
                <span>
                    This page is rendering from {this.props.name}
                </span>
            </div>
        );
    }
}
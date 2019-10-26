import React from 'react';

const Context = React.createContext();

class Provider extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {



        return (
            <Context.Provider
                value={{

                }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}


export {Provider, Context};

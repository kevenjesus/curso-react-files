import React, { Component } from 'react';

class ComponenteClasse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: false
        }
    }
    render() {
        return (
            <h1>Componente de classe</h1>
        )
    }
}

export default ComponenteClasse;
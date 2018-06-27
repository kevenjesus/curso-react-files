import React from 'react';

import LoadingSrc from '../loading.svg';


const Loading = props => {
    if(props.visible)
        return <img src={LoadingSrc} alt="" />
    return false;
}

class CicloVida extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }
    componentDidMount() {
        console.log('carrega 3');
        setTimeout(() => {
            this.setState({
                loading: false
            })
        },3000)
    }
    componentWillMount() {
        console.log('carrega 1')
    }
    render() {
        console.log("carrega 2");
        if(this.state.loading)
            return <Loading visible={this.state.loading} />;
        return <h1>Ciclo de vivo</h1>
    }
}

export default CicloVida;
import React from 'react';


const ComponentePuro = props => (
    <h1>Render direto</h1>
);

const ComponentePuro2 = props => {
    if(props.test) {
        return <h1>teste ok</h1>
    }else {
        return <h1>teste nao</h1>
    }
}
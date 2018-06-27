import React from 'react';
import { 
    Grid,
    Paper,
    Typography,
    TextField,
    Button
} from '@material-ui/core';
import './style.css';
import LoadingSrc from '../loading.svg';


const Loading = props => {
    if(props.visible)
        return <img src={LoadingSrc} style={{display: 'block', margin: '0 auto'}} alt="" />
    return false;
}

const LoginComponent = props => (
    <div>
        <Typography variant="headline" align="center">Login</Typography>
        <form method="post" action="#">
            <TextField 
                label="username"
                name="username"
                required
                placeholder="Usuario"
                margin="normal"
                fullWidth
            />
            <TextField 
                label="password"
                name="password"
                required
                type="password"
                placeholder="Senha"
                margin="normal"
                fullWidth
            />
            <br /><br />
            <Button type="submit" variant="contained" fullWidth color="primary">Entrar</Button>
        </form>
    </div>
)

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false})
        },1000)
    }
    render() {
        console.log(this.state.loading);
        const content = this.state.loading ? <Loading visible /> : <LoginComponent />;
        return (
            <Grid container spacing={24} className="app-login">
                <Grid item xs={12} md={3}>
                    <Paper className="box-login">
                        { content }
                    </Paper>
                </Grid>
            </Grid>
        )
    }
};

export default Login;
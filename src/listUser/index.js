import React from 'react';
import {
    Grid,
    Paper,
    List,
    ListItem,
    ListItemText,
    Typography,
    Avatar
} from '@material-ui/core';

export default class ListUser extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }
    componentWillMount() {
        fetch('https://reqres.in/api/users?page=2')
            .then(resposta => {
                return resposta.json()
            })
            .then(response => {
                this.setState({users: response.data})
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
        <Grid container spacing={24}>
            <Grid item xs={4}>
                <Paper>
                    <List>
                        {
                            this.state.users.length === 0 ?
                                <ListItem>
                                    <Typography>Olha, nao tem porra nenhuma</Typography>
                                </ListItem>
                            :
                            this.state.users.map(user => (
                                <ListItem key={user.id}>
                                    <Avatar src={user.avatar} />
                                    <ListItemText primary={user.first_name} />
                                </ListItem>
                            ))
                        }
                    </List>
                </Paper>
            </Grid>
        </Grid>
        )
    }
}
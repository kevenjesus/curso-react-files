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

const ListItemUser = props => (
    <ListItem key={props.user.id}>
        <Avatar src={props.user.avatar} />
        <ListItemText primary={props.user.first_name} />
    </ListItem>
)

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
                                <ListItemUser user={user} />
                            ))
                        }
                    </List>
                </Paper>
            </Grid>
        </Grid>
        )
    }
}
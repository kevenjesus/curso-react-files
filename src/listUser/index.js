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

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers } from '../actions/UserAction';

const ListItemUser = props => (
    <ListItem key={props.user.id}>
        <Avatar src={props.user.avatar} />
        <ListItemText primary={props.user.first_name} />
    </ListItem>
)

class ListUser extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.getUsers();
    }
    render() {
        return (
        <Grid container spacing={24}>
            <Grid item xs={4}>
                <Paper>
                    <List>
                        {
                            this.props.user.list.length === 0 ?
                                <ListItem>
                                    <Typography>Olha, nao tem porra nenhuma</Typography>
                                </ListItem>
                            :
                            this.props.user.list.map(user => (
                                <ListItemUser user={user} />
                            ))
                        }
                    </List>
                </Paper>
            </Grid>
        </Grid>
        )
    }
};

const mapStateToProps = state => ({user: state.user});
const mapDispatchToProps = dispatch => bindActionCreators({getUsers}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListUser);
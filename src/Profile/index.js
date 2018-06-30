import React from 'react';
import {
    Grid,
    Paper,
    Avatar,
    Typography,
    Button
} from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProfile } from '../actions/UserAction';

const Profile = props => (
    <Grid container spacing={24} justify="center">
        <Grid item xs={3}>
            <Paper>
                {
                    props.user.profile === null ? 
                        <Typography align="center">Nenhum perfil</Typography>
                    :
                    <div>
                        <Avatar style={{width: '150px', height: "150px", display: 'block', margin: '0 auto'}} src={props.user.profile.avatar} />
                        <Typography variant="headline" align="center">
                        {`${props.user.profile.first_name} ${props.user.profile.last_name}`}
                        </Typography>
                    </div>
                    
                }
                <Button onClick={props.getProfile} color="primary" fullWidth variant="contained">Show</Button>
                
            </Paper>
        </Grid>
    </Grid>
);

const mapStateToProps = state => ({user: state.user});
const mapDispatchToProps = dispatch => bindActionCreators({getProfile}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
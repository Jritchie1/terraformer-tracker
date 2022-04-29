import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default class Expansion extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Card sx={{ width: 300 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Expansion
                    </Typography>
                    <Typography variant="h5" component="div">
                        {this.props.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {this.props.id}
                    </Typography>
                    <Typography variant="body2">
                        {this.props.flavour}
                        <br />
                        <i>{this.props.gameplay}</i>
                        <br />
                        <b>{this.props.releaseDate}</b>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Remove</Button>
                </CardActions>
            </Card>
        );
    }
}
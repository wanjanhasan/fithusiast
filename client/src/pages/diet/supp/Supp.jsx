import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'
import useStyles from './styles'

const Supp = ({supp}) => {
    const classes=useStyles()

    return (
        <Card className='classes.root'>
            <CardMedia className='classes.media' image='' title='supp.name'/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom variant='h5'>
                        {supp.name}
                    </Typography>
                    <Typography variant='h5' >
                        {supp.price}
                    </Typography>

                </div>
                <Typography variant='body2' color='textSecondary'>{supp.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label='Add to Cart'>
                    <AddShoppingCart/>
                </IconButton>

            </CardActions>

        </Card>
    )
}

export default Supp
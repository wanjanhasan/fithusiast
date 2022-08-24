import React from 'react'
import { Grid } from '@material-ui/core'
import Supp from './supp/Supp'
import useStyles from './styles'


//this one can be kept in a database
const supps=[
  {id: 1, name: 'MuscleTech Whey Protein', description: '10lbs pure whey protein', price:'Tk5000'},
  {id: 2, name: 'Nutrilife Plant Protein', description: '10lbs plant protein', price:'Tk7000'}
]

const Diet = () => {
  const classes=useStyles()
  return(
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify='center' spacing={4}>
          {supps.map((supp)=> (
            <Grid item key={supp.id} xs={12} sm={6} md={4} lg={3}>
              <Supp supp={supp} />

            </Grid>

          ))}
        </Grid>
    </main>
  )
}

export default Diet
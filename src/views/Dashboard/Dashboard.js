import React from 'react'
import moment from 'moment';

import Page from '../../components/Page';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import { createGlobalStyle } from 'styled-components';
import useCurrentEpoch from '../../hooks/useCurrentEpoch';
import Table from './components/Table';
import Chart from './components/Chart';
import BoardroomCard from './components/BoardroomCard';
import BombFarms from './components/BombFarms';
import Bonds from './components/Bonds'
import HomeImage from '../../assets/img/background.jpg';
import { Box, Card, CardContent, Grid, Typography, Button } from '@material-ui/core';
import ProgressCountdown from '../Boardroom/components/ProgressCountdown'
import useTreasuryAllocationTimes from '../../hooks/useTreasuryAllocationTimes';


const BackgroundImage = createGlobalStyle`
body {
  background: url(${HomeImage}) repeat !important;
  background-size: cover !important;
  background-color: #171923;
}
`;

const TITLE = 'bomb.money | Dashboard';

const useStyles = makeStyles((theme) => ({
    gridItem: {
      height: '100%',
      [theme.breakpoints.up('md')]: {
        height: '100%',
      },
    },
  }));

const Dashboard = () => {

  const classes = useStyles();
  const currentEpoch = useCurrentEpoch();
  const { to } = useTreasuryAllocationTimes();
  
  return (
    <Page>
      <BackgroundImage />
          <Helmet>
              <title>{TITLE}</title>
          </Helmet>
          <Box>
              {/* <Grid container justify='center'>
                <Grid item classname={classes.gridItem}> */}
                  <Card className={classes.gridItem}>
                    <CardContent style={{ textAlign: 'center' }}>
                      <Typography variant='h5' style={{ textTransform: 'capitalize', color: '#ffffff' }}>Bomb Finance Summary</Typography>
                      <hr />
                      <Grid container spacing={3} >
                        <Grid item xs={5} sx={{height: '20vh'}}>
                          <Card className={classes.gridItem}>
                            <Table />
                          </Card>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography variant='h6' style={{ textTransform: 'capitalize', color: '#ffffff' }}>Current Epoch</Typography>
                          <Typography variant='h4' style={{ textTransform: 'capitalize', color: '#ffffff', fontWeight: 'bold' }}>{Number(currentEpoch)}</Typography>
                          <hr style={{ opacity: 0.5, margin: '10px 30px 10px 30px'}}/>
                          <Typography variant='h4' style={{ textTransform: 'capitalize', color: '#ffffff' }}>
                          <ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch" />  
                          </Typography>
                          <Typography variant='h6' style={{ textTransform: 'capitalize', color: '#ffffff' }}>Next Epoch in</Typography>
                          <hr style={{ opacity: 0.5, margin: '10px 30px 10px 30px'}}/>
                            <Typography variant='body1' style={{ textTransform: 'capitalize', color: '#ffffff' }}>Live TWAP</Typography>
                            <Typography variant='body1' style={{ textTransform: 'capitalize', color: '#ffffff' }}>TVL</Typography>
                            <Typography variant='body1' style={{ textTransform: 'capitalize', color: '#ffffff' }}>Last Epoch TWAP</Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Chart />
                        </Grid>
                      </Grid>

                    </CardContent>
                  </Card>

                  <Grid container spacing={3} style={{marginTop: '2rem'}}>
                        <Grid item xs={8}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} style={{textAlign:'end'}} >
                              <Typography variant='h5' style={{color: '#9EE6FF', marginRight:'1rem', textTransform: 'capitalize',}}>
                                Read Investment Strategy
                              </Typography>
                            </Grid>
                            <Grid item xs={12} style={{textAlign:'center'}} >
                              <Button variant="contained" style={{backgroundColor:'rgba(158, 230, 255, 0.5)', padding: '0.5rem 21rem'}}>
                                <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize',}}>
                                  Invest Now
                                </Typography>
                              </Button>
                            </Grid>
                            <Grid item xs={12} style={{textAlign:'center'}} >
                              <Box>
                                <Button variant="contained" style={{backgroundColor:'rgba(255, 255, 255, 0.5)', padding: '0.5rem 7rem', marginRight:'0.8rem'}}>
                                  <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize',}}>
                                    Chat on Discord
                                  </Typography>
                                </Button>
                                <Button variant="contained" style={{backgroundColor:'rgba(255, 255, 255, 0.5)', padding: '0.5rem 8rem',  marginLeft:'0.8rem'}}>
                                  <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize',}}>
                                    Read Docs
                                  </Typography>
                                </Button>
                              </Box>
                            </Grid>
                            <Grid xs={12} item >
                              <Card className={classes.gridItem} style={{backgroundColor:'rgba(35, 40, 75, 0.75)', borderColor:'rgba(114, 140, 223, 1)', borderStyle: 'solid', borderRadius:'10px',}}>
                                <CardContent>
                                  <BoardroomCard />
                                </CardContent>
                              </Card> 
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid item xs={4}>
                          <Card className={classes.gridItem} style={{backgroundColor:'rgba(35, 40, 75, 0.75)', borderColor:'rgba(114, 140, 223, 1)', borderStyle: 'solid', borderRadius:'10px', }}>
                              <CardContent style={{ textAlign: 'left' }}>
                                <Typography variant='h4' style={{ textTransform: 'capitalize', color: '#ffffff' }}>Latest News</Typography>
                              </CardContent>
                            </Card> 
                        </Grid>

                  </Grid>

                  <Card className={classes.gridItem} style={{backgroundColor:'rgba(35, 40, 75, 0.75)', borderColor:'rgba(114, 140, 223, 1)', borderStyle: 'solid', borderRadius:'10px', marginTop:'2rem'}}>
                    <CardContent style={{ textAlign: 'left' }}>
                       <BombFarms />
                    </CardContent>
                  </Card>

                  <Card className={classes.gridItem} style={{backgroundColor:'rgba(35, 40, 75, 0.75)', borderColor:'rgba(114, 140, 223, 1)', borderStyle: 'solid', borderRadius:'10px', marginTop:'2rem'}}>
                    <CardContent style={{ textAlign: 'left' }}>
                       <Bonds />
                    </CardContent>
                  </Card>

                {/* </Grid>
              </Grid> */}
          </Box>
    </Page>
  )
}

export default Dashboard
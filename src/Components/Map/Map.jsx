import React, { Component } from 'react'
import './Map.css';

import RunNets from '../../assets/run-up-nets.png';
import CoachPng from '../../assets/coaches-box.png';  
import BowlingMachine from '../../assets/bowling-machine.png'; 
import FloorBall from '../../assets/Floorball_pictogram.svg'; 

class Map extends Component {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.MouseLeft = this.MouseLeft.bind(this);
  }

  handleMouseEnter = () => <h1> Mouse Entered </h1>
  MouseLeft = () => <div> <h1>Hello World...</h1> </div>

  render() {
    return (
      <div className="boundary">
        <div className='revoSports'>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className='bowlingMachineBox'
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.MouseLeft}
              > 
                <img style={{width:'50px', height:'50px'}} src={CoachPng} alt="" />
              </div>
              <div style={{ display: 'flex' }}>
                <div className='runUpNets'>
                  <img style={{display: 'flex', alignItems:'center', width:'50px', height:'30px'}} src={RunNets} alt="" />
                  <div className="pitch"></div>
                </div>
                <div className='runUpNets' onClick={()=> console.log('clicked...runUpNets')}>
                  <img style={{display: 'flex', alignItems:'center', width:'50px', height:'30px'}} src={RunNets} alt="" />
                  <div className="pitch"></div>
                </div>
                <div className='runUpNets'>
                  <img style={{display: 'flex', alignItems:'center', width:'50px', height:'30px'}} src={RunNets} alt="" />
                  <div className="pitch"></div>
                </div>
              </div>

              <div style={{ display: 'flex' }}>
                <div className="bowlingMachine">
                  <img style={{display: 'flex', alignItems:'center', width:'30px', height:'30px'}} src={BowlingMachine} alt="" />
                  <div className="pitch"></div>
                </div>
                <div className="bowlingMachine">
                  <img style={{display: 'flex', alignItems:'center', width:'30px', height:'30px'}} src={BowlingMachine} alt="" />
                  <div className="pitch"></div>
                </div>
                <div className="bowlingMachine">
                  <img style={{display: 'flex', align:'center', width:'30px', height:'30px'}} src={BowlingMachine} alt="" />
                  <div className="pitch"></div>
                </div>
              </div>

            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex" }}>
                <div className="CoachesBox1">
                  <img style={{width:'50px', height:'50px'}} src={CoachPng} alt="" />
              </div>
                <div className="CoachesBox1">
                  <img style={{width:'50px', height:'50px'}} src={CoachPng} alt="" />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div 
                  className='floorBall' 
                  onMouseEnter={() => console.log('MouseEntered...')}
                  onMouseLeave={() => console.log('Mouse Just left')}
                > 
                  <img style={{width:'50px', height:'30px'}} src={FloorBall} alt="" />
                </div>
                <div className='floorBall'> 
                  <img style={{width:'50px', height:'30px'}} src={FloorBall} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Map; 
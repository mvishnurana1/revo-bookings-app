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
          <div className='rowStyle'>
            <div className='columnStyle'>
              <div className='bowlingMachineBox'
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.MouseLeft}
              > 
                <div>
                  <img style={{width:'30px', height:'30px'}} src={CoachPng} alt="" />
                </div>
                <div className='triplePitch'>
                  <div style={{margin:'1rem'}} className="pitch"></div>
                  <div style={{margin:'1rem'}} className="pitch"></div>
                  <div style={{margin:'1rem'}} className="pitch"></div>
                </div>
              </div>
              <div style={{ display: 'flex' }}>
                <div className='runUpNets'>
                  <img className='pitchBorders' src={RunNets} alt="" />
                  <div className="pitch"></div>
                </div>
                <div className='runUpNets' onClick={()=> console.log('clicked...runUpNets')}>
                  <img className='pitchBorders' src={RunNets} alt="" />
                  <div className="pitch"></div>
                </div>
                <div className='runUpNets'>
                  <img className='pitchBorders' src={RunNets} alt="" />
                  <div className="pitch"></div>
                </div>
              </div>

              <div className='rowStyle'>
                <div className="bowlingMachine">
                  <img className='bowlingMachineBorder' src={BowlingMachine} alt="" />
                  <div className="pitch"></div>
                </div>
                <div className="bowlingMachine">
                  <img className='bowlingMachineBorder' src={BowlingMachine} alt="" />
                  <div className="pitch"></div>
                </div>
                <div className="bowlingMachine">
                  <img className='bowlingMachineBorder' src={BowlingMachine} alt="" />
                  <div className="pitch"></div>
                </div>
              </div>

            </div>
            <div className='columnStyle'>
              <div style={{ display: "flex" }}>
                <div className="CoachesBox1">
                  <div>
                    <img style={{width:'30px', height:'30px'}} src={CoachPng} alt="" />
                  </div>
                  <div className="pitch"></div>
              </div>
                <div className="CoachesBox1">
                  <img style={{width:'30px', height:'30px'}} src={CoachPng} alt="" />
                  <div className="pitch"></div>
                </div>
              </div>

              <div className='columnStyle'>
                <div 
                  className='floorBall' 
                  onMouseEnter={() => console.log('MouseEntered...')}
                  onMouseLeave={() => console.log('Mouse Just left')}
                > 
                  <div>
                    <img style={{width:'50px', height:'30px'}} src={FloorBall} alt="" />
                  </div>
                  <div className="court"></div>
                </div>
                <div className='floorBall'> 
                  <div>
                    <img style={{width:'50px', height:'30px'}} src={FloorBall} alt="" />
                  </div>
                  <div>
                    <div className="court"></div>
                  </div>
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
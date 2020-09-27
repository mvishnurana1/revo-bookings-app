import React, { Component } from 'react'
import './Map.css';

import RunNets from '../../assets/run-up-nets.png';
import CoachPng from '../../assets/coaches-box.png';  
import BowlingMachine from '../../assets/bowling-machine.png'; 
import FloorBall from '../../assets/Floorball_pictogram.svg'; 

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedArea: ''
    }
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(e){
    this.setState({selectedArea : e.target.id}); 
    console.log(this.state.selectedArea); 
  }

  render() {
    return (
      <div className="boundary">
        <div className='revoSports'>
          <div className='rowStyle'> 
            <div className='columnStyle'>
              <div className='bowlingMachineBox' id='coaches_box' onClick={this.handleClick}> 
                <div>
                  <img  id='coaches_box'style={{width:'3rem', height:'3rem'}} src={CoachPng} alt="" />
                </div>
                <div  id='coaches_box' className='triplePitch'>
                  <div id='coaches_box' className="pitch triplet" />
                  <div id='coaches_box' className="pitch triplet" />
                  <div id='coaches_box' className="pitch triplet" />
                </div>
              </div>
              <div style={{ display: 'flex' }}>
                <div id='runUpNets_1' onClick={this.handleClick} className='runUpNets'>
                  <img id='runUpNets_1' className='pitchBorders' src={RunNets} style={{width:'3rem', height:'2rem'}} alt="" />
                  <div id='runUpNets_1' className="pitch" />
                </div>
                <div id='runUpNets_2' onClick={this.handleClick} className='runUpNets'>
                  <img id='runUpNets_2' className='pitchBorders' src={RunNets} style={{width:'3rem', height:'2rem'}} alt="" />
                  <div id='runUpNets_2' className="pitch" />
                </div>
                <div id='runUpNets_3' onClick={this.handleClick} className='runUpNets'>
                  <img id='runUpNets_3' className='pitchBorders' src={RunNets} style={{width:'3rem', height:'2rem'}} alt="" />
                  <div id='runUpNets_3' className="pitch" />
                </div>
              </div>

              <div className='rowStyle'>
                <div id='bowlingMachine_1' onClick={this.handleClick} className="bowlingMachine">
                  <img id='bowlingMachine_1' className='bowlingMachineBorder' src={BowlingMachine} alt="" />
                  <div id='bowlingMachine_1' className="pitch"></div>
                </div>
                <div id='bowlingMachine_2' onClick={this.handleClick} className="bowlingMachine">
                  <img id='bowlingMachine_2' className='bowlingMachineBorder' src={BowlingMachine} alt="" />
                  <div id='bowlingMachine_2' className="pitch"></div>
                </div>
                <div id='bowlingMachine_3' onClick={this.handleClick} className="bowlingMachine">
                  <img id='bowlingMachine_3' className='bowlingMachineBorder' src={BowlingMachine} alt="" />
                  <div id='bowlingMachine_3' className="pitch"></div>
                </div>
              </div>

            </div>
            <div className='columnStyle'>
              <div style={{ display: "flex" }}>
                <div id='CoachesBox_2' onClick={this.handleClick} className="CoachesBox1">
                  <div id='CoachesBox_2' >
                    <img id='CoachesBox_2'  style={{width:'3rem', height:'3rem'}} src={CoachPng} alt="" />
                  </div>
                  <div id='CoachesBox_2'  className="pitch"></div>
              </div>
                <div id='CoachesBox_3' onClick={this.handleClick} className="CoachesBox1">
                  <img id='CoachesBox_3' style={{width:'3rem', height:'3rem'}} src={CoachPng} alt="" />
                  <div id='CoachesBox_3' className="pitch"></div>
                </div>
              </div>

              <div className='columnStyle'>
                <div id='floorBall_1' onClick={this.handleClick} className='floorBall'> 
                  <div id='floorBall_1'>
                    <img id='floorBall_1' style={{width:'5rem', height:'3rem'}} src={FloorBall} alt="" />
                  </div>
                  <div id='floorBall_1' className="court"></div>
                </div>
                <div id='floorBall_2' onClick={this.handleClick} className='floorBall'> 
                  <div id='floorBall_2'>
                    <img id='floorBall_2' style={{width:'5rem', height:'3rem'}} src={FloorBall} alt="" />
                  </div>
                  <div id='floorBall_2'>
                    <div id='floorBall_2' className="court"></div>
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
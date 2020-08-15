import React, { Component } from 'react'
import './Map.css';

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
              > box_1 </div>
              <div style={{ display: 'flex' }}>
                <div className='runUpNets'>
                  run up nets
                </div>
                <div className='runUpNets' onClick={()=> console.log('clicked...runUpNets')}>
                  run up nets
                </div>
                <div className='runUpNets'>
                  run up nets
                </div>
              </div>

              <div style={{ display: 'flex' }}>
                <div className="bowlingMachine">
                  bowling machine
                </div>
                <div className="bowlingMachine">
                  bowling machine
                </div>
                <div className="bowlingMachine">
                  bowling machine
                </div>
              </div>

            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex" }}>
                <div className="bowlingMachineBox1">
                  Box_2
              </div>
                <div className="bowlingMachineBox1">
                  Box_2
              </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className='dodgeBall'> floorBall_2 </div>
                <div className='dodgeBall'> floorBall_1 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Map; 
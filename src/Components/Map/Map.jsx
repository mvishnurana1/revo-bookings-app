import React, { Component } from 'react'

const runUpNets = {
  backgroundColor: 'pink',
  height: '130px',
  width: '40px',
  margin: '2%'
}

const revoSports = {
  display: 'flex',
  justifyContent: 'center',
  justifyItems: 'center',
  padding: '10%',
}

const bowlingMachineBox = {
  backgroundColor: 'black',
  height: '130px',
  width: '140px',
  color: 'white'
}

const bowlingMachineBox1 = {
  backgroundColor: 'pink',
  height: '130px',
  width: '100px',
  margin: '2px',
}

const bowlingMachine = {
  backgroundColor: 'red',
  color: 'pink',
  height: '120px',
  width: '40px',
  margin: '2%'
}

const dodgeBall = {
  backgroundColor: 'red',
  height: '100px',
  width: '200px',
  margin: '2%',
}

class Map extends Component {
  render() {
    return (
      <>
        <div style={revoSports}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={bowlingMachineBox}> box_1 </div>
              <div style={{ display: 'flex' }}>
                <div style={runUpNets}>
                  run up
                </div>
                <div style={runUpNets}>
                  run up
                </div>
                <div style={runUpNets}>
                  run up
                </div>
              </div>

              <div style={{ display: 'flex' }}>
                <div style={bowlingMachine}>
                  mac hine
                </div>
                <div style={bowlingMachine}>
                  mac hine
                </div>
                <div style={bowlingMachine}>
                  mac hine
                </div>
              </div>

            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex" }}>
                <div style={bowlingMachineBox1}>
                  Box_2
              </div>
                <div style={bowlingMachineBox1}>
                  Box_2
              </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={dodgeBall}> floorBall_2 </div>
                <div style={dodgeBall}> floorBall_1 </div>
              </div>
            </div>

          </div>
        </div>
      </>
    )
  }
}

export default Map; 
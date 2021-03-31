import React, { Component } from 'react'; 
import { Button, Container } from 'react-bootstrap'; 
import Modal from 'react-bootstrap/Modal'; 

import BookingForm  from '../BookingForm/BookingForm'; 
import './Map.css';

import BowlingMachine from '../../assets/bowling-machine.png'; 
import CoachPng from '../../assets/coaches-box.png';  
import FloorBall from '../../assets/Floorball_pictogram.svg'; 
import RunNets from '../../assets/run-up-nets.png';

const BOWLING_MACHINES = ['Bowling Machine 1', 'Bowling Machine 2', 'Bowling Machine 3']; 
const COACHES_BOX = ['Coaches Box 2', 'Coaches Box 3']; 

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedArea: null }
  }

  handleClick(e){
    const { selectedArea } = this.state; 
    
    this.setState({ 
      selectedArea: (selectedArea !== e.target.id) ? e.target.id : null 
    })
  }

  renderModal() {
    const { selectedArea } = this.state;
    
    if (selectedArea !== null) {
      return (
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          backdrop
          centered
          show={selectedArea}
          size="lg"
      >
        <Modal.Header>
          <Modal.Title className="area_title" id="contained-modal-title-vcenter">
            {selectedArea}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <BookingForm />
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.setState({ selectedArea: null })}>Close</Button>
        </Modal.Footer>
      </Modal>
      ); 
    }
  }

  render() {
    return (
      <>
      <div className="boundary">
        <div className='revoSports'>
          <div className='rowStyle'> 
            <div className='columnStyle'>
              <div className='bowlingMachineBox' id='coaches_box' onClick={(e) => this.handleClick(e)}> 
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
                <div id='runUpNets_1' onClick={(e) => this.handleClick(e)} className='runUpNets'>
                  <img id='runUpNets_1' className='pitchBorders' src={RunNets} style={{width:'3rem', height:'2rem'}} alt="" />
                  <div id='runUpNets_1' className="pitch" />
                </div>
                <div id='runUpNets_2' onClick={(e) => this.handleClick(e)} className='runUpNets'>
                  <img id='runUpNets_2' className='pitchBorders' src={RunNets} style={{width:'3rem', height:'2rem'}} alt="" />
                  <div id='runUpNets_2' className="pitch" />
                </div>
                <div id='runUpNets_3' onClick={(e) => this.handleClick(e)} className='runUpNets'>
                  <img id='runUpNets_3' className='pitchBorders' src={RunNets} style={{width:'3rem', height:'2rem'}} alt="" />
                  <div id='runUpNets_3' className="pitch" />
                </div>
              </div>

              <div className='rowStyle'>
                {BOWLING_MACHINES.map((id) => (
                  <div key={id} id={id} onClick={(e) => this.handleClick(e)} className="bowlingMachine">
                    <img id={id} className='bowlingMachineBorder' src={BowlingMachine} alt="" />
                    <div id= {id} className="pitch" />
                  </div>
                ))
                }
              </div>

            </div>
            <div className='columnStyle'>
              <div style={{ display: "flex" }}>
                {
                  COACHES_BOX.map((id) => (
                    <div className="CoachesBox1" key={id} id={id} onClick={(e) => this.handleClick(e)}>
                       <img id={id}  style={{width:'3rem', height:'3rem'}} src={CoachPng} alt="" />
                       <div id={id}  className="pitch" />
                    </div>
                  ))
                }
              </div>

              <div className='columnStyle'>
                <div id='floorBall_1' onClick={(e) => this.handleClick(e)} className='floorBall'> 
                  <div id='floorBall_1'>
                    <img id='floorBall_1' style={{width:'5rem', height:'3rem'}} src={FloorBall} alt="" />
                  </div>
                  <div id='floorBall_1' className="court" />
                </div>
                <div id='floorBall_2' onClick={(e) => this.handleClick(e)} className='floorBall'> 
                  <div id='floorBall_2'>
                    <img id='floorBall_2' style={{width:'5rem', height:'3rem'}} src={FloorBall} alt="" />
                  </div>
                  <div id='floorBall_2'>
                    <div id='floorBall_2' className="court" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {this.renderModal()} 
      </>
    )
  }
}

export default Map; 

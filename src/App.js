import React, {Component} from 'react';
import Gameboard from './Gameboard';
import {Container, Row, Col} from 'react-bootstrap';  
import {h3StyleLeft, h3StyleRight} from './styles';

export default class App extends Component {

  state = {
    currentTurn: "X",
    playerXScore: 0,
    playerOScore: 0
  }

  wrapStyle = {
    marginTop: "200px"
  }


  switchTurn = () => {
    let currentTurn;
    if (this.state.currentTurn === "X"){
      currentTurn = "O";
      this.setState({currentTurn});
    } else {
      currentTurn = "X";
      this.setState({currentTurn});
    }
  }

  updateScore = (field) => {
    this.setState({
      [field]: this.state[field] + 1
    })
  }

  render(){
    return(
      <Container>
        <div style={this.wrapStyle}>
        <h3 style={h3StyleLeft}>player O score: {this.state.playerOScore}</h3><h3 style={h3StyleRight}>player X Score: {this.state.playerXScore}</h3><br/>
          <Row>
            <Col>
              <Gameboard updateScore={this.updateScore} switchTurn= {this.switchTurn} currentTurn= {this.state.currentTurn}/>
            </Col>
          </Row>

        </div>
      </Container>  
    )
  }
}
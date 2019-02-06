import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import checkIfWin from './boardLogic';
import {tdStyle} from './styles';

export default class Gameboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      board: [null, null, null, null, null, null, null, null, null]
    }
  }

  
  checkWin = () => {
    let {board} = this.state
    let win = checkIfWin(board);
    if (win){
      console.log(this.props.currentTurn, " wins")
      this.props.currentTurn === "X" ? this.props.updateScore("playerXScore") : this.props.updateScore("playerOScore");
      this.initialize();
    } 
   }

  handleClick = (index) => {
    let board = [...this.state.board]
    board.splice(index, 1, this.props.currentTurn);
    this.setState({board }, () => {
      this.checkWin();
      this.props.switchTurn();
    })
  }

  initialize = () => {
    let board = new Array(9).fill(null);
    this.setState({board});
  }

  render() {
    return (
    <Table striped bordered hover>
      <tbody>
        <tr>
          <td onClick={() => this.handleClick(0)}style={tdStyle}>{this.state.board[0]}</td>
          <td onClick={() => this.handleClick(1)}style={tdStyle}>{this.state.board[1]}</td>
          <td onClick={() => this.handleClick(2)}style={tdStyle}>{this.state.board[2]}</td>
        </tr>
        <tr>
          <td onClick={() => this.handleClick(3)}style={tdStyle}>{this.state.board[3]}</td>
          <td onClick={() => this.handleClick(4)}style={tdStyle}>{this.state.board[4]}</td>
          <td onClick={() => this.handleClick(5)}style={tdStyle}>{this.state.board[5]}</td>
        </tr>
        <tr>
          <td onClick={() => this.handleClick(6)}style={tdStyle}>{this.state.board[6]}</td>
          <td onClick={() => this.handleClick(7)}style={tdStyle}>{this.state.board[7]}</td>
          <td onClick={() => this.handleClick(8)}style={tdStyle}>{this.state.board[8]}</td>
        </tr>
      </tbody>
    </Table>
    )
  }
}
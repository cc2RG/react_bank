var React = require('react');
var sampleAccounts = require('../sample.json');
var AccountsBox  = require('./AccountsBox.jsx');

var Bank = require('../bank/bank.js');

var BankBox = React.createClass({
  getInitialState: function(){
    return {accounts: sampleAccounts, bank: null};
  },
  setUpBank:function(){
    var bank = new Bank();
    for(var account of this.state.accounts){
      bank.addAccount(account);
    }
    this.setState({bank:bank});
  },

  componentWillMount: function(){
    this.setUpBank();
  },
  render:function(){
    
    return(
      <div>
        <h1>React BankBox</h1>
        <h2>Total: £{this.state.bank.totalCash()} </h2>
        <AccountsBox bank={this.state.bank}></AccountsBox>
      </div>
      )
  }
});

module.exports = BankBox;
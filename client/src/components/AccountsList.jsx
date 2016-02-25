var React = require('react');
var Bank = require('../bank/bank.js');

var AccountsList = React.createClass({
  
  render: function(){
    var accounts = this.props.filteredAccounts.map(function(account,index){
      // var accountDetails = function(){
      //   if({this.props.account.details.length}>0){
      //     {account.details} 
      // }
      return <div><li key={index}> {account.owner} : £ {account.amount} </li>
             <li>details: {account.details}</li></div> 
    });
    
    return (
      <div><ul>{accounts}</ul></div>
      )
  }
  




});

module.exports = AccountsList;
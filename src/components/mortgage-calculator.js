import React from 'react';
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class MortgageCalculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            principal: 53000,
            rate: 7.625,
            term: 15,
            payment: 0
        }
    }
    handlePrincipalChange = (e) => {        
        this.setState({principal: e.target.value});
    }
    handleRateChange = (e) => {        
    this.setState({rate: e.target.value});
    }
    handleTermChange = (e) => {        
    this.setState({term: e.target.value});
    }
    calculatePayment = (e) => {
        e.preventDefault();
        const {principal, rate, term} = this.state;
        const monthlyRate = rate/1200;
        const numPayments = term * 12;
        let payment = (principal * monthlyRate) / (1 - Math.pow(1+monthlyRate, - numPayments));
        console.log('$' + payment.toFixed(2));
        this.setState({payment: payment.toFixed(2)}, ()=> {console.log(this.state)});
  
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <div className="jumbotron">    
                            <div className="form-group">
                                <h2 className="text-danger">Mortgage Calculator</h2>
                                <form>
                                    <div className="form-group">
                                        <label>Loan amount:</label>
                                        <input type="text" className="form-control" value={this.state.principal} onChange={this.handlePrincipalChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Annual Interest Rate (as %):</label>
                                        <input type="text" className="form-control" value={this.state.rate} onChange={this.handleRateChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Length of loan (in years):</label>
                                        <input type="text" className="form-control" value={this.state.term} onChange={this.handleTermChange}/>
                                    </div>
                                    <div>
                                        <button onClick={this.calculatePayment}>Calculate Payment</button>
                                    </div>
                                    <h3>Your estimated monthly payment is ${this.state.payment}</h3>
                                    </form>        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Bills extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bills: this.props.bills };
    this.addBill = this.addBill.bind(this);
    this.deleteBill = this.deleteBill.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
  }

  deleteBill(id, bill) {
    $.ajax({
      url: `/bills/${id}`,
      type: 'DELETE',
    }).success( bill => {
      let bills = this.state.bills;
      let index = bills.findIndex( b => b.id === bill.id);
      bills.splice(index, 1);
      this.setState({ bills: bills });
    }).error ( error => {
      console.log(error);
    });
  }

  addBill(bill) {
    this.setState({ bills: [bill, ...this.state.bills] });
  }

  updateTotal() {
    debugger
    this.forceUpdate();
  }

  render() {
    let bills = this.state.bills.map( bill => {
    return(
        <Bill key={`bill-${bill.id}`} {...bill} deleteBill={this.deleteBill} />
      );
    });
    return(
      <div>
      <div className="row">
        <NewBill updateTotal={this.updateTotal} addBill={this.addBill} />
        <Monies />
      </div>
      <div className="row">
        <h4>Bills</h4>
        {bills}
      </div>
      </div>
    );
  }
}
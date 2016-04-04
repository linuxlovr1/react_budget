class NewBill extends React.Component {
  constructor(props) {
    super(props);
    this.addBill = this.addBill.bind(this);
    this.getTotal = this.getTotal.bind(this);
    this.changeTotal = this.changeTotal.bind(this);
  }


addBill(e) {
    e.preventDefault();
    let name = this.refs.name;
    let billTotal = this.refs.total.value;
    $.ajax({
      url: '/bills',
      type: 'POST',
      data: { bill: {name: name.value, total: billTotal } },
      dataType: 'JSON'
    }).success( bill => {
      this.props.addBill(bill);
      this.getTotal(billTotal);
    }).error( error => {
      console.log(error);
    }).complete( () => {
      name.value = null;
      billTotal = null;
    });
  }

  getTotal(billTotal) {
    $.ajax ({
      url: '/monies/1',
      type: 'GET'
    }).success( data => {
      total = data.total;
      this.changeTotal(total, billTotal);
    }).error( error => {
      console.log(error);
    });
  }

  changeTotal(total, billTotal) {
    console.log(total, billTotal);
    let newTotal = total - billTotal;
    $.ajax({
      url: '/monies/1',
      type: 'PUT',
      data: { money: {total: newTotal} }
    }).success( data => {
      total = data.total
      this.props.updateTotal(total);
      console.log(total);
    }).error( error => {
      console.log(error);
    });
  }

  render() {
    return(
      <div className="col s12 m6">
        <h5>Add Bill</h5>
        <form onSubmit={this.addBill} >
          <input placeholder="Bill Name" ref="name" required={true} autofocus={true} />
          <input type="number" step="any" placeholder="$0.00" ref="total" required={true} />
          <button className="btn green darken-1">Add</button>
        </form>
      </div>
    );
  }
}
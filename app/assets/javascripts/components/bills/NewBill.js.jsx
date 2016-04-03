class NewBill extends React.Component {
  constructor(props) {
    super(props);
    this.addBill = this.addBill.bind(this);
  }


addBill(e) {
    e.preventDefault();
    let name = this.refs.name;
    let total = this.refs.total;
    $.ajax({
      url: '/bills',
      type: 'POST',
      data: { bill: {name: name.value, total: total.value } },
      dataType: 'JSON'
    }).success( bill => {
      this.props.addBill(bill);
      this.changeTotal(total);
    }).error( error => {
      console.log(error);
    }).complete( () => {
      name.value = null;
      total.value = null;
    });
  }

  render() {
    return(
      <div className="col s12 m6">
        <h5>Add Bill</h5>
        <form onSubmit={this.addBill} >
          <input placeholder="Bill Name" ref="name" required={true} />
          <input placeholder="$0.00" ref="total" required={true} />
          <button className="btn green darken-1">Add</button>
        </form>
      </div>
    );
  }
}
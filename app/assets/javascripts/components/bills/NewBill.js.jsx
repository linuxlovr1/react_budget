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
    }).error( error => {
      console.log(error);
    }).complete( () => {
      name.value = null;
      total.value = null;
    });
  }

  render() {
    return(
      <div className="row">
        <div className="col s12 m4">
          <h4>Add Bill</h4>
          <form onSubmit={this.addBill} >
            <input placeholder="Bill Name" ref="name" required={true} />
            <input placeholder="Bill Total" ref="total" required={true} />
            <button className="btn">Add</button>
          </form>
        </div>
      </div>
    );
  }
}
class Bill extends React.Component {
  constructor(props) {
    super(props);
    this.deleteBill = this.deleteBill.bind(this);
  }

  deleteBill() {
    this.props.deleteBill(this.props.id);
  }

  render() {
    return(
      <div className='col s12 m4'>
        <div className='card green'>
          <div className='card-content white-text'>
            <span className='card-title'>{this.props.name}</span>
            <p>$ { this.props.total }</p>
          </div>
          <div className='card-action center'>
            <a href="/" onClick={ () => this.props.deleteBill(this.props.id)} className='btn red'>Delete</a>
          </div>
        </div>
      </div>
    );
  }
}
import React from 'react';
class App extends React.Component {
  constructor(){
    super();
    this.state = {txt: ''}
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({txt: e.target.value})
  }
   render(){
      return (
        <div>
          <Widget txt={this.state.txt} update={this.update}/>
          <Widget txt={this.state.txt} update={this.update}/>
          <Widget txt={this.state.txt} update={this.update}/>
          <Widget txt={this.state.txt} update={this.update}/>
          <Widget txt={this.state.txt} update={this.update}/>
          <Widget txt={this.state.txt} update={this.update}/>
          <Widget txt={this.state.txt} update={this.update}/>
        </div>
      )
   }
}

const Widget = (props) => {
  return(
      <div>
          <input type='text' onChange={props.update} />
          <h1>{props.txt}</h1>
      </div>
    )
}
// App.defaultProps = {
//   txt: 'this is default'
// }

// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }
export default App



// stateless function
// const App = () => <h1>Hello Xiao </h1>
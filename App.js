import React from 'react';
class App extends React.Component {
  constructor(){
    super();
    this.state = {txt: 'asldfjlsdkj'}
  }
  update(e){
    this.setState({txt: e.target.value})
  }
   render(){
       return (
        <div>
          <input type='text' onChange={this.update.bind(this)} />
          <h1>saldfjkls {this.state.txt}</h1>
       </div>
       )
   }
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
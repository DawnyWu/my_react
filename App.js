import React from 'react';
class App extends React.Component {
   render(){
       return <h1>saldfjkls {this.props.txt} {this.props.cat}</h1>
   }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number
}
export default App



// stateless function
// const App = () => <h1>Hello Xiao </h1>
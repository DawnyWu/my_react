import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  render(){
    return <Button>I <Heart/>React</Button>
  }
}

class Button extends React.Component {
  render(){
    return <button>{this.props.children}</button>
  }
}

const Heart = () => {
  return <span className='glyphicon glyphicon-heart' aria-hidden="true"></span>
}



// const Widget = (props) => {
//   return(
//       <div>
//           <input type='text' onChange={props.update} />
//           <h1>{props.txt}</h1>
//       </div>
//     )
// }
// App.defaultProps = {
//   txt: 'this is default'
// }

// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }
export default App


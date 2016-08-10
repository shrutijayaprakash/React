import React from 'react'
import ReactDOM from 'react-dom'
class App extends React.Component {
    constructor(){
    super();
    this.state={
    red:'0',
    green:'0',
    blue:'0'
    }
    this.update = this.update.bind(this)}



    render(){
        return (<div><br /><Slider ref="red"txt={this.state.txt} update={this.update} />{this.state.red}
                <br /><Slider ref="green"txt={this.state.txt} update={this.update} />{this.state.green}
                <br /><Slider ref="blue"txt={this.state.txt} update={this.update} />{this.state.blue}</div>)
    }
    update(e)
    {this.setState({
    red:ReactDOM.findDOMNode(this.refs.red).value,
     green:ReactDOM.findDOMNode(this.refs.green).value,
    blue:ReactDOM.findDOMNode(this.refs.blue).value})
    }
}

//const Slider = (props) => {
//     return (<input type ="range"
//     min="0"
//     max="300"
//                   onChange={props.update}/>
//                  );
//}

class Slider extends React.Component{
    render(){
        return (<input type ="range"
             min="0"
             max="300"
                           onChange={this.props.update}/>
                          );
    }
}

App.propTypes={
txt:React.PropTypes.string,
cat:React.PropTypes.number.isRequired}

App.defaultProps={
txt:'this is sample text 2',
cat:10}

ReactDOM.render(

<App   txt = "This is sample text 1"/>, document.getElementById('app'));

//export default App
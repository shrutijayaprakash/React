import React from 'react'
import ReactDOM from 'react-dom'
class App1 extends React.Component {
constructor(){
super();
this.state = {increasing : false}
this.update=this.update.bind(this)
}
    render(){
    console.log(this.state.increasing)
        return <button onClick={this.update}>{this.props.val }</button>
       }
    update(){
    ReactDOM.render(<App1 val={this.props.val+1} />,document.getElementById('xyz'))
    }
    componentWillReceiveProps(nextProps){
    this.setState({increasing : nextProps.val > this.props.val})}

    shouldComponentUpdate(nextProps,nextstate){
    return nextProps.val%5===0}
    componentDidUpdate(prevProps,prevState){
    console.log('prevProps',prevProps)
    }
}

App1.defaultProps={
val:0}

ReactDOM.render(<App1 />, document.getElementById('xyz'))
export default App1
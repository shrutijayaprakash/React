import React from 'react'
import ReactDOM from 'react-dom'
class NewComponent extends React.Component {
constructor(){
super();
this.state={val:0},
this.update=this.update.bind(this)
}
    render(){
    console.log("Render")
        return <button onClick={this.update}>{this.state.val * this.state.v}</button>
       }
    update(e){
        this.setState({val: this.state.val+1});
    }
componentWillMount()
{console.log("Mount")
    this.setState({v: 2})
}

componentDidMount()
{console.log("Mounting done")
this.schedule = setInterval(this.update, 1000)
}
    componentWillUnmount(){
        clearInterval(this.schedule)
    }
}

class Wrapper extends React.Component {
constructor(){
super();
this.unmount=this.unmount.bind(this),
this.mount=this.mount.bind(this)}
    mount(){
           ReactDOM.render(<NewComponent />, document.getElementById('abc'))
       }

       unmount(){
           ReactDOM.unmountComponentAtNode(document.getElementById('abc'))
       }
    render(){
        return(<div>
                    <button onClick={this.unmount}>unmount</button>
                    <button onClick={this.mount}>mount</button>
                    <div id ="abc"></div>
                </div>)
            }
    }

ReactDOM.render(<Wrapper />, document.getElementById('xyz'))
export default Wrapper
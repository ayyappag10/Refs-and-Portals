import React from "react"
import ReactDOM from "react-dom"
import Modal from  "./Modal"

class App extends React.Component
{
    constructor(){
        super();   
        this.inputNode = React.createRef();  
        this.submitHandler = this.submitHandler.bind(this)  
        this.state={
            showModal: false,
            count: 0
        } 
        this.toggleModal = this.toggleModal.bind(this)
        this.handleModalClick = this.handleModalClick.bind(this)
    }

    submitHandler(){
        this.inputNode.current.focus();
        event.preventDefault();
    }

    handleModalClick(){
        this.setState({
            count: this.state.count + 1
        })
    }

    toggleModal(){
        this.setState({
            showModal: !this.state.showModal
        })
    }
    
    render(){
        return(
            <div
            onClick={this.handleModalClick}>
            <span
            onClick={this.submitHandler}>Name</span>
            <input 
            ref={this.inputNode}
            >
            </input>
            <button
            onClick={this.toggleModal}>
                open Modal
            </button>
            {
            this.state.showModal?
            (<Modal>
                <button 
                onClick = {this.toggleModal}>close</button>
                <button>click here</button>
            </Modal>)
            :null
            }
            {
            this.state.showModal ?
            (<span>clicked {this.state.count} times</span>): null
            }
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))
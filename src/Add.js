import React,{Component} from "react";

class Add extends Component{

    state = {
        content : ''
    }

    sub =(e)=>{
        e.preventDefault();
        this.props.addfn(this.state.content);
        this.setState({
            content:''
        })
    }
    change = (e)=>{
        this.setState({
            content:e.target.value
        })
    }

    render(){
        return (
      <div className="add m-3">
        <form className="form" onSubmit={this.sub}>
          <div className="form-group flex">
            <div className="input-group-prepend">
              <div className="input-group-text">+</div>
            </div>
            <input type="text" className="form-control" id="addbox" placeholder="Add" onChange={this.change} value={this.state.content}></input>
          </div>
        </form>
      </div>
        );
    }
}

export default Add;
import React, { Component } from 'react';
import List from './list';

class Search extends Component {
    state = {
        list : this.props.list,
        query:''
    }

    sub = (e) => {
        e.preventDefault();
        this.props.changefn(this.state.query);
        this.setState({
            query:''
        })
    }

    changefn = (text)=>{
        let list = this.props.list;
        let filtered = list.filter((item)=>{
          return(item.content.toLowerCase().includes(text.toLowerCase()))
        })
        this.setState({
          list:filtered,
          query:text
        })
      }

      
    change = (e) => {
        this.changefn(e.target.value)
    }

    render() {
        let block;
        if(this.state.query){
            block = <List list={this.state.list} del={this.props.del}/>
        }
        else{
            block = <List list={this.props.list} del={this.props.del}/>
        }

        return (
            <div className="search m-1">
                <form className="form" onSubmit={this.sub}>
                    <div className="form-group">
                        <input type="text" className="form-control" id="searchbox" placeholder="Search" onChange={this.change} value={this.state.query}></input>
                        {block}
                    </div>
                </form>
            </div>
        )

    }
}

export default Search;
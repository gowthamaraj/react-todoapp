import React, { Component } from 'react';
import './App.css'
import Search from './Search';
import Add from './Add';

class App extends Component {

  state = {
    list:[{
      key:1,
      content:"Buy Milk and cookies"
    },
    {
      key:2,
      content:"Buy sugar"
    }
  ]
  }

  addfn = (item)=>{
    let list = {
      key:Math.random(),
      content : item
    }
    let lists = [...this.state.list,list];
    this.setState({
      list:lists
    })
  }

  del = (key)=>{
    
        let list = this.state.list;
        let filtered = list.filter((item)=>{
          console.log(item.key,key);
          return(item.key !== key);
        })
        this.setState({
          list:filtered
        })
      }
  


  render(){
  return (
    <div className="wrapper">
      <header className="text-center"><p className="text-warning lead font-weight-bold">TODO LIST</p>
      </header>
      <Search list={this.state.list} del={this.del}/>
      <Add addfn={this.addfn}/>
    </div>
  );
}
}

export default App;

import React from 'react'
import Header from './header'
import './App.css'
import Memes from './meme'


function App(){
  return(
    <div>
      <Header />
      <Memes />

    </div>
  )
}
export default App

/*class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isLoading:true,
      randImg:"https://i.imgflip.com/30b1gx.jpg",
      memes:[],
    }
    this.handleClick=this.handleClick.bind(this)
  }


  componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => {
      this.setState({
        memes :data
      })
      console.log(this.state.memes)
      const randNum=Math.floor((Math.random() *100)+1)
      console.log(this.state.memes.data.memes[randNum].url)
    })
  }
  

  handleClick(event){
    event.preventDefault()
    const randNum=Math.floor((Math.random() * 100)+1)
    const randomImg=this.state.memes.data.memes[randNum].url
    this.setState({
      randImg:randomImg,
    })
  }
  render(){
    return(
      <div>
        <Header />
        <Memes />
      <div>
        <div>
          <img src={this.state.randImg} height="400" width="1200" alt=""/>
          <h1></h1>
        </div>
        <button onClick={this.handleClick}>Change!</button>
      </div>
      </div>
    )
  }
}
export default App*/

//INSERTING DETAILS IN LIST ON CLICKING BUTTON>>>>>

/*class App extends React.Component{

  constructor(){
    super()
    this.state={
      fname:"",
      lname:"",
      lst:[]
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleClick=this.handleClick.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name]:event.target.value,
      
    })
    
  }

  handleClick(){
    if(!this.state.fname||!this.state.lname){
      return(
        alert("Enter fullname")
      )
  }
  else{
    this.setState({
      fname1:this.state.fname,
      lname1:this.state.lname,
      lst:[...this.state.lst,this.state.fname+ " "+ this.state.lname]
    })
  }
}

  render(){
    return(
      <div>
        <input name="fname" type="text" placeholder="firstname" onChange={this.handleChange}/>
        <input name="lname" type="text" placeholder="lastname" onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Submit</button><br/>
        <h1>{this.state.fname1} {this.state.lname1}</h1>
        <div>
          <ul>
            {this.state.lst.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        
        
      </div>
    )
  }

}
export default */




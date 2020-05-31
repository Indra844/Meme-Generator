import React from 'react';
import './App.css'

class Memes extends React.Component{
    constructor(){
        super()
        this.state={
            toptext:"",
            bottomtext:"",
            memes:[],
            randImg:"https://i.imgflip.com/30b1gx.jpg",
            write:""
            
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => {
            this.setState({
                memes:data
            })
            console.log(this.state.memes)
        })
    }

    handleChange(event){
        const {name,value} = event.target
        this.setState({[name]:value})
    }

    handleClick(event){
        event.preventDefault()
        const randNum=Math.floor((Math.random() * 100)+1)
        const randomImg=this.state.memes.data.memes[randNum].url
        this.setState({
            randImg:randomImg
        })

    }


    render(){
        return(
            <div className="meme">
                <form>
                <input 
                    type="text" 
                    placeholder="TopText"
                    name="toptext"
                    onChange={this.handleChange} />
                <input 
                    type="text" 
                    placeholder="BottomText"
                    name="bottomtext"
                    onChange={this.handleChange} />
                <button onClick={this.handleClick}>Gen</button>
            </form>
            <br/>
            <div className="container1">
                <img className="finalMeme" src={this.state.randImg} width="800" height="300"/>
                <h1 className="toptext">{this.state.toptext}</h1>
                <h1 className="bottomtext">{this.state.bottomtext}</h1>
            </div>
            </div>
        )
    }
}
export default Memes
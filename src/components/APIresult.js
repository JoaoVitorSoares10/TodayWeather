import React from 'react'
import Sun from "../Img/sun.png"
import Wind from "../Img/wind.png"
import Weather from "../Img/weather.png"
import Home from '../Img/home.jpg'
import Sad from '../Img/sad.png'

function APIResult(props){

    const handleData = () => {
        const data = new Date().toLocaleDateString(); 
        return data
    }

    if(props.state.status && props.state.weather[0]){
    return(
        <div className="content">
          <div className="resultAPI"> 
              <p><img src={Sun} /> {props.state.weather[0]}</p>
              <p><img src={Wind} /> {props.state.weather[1]}</p>
              <p><img src={Weather} /> {props.state.weather[2]}</p>         
          </div>
          <h5>{handleData()}</h5>
        </div>
    )
    }else if(props.state.erro || props.state.weather[2] === "span"){
        return(
            <div className="home">
                <img className="imgErro" src={Sad} />
                <p>"Ops, não conseguimos localizar sua cidade. Tente novamente!"</p>
            </div>
        )
    }else{
        return(
            <div className="home">
                <img className="imgHome" src={Home} /> 
            </div>
        )
    }
}

export default APIResult
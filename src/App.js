import React from 'react';
import axios from 'axios';
import './App.css';
import APIResult from './components/APIresult';

class App extends React.Component{ 
  state={
    weather: [], 
    city: '',
    erro: '',
    status: false,
  }

  handleConection(){
    if (!navigator.onLine) {
      return 'Você está sem conexão'
    }else{
      return ''
    }
  }

  handleGetAPI(){
      axios.get(`https://goweather.herokuapp.com/weather/${this.state.city}`)
        .then(response => {     
          const data = response.data
          const arrayWeather = Object.values(data)
          arrayWeather.pop()
          this.setState(
            ()=>(
              {weather: arrayWeather, status: true}
            )
          )
        })
        .catch(error => {
          this.setState(
            ()=>(
              {erro: "Ops, não conseguimos localizar sua cidade. Tente novamente!"}
            )
          )
        })
  }

  handleInput = (event) =>{
      this.setState(
        ()=>(
          {city: event.target.value, status: false, erro: ''}
        )
      )
  }

  render(){
    return(
      <div className="container">
        <header className="header">
          <p>{this.handleConection()}</p>
          <h1>TodayWeather</h1>
        </header>
        <div className="form">
          <h4>Digite o nome da sua cidade e descubra o clima do dia</h4>
          <input onChange={(event)=> this.handleInput(event)} type="text" placeholder="Qual a sua cidade?"></input>
          <button className="button" onClick={()=>this.handleGetAPI()}>Confirmar</button> 
        </div>
        <APIResult state={this.state}/>
      </div>
    )
  }
}

export default App;

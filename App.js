
import "./App.css"
import api from './api';
import React, { Component } from 'react';

class App extends Component {
  state = {
    dados: [],
    dados2: [],
  }

  async componentDidMount() {
    const response = await api.get('http://www.mocky.io/v2/598b16861100004905515ec7');
    const response2 = await api.get('http://www.mocky.io/v2/598b16291100004705515ec5');
    this.setState({ dados: response.data });
    this.setState({ dados2: response2.data2 });
    console.log(response2.data)

  }
  

  render() {

    const { dados } = this.state;
    const { dados2 } = this.state;
    return (
      <div>
        <h1>listar</h1>
        {dados.map(data =>
        {dados2.map(data2 => {
          
     
        
          
          return (
           
            <div key={data.itens.id}>
            <div key={data2.itens.id}>
    
                <ul>
              <li>
                <h1>Nome:{dados2[0].nome}; </h1>
              <h2>cpf:{dados[48].cliente};</h2>
              <p>Codigo:{dados[48].codigo}</p>
              <h3>ValorTotal = {dados[48].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[19].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[10].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[6].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[47].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[17].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[20].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[28].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[31].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[13].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[14].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[9].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[18].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[12].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[21].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[25].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[23].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[15].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[27].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[49].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[45].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[34].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[7].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[8].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[16].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[41].valorTotal}</h3>


              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[2].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[46].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[2].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[1].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[11].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[39].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[24].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[22].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[26].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[32].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[33].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[35].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[3].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[43].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[37].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[30].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[0].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[4].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[36].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[42].valorTotal}</h3>

              <h2>cpf:{dados[0].cliente};</h2>
              <p>Codigo:{dados[0].codigo}</p>
              <h3>ValorTotal = {dados[44].valorTotal}</h3>



              </li>
               
            </ul>
            </div>
          );
       
           
                 
          
        )
        
          
        )
  };


export default App;


</div>
    

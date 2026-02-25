import logo from './logo.svg';
import './App.css';
// Se o export for no começo
import {Header} from './componentes/Header.js'
// Se for no final
//import Header from './componentes/Header';
import Button from './componentes/Button.js'

import {Form} from './componentes/Form.js'
import {ListAulas} from './componentes/ListAulas.js'
function App() {

  const arraySimples = [1, 2, 3, 4]
  const aulas = [
    {id:1, nome: "Introdução", desc: "Introdução a disciplina e a mobile", semana: 1},
    {id:2, nome: "Inicio do React", desc: "Componentes, props e eventos (e .map())!", semana: 2},
    {id:3, nome: "Hooks em React", desc: "Introdução as Hooks em React", semana: 3},
    {id:4, nome: "Outros conceitos em React", desc: "Outros conceitos em React", semana: 4},
    {id:5, nome: "ADO Sobre React", desc: "Prova", semana: 5}
  ];

  return (
    <div className="App">
      <Header />
        {
          /*
      <ul>
        {arraySimples.map(
          (numero) => {return <li>{numero}</li>} 
        ) }
      </ul>
      */
      }
      <ListAulas/>
      {
        /*
        <Button textDisplay="Botao 1" habilitar={true} />
        <Button textDisplay="Botao 2" habilitar={false} />
        <Button textDisplay="Botao 3"/>
        <Button textDisplay="Botao 4"/>
      <Form/>
        */
        }
    </div>
  );
}

export default App;

import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// Se o export for no começo
import { Header } from './componentes/Header.js';
import {Footer} from './componentes/Footer.js';
import { CalculadoraIMC } from './componentes/CalculadoraIMC.js';
import { Calculadora } from './componentes/Calculadora.js';
import { ClimaTempo } from './componentes/ClimaTempo.js';
// Se for no final
//import Header from './componentes/Header';
import Button from './componentes/Button.js'

import {Form} from './componentes/Form.js'
import {ListAulas} from './componentes/ListAulas.js'
import { Bola } from './componentes/Bola8.js';
import { Alunos } from './componentes/Alunos.js';
function App() {

  const arraySimples = [1, 2, 3, 4]
  const aulas = [
    {id:1, nome: "Introdução", desc: "Introdução a disciplina e a mobile", semana: 1},
    {id:2, nome: "Inicio do React", desc: "Componentes, props e eventos (e .map())!", semana: 2},
    {id:3, nome: "Hooks em React", desc: "Introdução as Hooks em React", semana: 3},
    {id:4, nome: "Outros conceitos em React", desc: "Outros conceitos em React", semana: 4},
    {id:5, nome: "ADO Sobre React", desc: "Prova", semana: 5}
  ];
  
  var valorInicialCont = 0
  const [varCont, setVarCont] = useState(valorInicialCont)
  const [varNome, setVarNome] = useState("")

  const [inputText, setInputText] = useState("")

  const [search, setSearch] = useState("");

  const listAlunos = [
    "Isaias",
    "Larissa",
    "Tati",
    "João",
    "Paula",
    "Lucas"
  ];

  const getValue = (valor) =>{
    setSearch(valor)
  }


  const [exercicio, setExercicio] = useState('')
  const [temaEscuro, setTemaEscuro] = useState(false)


  function mudarTema(){
    setTemaEscuro(!temaEscuro);
  }
  function voltarInicio(){
    setExercicio(null)
  }


  return (
    <div className="App">
      {/* Exercicios de Aula 11-03 */}
      <div className={temaEscuro ? 'App' : 'AppLight'}>
        <Header class={temaEscuro ? 'headerDark' : 'headerLight'} tema={mudarTema} action={voltarInicio}/>

        <div className="buttonHall">
          <button onClick={()=>setExercicio('1')}>Exercício 1</button>
          <button onClick={()=>setExercicio('2')}>Exercício 2</button>
          <button onClick={()=>setExercicio('3')}>Exercício 3</button>
        </div>
        <div className='exercicio'>
          {exercicio==='1' ? <Calculadora/> : <></>}
          {exercicio==='2' ? <CalculadoraIMC/> : <></>}
          {exercicio==='3' ? <ClimaTempo/> : <></>}
        </div>
        <Footer class={temaEscuro ? 'footerDark' : 'footerLight'}/>
      </div>
      
      {
      /*
      <Header value={getValue} searched={search}/>
      <Alunos alunos={listAlunos} search={search} />

      <br/>
      <Bola />
      
      <button onClick={() => setVarCont(varCont+1)}> Aumentar contador</button>
      <h4>{varCont}</h4>  
      <input
        value={varNome} onChange={(e) => setVarNome(e.target.value)}/>
      <h4>{varNome}</h4>  
        
      <ul>
        {arraySimples.map(
          (numero) => {return <li>{numero}</li>} 
        ) }
      </ul>
      
      <ListAulas/>
      
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

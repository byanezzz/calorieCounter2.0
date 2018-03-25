import React, { Component } from 'react';

export default class Form extends Component { 
  render() { 
    return ( 
      
      <form> 
        <div> 
          <label htmlFor="genero">Masculino</label> 
          <input type="radio" name="genero" id="genero"/> 
          <label htmlFor="genero">Femenino</label> 
          <input type="radio" name="genero" id="genero"/> 
        </div> 
        <div> 
          <label htmlFor="edad">Edad</label> 
          <input type="text" name="edad" id="edad"/> 
          <label htmlFor="peso">Peso, kg</label> 
          <input type="text" name="peso" id="peso"/> 
          <label htmlFor="altura">Altura, cm</label> 
          <input type="text" name="altura" id="altura"/> 
        </div> 
        <div> 
          <h5>Tipo de Actividad</h5> 
          <div> 
            <input type="radio" name="actividad" id="sedentario"/> 
            <label htmlFor="sedentario">Sedentaria</label> 
          </div> 
          <div> 
            <input type="radio" name="actividad" id="ligero"/> 
            <label htmlFor="ligero">Actividad Ligera (1-3 veces por semana)</label> 
          </div> 
          <div> 
            <input type="radio" name="actividad" id="moderano"/> 
            <label htmlFor="moderano">Actividad Moderada (3-5 veces por semana)</label> 
          </div> 
          <div> 
            <input type="radio" name="actividad" id="intenso"/> 
            <label htmlFor="intenso">Actividad Intensa (6-7 veces por semana)</label> 
          </div> 
          <div> 
            <input type="radio" name="actividad" id="atleta"/> 
            <label htmlFor="atleta">Atleta Profesional</label> 
          </div> 
        </div> 
        <div> 
          <input type="submit" value="Siguiente"/> 
        </div> 
      </form> 
    ) 
  } 
} 
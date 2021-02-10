import React from 'react'
import './App.css';

const App = () => {

  const [isSubmitted, setIsSubmitted]  = React.useState() 
  const [camposFormulario, setCamposFormulario] = React.useState({})

  function handleFormSubmit(event) {
    console.dir(event.target)
    console.log("Hola Mundo")
    event.preventDefault()
    
    setIsSubmitted(true)
    setCamposFormulario({
      nombre: event.currentTarget.nombre.value,
      apellido: event.currentTarget.apellido.value,
      mensaje: event.currentTarget.mensaje.value
    })
  }

  return (
    <>
      {isSubmitted 
        ? (
          <div className="contenedor">
            <h1>Aprendiendo PHP</h1>                  
            <p>Nombre: {camposFormulario.nombre}</p>
            <p>Apellido: { camposFormulario.apellido }</p>
            Se ha inscrito correctamente a las notificaciones       
            <hr />
            tus cursos son <strong>javascript</strong>       
            <hr />
            <h2>Área de Especialización</h2>Front End       
            <hr />
            <h2>Tipo de Curso elegido</h2>
            Elegiste Presencial       
            <hr />
            <h2>Mensaje</h2>
            { camposFormulario.mensaje }
          </div>
        ) : (
          <div className="contenedor">
            <h1>Aprendiendo PHP</h1>

            <div className="contenido">
            <form onSubmit={ handleFormSubmit } action>

                <div className="informacion">
                  <div className="campo">
                    <label htmlFor="nombre">Nombre
                      <input type="text" name="nombre" id="nombre"></input>
                    </label>
                  </div>
                  <div className="campo">
                    <label htmlFor="apellido">Apellido
                      <input type="text" name="apellido" id="apellido"></input>
                    </label>
                  </div>
                  <div className="campo">
                    <label htmlFor="notificaciones">Notificaciones
                      <input type="checkbox" name="notificaciones" id="notificaciones"></input>
                    </label>
                  </div>
                </div>

              <div className="cursos">
                <h2>Cursos</h2>
                  <div className="campo">
                    <label htmlFor="html5">
                      HTML5
                      <input type="checkbox" name="curso[]" value="html5" id="html5"></input>
                    </label>
                  </div>
                  <div className="campo">
                    <label htmlFor="css3">
                      CSS3
                      <input type="checkbox" name="curso[]" value="css3" id="css3"></input>
                    </label>
                  </div>
                  <div className="campo">
                    <label htmlFor="javascript">
                      JavaScipt
                      <input type="checkbox" name="curso[]" value="javascript" id="javascript"></input>
                    </label>
                  </div>
              </div>

              <div className="especializacion">
                <h2>Área de Especialización</h2>

                <select name="area" value="-Any-">
                  <option>- Selecciona una area -</option>
                  <option value="fe">Front End</option>
                  <option value="be">Back End</option>
                  <option value="fs">Full Stack</option>
                </select>
              </div>

                <div className="textarea">
                  <div className="campo">
                    <label htmlFor="mensaje"> Mensaje <br/>
                      <textarea name="mensaje" rows="8" cols="40" id="mensaje"></textarea>
                    </label>
                    <input type="submit"></input>
                  </div>
                </div>
            </form>
            </div>
          </div>
        )
      }
    </>
  )  
}

export default App;

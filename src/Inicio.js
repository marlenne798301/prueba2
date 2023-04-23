import React from 'react';
import './Card.css';
import Card from './Card';

const Inicio = () => {
  return (
    <div className="card">
        <div className="card-info">
          <Card
            title="MÉTODO RENDER"
            description="Todo componente de react, tiene un método render que es el que se encarga de renderizar en el navegador el HTML correspondiente al componente. Este método se llama automaticámente cuando se crea un componente y cuando el estado del componente se actualiza (veremos esto más adelante)"
          />
        </div>
        <div className="col-md-4">
          <Card
            title="MÉTODO STRICT MODE"
            description="StrictMode es una herramienta para destacar problemas potenciales en la aplicación. Al igual que Fragment, StrictMode no renderiza nada en la interfaz del usuario. Este modo también activa advertencias y comprobaciones adicionales para ses descendientes."
          />
        </div>
        <div className="col-md-4">
          <Card
            title="MÉTODO RETURN"
            description="Este método es obligatorio en cualquier componente, pues como su nombre lo dice, se utiliza para obtener los elementos finales a visualizar o pintar en el navegador. Debe ser una función pura, es decir, no debe modificar las props, no debe modificar el state ni realizar operaciones del DOM."
            
          />
         
         
        </div>
      </div>
    
  );
}

export default Inicio;

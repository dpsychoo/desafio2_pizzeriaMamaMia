import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt={`Imagen de ${name}`} />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Ingredientes: {ingredients.join(', ')}</p>
          <p className="card-text" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Precio: ${price.toLocaleString()}</p>
          <div className="d-flex justify-content-around">
            <button className="btn btn-primary">Ver Más 👀</button>
            <button className="btn btn-success">Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;

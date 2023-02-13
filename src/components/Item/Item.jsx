import React from 'react';

export const Item = ({item}) => {
    return (
        
            <div className="card mb-3 cardProducto border-light">
          <img src={`./img/${item.img}`} className="card-img-top" alt={`imagen de ${item.nombre}`} />
          <div className="card-body cardBody">
            <h5 className="card-title">{item.nombre}{item.modelo} </h5>
            <p className="card-text">{item.marca} </p>
            <p className="card-text">{item.precio} </p>
            <a href="#" className="btn btn-dark">Ver Producto</a>
          </div>
        </div>
        
    )
}


import React, {useState, useEffect} from 'react';

const CarsManager = () => {
    const [cars, setCars] = useState([]);
    const API = "http://localhost:3000/cars";

    const getCars = () => {
        fetch(API)
            .then(data => data.json())
            .then(json => setCars(json))
    }

    const sellCar = (id) => {
        fetch(`${API}/${id}`, {method: "DELETE"})
            .then(res => res.json())
            .then(res => getCars());
    }

    useEffect(() => {
        getCars();
    }, []);

    return (
        <ul>
            {
                cars.map(el => {
                    return (
                        <li key={el.id}>
                            {el.brand} {el.name}
                            <button onClick={() => sellCar(el.id)}>Sprzedany</button>
                        </li>
                    )}
                )}
        </ul>
    );
};

export default CarsManager;
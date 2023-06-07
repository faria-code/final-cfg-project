import React from 'react';
import './Liststyles.css';

function List() {
    const locations = [
        {
            place: 'Westbourne Grove',
            street: '2 Clifton Place',
            city: 'London',
            postcode: 'W11 2SH',
            phone: '0208 885 7776'
        },

        {
            place: 'South Kensington',
            street: '22 Elbert Street',
            city: 'London',
            postcode: 'SW7 3ND',
            phone: '0208 443 4432'
        }



    ]
    return (
        <div>
            <h2 className='listheading'>Where you can find our salons</h2>
            <ul>{locations.map((locations) => {
                return (
                    <div className='flexlist' key={locations.place}>
                        <h3>{locations.place}</h3>
                        <p>{locations.street}</p>
                        <p>{locations.city}</p>
                        <p>{locations.postcode}</p>
                        <p>{locations.phone}</p>
                    </div>
                )
            })
            }</ul>
        </div>
    )
}

export default List





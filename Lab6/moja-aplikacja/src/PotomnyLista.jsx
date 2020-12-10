import React from 'react'
import './Components.css';

class PotomnyLista extends React.Component {
    render() {
        const tekst='Komponent Potomny 2'
        const names = ['Dawid', 'Krzysztof', 'Zdzisław']
        const namesList = names.map(name => <li key={name}>{name}</li>)

        return (
            <div>
                <h6 className='naglowek1'>{tekst}</h6>
                {this.props['test'] ? <ul>{namesList}</ul> : 'Brak imion'}
            </div>
        )
    }
}

export default PotomnyLista;
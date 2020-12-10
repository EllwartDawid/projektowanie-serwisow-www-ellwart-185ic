import React from 'react'
import Potomny from './Potomny.jsx'
import PotomnyLista from './PotomnyLista.jsx'
import './Glowny.css';

class Glowny extends React.Component {
    state = {
        title: 'ReactJS',
        showNames: true
    }
    render() {
        const changeTitle = () => this.setState({ title: 'React' })
        return (
            <div className='card'>
                <h1 className='naglowek'>Hello {this.state.title}</h1>
                <Potomny func={() => alert("Alert!!!")}/>
                <PotomnyLista test={this.state.showNames} />
                <button onClick={changeTitle}>Change title</button>
            </div>
        )
    }
}

export default Glowny;
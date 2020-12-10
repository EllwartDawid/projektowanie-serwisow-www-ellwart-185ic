import React from 'react'
import './Components.css';

class Potomny extends React.Component{
    render(){
        const tekst='Komponent Potomny'
        
        return( 
            <div>
            <h6 className='naglowek1'>{tekst}</h6>
            <button onClick={this.props.func} >Alert</button> 
            </div>
        )
    }
}

export default Potomny;
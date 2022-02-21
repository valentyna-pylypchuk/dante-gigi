import { Component } from 'react';
import man from './man.png';
import dante from './dante-boy.png'

export class Dante extends Component {

    state = {
        CTA:"CLICK TO SEE THE BOY",
        image: man
    }

    danteClicked = () => {
        this.setState({
            CTA: "OH YEAH LOOK AT THAT BOY!",
            image: dante
        })
    }

    render () {
        return <div>
            <div className='container'>
                <h1>{this.state.CTA}</h1>
            </div>
            <div className='container'>
                <img onClick={this.danteClicked} src={this.state.image} width='400px' alt='man'/>
            </div>
        </div>
    }
}
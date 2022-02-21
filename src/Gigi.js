import { Component } from 'react';
import woman from './woman.png';
import gigi from './gigi.png'

export class Gigi extends Component {

    state = {
        CTA:"CLICK TO SEE THE GIRL",
        image: woman
    }

    gigiClicked = () => {
        this.setState({
            CTA: "WOW WHAT AN AMAZING GIRL!",
            image: gigi
        })
    }

    render () {
        return <div>
            <div className='container'>
                <h1>{this.state.CTA}</h1>
            </div>
            <div className='container'>
                <img onClick={this.gigiClicked} src={this.state.image} width='400px' alt='woman'/>
            </div>
        </div>
    }
}
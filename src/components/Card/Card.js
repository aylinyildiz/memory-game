import React, {Component} from 'react';

import mushroom from './../../assets/mushroom.png';
import './Card.scss';

class Card extends Component {
    render(){
        const { smurf, onClickHandler } = this.props;
        return (
            <div className="card">
                {<img onClick={onClickHandler} className={smurf.open ? 'card-open' : 'card-closed'} src={smurf.open ? smurf.image : mushroom} alt={smurf.name} />}
            </div>
        )
    }
}

export default Card;

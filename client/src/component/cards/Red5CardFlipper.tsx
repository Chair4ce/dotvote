import React from 'react';
import {ReactComponent as Red5Card} from "../../icons/Red_5_card.svg";


interface Props {
    className?: string;
}

const Red5CardFlipper: React.FC<Props> = props => {
    return(
        <div className="scene scene--card">
            <div className={'red5card'}>
                <Red5Card className={'red5card__face red5card__face--front'}/>
                <div className={'red5card__face red5card__face--back'}>
                </div>
            </div>
        </div>
    )
}


export default Red5CardFlipper;




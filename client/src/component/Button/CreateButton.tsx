import React from "react";
import './CreateButton.scss';
import classNames from "classnames";
export interface Props {
    buttonText: string;
    input: string;
    onClick: () => void;
    wrapper: string;
    className: string;
}

const CreateButton: React.FC<Props> = props => {
    return (
        <div className={classNames(props.wrapper,'md:flex bg-white')}>
            <button
                className={classNames(props.className, 'rounded-full')}
                disabled={props.input === ''}
                onClick={props.onClick}
            >
                <div className="element">
                    <p>{props.buttonText}</p>
                </div>
            </button>
        </div>
    )
}

export default CreateButton;

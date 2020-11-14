import React from "react";
import './CreateButton.scss';
export interface Props {
    buttonText: string;
    input: string;
    onClick: () => void;
}

const CreateButton: React.FC<Props> = props => {
    return (
        <div className="form_submit">
            <button
                className="create_btn"
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

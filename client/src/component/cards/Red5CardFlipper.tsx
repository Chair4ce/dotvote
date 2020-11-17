import React, {useState} from 'react';
import {ReactComponent as Red5Card} from "../../icons/Red_5_card.svg";
import classNames from "classnames";
import {useMutation} from "@apollo/client";
import CreateButton from "../Button/CreateButton";
import {useCookies} from "react-cookie";
import {PLAYER_LOGIN} from "../../api/login/USER_LOGIN";


interface Props {
    className?: string;
}

const cookieValidTimeInMS: number = 24 * 60 * 60 * 1000;

const Red5CardFlipperLoginForm: React.FC<Props> = props => {

    const [flipped, flipCard] = useState<boolean>(false);

    function handleClick() {
        flipCard(true);
    }

    function UserLogin() {
        const [loginInput, setLoginInput] = useState('');
        const [loginUser, {error: mutationError}] = useMutation(PLAYER_LOGIN, {});
        const [, setUserCookie] = useCookies(['dotvote']);
        const handleLogin = () => {
            if (loginInput !== '') {
                loginUser({variables: {text: loginInput}});
                if(!mutationError?.graphQLErrors) {
                    setUserCookie('dotvote', {userName: loginInput},
                        {expires: new Date(new Date().getTime() + cookieValidTimeInMS)});
                }
                setLoginInput('');
            }
        }

        return (
            <div className="user_login_form">
                <div className={"form_input"}>
                    <input
                        className="login_input_text"
                        value={loginInput}
                        onChange={(event) => setLoginInput(event.target.value)}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                handleLogin();
                            }
                        }}
                        placeholder={'UserName'}
                    />
                </div>

                <CreateButton buttonText={"Login"} input={loginInput} onClick={handleLogin}/>
            </div>
        );
    }

    return(
        <div className="scene scene--card">
            <div className={classNames('red5card', flipped ? 'is-flipped' : '')} onClick={handleClick}>
                <Red5Card className={'red5card__face red5card__face--front'}/>
                <div className={'red5card__face red5card__face--back'}>
                    <UserLogin/>
                </div>
            </div>
        </div>
    )
}


export default Red5CardFlipperLoginForm;




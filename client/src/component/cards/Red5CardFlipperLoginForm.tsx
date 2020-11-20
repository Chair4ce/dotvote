import React, {useState} from 'react';
import {ReactComponent as Red5Card} from "../../icons/Red_5_card.svg";
import classNames from "classnames";
import {useMutation} from "@apollo/client";
import CreateButton from "../Button/CreateButton";
import {useCookies} from "react-cookie";
import {PLAYER_LOGIN} from "../../api/login/USER_LOGIN";
import {Cookie} from "../../App";


interface Props {
    callback: () => void;
    cookie?: Cookie;
    className?: string;
}

const cookieValidTimeInMS: number = 24 * 60 * 60 * 1000;

const Red5CardFlipperLoginForm: React.FC<Props> = props => {
    const [flipped, flipCard] = useState<boolean>(false);

    function handleClick() {
        flipCard(true);
    }

    function UserLogin() {
        const [loginInput, setLoginInput] = useState<string>(props.cookie?.userName ? props.cookie?.userName : '');
        const [, setUserCookie] = useCookies(['dotvote']);
        const [loginUser, {loading, error: mutationError, data}] = useMutation(PLAYER_LOGIN, {});

        function handleLogin() {
            if (loginInput !== '') {
                loginUser({variables: {text: loginInput}}).then(r => {
                    setUserCookie('dotvote', {id: r.data.playerLogin.id ,userName: r.data.playerLogin.name },
                        {expires: new Date(new Date().getTime() + cookieValidTimeInMS)});
                });
                console.log('finished mutation')
                setLoginInput('');
                props.callback();
            }
        }


        return (
            <div className="user_login_form">
                <div className={"form_input"}>
                    {props.cookie?.userName ? <h4> Welcome back {props.cookie?.userName} </h4> : null}
                    <h4 style={{padding: '10px'}}>What should I call you today?</h4>
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

                <CreateButton wrapper={'wrapper_login_btn'} className={'login_btn'} buttonText={"Login"} input={loginInput} onClick={handleLogin}/>
            </div>
        );
    }

    return(
        <div className={'loginView'}>
            <h4>Powered by Red 5</h4>
            { !flipped ? <h4> Click on the card to login</h4> : <h4>------</h4>}
            <div className={classNames('scene', 'scene--card')}>
                <div className={classNames('red5card', flipped ? 'is-flipped' : '')} onClick={handleClick}>
                    <Red5Card className={classNames('red5card__face', 'red5card__face--front')}/>
                    <div className={classNames('red5card__face', 'red5card__face--back')}>
                        <UserLogin/>
                    </div>
                </div>
            </div>

        </div>


    )
}


export default Red5CardFlipperLoginForm;




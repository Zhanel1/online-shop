import { div } from 'prelude-ls';
import React from 'react';
import { NavLink } from 'react-router-dom';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {useHistory} from 'react-router-dom' 
import userEvent from '@testing-library/user-event';

const NavBar = observer(() =>{
    //const{user} = userContext(Context)
    return(
        <header>
            <nav>
                <a className="nav-link" href="SHOP_ROUTE"><img></img></a>
                {userEvent.isAuth ?
                    <nav className="nav-buttons">
                        <button className="nav-button">Админ панель</button>
                        <button className="nav-button">Выйти</button>
                    </nav>
                    :
                    <nav>
                        <button className="nav-button" onClick={() => userEvent.setIsAuth(true)}>
                            Вoйти
                        </button>
                    </nav>
                }
            </nav>
        </header>
    //    <NavBar>
    //        <NavLink to={SHOP_ROUTE}>
    //            <img></img>
    //         </NavLink> {user.isAuth ?
    //         <Nav className="">
    //             <Button>Админ панель</Button>
    //             <Button>Выйти</Button>
    //         </Nav>
    //        :
    //        <Nav className="">
    //             <Button>Войти</Button>
    //             {/* <Button></Button> */}
    //         </Nav>
    //     }
    //    </NavBar>
    );

});

export default NavBar;
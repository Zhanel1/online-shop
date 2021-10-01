// import { div } from "prelude-ls";
// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import { observer } from "mobx-react-lite";
// import { Context } from "../index";
// import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
// import { useHistory } from "react-router-dom";
// import { connect } from "react-redux";
// import { LOGIN, LOGOUT } from "../store/types";

// const NavBar = (props) => {
//   const { isAuthenticated } = props;
//   return (
//     <nav className="Nav">
//       <div className="Nav__container">
//         <Link to="/" className="Nav__brand">
//           <img src="logo.svg" className="Nav__logo" />
//         </Link>

//         <div className="Nav__right">
//           <ul className="Nav__item-wrapper">
//             <li className="Nav__item">
//               <Link className="Nav__link" to="/path1">
//                 Link 1
//               </Link>
//             </li>
//             <li className="Nav__item">
//               <Link className="Nav__link" to="/path2">
//                 Link 2
//               </Link>
//             </li>
//             <li className="Nav__item">
//               <Link className="Nav__link" to="/path3">
//                 Link 3
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//     // <header>
//     //   <nav>
//     //     <a className="nav-link" href="SHOP_ROUTE">
//     //       <img></img>
//     //     </a>
//     //     {isAuthenticated ? (
//     //       <nav className="nav-buttons">
//     //         <button className="nav-button">Админ панель</button>
//     //         <button className="nav-button" onClick={() => props.logout()}>
//     //           Выйти
//     //         </button>
//     //       </nav>
//     //     ) : (
//     //       <nav>
//     //         <button
//     //           className="nav-button"
//     //           onClick={() =>
//     //             props.login({ email: "test@gmail.com", password: "qwetry123" })
//     //           }
//     //         >
//     //           Вoйти
//     //         </button>
//     //       </nav>
//     //     )}
//     //   </nav>
//     // </header>
//     //    <NavBar>
//     //        <NavLink to={SHOP_ROUTE}>
//     //            <img></img>
//     //         </NavLink> {user.isAuth ?
//     //         <Nav className="">
//     //             <Button>Админ панель</Button>
//     //             <Button>Выйти</Button>
//     //         </Nav>
//     //        :
//     //        <Nav className="">
//     //             <Button>Войти</Button>
//     //             {/* <Button></Button> */}
//     //         </Nav>
//     //     }
//     //    </NavBar>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     isAuthenticated: state.authReducer.user != null,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   login: ({ email, password }) =>
//     dispatch({ type: LOGIN, payload: { email: email, password: password } }),
//   logout: () => dispatch({ type: LOGOUT }),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

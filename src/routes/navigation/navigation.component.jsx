import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import { selectIsCartOpen } from '../../store/cart/cart.selector.js';
import { selectCurrentUser } from "../../store/user/user.selector.js";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles.jsx';

function Navigation() {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen  = useSelector(selectIsCartOpen);

    return (
      <Fragment>
        <NavigationContainer>
          <LogoContainer to="/">
            <CrwnLogo/>
          </LogoContainer>
          <NavLinks>
            <NavLink to="/shop">
                SHOP
            </NavLink>
            {
              currentUser ?
                <NavLink as='span' onClick={signOutUser}>
                  SIGN OUT
                </NavLink>
                : (
                  <NavLink to="/auth">
                    SIGN IN
                  </NavLink>
                )
            }
            <CartIcon />
          </NavLinks>
          {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    );
  };

export default Navigation;
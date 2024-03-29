import React, { useContext,useEffect } from 'react';
import { openModal } from '@redq/reuse-modal';
import Router from 'next/router';
import { FormattedMessage } from 'react-intl';
import { Scrollbar } from 'components/scrollbar/scrollbar';
import Drawer from 'components/drawer/drawer';
import { Button } from 'components/button/button';
import NavLink from 'components/nav-link/nav-link';
import { CloseIcon } from 'assets/icons/CloseIcon';
import { AuthContext } from 'contexts/auth/auth.context';
import AuthenticationForm from 'features/authentication-form';
import {
  DrawerBody,
  HamburgerIcon,
  DrawerContentWrapper,
  DrawerClose,
  DrawerProfile,
  LogoutView,
  LoginView,
  UserAvatar,
  UserDetails,
  DrawerMenu,
  DrawerMenuItem,
  UserOptionMenu,
} from './header.style';
import UserImage from 'assets/images/user.jpg';
import {
  MOBILE_DRAWER_MENU,
  PROFILE_PAGE,
} from 'site-settings/site-navigation';
import { Cookies } from 'react-cookie';
import { useAppState, useAppDispatch } from 'contexts/app/app.provider';
import { useCart } from 'contexts/cart/use-cart';
import { PROFILE } from 'endpoints';
import axios from 'axios';

const MobileDrawer: React.FunctionComponent = () => {
  const isDrawerOpen = useAppState('isDrawerOpen');
  const cookie = new Cookies();
  const {clearCart} = useCart();
  const [user, setUser] = React.useState('');
  useEffect(() => {
    profileCall();
  }, []);
  const dispatch = useAppDispatch();
  const {
    authState: { isAuthenticated },
    authDispatch,
  } = useContext<any>(AuthContext);
  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE_DRAWER',
    });
  }, [dispatch]);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      clearCart();
      setUser('');
      cookie.remove('access_token');
      authDispatch({ type: 'SIGN_OUT' });
      Router.push('/');
    }
  };
  const profileCall = () => {
  const config = {
    headers: { Authorization: `Bearer  ${cookie.get('access_token')}` }
  };
  if (config.headers.Authorization !== "Bearer  undefined" && !user){
    axios.get(PROFILE, config)
    .then(res => {
      setUser(res.data.first_name.charAt(0).toUpperCase() + res.data.first_name.slice(1));
    })
    .catch(err => {
      //TODO display a error message
      if (err.response) {
        // client received an error response (5xx, 4xx)
      } else if (err.request) {
        // client never received a response, or request never left
      } else {
        // anything else
      }
    });
  }
  }
  const signInOutForm = () => {
    dispatch({
      type: 'TOGGLE_DRAWER',
    });

    authDispatch({
      type: 'SIGNIN',
    });

    openModal({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: AuthenticationForm,
      closeComponent: '',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 458,
        height: 'auto',
      },
    });
  };

  return (
    <Drawer
      width='316px'
      drawerHandler={
        <HamburgerIcon>
          <span />
          <span />
          <span />
        </HamburgerIcon>
      }
      open={isDrawerOpen}
      toggleHandler={toggleHandler}
      closeButton={
        <DrawerClose>
          <CloseIcon />
        </DrawerClose>
      }
    >
      <DrawerBody>
        <Scrollbar className='drawer-scrollbar'>
          <DrawerContentWrapper>
            <DrawerProfile>
              {isAuthenticated ? (
                <LoginView>
                  <UserAvatar>
                    <img src={UserImage} alt='user_avatar' />
                  </UserAvatar>
                  <UserDetails>
                    <h3>{user}</h3>
                  </UserDetails>
                </LoginView>
              ) : (
                <LogoutView>
                  <Button variant='primary' onClick={signInOutForm}>
                    <FormattedMessage
                      id='mobileSignInButtonText'
                      defaultMessage='join'
                    />
                  </Button>
                </LogoutView>
              )}
            </DrawerProfile>

            <DrawerMenu>
              {MOBILE_DRAWER_MENU.map((item) => (
                <DrawerMenuItem key={item.id}>
                  <NavLink
                    onClick={toggleHandler}
                    href={item.href}
                    label={item.defaultMessage}
                    intlId={item.id}
                    className='drawer_menu_item'
                  />
                </DrawerMenuItem>
              ))}
            </DrawerMenu>

            {isAuthenticated && (
              <UserOptionMenu>
                <DrawerMenuItem>
                  <NavLink
                    href={PROFILE_PAGE}
                    label='Your Account Settings'
                    className='drawer_menu_item'
                    intlId='navlinkAccountSettings'
                  />
                </DrawerMenuItem>
                <DrawerMenuItem>
                  <div onClick={handleLogout} className='drawer_menu_item'>
                    <span className='logoutBtn'>
                      <FormattedMessage
                        id='navlinkLogout'
                        defaultMessage='Logout'
                      />
                    </span>
                  </div>
                </DrawerMenuItem>
              </UserOptionMenu>
            )}
          </DrawerContentWrapper>
        </Scrollbar>
      </DrawerBody>
    </Drawer>
  );
};

export default MobileDrawer;

import React, { useContext } from 'react';
import Router from 'next/router';
import { AuthContext } from 'contexts/auth/auth.context';
import {
  SidebarWrapper,
  SidebarTop,
  SidebarBottom,
  SidebarMenu,
  LogoutButton,
} from './sidebar.style';
import { FormattedMessage } from 'react-intl';
import {
  PROFILE_SIDEBAR_TOP_MENU,
  PROFILE_SIDEBAR_BOTTOM_MENU,
} from 'site-settings/site-navigation';
import { Cookies } from 'react-cookie';
import { useCart } from 'contexts/cart/use-cart';

const SidebarCategory: React.FC<{}> = () => {
  const cookie = new Cookies();
  const { authDispatch } = useContext<any>(AuthContext);
  const {clearCart} = useCart();

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      clearCart();
      cookie.remove('access_token');
      authDispatch({ type: 'SIGN_OUT' });
      Router.push('/');
    }
  };
  return (
    <>
      <SidebarWrapper>
        <SidebarTop>
          {PROFILE_SIDEBAR_TOP_MENU.map((item, index) => (
            <SidebarMenu href={item.href} key={index} intlId={item.id} />
          ))}
        </SidebarTop>

        <SidebarBottom>
          {PROFILE_SIDEBAR_BOTTOM_MENU.map((item, index) => (
            <SidebarMenu href={item.href} key={index} intlId={item.id} />
          ))}
          <LogoutButton type="button" onClick={handleLogout}>
            <FormattedMessage id="nav.logout" defaultMessage="Logout" />
          </LogoutButton>
        </SidebarBottom>
      </SidebarWrapper>
    </>
  );
};

export default SidebarCategory;

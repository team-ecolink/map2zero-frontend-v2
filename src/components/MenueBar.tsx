import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Links = [
  { name: '홈', url: '/' },
  { name: '지도', url: '/map' },
  { name: '매장', url: '/store' },
  { name: '제품', url: '/product' },
  { name: '이벤트', url: '/event' },
  { name: '커뮤니티', url: '/community' },
  { name: '아티클', url: '/article' },
  { name: 'Log in', url: '/login' },
];

export const MenueBar = () => {
  return (
    <Nav>
      {Links.map((link) => (
        <NavItem to={link.url}>{link.name}</NavItem>
      ))}
    </Nav>
  );
};

const Nav = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.Gray4};
`;
const NavItem = styled(Link)`
  margin: 0 10px;
  text-decoration: none;
  font: ${({ theme }) => theme.fonts.heading2b};
  color: black;
`;

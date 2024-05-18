import styled from 'styled-components';

const Links = [
  { name: '이용약관', url: '/terms' },
  { name: '개인정보처리방침', url: '/privacy' },
  { name: '공지사항', url: '/notice' },
  { name: '건의하기', url: '/suggestion' },
];

export const Fotter = () => {
  return (
    <FooterBox>
      Footer
      <div>
        {Links.map((link) => (
          <a href={link.url}>{link.name}</a>
        ))}
      </div>
    </FooterBox>
  );
};

const FooterBox = styled.div`
  height: 60px;
  margin-top: 30px;
  background-color: ${({ theme }) => theme.colors.gray1};
  border-top: 1px solid ${({ theme }) => theme.colors.gray4};
  font: ${({ theme }) => theme.fonts.heading2b};
  padding: 20px;
  a {
    margin-right: 20px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray6};
    font: ${({ theme }) => theme.fonts.caption1r};
  }
`;

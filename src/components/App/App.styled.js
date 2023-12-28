import styled from 'styled-components';

export const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: ${p => p.theme.spacing(6)} auto;
  padding: ${p => p.theme.spacing(6)};
  background-color: ${p => p.theme.colors.light};
  border-radius: ${p => p.theme.radii.l};
  width: 600px;
  border: 1px solid ${p => p.theme.colors.purple};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
`;

export const MainTitle = styled.h1`
  color: ${p => p.theme.colors.black};
  margin-bottom: ${p => p.theme.spacing(6)};
  font-size: 40px;
`;

export const ContactsTitle = styled.h2`
  color: ${p => p.theme.colors.black};
  margin-bottom: ${p => p.theme.spacing(2)};
  font-size: 32px;
`;

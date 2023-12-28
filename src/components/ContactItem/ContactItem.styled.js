import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  margin-left: ${p => p.theme.spacing(4)};
  margin-top: ${p => p.theme.spacing(3)};
`;

export const ContactName = styled.p`
  color: ${p => p.theme.colors.black};
  font-size: 16px;
  font-weight: 500;
`;

export const DeleteBtn = styled.button`
  padding: ${p => p.theme.spacing(1.5)};
  background-color: ${p => p.theme.colors.purple};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.m};
  border: none;
  font-size: 16px;
  font-weight: 400;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.red};
    font-weight: 600;
  }
`;

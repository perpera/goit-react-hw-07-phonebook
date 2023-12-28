import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(2)};
  width: 400px;
  margin-bottom: ${p => p.theme.spacing(8)};
`;

export const FormField = styled(Field)`
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(3)};
  border: 1px solid ${p => p.theme.colors.purple};
  border-radius: ${p => p.theme.radii.m};
  font-size: 18px;
  font-weight: 400;
`;

export const FormLabel = styled.label`
  text-align: start;
  font-size: 16px;
  font-weight: 500;
  color: ${p => p.theme.colors.black};
`;

export const FormButton = styled.button`
  width: 144px;
  padding: ${p => p.theme.spacing(2)};
  margin-top: ${p => p.theme.spacing(6)};
  background-color: ${p => p.theme.colors.green};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.l};
  border: 4px solid ${p => p.theme.colors.green};
  font-size: 18px;
  font-weight: 400;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 4px solid ${p => p.theme.colors.darkGreen};
    color: ${p => p.theme.colors.darkGreen};
    font-weight: 600;
  }
`;

export const FormError = styled(ErrorMessage)`
  color: ${p => p.theme.colors.red};
  font-size: 16px;
  font-weight: 500;
  margin-right: auto;
`;

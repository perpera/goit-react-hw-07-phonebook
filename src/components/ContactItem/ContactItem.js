import { ContactName, StyledItem, DeleteBtn } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <StyledItem>
      <ContactName>
        {name}: {number}
      </ContactName>
      <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteBtn>
    </StyledItem>
  );
};

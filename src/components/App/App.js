import { ContactForm } from '../ContactForm/ContactForm';
import { GlobalStyle } from '../GlobalStyled';
import { Filter } from '../Filter/Filter';
import { ContactsList } from '../ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { AppWrap, MainTitle, ContactsTitle } from './App.styled';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <AppWrap>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      {contacts.length > 0 ? (
        <>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter />
          {<ContactsList />}
        </>
      ) : null}
      <GlobalStyle />
    </AppWrap>
  );
};

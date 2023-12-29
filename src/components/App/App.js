import { ContactForm } from '../ContactForm/ContactForm';
import { GlobalStyle } from '../GlobalStyled';
import { Filter } from '../Filter/Filter';
import { ContactsList } from '../ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/operations';
import { AppWrap, MainTitle, ContactsTitle } from './App.styled';
import { Toaster } from 'react-hot-toast';
import { selectError, selectIsLoading } from '../../redux/selectors';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && !error && <Loader />}
      <AppWrap>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        <ContactsList />
        <Toaster position="top-center" />
        <GlobalStyle />
      </AppWrap>
    </div>
  );
};

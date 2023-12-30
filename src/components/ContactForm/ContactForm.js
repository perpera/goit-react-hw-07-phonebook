import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
import {
  FormStyle,
  FormButton,
  FormError,
  FormField,
  FormLabel,
} from './ContactForm.styled';
import toast from 'react-hot-toast';

const validation = Yup.object().shape({
  name: Yup.string().required('Required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/g, 'Number format: xxx-xx-xx')
    .required('Required'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validation}
      onSubmit={(values, actions) => {
        const isAdded = contacts.some(
          contact => contact.name.toLowerCase() === values.name.toLowerCase()
        );
        if (isAdded) {
          actions.resetForm();
          return toast.error(`${values.name} is already in your contacts.`);
        }
        dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      <FormStyle>
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormField
          type="text"
          name="name"
          id="name"
          required
          autoComplete="on"
        ></FormField>
        <FormError name="name" component="span" />

        <FormLabel htmlFor="number">Number</FormLabel>
        <FormField
          type="tel"
          name="number"
          id="number"
          placeholder="xxx-xx-xx"
          required
          autoComplete="on"
        ></FormField>
        <FormError name="number" component="span" />

        <FormButton type="submit">Add contact</FormButton>
      </FormStyle>
    </Formik>
  );
};

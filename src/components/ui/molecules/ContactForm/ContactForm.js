import Textarea from '../../atoms/Textarea/Textarea';
import Button from '../../atoms/Button/Button';
import styles from './ContactForm.module.sass';
import H3 from './../../atoms/headings/H3/H3';
import Input from '../../atoms/Input/Input';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import P from '../../atoms/P/P';
import * as Yup from 'yup';
import { useState } from 'react';

const ContactForm = () => 
{
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const sendFetchRequest = async (url, formData, formik) => 
    {
        const res = await fetch(url, {method: "POST", body: formData});
        
        if(res.ok)
        {
            setIsLoading(false);
            setErrorMessage("");
            setSuccessMessage("Form submitted successfully");
            formik.resetForm({values: ""});
        }else 
        {
            setIsLoading(false);
            setErrorMessage("");
            setSuccessMessage("Something went wrong. Please try again.");
        }
    }

    const submitForm = (e, formik) => 
    {
       
        e.preventDefault();
        setIsFormSubmitted(true);
        setIsLoading(true);

        if(Object.values(formik.errors).length > 0)
        {
            console.log(Object.values(formik.errors).length);
            console.log(formik.errors);
            setErrorMessage("Kindly fix all errors");
            setSuccessMessage("");

        }else 
        {
            const formData = new FormData();
            formData.append("firstName", formik.values.firstName);
            formData.append("lastName", formik.values.lastName);
            formData.append("email", formik.values.email);
            formData.append("phoneNumber", formik.values.phoneNumber);
            formData.append("message", formik.values.message);

            sendFetchRequest("https://formbold.com/s/981e3", formData, formik);
        }

    }

    const formik = useFormik(
    {
        initialValues: {firstName: '', lastName: '', email: '',  phoneNumber: '', message: '' },
        validationSchema: Yup.object({
            firstName: Yup.string().max(25, 'Must be 25 characters or less').required('Required'),
            lastName: Yup.string().max(25, 'Must be 25 characters or less').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            phoneNumber: Yup.string().max(14, 'Phone number must be at most 14 characters')
                    .matches(/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
                    'Oops. This doesn\'t look like a valid phone number')
                    .transform((_value, originalValue) =>String(originalValue.replace(/,/g, '')))
                    .required("Phone number is required"),
            message: Yup.string().required('Required')
        }),
        onSubmit: (e, values) => submitForm(e, values) ,
      });

      return (
        <div className={styles.contactForm}>
            <H3>Fill this form and we will get back to you</H3>
            <form onSubmit={(e) => submitForm(e, formik)}>
                <div className={styles.inputRow}>
                    <div  className={styles.inputItem}>
                        <Input id="firstName" type="text" placeholder="First Name"  required {...formik.getFieldProps('firstName')}/>
                        {(isFormSubmitted || formik.touched.firstName) && formik.errors.firstName ? (<div className={styles.formError}>{formik.errors.firstName}</div>) : null}
                    </div>
                    <div  className={styles.inputItem}>
                        <Input id="lastName" type="text" placeholder="Last Name"  required {...formik.getFieldProps('lastName')} />
                        {(isFormSubmitted ||formik.touched.lastName) && formik.errors.lastName ? (<div className={styles.formError}>{formik.errors.lastName}</div>) : null}
                    </div>    
                </div>
            
            <div className={styles.inputItem}>
                <Input id="email" type="email" placeholder="Email" required {...formik.getFieldProps('email')} />
                {(isFormSubmitted || formik.touched.email) && formik.errors.email ? (<div className={styles.formError}>{formik.errors.email}</div>) : null}
            </div>
        
            <div className={styles.inputItem}>
                <Input id="phoneNumber" type="text" placeholder="Phone number"  required {...formik.getFieldProps('phoneNumber')} />
                {(isFormSubmitted || formik.touched.phoneNumber) && formik.errors.phoneNumber ? (<div className={styles.formError}>{formik.errors.phoneNumber}</div>) : null}
            </div>

            <div className={styles.inputItem}>
                <Textarea id="message" type="text" required {...formik.getFieldProps('message')} placeholder="Speak your mind"></Textarea>
                {(isFormSubmitted ||formik.touched.message) && formik.errors.message ? (<div className={styles.formError}>{formik.errors.message}</div>) : null}
            </div>
        
                <Button type="submit">{isLoading ? "Loading..." : "Submit"}</Button>
                {(!errorMessage && !successMessage) && <P className={styles.privacyNotice}>
                By clicking "SUBMIT", I accept the First Class Auto Service <Link to="/">Terms of Service</Link> and <Link to="/">Privacy Notice.</Link>
                </P>}

                {errorMessage && <P className={styles.formError}>{errorMessage}</P>}
                {successMessage && <P className={styles.formSuccess}>{successMessage}</P>}

            </form>
        </div>
 
      );
}
 
export default ContactForm;
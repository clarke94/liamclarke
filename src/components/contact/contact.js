import React, { useState } from 'react';
import {
    TextField,
    Button,
    Snackbar,
    SnackbarContent,
} from '@material-ui/core';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';
import { Section } from '../section/section';
import style from './contact.module.scss';

export const Contact = () => {
    const [open, setOpen] = useState(false);
    const [successful, setSuccessful] = useState(null);
    const encode = (data) => Object.keys(data)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');

    const handleSuccess = () => {
        setSuccessful(true);
        setOpen(true);
    };

    const handleError = () => {
        setSuccessful(false);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Section title="Contact">
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        message: '',
                    }}
                    validationSchema={
                        Yup.object().shape({
                            name: Yup.string().min(2, 'Name is too Short').max(50, 'Name is too Long').required('Name is required'),
                            email: Yup.string().email('Invalid email').required('Email is required'),
                            message: Yup.string().min(10, 'Message is too Short').max(500, 'Message is too Long').required('Message is required'),
                        })
                    }
                    onSubmit={(values) => {
                        fetch('/', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                            body: encode({ 'form-name': 'contact', ...values }),
                        }).then((res) => {
                            if (res.ok) {
                                handleSuccess();
                            }
                        }).catch(() => {
                            handleError();
                        });
                    }}
                >
                    {({ errors, touched }) => (
                        <Form name="contact" method="post" data-netlify="true">
                            <div className={style.contact__group}>
                                <FastField name="name" type="text" label="Name" id="name" as={TextField} helperText={errors.name && touched.name ? errors.name : ''} error={errors.name && touched.name} fullWidth />
                            </div>
                            <div className={style.contact__group}>
                                <FastField name="email" type="email" label="Email" id="email" helperText={errors.email && touched.email ? errors.email : ''} as={TextField} error={errors.email && touched.email} fullWidth />
                            </div>

                            <div className={style.contact__group}>
                                <FastField name="message" type="textarea" label="Message" id="message" helperText={errors.message && touched.message ? errors.message : ''} as={TextField} rows="5" error={errors.message && touched.message} multiline fullWidth />
                            </div>

                            <FastField name="form-name" type="hidden" value="contact" />
                            <Button variant="contained" color="primary" type="submit" fullWidth>Send</Button>
                        </Form>
                    )}
                </Formik>
            </Section>
            <Snackbar
                open={open && successful}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                onClose={handleClose}
            >
                <SnackbarContent
                    classes={{ root: style.contact__success }}
                    message="Form was submitted successfully"
                />
            </Snackbar>
            <Snackbar
                open={open && !successful}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                onClose={handleClose}
            >
                <SnackbarContent
                    classes={{ root: style.contact__error }}
                    message="There was an error sending the form, please try again later."
                />
            </Snackbar>
        </>
    );
};

export default Contact;

import React from 'react';
import Section from '../section/section';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@material-ui/core';
import style from './contact.module.scss';

export const Contact = () => {

    const encode = (data) => Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");

    return (
        <Section title="Contact">
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    message: '',
                }}
                validationSchema={
                    Yup.object().shape({
                        name: Yup.string().min(2, 'Too Short').max(50, 'Too Long').required('Name required'),
                        email: Yup.string().email('Invalid email').required('Email Required'),
                        message: Yup.string().min(10, 'Too Short').max(500, 'Too Long').required('Name required'),
                    })
                }
                onSubmit={(values) => {
                    fetch("/", {
                        method: "POST",
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        body: encode({ "form-name": "contact", ...values })
                    }).catch(error => alert(error));
                }}>
                {({ errors, touched }) => (
                    <Form name="contact" method="post"  data-netlify="true">
                        <div className={style.contact__group}>
                            <FastField name="name" type="text" label="Name" as={TextField} helperText={errors.name && touched.name ? errors.name : ''} error={errors.name && touched.name} fullWidth></FastField>
                        </div>
                        <div className={style.contact__group}>
                            <FastField name="email" type="email" label="Email" helperText={errors.email && touched.email ? errors.email : ''} as={TextField} error={errors.email && touched.email} fullWidth></FastField>
                        </div>

                        <div className={style.contact__group}>
                            <FastField name="message" type="textarea" label="Message" helperText={errors.message && touched.message ? errors.message : ''} as={TextField} rows="5" error={errors.message && touched.message} multiline fullWidth></FastField>
                        </div>

                        <FastField name="form-name" type="hidden" value="contact"></FastField>
                        <Button variant="contained" color="primary" type="submit" fullWidth>Send</Button>
                    </Form>
                )}
            </Formik>
        </Section>
    );
};

export default Contact;

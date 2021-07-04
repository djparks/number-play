import React from 'react';
import { useFormikContext, FormikContext, Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MyNumberInput from "./MyNumberInput";
//External call: document.forms[0].submit() https://stackoverflow.com/questions/52577141/how-to-submit-form-from-a-button-outside-that-component-in-react/53573760#53573760
//Looks 'proper': https://formik.org/docs/api/useFormikContext
// May be helpful on submitting, via state: https://formik.org/docs/api/formik#handlereset-void
//    /** whether the form is currently submitting */
//    isSubmitting: boolean;

class FormikEx2 extends React.Component {
    render() {
        return (
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    numbers: '',
                    hidden: 'I HIDE'
                }}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string()
                        .required('First Name is required'),
                    lastName: Yup.string()
                        .required('Last Name is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    numbers: Yup.string()
                        .required('Number is required')
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
            >
                {({   values,
                      touched,
                      errors,
                      dirty,
                      isSubmitting,
                      handleChange,
                      setFieldValue,
                      handleBlur,
                      handleSubmit,
                      handleReset,}) => (
                    <Form id="Ex2">
                        <div className="form-row">

                            <div className="form-group col-5">
                                <label htmlFor="firstName">First Name</label>
                                <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-5">
                                <label htmlFor="lastName">Last Name</label>
                                <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group col">
                            <label htmlFor="numbers">Enter Number</label>
                            <MyNumberInput
                                placeholder="this works "
                                value={values.numbers}
                                onValueChange={val => setFieldValue('numbers', val.value)}
                            />
                            <ErrorMessage name="numbers" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Register</button>
                            <button id="btnReset" type="reset" hidden={true} >Reset</button>
                        </div>

                    </Form>
                )}
            </Formik>
        )
    }
}

export { FormikEx2 };
// Helper styles for demo
import './helper.css';
import { DisplayFormikState } from './helper';

import React from 'react';
import {Field, Formik, useFormikContext} from 'formik';
import * as Yup from 'yup';
import MyNumberInput from "./MyNumberInput";

//document.getElementById("btnReset").click();
const FormikExample = () => (

    <div className="app">
        <div> Formik</div>
        <Formik
            initialValues={{ email: '', numbers: '' }}
            validationSchema={Yup.object().shape({
                numbers: Yup.number().required('Required'),
            })}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    setFieldValue,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                } = props;
                return (
                    <form onSubmit={handleSubmit}>
                        <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />

                        <MyNumberInput
                            placeholder="this works "
                            value={values.numbers}
                            onValueChange={val => setFieldValue('numbers', val.value)}
                        />

                        <button type={"submit"} >Submit</button>
                        <button id="btnReset" hidden={true} type={"reset"} onClick={handleReset}>Reset</button>
                        <DisplayFormikState {...props} />
                    </form>
                );
            }}
        </Formik>
    </div>
);

export default FormikExample;

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './FormComponent.css';

const validationSchema = Yup.object({
    textArea: Yup.string().required('Text is required'),
    password: Yup.string().required('Required').min(10, 'Password must be at least 10 characters long'),
    number: Yup.number().required('Required').min(1, 'Number must be at least 1').max(80, 'Number must be at most 80'),
    radio: Yup.string().required('Please select a job position'),
    checkbox: Yup.array().min(1, 'Please select at least one stage'),
    dropdown: Yup.string().required('Please select a product'),
    file: Yup.mixed().required('File is required'),
   });
   const FormComponent = () => {
    return (
        
       <Formik
         initialValues={{
           textBox: '',
           password: '',
           number: '',
           radio: '',
           checkbox: false,
           dropdown: '',
           file: null,
         }}
         validationSchema={validationSchema}
         onSubmit={(values) => {
           console.log(values);
         }}
       >
         {({ setFieldValue }) => (
           <Form>
            <h1>Sign Up Form</h1>
            <div>
             <label htmlFor="textArea">Name:</label>
             <Field as="textarea" name="textArea" />
             <ErrorMessage name="textArea" />
             </div>

            <div>   
             <label htmlFor="password">Password:</label>
             <Field type="password" name="password" />
             <ErrorMessage name="password" />
             </div>

            <div>
             <label htmlFor="number">Number Input:</label>
             <Field type="number" name="number" />
             <ErrorMessage name="number" />
             </div>


            <div>
             <label>Job Position</label>
             <Field as="input" type="radio" name="radio" value="option1" /> Manager
             <Field as="input" type="radio" name="radio" value="option2" /> Programmer
             <Field as="input" type="radio" name="radio" value="option2" /> Security Analyst
             <ErrorMessage name="radio" />
             </div>

             <div>
             <label>Stage of Product: </label>
             <label>
                  <Field type="checkbox" name="checkbox" value="checkbox1" />
                  Programming
                </label>
                <label>
                  <Field type="checkbox" name="checkbox" value="checkbox2" />
                  Testing
                </label>
                <label>
                  <Field type="checkbox" name="checkbox" value="checkbox2" />
                  Debugging
                </label>
                </div>


             <div>
             <label htmlFor="dropdown">Product:</label>
             <Field as="select" name="dropdown">
               <option value="">Select...</option>
               <option value="option1">iQuizUAnswer</option>
               <option value="option2">iQuizUAnswer Corporate</option>
               <option value="option2">iQuizUAnswer College</option>
             </Field>
             <ErrorMessage name="dropdown" />
             </div>

             <div>
             <label htmlFor="file">File Input Type:-</label>
             <Field type="file" name="file" onChange={(event) => {
               setFieldValue("file", event.currentTarget.files[0]);
             }} />
             <ErrorMessage name="file" />
             </div>
   
             <button type="submit">Submit</button>
           </Form>
         )}
       </Formik>
    );
   };
   export default FormComponent;
   
import React from 'react';
import Results from './Results';
import { useRef } from 'react';
import { useState } from 'react';

const Home = () => {
  const formRef = useRef(null);
  const [results, setResults] = useState(false);
  const sumbitHandler = (e) => {
    e.preventDefault();
    const form = new FormData(formRef.current);
    let formDataObj = {};
    for (const [key, value] of form) {
      formDataObj[key] = value ? true : false;
    }
    console.log(formDataObj);
    if (formDataObj?.email || formDataObj?.mobile || formDataObj?.username) {
      setResults(formDataObj);
    } else {
      alert('Please enter atleast one field to investigate');
      setResults(false);
    }
  };
  return (
    <section id='form'>
      <form ref={formRef} onSubmit={(e) => sumbitHandler(e)}>
        <h2></h2>
        <label htmlFor='email'>Email :</label>
        <input
          type='text'
          id='email'
          name='email'
          placeholder='Enter email ID'
        />

        <label htmlFor='mobile'>Mobile Number :</label>
        <input
          type='text'
          id='mobile'
          name='mobile'
          placeholder='Enter Mobile Number'
        />

        <label htmlFor='username'>Username :</label>
        <input
          type='text'
          id='username'
          name='username'
          placeholder='Enter Username'
        />
        <input type='submit' value='Investigate 🔍' />
      </form>
      {results && <Results results={results} />}
    </section>
  );
};

export default Home;

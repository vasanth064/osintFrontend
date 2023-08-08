import React from 'react';
import Results from './Results';

const Home = () => {
  return (
    <section id='form'>
      <form>
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

      <Results
        results={{
          email: true,
          mobile: true,
          username: true,
        }}
      />
    </section>
  );
};

export default Home;

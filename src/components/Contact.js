import React from 'react';

const Contact = (props) => {
  setTimeout(() => {
    props.history.push('/about');
  }, 2000);
  return (
    <div className='container'>
      <h4 className='center'>Contact</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        deleniti, eum voluptas expedita dolorem soluta incidunt tempora enim
        quam, nihil consequatur ipsa quae. Aspernatur perspiciatis ratione
        voluptatibus laborum dignissimos unde.
      </p>
    </div>
  );
};

export default Contact;

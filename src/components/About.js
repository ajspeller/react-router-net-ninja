import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
  return (
    <div className='container'>
      <h4 className='center'>About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        deleniti, eum voluptas expedita dolorem soluta incidunt tempora enim
        quam, nihil consequatur ipsa quae. Aspernatur perspiciatis ratione
        voluptatibus laborum dignissimos unde.
      </p>
    </div>
  );
};

export default Rainbow(About);

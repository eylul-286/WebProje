import React from 'react';
import '../styles/Number.css';

const Statistics = () => {
  const data = [
    { number: '1128+', title: 'Successful Work' },
    { number: '908+', title: 'Team member' },
    { number: '258+', title: ' Happy Customers' },
    { number: '564+', title: ' Creative Idea' },
  ];

  return (
    <div style={styles.container1}>
      {data.map((item, index) => (
        <div key={index} style={styles.item}>
          <h2 style={styles.number}>{item.number}</h2>
          <p style={styles.title}>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container1: {
    display: 'flex',

    alignItems: 'center',
    padding: '10px',
    gap:'135px',

 

  },
  item: {
    textAlign: 'center',
    margin: '0 15px',
  },
  number: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    fontSize: '1rem',
    
  },
};

export default Statistics;




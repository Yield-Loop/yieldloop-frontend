import React from 'react';

const TestComponent: React.FC = () => {
  console.log('TestComponent is rendering!');
  
  return (
    <div style={{ 
      backgroundColor: 'lime', 
      color: 'black', 
      padding: '50px', 
      textAlign: 'center',
      border: '10px solid purple',
      fontSize: '32px',
      fontWeight: 'bold',
      margin: '20px'
    }}>
      TEST COMPONENT IS WORKING!
      <br />
      This should be visible in lime green with purple border
    </div>
  );
};

export default TestComponent; 
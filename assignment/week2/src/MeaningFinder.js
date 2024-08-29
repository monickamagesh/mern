import React, { useState } from 'react';


const styles = {

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f4f8',
    fontFamily: "'lato', sans-serif",
    color: '#2c3e50',
    padding: '20px'
  },
  title: {
    fontSize: '40px',
    color: '#1B1A55',
    marginBottom: '28px'
  },
  inputContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    padding: '12px 15px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #b2bec3',
    width: '250px',
    outline: 'none',
    transition: 'border 0.3s, box-shadow 0.3s',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  button: {
    padding: '12px 20px',
    fontSize: '16px',
    backgroundColor: '#1B1A55', 
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
  },
  buttonHover: {
    backgroundColor: '#070F2B', 
    transform: 'scale(1.05)',
  },
  resultContainer: {
    marginTop: '30px',
    padding: '40px',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    width: '320px',
    animation: 'fadeIn 0.5s ease-in-out',
  },
  resultText: {
    margin: '5px 0',
    fontSize: '18px',
    color: '#636e72'
  },
};

const MeaningFinder = () => {
  const [name, setName] = useState('');
  const [ageData, setAgeData] = useState('');
  
  const detail = async () => {
    if (name =="") {
      alert('Please enter a name:');
      
    }else{
        const detail= await fetch(`https://api.agify.io/?name=${name}`);
        const data = await detail.json();
        console.log(data); 
        setAgeData(data);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Meaning Finder</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter a name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <button onClick={detail} style={styles.button}>
          Get Age
        </button>
      </div>

      {ageData && (
        <div style={styles.resultContainer}>
          <p style={styles.resultText}>
            <strong>Name:</strong> {ageData.name}
          </p>
          <p style={styles.resultText}>
            <strong>Predicted Age:</strong> {ageData.age || 'N/A'}
          </p>
          <p style={styles.resultText}>
            <strong>Count:</strong> {ageData.count}
          </p>
        </div>
      )}
    </div>
  );
};

export default MeaningFinder;

import React, { useEffect } from 'react';
import Container from './shared/Container';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/home');
        console.log('Response data:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [])

  return (
    <Container>
        <h1 className='text-[red]'>Hello boss </h1>
    </Container>
  );
};

export default App;
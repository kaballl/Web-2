import React from 'react';
import { Container, Fab } from '@mui/material';



import Header from '../components/Header';
import PostList from '../components/PostList';



function Home() {

  

  return (
    <Container maxWidth='lg'>
      <Header />
      <PostList />
      
    </Container>
  );
}
export default Home;
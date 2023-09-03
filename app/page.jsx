"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard'); // Redirect to /dashboard
  }, []);

  return null; // You can return null or some loading content here
};

export async function getServerSideProps({ res }) {
    // Redirect to /dashboard on the server-side
    res.setHeader('Location', '/dashboard');
    res.statusCode = 302; // 302 Found (Temporary Redirect)
    res.end();
  
  }
  

export default IndexPage;

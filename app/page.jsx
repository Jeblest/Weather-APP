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


  

export default IndexPage;

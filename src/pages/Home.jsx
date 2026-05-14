import React from 'react';
import TrainList from '../components/TrainList';

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Розклад потягів
      </h1>
      <TrainList />
    </main>
  );
};

export default Home;
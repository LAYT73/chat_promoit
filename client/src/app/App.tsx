import React from 'react';
import Routing from '@/app/routing/Routing';
import log from '@/shared/lib/logger/logger.ts';

const App: React.FC = () => {
  log.info('App component rendered');
  return <Routing />;
};

export default App;

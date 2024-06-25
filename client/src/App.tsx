import log from './shared/lib/logger';

const App: React.FC = () => {
  log.info('App component rendered');

  return (
    <div>
      <h1>learn react</h1>
    </div>
  );
}

export default App;

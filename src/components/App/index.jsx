import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Layout from '../Layout';
import TeamOptions from '../TeamOptions';
import Players from '../Players';
import Results from '../Results';

import useSteps from '../../hooks/useSteps';

function App() {
  const dataTemplate = {
    players: [],
    numberOfPlayersPerTeam: 2,
    teams: [],
  };

  const [data, setData] = React.useState(dataTemplate);

  const updateData = (key, value) => {
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const { step, isFirstStep, isLastStep, prev, next } =
    useSteps([
      <Players data={data} updateData={updateData} />,
      <TeamOptions data={data} updateData={updateData} />,
      <Results data={data} updateData={updateData} />,
    ]);

  return (
    <div className="App">
      <Layout>
        <Header />
        {step}
        {!isFirstStep && <button onClick={prev}>Prev</button>}
        {!isLastStep && <button onClick={next}>Next</button>}
        <Footer />
      </Layout>
    </div>
  );
}

export default App;

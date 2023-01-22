import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Layout from '../Layout';
import TeamOptions from '../TeamOptions';
import Players from '../Players';
import Results from '../Results';
import Nav from '../Nav/index.jsx';
import Button from '../Button/index.jsx';
import Main from '../Main/index.jsx';
import useSteps from '../../hooks/useSteps';
import Stack from '../Stack/index.jsx';

function App() {
  const dataTemplate = {
    players: [],
    playersPerTeam: 1,
    teams: [],
  };

  const [data, setData] = useState(dataTemplate);

  const updateData = (key, value) => {
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const { step, isFirstStep, isLastStep, prev, next, goTo } =
    useSteps([
      <Players data={data} updateData={updateData} />,
      <TeamOptions data={data} updateData={updateData} />,
      <Results data={data} updateData={updateData} />
    ]);

  return (
    <div className="App">
      <Layout>
        <Header goTo={goTo} />
        <Main>
          <Stack>
            {step}
            <Nav>
              {!isFirstStep && (
                <Button variant="surface" onClick={prev}>
                  Voltar
                </Button>
              )}
              {!isLastStep && (
                <Button variant="primary" disabled={isLastStep || (isFirstStep && data.players.length <= 1)} onClick={next}>
                  {isFirstStep ? 'Próximo' : 'Gerar'}
                </Button>
              )}
            </Nav>
          </Stack>
        </Main>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;

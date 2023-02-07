import React, { useState, useEffect } from 'react';
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
    reserves: [],
  };

  const [data, setData] = useState(dataTemplate);

  if (window.location.search) {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search.slice(1));

    dataTemplate.players = params.get('players').split(',');
    dataTemplate.playersPerTeam = parseInt(params.get('playersPerTeam'));
    dataTemplate.teams = JSON.parse(decodeURIComponent(params.get('teams')));
    dataTemplate.reserves = JSON.parse(decodeURIComponent(params.get('reserves')));
  }

  const updateData = (key, value) => {
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const shareResults = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('players', data.players.join(','));
    url.searchParams.set('playersPerTeam', data.playersPerTeam);
    url.searchParams.set('teams', encodeURIComponent(JSON.stringify(data.teams)));
    url.searchParams.set('reserves', encodeURIComponent(JSON.stringify(data.reserves)));
    url.searchParams.set('step', 3);

    navigator.clipboard.writeText(url.href).then(
      () => {
        alert('Link copiado para a área de transferência!');
      },
      () => {
        alert('Erro ao copiar link para a área de transferência!');
      }
    );
  };

  const { step, isFirstStep, isLastStep, prev, next, goTo } = useSteps([
    <Players data={data} updateData={updateData} />,
    <TeamOptions data={data} updateData={updateData} />,
    <Results data={data} updateData={updateData} />,
  ]);

  useEffect(() => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search.slice(1));
    const step = parseInt(params.get('step'));
    if (step) goTo(step - 1);
  }, []);

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
                  {isFirstStep ? 'Próximo' : data.teams.length === 0 ? 'Gerar times' : 'Próximo'}
                </Button>
              )}
              {isLastStep && (
                <Button variant="primary" onClick={() => shareResults()}>
                  Compartilhar
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

import { useEffect, useState } from 'react'
import data from './Data/data.json'
import Player from './components/Player/Player'
import Team from './components/Team/Team'
import Expenditures from './components/Expenditures/Expenditures'
import './App.css'
import { Alert } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [players, setPlayers] = useState([])
  const [team, setTeam] = useState([])

  useEffect(() => {
    setPlayers(data);
  }, [])

  const handlePlusButton = (player) => {
    const newTeam = [...team, player];
    setTeam(newTeam);
  }

  return (
    <>

      <div>
        <Container>
          <Alert variant='danger'>This is success</Alert>
          <h1 className='bg-primary'>Unsold Players</h1>
          <div className='grid-container'>
            {
              players.map(player => <Player player={player} handlePlusButton={handlePlusButton} key={player.id}></Player>)
            }

          </div>

          <Row style={{ marginTop: '20px' }}>

            <Col className='bg-info'><Expenditures cart={team}></Expenditures></Col>

            <Col>
              <div className='grid-container'>
                {
                  team.map(t => <Team team={t} key={t.id}></Team>)
                }
              </div>
            </Col>
          </Row>

        </Container>
      </div>


    </>
  )
}

export default App



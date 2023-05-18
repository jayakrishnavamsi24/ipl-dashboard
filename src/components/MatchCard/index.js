import './index.css'

const MatchCard = props => {
  const {recentMatchesData} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = recentMatchesData

  const statusColor = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="recent-match-out-card">
      <div className="recent-match-card">
        <div className="logo-cont">
          <img
            src={competingTeamLogo}
            alt={`competing team ${competingTeam}`}
          />
        </div>
        <div className="title-text-cont">
          <p> {competingTeam} </p>
        </div>
        <div className="result-text-cont">
          <p className="result"> {result} </p>
        </div>
        <p className={`match-status ${statusColor}`}> {matchStatus} </p>
      </div>
    </li>
  )
}

export default MatchCard

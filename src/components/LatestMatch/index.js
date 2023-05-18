import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
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
  } = latestMatchData

  const statusColor = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <div className="latest-match-card">
      <div className="top-cont">
        <div className="top-txt-cont">
          <h1> {competingTeam} </h1>
          <h2> {date} </h2>
          <p> {venue} </p>
          <p> {result} </p>
        </div>
        <div className="top-img-cont">
          <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
        </div>
      </div>
      <hr />
      <div className="bottom-cont">
        <h2> First Innings </h2>
        <p> {firstInnings} </p>
        <h2> Second Innings </h2>
        <p> {secondInnings} </p>
        <h2> Man of the Match </h2>
        <p> {manOfTheMatch} </p>
        <h2> Umpires </h2>
        <p> {umpires} </p>
      </div>
      <hr />
      <p className={`${statusColor}`}> {matchStatus} </p>
    </div>
  )
}

export default LatestMatch

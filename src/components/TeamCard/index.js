import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {name, teamImageUrl, id} = teamData

  return (
    <li className="card-out-cont">
      <Link className="team-card-link" to={`/team-matches/${id}`}>
        <div className="team-card">
          <img src={teamImageUrl} alt={name} />
          <div>
            <p> {name} </p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard

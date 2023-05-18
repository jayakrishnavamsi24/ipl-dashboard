import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teamMatchesData: {},
      isLoading: true,
      teamId: props.match.params.id,
    }
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {teamId} = this.state
    const response = await fetch(`https://apis.ccbp.in/ipl/${teamId}`)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(eachRecentMatch => ({
        umpires: eachRecentMatch.umpires,
        result: eachRecentMatch.result,
        manOfTheMatch: eachRecentMatch.man_of_the_match,
        id: eachRecentMatch.id,
        date: eachRecentMatch.date,
        venue: eachRecentMatch.venue,
        competingTeam: eachRecentMatch.competing_team,
        competingTeamLogo: eachRecentMatch.competing_team_logo,
        firstInnings: eachRecentMatch.first_innings,
        secondInnings: eachRecentMatch.second_innings,
        matchStatus: eachRecentMatch.match_status,
      })),
    }
    this.setState({teamMatchesData: formattedData, isLoading: false})
  }

  render() {
    const {teamMatchesData, teamId, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchesData
    console.log(recentMatches)

    return (
      <div className={`card-detail-cont ${teamId}`}>
        {isLoading ? (
          <div className="loader-cont">
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          </div>
        ) : (
          <div className="detail-cont-layer">
            <div className="top-detail-section">
              <img
                className="team-banner"
                src={teamBannerUrl}
                alt="team banner"
              />
              <p> Latest Matches </p>
              <LatestMatch latestMatchData={latestMatchDetails} />
            </div>
            <ul className="recent-matches-cont">
              {recentMatches.map(eachRecentMatch => (
                <MatchCard
                  recentMatchesData={eachRecentMatch}
                  key={eachRecentMatch.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches

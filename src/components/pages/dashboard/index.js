import React, {
	Component
} from 'react';
import {
	BrowserRouter,
	Route
} from 'react-router-dom';
import {
	Doughnut,
	Bar,
	HorizontalBar,
	Bubble,
	Line,
	Radar
} from 'react-chartjs-2'; // Charts for data ^^
import {
	uDash
} from '../../../Data/DashBoardData/userData';
import { // BS import
	Grid,
	Col,
} from 'react-bootstrap';
export default class GitHub extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uDash: uDash[0], // pull in user dashboard data
			hasError: false
		};
	}
	componentDidMount() { // Will need this.
		// this.setState({ hasError: true });
	}
	render() { // RENDER() //
		if (this.state.hasError) {
			return <h1> Oh no something went wrong </h1>
		}
		const uDash = this.state.uDash;
		return (<Grid>
            <Col md={6}>
              {/*  Not sure if we want titles or not? I cant decide honestly... */}
              <h1>{uDash.gameBar.title}</h1>
              <Bar
                data={uDash.gameBar}
                width={100}
                height={50}/>
            </Col>
            <Col md={6}>
              <Doughnut
                ref='chart'
                data={uDash.gameBar}
                width={100}
                height={50} />
          </Col>
          <Col md={12}>
            <HorizontalBar
              data={uDash.gameSideBar}
              width={100}
              height={10} />
        </Col>
      <Col md={5}>
          <Radar
            data={uDash.radar}
            width={72}
            height={60} />
            <Line
              data={uDash.lineHoursPlayed}
              width={100}
              height={52} />
        </Col>

    	<Col md={7}>
        <Bubble
          data={uDash.bubble}
          width={100}
          height={95} />
      </Col>

      <Col md={12}>
      <Bubble
        data={uDash.bubble}
        width={100}
        height={50} />
    </Col>

	</Grid>);
	}
}
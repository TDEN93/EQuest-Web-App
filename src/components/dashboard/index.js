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
} from '../../Data/DashBoardData/userData';

export default class GitHub extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uDash: uDash[0], // pull in user dashboard data
		};
	}
  componentDidMount() { // Will need this.
	}

  render() { // RENDER() //
    const uDash = this.state.uDash;
  return (
          <div className='col-12 dash-contain row'>
            <div className='col-6'>
              {/*  Not sure if we want titles or not? I cant decide honesly... */}
              <h1>{uDash.gameBar.title}</h1>
              <Bar
                data={uDash.gameBar}
                width={100}
                height={50}/>
            </div>
            <div className='col-6'>
              <Doughnut
                ref='chart'
                data={uDash.gameBar}
                width={100}
                height={50} />
          </div>
          <div className='col-12'>
            <HorizontalBar
              data={uDash.gameSideBar}
              width={100}
              height={10} />
        </div>
        <div className='col-5'>
          <Radar
            data={uDash.radar}
            width={72}
            height={60} />
            <Line
              data={uDash.lineHoursPlayed}
              width={100}
              height={52} />
        </div>

      <div className='col-7'>
        <Bubble
          data={uDash.bubble}
          width={100}
          height={95} />
      </div>

      <div className='col-12'>
      <Bubble
        data={uDash.bubble}
        width={100}
        height={50} />
    </div>

        </div>
  );
}
}

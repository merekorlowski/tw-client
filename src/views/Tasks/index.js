import React, { Component } from 'react';
import moment from 'moment';

import DailyTasks from './DailyTasks';
// import TextIcon from '../../components/TextIcon';
import './styles.scss';
import { DATE_FORMAT } from '../../constants';

class Tasks extends Component {
	state = {
		weeks: []
	};

	componentDidMount() {
		this.getWeeks();
	}

	/**
	 * Gets the ammount of weeks to be viewed by the user
	 */
	getWeeks() {
		// temporary while waiting for settings implementation
		let numOfWeeks = 2;
		let day = moment();

		const weeks = [];
		for (let i = 0; i < numOfWeeks; i++) {
			weeks[i] = [];

			let start = i === 0
				? moment()
				: moment()
					.add(i * 7, 'd')
					.startOf('week');
			let endOfWeek = moment()
				.add(i * 7, 'd')
				.endOf('week');
			let numOfDays = endOfWeek.diff(start, 'd') + 1;

			day = start;

			for (let j = 0; j < numOfDays; j++) {
				weeks[i][j] = day.format(DATE_FORMAT);
				day = day.clone().add(1, 'd');
			}
		}

		this.setState({ weeks });
	}

	getWeekDisplay = (weekNumber) => {
		const { weeks } = this.state;
		const week = weeks[weekNumber];
		
		return `${week[0]} \u2014 ${week[week.length - 1]}`;
	}

	render() {
		let { weeks } = this.state;
		return (
			<div className="tw-page-width">
				<h1 className="tw-page-title">Tasks</h1>
				{/* <div className="tw-message">
					<TextIcon text="
						Welcome to the tasks page! To create a new task, simply enter in the fields and assign it to a project.
					" icon="fa fa-info-circle" iconArrangement="left"/>
				</div> */}
				<div>
					<ul>
						{weeks.map((week, index) => (
							<li key={`week-${index}`} className="task-week">
								{/* <h3 className="week-number">{this.getWeekDisplay(index)}</h3> */}
								<ul>
									{week.map((date) => (
										<li key={date}>
											<DailyTasks date={date} />
										</li>
									))}
								</ul>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default Tasks;

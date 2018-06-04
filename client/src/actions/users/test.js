import EmployeeService from './';

describe('Employees API', () => {
	let employeeService = new EmployeeService();

	it('creates a team for the user 000', done => {
		let team = {
			userId: '001',
			name: 'Team A',
			color: '#0000ff',
			members: [
				{ userId: '020', isAdmin: false },
				{ userId: '021', isAdmin: false },
				{ userId: '022', isAdmin: true }
			]
		};

		employeeService.createTeam(team).then(res => {
			let teamId = res.data.teamId;
			team.teamId = teamId;

			expect(res.data.wasAdded).toBe(true);
			done();
		});
	});

	it('returns all of the employees in the team tm1', done => {
		let teamId = 'tm1';
		let response = [
			{
				userId: '002',
				firstName: 'Britt',
				lastName: 'Castelijn',
				email: 'bcastelijn1@epa.gov',
				password: '2Sex0QyNjH'
			},
			{
				userId: '003',
				firstName: 'Raffarty',
				lastName: 'Heal',
				email: 'rheal2@wsj.com',
				password: 'sGGGDxQb'
			},
			{
				userId: '004',
				firstName: 'Neal',
				lastName: 'Iacovini',
				email: 'niacovini3@ebay.co.uk',
				password: '5jS9bW'
			}
		];

		employeeService.getEmployeesbyTeam(teamId).then(res => {
			expect(res.data.length).toBe(response.length);
			for (let i = 0; i < response.length; i++) {
				for (let attribute in response[i]) {
					expect(response[i][attribute]).toBe(res.data[i][attribute]);
				}
			}
			done();
		});
	});
});

import holiday_json from '../../../data/sa_holidays.json';

export async function get() {
	return {
		status: 200,
		body: { ...holiday_json }
	};
}

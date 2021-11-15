import * as holiday_json from '../../../data/sa_holidays.json';

export async function get({ params }) {
	// const arry = JSON.parse(holiday_json)
	const { holidays } = holiday_json;

	if (isNaN(Number(params.id)) || Number(params.id) > holidays.length || Number(params.id) <= 0) {
		return {
			status: 500,
			body: { error: 'Holiday does not exit, provide  a valid ID' }
		};
	} else {
		let holiday;
		for (let i = 0; i < holidays.length; i++) {
			if (holidays[i].id === Number(params.id)) {
				holiday = holidays[i];
			}
		}

		return {
			status: 200,
			body: { ...holiday }
		};
	}
}

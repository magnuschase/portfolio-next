type ResultType = {
	status: boolean,
	message: string,
}
export const checkField = (type: string, data: string): ResultType => {
	const result = { status: false, message: 'not ran' }
	const trimmed = data.replaceAll(/\s/g, '')

	switch (type) {
		case "mail":
			result.status = checkEmail(data);
			result.message = result.status ? 'ok' : 'Please enter your e-mail';
			break;
		case "name":
			result.status = trimmed.length > 0 ? true : false;
			result.message = result.status ? 'ok' : 'Please enter your name';
			break;
		case "phone":
			result.status = true;
			result.message = 'ok';
		case "message":
			result.status = trimmed.length > 0 ? true : false;
			result.message = result.status ? 'ok' : 'Please enter your message';
			break;
		default:
			result.status = true;
			result.message = 'ok';
			break;
	}

	return result
}

const checkEmail = (email: string): boolean => {
	const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return regex.test(email)
}
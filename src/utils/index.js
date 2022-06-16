//export const convertDaysToString = (punishmentInDays, rejectFractions=true) => {
	export const convertDaysToString = (punishmentInDays, fineDays=false) => {
	let years = 0;
	let months = 0;
	let days = 0;
	let rest = 0;

	punishmentInDays = Math.abs(punishmentInDays)
	if (fineDays) return `${punishmentInDays} ${punishmentInDays>1?'dias-multa': 'dia-multa'}`

	//years = Math.floor(punishmentInMonths / 12);
	years = Math.floor(punishmentInDays / 12 /  30);
	rest = punishmentInDays - (years * 12 * 30) ;
	if (rest > 0) {
		months = Math.floor(rest / 30);
		rest = rest - (months * 30);
		if (rest > 0) {
			//days = Math.floor(30 * rest);
			//rest = rest - days;
			days = Math.floor(rest);
			//if (rest>0 && !rejectFractions) rest++;
			//if (!rejectFractions && (rest - days >0)) days++
		}
	}

	
	let sentence = '';
	if (years > 0) {
		sentence += `${years} ${years > 1 ? 'anos' : 'ano'}`;
		if (months > 0 && days > 0) {
			sentence += ', ';
		} else if (months > 0 || days > 0) {
			sentence += ' e ';
		}
	}
	if (months > 0) {
		sentence += `${months} ${months > 1 ? 'meses' : 'mês'}`;
		if (days > 0) sentence += ' e ';
	}

	if (days > 0) {
		sentence += `${days} ${days > 1 ? 'dias' : 'dia'}`;
	}

	return sentence;
};

export const convertStringToDays = (quantity, unity) => {
	let days = 0;
	if (unity === 'day') {
		days = quantity;
	} else if (unity === 'month') {
		days = quantity * 30;
	} else if (unity === 'year') {
		days = quantity * 30 * 12;
	}

	return days;
};

//export default calculatePunishmentString;

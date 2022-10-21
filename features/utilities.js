import moment from 'moment';

class Utilities {
    formatDate(date, format = 'M/D/YYYY', toJSON = true) {
        const localDate = toJSON ? new Date(date).toJSON().split("T")[0] : date;
        return moment(localDate).format(format);
    }

    formatNumber(number) {
        if(typeof number === 'number') {
            return parseFloat(number).toFixed(2);
        } else if(number === undefined || number === null) {
            return parseFloat(0).toFixed(2);
        }
        return number;
    }

    capitalize(str) {
        if(typeof str === 'string' && str.length) {
            const capitalizedFirstLetter = str[0].toUpperCase();
            if(str.length > 1) {
                return capitalizedFirstLetter + str.slice(1);
            }

            return capitalizedFirstLetter;
        }

        return str;
    }

    objectHasProperty(obj) {
        if(obj && typeof obj === 'object' && Object.keys(obj).length) {
            return true;
        }

        return false;
    }

    isArrayNotEmpty(arr) {
        if(arr && Array.isArray(arr) && arr.length) {
            return true;
        }

        return false;
    }

    isValidDateRange(from, to) {
        if(from && to) {
            if(Date.parse(from) > Date.parse(to) ||
                Date.parse(to) < Date.parse(from)) {

                console.error("Invalid Date.");
                return false;
            }
            return true;
        }

        return false;
    }

    emailValidation(email) {
        const validator = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return validator.test(email);
    }
}

export default Utilities;

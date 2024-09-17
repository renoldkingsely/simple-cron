function parseSchedule(term, callback) {
    const now = new Date();

    function scheduleEvery(seconds) {
        setInterval(callback, seconds * 1000);
    }

    function scheduleAtSpecificTime(date) {
        const now = new Date();
        const timeDiff = date.getTime() - now.getTime();

        if (timeDiff > 0) {
            setTimeout(() => {
                callback();
                // Optional: Re-schedule if needed
            }, timeDiff);
        } else {
            console.log('The time has already passed');
        }
    }

    function parseEnglishTerm(term) {
        const regexPatterns = {
            'every (\\d+) seconds': /every (\d+) seconds/,
            'every (\\d+) minutes': /every (\d+) minutes/,
            'every (\\d+) hours': /every (\d+) hours/,
            'on (\\d{1,2})th of every month (\\d{2}:\\d{2})(?::(\\d{2}))?': /on (\d{1,2})th of every month (\d{2}:\d{2})(?::(\d{2}))?/,
            'on (\\d{1,2})th of (\\w+) (\\d{4}) (\\d{2}:\\d{2})(?::(\\d{2}))?': /on (\d{1,2})th of (\w+) (\d{4}) (\d{2}:\d{2})(?::(\d{2}))?/,
            'from (\\d{1,2})th of (\\w+) (\\d{4}) (\\d{2}:\\d{2}) to (\\d{1,2})th of (\\w+) (\\d{4}) (\\d{2}:\\d{2})': /from (\d{1,2})th of (\w+) (\d{4}) (\d{2}:\d{2}) to (\d{1,2})th of (\w+) (\d{4}) (\d{2}:\d{2})/,
        };

        for (const [key, pattern] of Object.entries(regexPatterns)) {
            const match = term.match(pattern);
            if (match) return { key, match };
        }

        return { key: 'unknown' };
    }

    const { key, match } = parseEnglishTerm(term);

    switch (key) {
        case 'every (\\d+) seconds':
            scheduleEvery(parseInt(match[1]));
            break;
        case 'every (\\d+) minutes':
            setInterval(callback, parseInt(match[1]) * 60 * 1000);
            break;
        case 'every (\\d+) hours':
            setInterval(callback, parseInt(match[1]) * 60 * 60 * 1000);
            break;
        case 'on (\\d{1,2})th of every month (\\d{2}:\\d{2})(?::(\\d{2}))?':
            const day = parseInt(match[1]);
            const time = match[2].split(':');
            const seconds = match[3] ? parseInt(match[3]) : 0;
            const nextRun = new Date(now.getFullYear(), now.getMonth() + 1, day, parseInt(time[0]), parseInt(time[1]), seconds);
            scheduleAtSpecificTime(nextRun);
            break;
        case 'on (\\d{1,2})th of (\\w+) (\\d{4}) (\\d{2}:\\d{2})(?::(\\d{2}))?':
            const dayOfMonth = parseInt(match[1]);
            const monthName = match[2];
            const year = parseInt(match[3]);
            const timeOfDay = match[4].split(':');
            const secondOfDay = match[5] ? parseInt(match[5]) : 0;
            const month = new Date(Date.parse(`${monthName} 1, 2020`)).getMonth(); // Convert month name to month index
            const specificDate = new Date(year, month, dayOfMonth, parseInt(timeOfDay[0]), parseInt(timeOfDay[1]), secondOfDay);
            scheduleAtSpecificTime(specificDate);
            break;
        case 'from (\\d{1,2})th of (\\w+) (\\d{4}) (\\d{2}:\\d{2}) to (\\d{1,2})th of (\\w+) (\\d{4}) (\\d{2}:\\d{2})':
            const startDay = parseInt(match[1]);
            const startMonthName = match[2];
            const startYear = parseInt(match[3]);
            const startTime = match[4].split(':');
            const endDay = parseInt(match[5]);
            const endMonthName = match[6];
            const endYear = parseInt(match[7]);
            const endTime = match[8].split(':');
            const startMonth = new Date(Date.parse(`${startMonthName} 1, 2020`)).getMonth();
            const endMonth = new Date(Date.parse(`${endMonthName} 1, 2020`)).getMonth();
            const startDate = new Date(startYear, startMonth, startDay, parseInt(startTime[0]), parseInt(startTime[1]));
            const endDate = new Date(endYear, endMonth, endDay, parseInt(endTime[0]), parseInt(endTime[1]));
            let currentDate = new Date(startDate);

            while (currentDate <= endDate) {
                scheduleAtSpecificTime(new Date(currentDate));
                currentDate.setMinutes(currentDate.getMinutes() + 1); // Example: Check every minute
            }
            break;
        default:
            console.log('Unsupported schedule term');
    }
}

module.exports ={
    parseSchedule
}

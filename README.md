# Dynamic Cron Scheduler

## Description

The **Dynamic Cron Scheduler** is a simple Node.js package for scheduling tasks using intuitive, natural language terms. This package allows developers to schedule recurring tasks or one-time events using easy-to-understand English phrases, removing the complexity of traditional cron syntax.

## Features

- **Natural Language Scheduling:** Define schedules using plain English such as "every 1 minute," "on 5th of every month 10:30 PM," or "from 25th March 2024 to 26th March 2024."
- **Dynamic and Flexible:** Supports a wide range of scheduling scenarios including intervals, specific dates, and date ranges.
- **No External Dependencies:** Built from scratch with no external packages required.

## Installation

To install the package, run:

Install the package: 

npm install simple-cron



Usage: 
Here’s how to use the simple-cron in your Node.js application for various scheduling scenarios:

## You can enter any numbers for hour minute second date month year 

1. Every Second

parseSchedule('every second', () => console.log('Task executed every second'));

2. Every 10 Seconds

parseSchedule('every 10 seconds', () => console.log('Task executed every 10 seconds'));

3. Every 1 Minute

parseSchedule('every 1 minute', () => console.log('Task executed every 1 minute'));

4. Every 5 Minutes

parseSchedule('every 5 minutes', () => console.log('Task executed every 5 minutes'));

5. Every 1 Hour

parseSchedule('every 1 hour', () => console.log('Task executed every 1 hour'));

6. Every 1 Hour and 10 Minutes

parseSchedule('every 1 hour 10 minutes', () => console.log('Task executed every 1 hour and 10 minutes'));

7. Every 1 Hour, 20 Minutes, and 10 Seconds

parseSchedule('every 1 hour 20 minutes 10 seconds', () => console.log('Task executed every 1 hour, 20 minutes, and 10 seconds'));

8. On 5th of Every Month

parseSchedule('on 5th of every month', () => console.log('Task executed on the 5th of every month'));

9. On 5th of Every Month at 10:30 PM

parseSchedule('on 5th of every month 22:30', () => console.log('Task executed on the 5th of every month at 10:30 PM'));

10. On 5th of Every Month at 10:30:10 PM

parseSchedule('on 5th of every month 22:30:10', () => console.log('Task executed on the 5th of every month at 10:30:10 PM'));

11. On 25th March 2025 at 10:30 PM

parseSchedule('on 25th March 2025 22:30', () => console.log('Task executed on 25th March 2025 at 10:30 PM'));

12. From 25th March 2024 to 26th March 2024

parseSchedule('from 25th March 2024 to 26th March 2024', () => console.log('Task executed from 25th March 2024 to 26th March 2024'));

13. From 25th March 2024 at 10:00 PM to 26th March 2024 at 10:30 PM

parseSchedule('from 25th March 2024 22:00 to 26th March 2024 22:30', () => console.log('Task executed from 25th March 2024 10:00 PM 
to 26th March 2024 10:30 PM'));
License
MIT License

Contributions
Contributions are welcome! Feel free to open issues or submit pull requests on the GitHub repository.


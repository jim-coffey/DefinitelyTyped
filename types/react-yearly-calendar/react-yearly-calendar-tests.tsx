import * as React from 'react';
import * as moment from 'moment';
import { Calendar, CalendarControls } from 'react-yearly-calendar';

const year = 2021;

/**
 * Calendar
 */

const momentDate = moment();
const selectedRange = [momentDate, momentDate];
const customClasses = {
    classString: '',
    dateList: [ '', '', '', ],
    dateRange: {
        start: '',
        end: ''
    },
    dayFilter: (dt: moment.Moment): boolean => true
};
const dayFunction = (dt: moment.Moment): string => '';
const datePicked = (dt: moment.Moment, classString: string): void => {};
const rangePicked = (dt1: moment.Moment, dt2: moment.Moment): void => {};
const firstDayOfWeek = 1;

class CalendarMaximal extends React.Component {
    render() {
        return (
            <div>
                Rendered by react!
                <Calendar
                    year={year}
                    selectedDay={momentDate}
                    forceFullWeeks={true}
                    showDaysOfWeek={true}
                    showWeekSeparators={true}
                    firstDayOfWeek={firstDayOfWeek}
                    useIsoWeekday={true}
                    selectRange={true}
                    selectedRange={selectedRange}
                    customClasses={customClasses}
                    titles={dayFunction}
                    onPickDate={datePicked}
                    onPickRange={rangePicked}
                />
            </div>
        );
    }
}

/**
 * CalendarControls
 */

const onPrevYear = () => {};
const onNextYear = () => {};
const goToToday = () => {};

// Do not pass showToday Button or Function
class CalendarControlsMinimal extends React.Component {
    render() {
        return (
            <div>
                Rendered by react!
                <CalendarControls
                    year={year}
                    onPrevYear={onPrevYear}
                    onNextYear={onNextYear}
                />
            </div>
        );
    }
}

// Pass showToday false and no Function
class CalendarControlsShowTodayFalse extends React.Component {
    render() {
        return (
            <div>
                Rendered by react!
                <CalendarControls
                    showTodayButton={false}
                    year={year}
                    onPrevYear={onPrevYear}
                    onNextYear={onNextYear}
                />
            </div>
        );
    }
}

// Pass showToday true and function
class CalendarControlsShowTodayTrue extends React.Component {
    render() {
        return (
            <div>
                Rendered by react!
                <CalendarControls
                    showTodayButton={true}
                    year={year}
                    onPrevYear={onPrevYear}
                    onNextYear={onNextYear}
                    goToToday={goToToday}
                />
            </div>
        );
    }
}

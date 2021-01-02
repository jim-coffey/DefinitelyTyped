// Type definitions for react-yearly-calendar 1.2
// Project: https://github.com/gaearon/react-side-effect
// Definitions by: Jim Coffey <https://github.com/jim-coffey/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import * as React from 'react';
import * as moment from 'moment';

declare namespace ReactYearlyCalendar {
    type Moment = moment.Moment;
    type DateList = string[];
    interface DateRange {
        start: string;
        end: string;
    }
    type DayList = string;
    type DayFilter = (day: Moment) => boolean;
    type DayFunction = (day: Moment) => string;

    interface CustomClasses {
        [key: string]: DateList | DateRange | DayList | DayFilter;
    }

    interface CalendarProps {
        year: number;
        selectedDay: Moment;
        forceFullWeeks?: boolean;
        showDaysOfWeek?: boolean;
        showWeekSeparators?: boolean;
        firstDayOfWeek?: number;
        useIsoWeekday?: boolean;
        selectRange?: boolean;
        selectedRange?: Moment[];
        customClasses?: CustomClasses | DayFunction;
        titles?: DayFunction;
        onPickDate?: (
            selectedDay: Moment,
            dayClasses: string
        ) => void;
        onPickRange?: (
            start: Moment,
            end: Moment
        ) => void;
    }

    type CalendarControlsProps = {
        year: number;
        showTodayButton: true;
        onPrevYear: () => void;
        onNextYear: () => void;
        goToToday: () => void;
    } | {
        year: number;
        showTodayButton?: false;
        onPrevYear: () => void;
        onNextYear: () => void;
    };

    interface Ryc {
        Calendar: React.ComponentClass<CalendarProps>;
        CalendarControls: React.FunctionComponent<CalendarControlsProps>;
    }
}

declare const reactYearlyCalendar: ReactYearlyCalendar.Ryc;

export = reactYearlyCalendar;

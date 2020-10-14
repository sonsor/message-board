export const isPromise = value => {
    if (value !== null && typeof value === 'object')
        return value && typeof value.then === 'function';

    return false;
}

export const ActionType = Object.freeze({
    Pending: 'PENDING',
    Fulfilled: 'FULFILLED',
    Rejected: 'REJECTED',
});

export const Sections = [
    {
        title: 'Hot',
        value: 'hot'
    },
    {
        title: 'Top',
        value: 'top'
    },
    {
        title: 'User',
        value: 'user'
    }
];


export const Sorts = [
    {
        title: 'Viral',
        value: 'viral'
    },
    {
        title: 'Top',
        value: 'top'
    },
    {
        title: 'Time',
        value: 'time'
    },
    {
        title: 'Rising',
        value: 'rising'
    },
    {
        title: 'User',
        value: 'user'
    }
];


export const Windows = [
    {
        title: 'Day',
        value: 'day'
    },
    {
        title: 'Week',
        value: 'week'
    },
    {
        title: 'Month',
        value: 'month'
    },
    {
        title: 'Year',
        value: 'year'
    },
    {
        title: 'All',
        value: 'all'
    }
];

import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------
export const GO_NEXT_WEEK = 'GO_NEXT_WEEK'
export const GO_PREVIOUS_WEEK = 'GO_PREVIOUS_WEEK'
export const CHOOSE_DAY = 'CHOOSE_DAY'
export const GET_CALENDAR_DATA_SUCCESS = 'GET_CALENDAR_DATA_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------
export function goNextWeek(value = 1) {
  return {
    type: GO_NEXT_WEEK,
    payload: value
  }
}


// ------------------------------------
// Actions
// ------------------------------------
export function goPreviousWeek(value = 1) {
  return {
    type: GO_PREVIOUS_WEEK,
    payload: value
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function chooseDay(value) {
  return {
    type: CHOOSE_DAY,
    payload: value
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function getCalendarData() {
  return (dispatch, getState) => {

    axios.get('/menus/05-20-2017')
      .then(function (response) {
        dispatch(getCalendarDataSuccess(response.data));
      }).catch(function (error) {
        console.log(error);
      });

  };
}

// ------------------------------------
// Actions
// ------------------------------------
export function getCalendarDataSuccess(data) {
  return {
    type: GET_CALENDAR_DATA_SUCCESS,
    data
  }
}

export const actions = {
  goNextWeek,
  goPreviousWeek,
  chooseDay,
  getCalendarData
}

function getWeek(fromDate, numOfWeek = 1) {
  let sunday = new Date(fromDate.setDate(fromDate.getDate() - fromDate.getDay()))
    , result = [new Date(sunday)]
    , index = 1;
  while (sunday.setDate(sunday.getDate() + 1) && index <= (numOfWeek * 7 - 1)) {
    result.push(new Date(sunday));
    index++;
  }
  return result;
}
function getDayOfWeek(dateOfWeek) {
  let day = {
      dayOfWeek: '',
      dayOfWeekMobile: '',
      dateOfMonth: 0,
      date: null,
      selected: false,
      past: false,
      future: false,
      productQuantity: 0,
      sumQuantity: 0
    },
    currentDate = new Date(),
    currentTime = currentDate.getTime(),
    time = dateOfWeek.getTime();

  if (time < currentTime) {
    day.selected = false;
    day.past = true;
    day.future = false;
  }
  else if (time == currentTime) {
    day.selected = true;
    day.past = false;
    day.future = false;
  }
  else if (time > currentTime) {
    day.selected = false;
    day.past = false;
    day.future = true;
  }

  switch (dateOfWeek.getDay()) {
    case 0:
      day.dayOfWeek = 'Sun';
      day.dayOfWeekMobile = 'Su';
      break;
    case 1:
      day.dayOfWeek = 'Mon';
      day.dayOfWeekMobile = 'Mo';
      break;
    case 2:
      day.dayOfWeek = 'Tue';
      day.dayOfWeekMobile = 'Tu';
      break;
    case 3:
      day.dayOfWeek = 'Wen';
      day.dayOfWeekMobile = 'We';
      break;
    case 4:
      day.dayOfWeek = 'Thu';
      day.dayOfWeekMobile = 'Th';
      break;
    case 5:
      day.dayOfWeek = 'Fri';
      day.dayOfWeekMobile = 'Fr';
      break;
    case 6:
      day.dayOfWeek = 'Sat';
      day.dayOfWeekMobile = 'Sa';
      break;
  }

  day.dateOfMonth = dateOfWeek.getDate();
  day.date = dateOfWeek;

  return day;
}

function initDaysOfWeek() {
  let days = getWeek(new Date(), 2);
  return days.map((item, index) => {
    return getDayOfWeek(item);
  });
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GO_NEXT_WEEK]: (state, action) => ({
    ...state,
    current_week: state.current_week == 0 ? state.current_week + action.payload : state.current_week
  }),
  [GO_PREVIOUS_WEEK]: (state, action) => ({
    ...state,
    current_week: state.current_week == 1 ? state.current_week - action.payload : state.current_week
  }),
  [CHOOSE_DAY]: (state, action) => ({
    ...state,
    days: state.days.map(t => {
      if (t.dateOfMonth === action.payload) {
        return Object.assign({}, t, {selected: true});
      }
      return Object.assign({}, t, {selected: false});
    })
  }),
  [GET_CALENDAR_DATA_SUCCESS]: (state, action) => {
    let days = state.days.filter((item) => {
      let existedDate = action.data.find((obj) => ((item.date.getDate() + '/' + (item.date.getMonth() + 1) + '/' +  item.date.getFullYear()) == (obj.appliedAt)));
      if (existedDate) {
        item.productQuantity = existedDate.productQuantity;
        item.sumQuantity = existedDate.sumQuantity;
      }
      return item;
    });
    return {...state, days: days};
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  current_week: 0,
  days: initDaysOfWeek()
}
export default function counterReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

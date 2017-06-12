import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------

export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS';

// ------------------------------------
// Actions
// ------------------------------------
export function getCategory() {
  return (dispatch, getState) => {

    const { app } = getState();

    axios.get('/menus/05-20-2017/search/products')
      .then(function (response) {
        dispatch(getCategorySuccess(response.data));
      }).catch(function (error) {
        console.log(error);
      });

  };
}

// ------------------------------------
// Actions
// ------------------------------------
export function getCategorySuccess(categories) {
  return {
    type: GET_CATEGORY_SUCCESS,
    categories
  };
}


export const actions = {
  getCategory,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_CATEGORY_SUCCESS]: (state, action) => ({...state, categories: action.categories}),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  categories: [
    //{
    //  categoryId: 1,
    //  categoryName: 'MAIN DISHES',
    //  description: 'From our kitchen, ready to heat',
    //  products: [
    //    {
    //      name: 'Meal 1',
    //      imgUrl: 'http://niemdamme.vn/Uploads/files/ga.jpg',
    //      isSale: true,
    //      oldPrice: 100,
    //      newPrice: 90,
    //      rating: 4.5
    //    },
    //    {name: 'Meal 2', imgUrl: 'http://niemdamme.vn/Uploads/files/ga.jpg', newPrice: 90, rating: 5},
    //    {
    //      name: 'Meal 3',
    //      imgUrl: 'http://niemdamme.vn/Uploads/files/ga.jpg',
    //      isSale: true,
    //      oldPrice: 200,
    //      newPrice: 120,
    //      rating: 3
    //    },
    //    {
    //      name: 'Meal 4',
    //      imgUrl: 'http://niemdamme.vn/Uploads/files/ga.jpg',
    //      isSale: true,
    //      oldPrice: 120,
    //      newPrice: 50,
    //      rating: 4.5
    //    },
    //    {name: 'Meal 5', imgUrl: 'http://niemdamme.vn/Uploads/files/ga.jpg', newPrice: 56, rating: 4}]
    //},
    //{
    //  name: 'COOKING KITS',
    //  description: 'Make dinner for two in 15 minutes',
    //  products: [
    //    {
    //      name: 'Meal 6',
    //      imgUrl: 'http://niemdamme.vn/Uploads/files/ga.jpg',
    //      isSale: true,
    //      oldPrice: 100,
    //      newPrice: 80,
    //      rating: 2
    //    },
    //    {
    //      name: 'Meal 7',
    //      imgUrl: 'http://niemdamme.vn/Uploads/files/ga.jpg',
    //      isSale: true,
    //      oldPrice: 90,
    //      newPrice: 75,
    //      rating: 3.5
    //    },
    //    {name: 'Meal 8', imgUrl: 'http://niemdamme.vn/Uploads/files/ga.jpg', newPrice: 63, rating: 5},
    //    {name: 'Meal 9', imgUrl: 'http://niemdamme.vn/Uploads/files/ga.jpg', newPrice: 90, rating: 4.5}]
    //},
    //{
    //  name: 'KID'
    //}
  ]
}
export default function categoryReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

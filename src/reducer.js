const initialState = {
    fruits: [
        { key: 1, name: 'Lemon', cost: 3 },
        { key: 2, name: 'Banana', cost: 4 },
        { key: 3, name: 'Mango', cost: 5 }
    ],
    totalPrice: 0
}
const reducer = (state = initialState, action) => {
    return state;
}
export default reducer;
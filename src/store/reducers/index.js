import * as actions from '../actions/index'

const initialState = {
    todos: [],
    todo: []
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case actions.SET_TODOS:
            return { ...state, todos: payload }
        case actions.SET_TODO:
            return { ...state, todo: payload }
        case actions.SET_COMPLETED:
            return { ...state, todos: state.todos.map(todo => (todo.id === payload ? { ...todo, completed: true } : todo)) }
        default:
            return state
    }
}
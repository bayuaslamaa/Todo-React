import axios from 'axios'

export const SET_TODOS = 'SET TODOS'
export const SET_COMPLETED = 'SET_COMPLETED'
export const SET_TODO = 'SET_TODO'

export const setTodos = (data) => {
    return { type: SET_TODOS, payload: data }
}

export const setCompleted = (id) => {
    return { type: SET_COMPLETED, payload: id }
}

export const setTodo = (datum) => {
    return { type: SET_TODO, payload: datum }
}

function fetchTodos() {
    return axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/todos'
    })
}

function fetchTodoById(id) {
    return axios({
        method: 'get',
        url: `https://jsonplaceholder.typicode.com/todos/${id}`
    })
}

export const getTodos = () => {
    return dispatch => {
        fetchTodos()
            .then(({ data }) => dispatch(setTodos(data)))
            .catch(err => console.log(err))
    }
}

export const getTodo = (id) => {
    return dispatch => {
        fetchTodoById(id)
            .then(({ data }) => dispatch(setTodo(data)))
            .catch(err => console.log(err))
    }
}
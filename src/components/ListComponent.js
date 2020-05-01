import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ListComponent(props) {
    const { todos, dispatch, setCompleted } = props
    return (
        <>
            {
                todos.map(todo => (<ListGroup.Item variant={todo.completed ? ('success') : ''} key={todo.id} onClick={() => dispatch(setCompleted(todo.id))}>{todo.title} <Link to={"/list-todo/" + todo.id}>Detail</Link> </ListGroup.Item>))
            }
        </>
    )
}

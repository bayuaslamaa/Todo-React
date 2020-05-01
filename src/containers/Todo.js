import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos, setCompleted } from '../store/actions/index'
import { ListGroup } from 'react-bootstrap'
import ListComponent from '../components/ListComponent'

export default function Todo() {
    const todos = useSelector(state => state.todos)
    console.log('ini', todos)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch])
    return (
        <>
            <h2>List Todo</h2>
            <ListGroup>
                <ListComponent dispatch={dispatch} setCompleted={setCompleted} todos={todos} />
            </ListGroup>
        </>
    )
}
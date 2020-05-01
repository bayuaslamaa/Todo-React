import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getTodo } from '../store/actions/index'
import { Card } from 'react-bootstrap'

export default function DetailTodo() {
    const todo = useSelector(state => state.todo)
    let { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTodo(id))
    }, [dispatch, id])
    return (
        <div className="offset-5">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{todo.title}</Card.Title>
                    <Card.Text>
                        {Object.getOwnPropertyNames(todo)[3]}: {JSON.stringify(Object.values(todo)[3])}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
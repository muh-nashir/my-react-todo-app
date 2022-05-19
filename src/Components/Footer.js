import React from 'react'

const Footer = props => {
    return (
        <div className="todo-footer">
            <span className="count-todos">{count}
            { !props.todoLength &&
                <p data-testid="no-item">0 item left</p>
            }
            {props.todoLength > 0 &&
                <p data-testid="with-items">{props.todoLength} {props.todoLength > 1 ? 'items left' : 'item left' }</p>
            }

            </span>
        </div>
    )
}

export default Footer

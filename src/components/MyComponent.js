import React from 'react';

function MyComponent({ title = 'Generic Title', content = 'Generic Content' }) {
    return (
        <div>
            <dialog open>
                <h1>{title}</h1>
                <p>{content}</p>
            </dialog>
        </div>
    )
}

export default MyComponent;
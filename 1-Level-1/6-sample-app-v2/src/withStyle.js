
import React from 'react'

export function withStyle(InputComponent) {
    class Container extends React.Component {
        render() {
            return (
                <div className="card card-body">
                    <InputComponent />
                </div>
            )
        }
    }
    return Container;
}



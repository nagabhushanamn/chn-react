
import React from 'react'

import store from './store'

function connect(InputComponent, callback) {

    class Container extends React.Component {
        constructor() {
            super()
            let state = callback(store.getState())
            this.state = {
                ...state
            }
        }
        componentDidMount() {
            store.subscribe(() => {
                //.. get new state
            })
        }
        componentWillUnmount() {
            // unsubscribe
        }
        someCommonLogic() {
            //..
        }
        render() {
            return (
                <div>
                    <InputComponent {...this.state} />
                </div>
            );
        }
    }
    Container.displayName = `Connect<${InputComponent.name}>`
    return Container;
}

export { connect };
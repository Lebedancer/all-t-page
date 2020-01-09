import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type RouteParams = {
    id: string; // must be type string since route params
}

interface Props extends RouteComponentProps<RouteParams>, React.Props<RouteParams> {}

type State = {
}


class Item extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        console.log(props.match.params);

        this.state = {
        }
    }


    render() {
        return <ul>
            trololo
        </ul>
    }

}

export default Item;

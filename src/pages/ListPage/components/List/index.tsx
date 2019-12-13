import React from 'react';

type Props = {
}

type Item = {
    title: string
}

type State = {
    list: Array<Item>
}


class ListPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            list: [
                {
                    title: "lol1"
                },
                {
                    title: "lol2"
                }
            ]

        }
    }

    renderList(): React.ReactNode {
        const { list }  = this.state;

        return list.map(() => {
            return <li>item.lol</li>
        })
    }

    render() {
        return <ul>
            {this.renderList()}
        </ul>
    }

}

export default ListPage;

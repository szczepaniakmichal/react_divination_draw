import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            draws: ["wróżba 1", "wróżba 2", "wróżba 3"],
            draw: null,
            addNewDraw: '',
        };
    }

    handleDrawClick = () => {
        const index = Math.floor(Math.random() * this.state.draws.length);
        const draw = this.state.draws[index];
        this.setState({
            draw
        })
    };

    handleAddDrawClick = () => {
        this.setState(prevState => {
            const draws = prevState.draws.concat(this.state.addNewDraw);

            return {
                draws,
                addNewDraw: '',
            }
        })
    };

    handleAddChange = (e) => {
        this.setState({
            addNewDraw: e.target.value,
        })
    };

    render() {
        const { draw, addNewDraw } = this.state;

        return (
            <React.Fragment>
                <button
                    onClick={this.handleDrawClick}
                >Wylosoj wróżbę
                </button>
                <br/>
                <input
                    type="text"
                    onChange={this.handleAddChange}
                />
                <button
                    onClick={this.handleAddDrawClick}
                    value={addNewDraw}
                >dodaj wróżbę
                </button>
                {draw ? <h3>{draw}</h3> : null}
            </React.Fragment>
        )
    }
}

export default App;

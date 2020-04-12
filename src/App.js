import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            draws: ["wróżba 1", "wróżba 2", "wróżba 3"],
            draw: '',
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
        this.setState( prevState => {
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
                    value={this.state.addNewDraw}
                >dodaj wróżbę
                </button>
                <h3>{this.state.draw}</h3>
            </React.Fragment>
        )
    }
}

export default App;

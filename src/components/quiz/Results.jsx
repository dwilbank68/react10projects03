import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Results extends Component {
    render() {

        var percent = (this.props.score / this.props.questions.length) * 100;

        if (percent > 80){
            var message = 'Awesome job';
        } else if (percent < 80 && percent > 60 ) {
            var message = 'You Did Okay';
        } else {
            var message = 'You did Horrible';
        }

        return (
            <div className="well">
                <h4>
                    You Got {this.props.score} our of {this.props.questions.length} Correct
                </h4>
                <h1>{percent}% - {message}</h1>
                <hr/>
                <a href="/app">Take Again</a>
            </div>
        )
    }

}

export default Results
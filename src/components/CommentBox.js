import React ,{Component}from 'react';

class ComponentBox extends Component {
    state ={comment:''};
    handleChange =  (event) => {
        this.setState({comment:event.target.value});
    };
    handleSubmit = (event) => {
        event.preventDefault();
        // TODO call an action creator
        // and save the comment
        this.setState({comment:''});
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a comment</h4>
                <textarea onChange={this.handleChange} value={this.state.comment}/>
                <div>
                    <button>Submit comment</button>
                </div>
            </form>
        );
    }
}
export default ComponentBox;
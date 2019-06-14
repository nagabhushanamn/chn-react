import React, { Component } from 'react';

class ReviewForm extends Component {
    state = {
        isOpen: false
    }
    toggleForm() {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen })
    }
    handleForm(e) {
        e.preventDefault();
        let newReview = {
            stars: this.refs.stars.value,
            author: this.refs.author.value,
            body: this.refs.body.value,
        }
        let { onSubmit } = this.props;
        if (onSubmit)
            onSubmit({ review: newReview })
        this.toggleForm();
    }
    renderForm() {
        let { isOpen } = this.state;
        if (!isOpen)
            return (
                <button onClick={e => this.toggleForm()} className="btn btn-dark"><i className="fa fa-plus"></i></button>
            )
        else {
            return (
                <div className="row">
                    <div className="col-8 col-sm-8 col-6">
                        <div className="card">
                            <div className="card-header">Review Form</div>
                            <div className="card-body">
                                <form onSubmit={e => this.handleForm(e)}>
                                    <div className="form-group">
                                        <label>stars</label>
                                        <select className="form-control" ref="stars">
                                            {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>author</label>
                                        <input className="form-control" ref="author" />
                                    </div>
                                    <div className="form-group">
                                        <label>body</label>
                                        <textarea className="form-control" ref="body"></textarea>
                                    </div>
                                    <button className="btn btn-dark">submit</button>
                                    &nbsp;
                            <button onClick={e => this.toggleForm()} type="button" className="btn btn-danger">cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderForm()}
            </div>
        );
    }
}

export default ReviewForm;
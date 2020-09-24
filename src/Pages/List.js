import React, { Component } from 'react'
class List extends Component {
    constructor(props) {           
       super(props);
       this.state = {}
    }
    render() {
        return (
            <div>
               这是详情页{this.state.id}
            </div>
        );
    }
    componentDidMount() {
        console.log(this.props);
        let temId = this.props.match.params.id;
        this.setState({
            id:temId
        })
        console.log(temId);
    }
    
}
export default List;
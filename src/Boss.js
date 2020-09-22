import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import './boss.styl'
class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow:true
        }
        this.toggle=this.toggle.bind(this);
    }
    toggle(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    render() {
        return (
            <div>
                {/* <div className={this.state.isShow?'show':'hidden'}>Boss人物</div>
                <div>
                    <button onClick={this.toggle}>召唤</button>
                </div> */}

                <CSSTransition in={this.state.isShow} timeout={2000} classNames="boss-text">
                    <div>Boss</div>
                </CSSTransition>
                 <button onClick={this.toggle}>召唤</button>
            </div>
        );
    }
}
export default Boss;
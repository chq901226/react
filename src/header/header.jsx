import React from 'react';

const Header = React.createClass({
    getInitialState(){
        return {
            text:'this is header'
        }
    },
    reload(){
        alert(111)
    },
    render(){
        var reload = this.reload;
        return (<h1 onClick={reload}>{this.state.text}</h1>)
    }
});

export default Header;
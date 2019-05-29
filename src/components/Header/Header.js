import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="ui fixed menu">
                <nav className="ui container">
                    <a className="header item" href="#">
                        <img className="logo" src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png" alt="logo" />
                        Title
                    </a>
                    <div className="header item">
                        <button className="ui button" onClick={this.onClickHandler}>Kliknij!</button>
                    </div>
                </nav>
            </header>
        );
    }
    onClickHandler() {
        alert('Kliknieto!');
    }
}

export default Header;
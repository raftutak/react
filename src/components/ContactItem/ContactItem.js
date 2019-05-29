import React from 'react';

class ContactItem extends React.Component {
    render() {
        const { login, name, department } = this.props;
        const imgUrl = `https://api.adorable.io/avatars/55/${login}.png`;
        return (
            <li className="item">
                <img className="ui mini rounded image" src={imgUrl} alt="" />
                <div className="content">
                    <h4 className="header">{name}</h4>
                    <div className="description">{department}</div>
                </div>
            </li>
        );
    }
}

export default ContactItem;
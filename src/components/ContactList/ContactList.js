import React from 'react';
import ContactItem from '../ContactItem/ContactItem';

class ContactList extends React.Component {
    render() {
        return (
            <ul className="ui relaxed divided list selection">
                <ContactItem login="loginJeden" name="nameJeden" department="departmentJeden" />
                <ContactItem login="loginDwa" name="nameDwa" department="departmentDwa" />
                <ContactItem login="loginTrzy" name="nameDwa" department="departmentTrzy" />
            </ul>
        );
    }
}

export default ContactList;
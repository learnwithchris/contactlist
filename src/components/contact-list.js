import React from 'react';
import ContactDetail from './contact-detail';
import './contact-list.css';
export default class ContactList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedContact: {},
            contacts: [
                {
                    id: 1,
                  name: 'Devan Marie',
                  phone: '555-1234',
                  email: 'dmarie@gmail.com',
                  address: '902 Aurora Ln',
                  image: 'https://randomuser.me/api/portraits/women/2.jpg'
                }, 
                {
                    id: 2,
                  name: 'Everett Christopher',
                  phone: '555-0918',
                  email: 'everettcg@hotmail.com',
                  address: '915 Washington Ave',
                  image: 'https://randomuser.me/api/portraits/men/15.jpg'
                },
                {
                    id: 3,
                  name: 'Emma Grace',
                  phone: '555-2345',
                  email: 'emma_grace@outlook.com',
                  address: '719 Dogwood St',
                  image: 'https://randomuser.me/api/portraits/women/19.jpg'
                },
                {
                    id: 4,
                  name: 'Alexis Jasmine',
                  phone: '555-6667',
                  email: 'letitsnow@yahoo.com',
                  address: '1120 Nipmuck Rd',
                  image: 'https://randomuser.me/api/portraits/women/20.jpg'
                }, 
                {
                    id: 5,
                  name: 'Dakota Quinn',
                  phone: '555-4653',
                  email: 'dqprincess@gmail.com',
                  address: '821 Rapunzel Tower',
                  image: 'https://randomuser.me/api/portraits/women/21.jpg'
                }
            ]
        };
    }

    handleClick = (contact) => {
        this.setState({selectedContact: contact});
    }
// componentDidMount(){
//     this.setState({selectedContact: this.state.contacts[0]});
// }
    render() {
        return (
            
                <div className="app">
                    <div className="left">
                        <h2>Contacts</h2>
                        <div className="contacts-container">
                            {this.state.contacts.map(function(c){
                                //console.log(c);
                                const imageStyles = {
                                    backgroundImage: 'url(' + c.image + ')'
                                };
                                const contactStyles = {
                                    backgroundColor: c === this.state.person ? '#46733E' : ''
                                }
                                return (
                                <div className="contact py-3" key={c.id} onClick={()=>this.handleClick(c)} style={contactStyles}>
                                    <span className="image" style={imageStyles}></span>
                                    <span className="name">{c.name}</span>
                                </div>
                                );
                            }, this)}
                        </div>
                    </div>
                    <div className="right">
                        <ContactDetail contact={this.state.selectedContact} />
                    </div>
                </div>        
            
        )
    }
}




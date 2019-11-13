import React from 'react'

const ContactDetail = ({contact}) => {
    console.log(contact);
    const {image, name, phone, email, address} = contact;
    const styleObject = {
        backgroundImage: 'url(' + image + ')'
    };

    return (
        <div>
            <div className="contact-info">
          <header>
            <div className="image" style={styleObject}></div>
            <h3 className="name" style={{textDecoration:'underline'}}>{name}</h3>
          </header>
          <section>
            { contact.name == null ? '' :  
                
                <>
                <p className="phone">Phone: {phone}</p>
                <p className="email">Email: {email}</p>
                <p className="address">Address: {address}</p>
                </>
            }
          </section>
        </div>
        </div>
    )
}

export default ContactDetail;
  
  
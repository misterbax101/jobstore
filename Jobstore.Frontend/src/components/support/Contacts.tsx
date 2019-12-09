import React from 'react';

const Contacts: React.FC = () => {
    return (
        <>
            <div className="p-2">
                <h2>Contact Us</h2>
            </div>
            <div className="pl-3">
            <p className="lead">Email: jobsore@info.com</p>
            <p className="lead">Tel: +012345789</p>
            <div> 
              <p className="font-weight-bold">Singapore</p>
              <p>11 Floor, Wisma Atria, 435 Orchard Road, 238877.</p>
            </div>
            </div>
        </>
    );
}

export default Contacts;
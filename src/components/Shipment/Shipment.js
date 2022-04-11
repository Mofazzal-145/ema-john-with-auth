import React, { useState } from 'react';

const Shipment = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleAddressBlur = event =>{
        setAddress(event.target.value);
    }

    const handlePhoneBlur = event =>{
        setPhone(event.target.value);
    }


    const handleCreateUser = event => {
        event.preventDefault();
    }

    return (
        <div className='form-container'>
        <div>
          <h3 className='form-title'>Shipping Information</h3>
             <form onSubmit={handleCreateUser }>
                  <div className="input-group">
                          <label htmlFor="name">Name</label>
                          <input onBlur={handleNameBlur} type="text" name="name" id="" required/>
                      </div>
                        <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                            </div>
                      <div className="input-group">
                          <label htmlFor="password">Address</label>
                          <input onBlur={handleAddressBlur} type="text" name="address" id="" required/>
                      </div>
                      <div className="input-group">
                          <label htmlFor="confirm-password">Phone Number</label>
                          <input onBlur={handlePhoneBlur} type="text" name="phone number" id="" required/>
                      </div>
                      <p style={{color: 'red'}}>{error}</p>
                      <input className='form-submit' type="submit" value="Add Shipping" />
             </form>
        </div>
      </div>
    );
};

export default Shipment;
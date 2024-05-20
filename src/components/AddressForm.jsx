import { useState } from 'react';
import './AddressForm.css';

const AddressForm = ({ onSubmit, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        pincode: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!formData.name || !formData.mobile || !formData.pincode || !formData.address) {
            alert('Please fill out all fields.');
            return;
        }
        if (formData.mobile.length !== 10 || isNaN(formData.mobile)) {
            alert('Please enter a valid 10-digit mobile number.');
            return;
        }
        if (formData.pincode.length !== 6 || isNaN(formData.pincode)) {
            alert('Please enter a valid 6-digit pincode.');
            return;
        }

        onSubmit({ type: "USER_UPDATE", payload: formData });
        onClose();
    };

    return (
            <form className="address-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input
                        type="text"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        pattern="\d{10}"
                        title="Please enter a valid 10-digit mobile number."
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pincode">Pincode</label>
                    <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                        pattern="\d{6}"
                        title="Please enter a valid 6-digit pincode."
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="form-actions">
                    <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
                    <button type="submit" className="submit-btn">Submit</button>
                </div>
            </form>
    );
};

export default AddressForm;
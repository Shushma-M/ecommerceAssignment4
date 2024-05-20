import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import AddressForm from "../components/AddressForm";
import "./Address.css"
import Modal from "../components/Modal";
import CartSummary from "../components/CartSummary";
import { DataContext } from "../context/DataContext";

export const Address = () => {
    const { userState, userDispatch } = useContext(UserContext);
    const { dataState, } = useContext(DataContext);
    const [addressForm, setAddressForm] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);

    const handleAddressChange = (e) => {
        setSelectedAddress(e.target.value);
    };
    const addressList = () =>
    (
        <form className="address-list">
            {userState?.data?.addresses?.map((address, index) => (
                <div key={index} className="address-item">
                    <input
                        type="radio"
                        id={`address-${index}`}
                        name="address"
                        value={index}
                        checked={selectedAddress === `${index}`}
                        onChange={handleAddressChange}
                    />
                    <label htmlFor={`address-${index}`}>
                        <h3>{address.name}</h3>
                        <p>{address.mobile}</p>
                        <p>{address.address}</p>
                        <p>Pincode: {address.pincode}</p>
                    </label>
                </div>
            ))}
        </form>
    );

    return (
        <div className="checkout-container">
            <div className="address-list-container">{addressList()}
                {!addressForm && <button onClick={() => setAddressForm(true)}>Add</button>}
            </div>
            <div className="cart-summary">
                <CartSummary products={dataState.data.cart} onCheckout={() => { }} />
            </div>
            {addressForm &&
                <Modal isVisible={addressForm}>
                    <AddressForm onSubmit={userDispatch} onClose={() => setAddressForm(false)} />
                </Modal>}
        </div>
    )
}
import React from 'react';
import { useImmer } from 'use-immer';

// Initialize state w/ immer
function UserProfileWithImmer() {
  const [userProfile, setUserProfile] = useImmer({
    name: 'John Doe',
    email: 'john.doe@email.com',
    contactDetails: {
      phone: '123-456-7890',
      address: '1234 Main St, Anywhere, Americaland'
    },
    preferences: {
      newsletter: true,
      notifications: false
    }
  });

// Update contact & profile
  const updateContactDetails = (newPhone, newAddress) => {
    setUserProfile(draft => {
      draft.contactDetails.phone = newPhone;
      draft.contactDetails.address = newAddress;
    });
  };

// Update newsletter preference & profile
  const toggleNewsletterSubscription = () => {
    setUserProfile(draft => {
      draft.preferences.newsletter = !draft.preferences.newsletter;
    });
  };

// Input fields, event handlers, newsletter button, & profile display
  return (
    <div>
      <h2>User Profile</h2>

      <div>
        <label>Phone:</label>
        <input type="text" value={userProfile.contactDetails.phone} onChange={e => updateContactDetails(e.target.value, userProfile.contactDetails.address)} />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" value={userProfile.contactDetails.address} onChange={e => updateContactDetails(userProfile.contactDetails.phone, e.target.value)} />
      </div>
      <button onClick={toggleNewsletterSubscription}>Newsletter Subscription</button>
      <div>
        <h3>Current Profile</h3>
        <p>Name: {userProfile.name}</p>
        <p>Email: {userProfile.email}</p>
        <p>Contact Details: Phone - {userProfile.contactDetails.phone}, Address - {userProfile.contactDetails.address}</p>
        <p>Preferences: Newsletter - {userProfile.preferences.newsletter ? 'Subscribed' : 'Unsubscribed'}, Notifications - {userProfile.preferences.notifications ? 'Enabled' : 'Disabled'}</p>
      </div>
    </div>
  );
}

export default UserProfileWithImmer;

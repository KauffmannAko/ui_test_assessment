const profileSelectors = {
  // =========================
  // Mandatory Fields
  // =========================
  firstName: { type: 'label', value: 'First Name (mandatory):', exact: true },
  lastName: { type: 'label', value: 'Last Name (mandatory):', exact: true },
  email: { type: 'label', value: 'Email (mandatory):', exact: true },
  password: { type: 'label', value: 'Password (mandatory):', exact: true },
  confirmPassword: { type: 'label', value: 'Confirm Password (mandatory):', exact: true },

  // =========================
  // Optional Fields
  // =========================
  dob: { type: 'label', value: 'Date ofBirth (optional):', exact: true },
  phone: { type: 'label', value: 'Phone Number (optional):', exact: true },
  address: { type: 'label', value: 'Address (optioal):', exact: true },
  linkedIn: { type: 'label', value: 'LinkedIn URL (optional):', exact: true },
  github: { type: 'label', value: 'GitHub URL (optional):', exact: true },

  // =========================
  // Gender (Radio Buttons)
  // =========================
  genderMale: { type: 'role', role: 'radio', options: { name: 'Male' } },
  genderFemale: { type: 'role', role: 'radio', options: { name: 'Female' } },
  genderPreferNotToSay: { type: 'role', role: 'radio', options: { name: 'Prefer not to say' } },



  // =========================
  // Actions
  // =========================
  submitButton: { type: 'role', role: 'button', options: { name: 'Submit' } },

  
};

export default profileSelectors;

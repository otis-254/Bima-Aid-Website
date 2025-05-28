export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  policyType: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    // Here you would typically send the data to your backend API
    // For now, we'll simulate a successful submission
    console.log('Form submission:', data);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      success: true,
      message: 'Thank you for your message. We will get back to you soon.',
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: 'Sorry, there was an error submitting your message. Please try again later.',
    };
  }
}

export function validateContactForm(data: ContactFormData): { isValid: boolean; errors: Partial<ContactFormData> } {
  const errors: Partial<ContactFormData> = {};
  
  if (!data.name.trim()) {
    errors.name = 'Name is required';
  }
  
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^\+?[\d\s-]{10,}$/.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }
  
  if (!data.policyType) {
    errors.policyType = 'Please select a policy type';
  }
  
  if (!data.message.trim()) {
    errors.message = 'Message is required';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
} 
const apiKey = import.meta.env.VITE_RESEND_API_KEY;

if (!apiKey) {
  throw new Error("Resend API Key is missing in the environment variables.");
}

export const sendEmail = async (formDetails: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}) => {
  try {
    const response = await fetch('/api/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`, 
      },
      body: JSON.stringify({
        from: 'Acme <onboarding@resend.dev>',
        to: 'gabriellysthefany.alves@gmail.com',
        subject: 'New Contact Form Submission',
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>First Name:</strong> ${formDetails.firstName}</p>
          <p><strong>Last Name:</strong> ${formDetails.lastName}</p>
          <p><strong>Email:</strong> ${formDetails.email}</p>
          <p><strong>Phone:</strong> ${formDetails.phone}</p>
          <p><strong>Message:</strong> ${formDetails.message}</p>
        `,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

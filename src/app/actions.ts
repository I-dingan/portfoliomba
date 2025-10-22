"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const validatedFields = contactSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
    };
  }

  try {
    // In a real application, you would send an email or save to a database here.
    console.log("Form submitted successfully:", validatedFields.data);
    return {
      message: "Thank you for your message! I'll get back to you soon.",
      errors: {},
    };
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      errors: {},
    };
  }
}

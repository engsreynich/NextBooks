import { z } from 'zod';

export const checkoutFormSchema = z.object({
  fullName: z.string().min(2, {
    message: 'Full name must be at least 2 characters.',
  }),
  phone: z.string().min(10, {
    message: 'Please enter a valid phone number.',
  }),
  address: z.string().min(5, {
    message: 'Street address must be at least 5 characters.',
  }),
  city: z.string().min(2, {
    message: 'City name must be at least 2 characters.',
  }),
  state: z.string().min(2, {
    message: 'Please select a state.',
  }),
  zip: z.string().regex(/^\d{5}(-\d{4})?$/, {
    message: 'Please enter a valid ZIP code.',
  }),
  paymentMethod: z.enum(['cod', 'card'], {
    required_error: 'Please select a payment method.',
  }),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;

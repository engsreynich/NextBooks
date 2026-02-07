import * as z from 'zod';

export const shippingSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  phone: z.string().min(10, 'Phone number is required'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zip: z.string().min(5, 'Zip code is required'),
});

export const paymentSchema = z.object({
  paymentMethod: z.enum(['cod', 'card']),
  // Expand for card details if needed
});

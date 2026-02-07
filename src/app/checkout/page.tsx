'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutFormSchema, type CheckoutFormValues } from '@/lib/schemas';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Link from 'next/link';
import Image from 'next/image';

export default function CheckoutPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watchhhhhhh,
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      paymentMethod: 'cod',
      state: 'NY',
    },
  });

  const onSubmit = (data: CheckoutFormValues) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="bg-white dark:bg-[#101922] min-h-screen text-[#111418] dark:text-white flex flex-col font-display antialiased selection:bg-primary/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-solid border-[#e5e7eb] dark:border-[#1f2937] bg-white/90 dark:bg-[#101922]/90 backdrop-blur-md">
        <div className="layout-container flex justify-center w-full">
          <div className="flex items-center justify-between w-full max-w-7xl px-4 md:px-8 py-4">
            <div className="flex items-center gap-3">
              <div className="size-8 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[32px]">menu_book</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-[#111418] dark:text-white">
                BookNow
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              <span className="material-symbols-outlined text-lg">lock</span>
              <span className="hidden sm:inline">Secure Checkout</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column: Forms */}
            <div className="flex-1 flex flex-col gap-8">
              {/* Page Heading */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111418] dark:text-white mb-2">
                  Checkout
                </h1>
                <div className="text-gray-500 dark:text-gray-400">
                  Complete your purchase details below.
                </div>
              </div>

              {/* Shipping Details Section */}
              <section aria-labelledby="shipping-heading">
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-primary">local_shipping</span>
                  <h3
                    className="text-xl font-bold text-[#111418] dark:text-white"
                    id="shipping-heading"
                  >
                    Shipping Details
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" placeholder="Jane Doe" {...register('fullName')} />
                    {errors.fullName && (
                      <p className="text-sm text-red-500">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      {...register('phone')}
                    />
                    {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                  </div>

                  {/* Address Line 1 */}
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      placeholder="123 Book St, Library City"
                      {...register('address')}
                    />
                    {errors.address && (
                      <p className="text-sm text-red-500">{errors.address.message}</p>
                    )}
                  </div>

                  {/* City */}
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="New York" {...register('city')} />
                    {errors.city && <p className="text-sm text-red-500">{errors.city.message}</p>}
                  </div>

                  {/* State & Zip */}
                  <div className="flex gap-4">
                    <div className="flex flex-col gap-2 flex-1">
                      <Label htmlFor="state">State</Label>
                      <Select onValueChange={(value) => setValue('state', value)} defaultValue="NY">
                        <SelectTrigger id="state">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="NY">NY</SelectItem>
                          <SelectItem value="CA">CA</SelectItem>
                          <SelectItem value="TX">TX</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.state && (
                        <p className="text-sm text-red-500">{errors.state.message}</p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <Label htmlFor="zip">Zip Code</Label>
                      <Input id="zip" placeholder="10001" {...register('zip')} />
                      {errors.zip && <p className="text-sm text-red-500">{errors.zip.message}</p>}
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-[#e5e7eb] dark:border-[#1f2937]" />

              {/* Payment Method Section */}
              <section aria-labelledby="payment-heading">
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-primary">payments</span>
                  <h3
                    className="text-xl font-bold text-[#111418] dark:text-white"
                    id="payment-heading"
                  >
                    Payment Method
                  </h3>
                </div>

                {/* COD Box */}
                <label className="group relative block cursor-pointer">
                  <input
                    type="radio"
                    className="custom-radio peer sr-only"
                    value="cod"
                    {...register('paymentMethod')}
                    defaultChecked
                  />
                  <div className="relative flex items-start gap-4 p-5 rounded-lg border border-[#e5e7eb] dark:border-[#1f2937] bg-white dark:bg-[#1a2632] hover:border-primary/50 transition-all shadow-sm peer-checked:border-primary peer-checked:bg-blue-50/50 dark:peer-checked:bg-primary/10">
                    {/* Radio Indicator */}
                    <div className="flex items-center justify-center mt-1">
                      <div className="radio-circle h-5 w-5 rounded-full border border-gray-300 bg-white dark:bg-[#1a2632] transition-all"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-bold text-[#111418] dark:text-white">Cash on Delivery</p>
                        <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors">
                          attach_money
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        Pay in cash upon arrival. Please ensure you have the exact amount to help
                        facilitate a smooth delivery process.
                      </p>
                    </div>
                  </div>
                </label>
              </section>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-4">
                <Link
                  href="#"
                  className="text-sm font-semibold text-gray-500 hover:text-[#111418] dark:text-gray-400 dark:hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">arrow_back</span>
                  Return to cart
                </Link>
              </div>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:w-[380px] flex-shrink-0">
              <div className="sticky top-24 flex flex-col gap-6">
                <div className="rounded-xl border border-[#e5e7eb] dark:border-[#1f2937] bg-white dark:bg-[#1a2632] shadow-sm overflow-hidden">
                  <div className="p-5 border-b border-[#e5e7eb] dark:border-[#1f2937] bg-gray-50/50 dark:bg-white/5">
                    <h3 className="font-bold text-lg text-[#111418] dark:text-white">
                      Order Summary
                    </h3>
                  </div>

                  {/* Items List */}
                  <div className="p-5 flex flex-col gap-5 max-h-[400px] overflow-y-auto custom-scrollbar">
                    {/* Item 1 */}
                    <div className="flex gap-4">
                      <div className="h-20 w-16 flex-shrink-0 overflow-hidden rounded-md border border-[#e5e7eb] dark:border-[#1f2937] bg-gray-100 dark:bg-gray-800">
                        <Image
                          alt="Book cover of The Great Gatsby showing classic artwork style"
                          className="h-full w-full object-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuADiFlXdV-H7RLHzCsUnuloED_-KHpXHZBEHz63PMsDsuta2Qudnt_BogqoNnL_CvBXzd3_imtQ96k0_8g3UDELCQ1pAEOSs0pU2Z8-CGgnNn57vRJjBaSsTuffbsugKbBqKIP9pGTPw3oadqAbDMfCR4SkRzo9b5_sdVUlJQgzhGcalwNDIOwOOnBR5N6ORGlYj9rrMszeIxtw0xNthvreJPojPqfu7vO_mTjoJA0zcXqzTYwkr4oebhQnKj0lloiEWmNLkqeqY5Q"
                          width={64}
                          height={80}
                        />
                      </div>
                      <div className="flex flex-col flex-grow justify-between py-1">
                        <div>
                          <p className="font-semibold text-sm text-[#111418] dark:text-white line-clamp-1">
                            The Great Gatsby
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Hardcover</p>
                        </div>
                        <p className="font-medium text-sm text-[#111418] dark:text-white">$15.00</p>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex gap-4">
                      <div className="h-20 w-16 flex-shrink-0 overflow-hidden rounded-md border border-[#e5e7eb] dark:border-[#1f2937] bg-gray-100 dark:bg-gray-800">
                        <Image
                          alt="Book cover of 1984 by George Orwell featuring abstract eye design"
                          className="h-full w-full object-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAXuwUC2QjTlS1lonWZaQ1h1PiKGZoXl44W2zdx9g51ENwTf3yXYFveZJkeW7HlP44K6N7Lh3iJHpiYFkVBCWv_TDdjNjhet-HXdyedV4Uhh8Q1IW2oPp9yW9FIN5uPyXjuhcT3feciE9hz73Az4ho-CUj503z88q0G2lLi6fbvUzFXBOiN6U5QFeRbsktZLEnsL3l8AergqlOmdfAali6DpfGqXaVi_IrfGW4K4A-1pSsMw31JCvLmnAPPg5c00H-c233voWfTm8"
                          width={64}
                          height={80}
                        />
                      </div>
                      <div className="flex flex-col flex-grow justify-between py-1">
                        <div>
                          <p className="font-semibold text-sm text-[#111418] dark:text-white line-clamp-1">
                            1984
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Paperback</p>
                        </div>
                        <p className="font-medium text-sm text-[#111418] dark:text-white">$12.00</p>
                      </div>
                    </div>
                  </div>

                  {/* Calculations */}
                  <div className="p-5 border-t border-[#e5e7eb] dark:border-[#1f2937] bg-gray-50/30 dark:bg-white/5 space-y-3">
                    <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                      <span>Subtotal</span>
                      <span className="font-medium text-[#111418] dark:text-white">$27.00</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                      <span>Shipping</span>
                      <span className="font-medium text-green-600 dark:text-green-400">Free</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                      <span>Tax</span>
                      <span className="font-medium text-[#111418] dark:text-white">$2.16</span>
                    </div>
                    <div className="pt-3 mt-3 border-t border-dashed border-[#e5e7eb] dark:border-[#1f2937] flex justify-between items-end">
                      <span className="text-base font-bold text-[#111418] dark:text-white">
                        Total
                      </span>
                      <div className="text-right">
                        <span className="text-xs text-gray-500 dark:text-gray-400 block mb-1">
                          USD
                        </span>
                        <span className="text-2xl font-bold text-primary tracking-tight">
                          $29.16
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Place Order CTA */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-lg bg-primary hover:bg-blue-600 text-white font-bold h-14 flex items-center justify-center gap-2 shadow-lg shadow-blue-200 dark:shadow-none transition-all transform active:scale-[0.98]"
                >
                  <span>Place Order</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Button>

                <div className="flex justify-center gap-4 text-xs text-gray-400 dark:text-gray-600 mt-2">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    Secure Payment
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">verified_user</span>
                    Data Protected
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

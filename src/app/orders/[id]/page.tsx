'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function OrderDetailPage() {
  return (
    <div className="bg-white text-[#111418] font-display antialiased">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        {/* Navigation */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-4 md:px-10 py-3 bg-white">
          <div className="flex items-center gap-4 text-[#111418]">
            <div className="size-8 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">menu_book</span>
            </div>
            <h2 className="text-[#111418] text-xl font-bold leading-tight tracking-tight">
              BookNow
            </h2>
          </div>
          <div className="hidden md:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <Link
                className="text-[#111418] text-sm font-medium hover:text-primary transition-colors"
                href="#"
              >
                Home
              </Link>
              <Link
                className="text-[#111418] text-sm font-medium hover:text-primary transition-colors"
                href="#"
              >
                My Orders
              </Link>
              <Link
                className="text-[#111418] text-sm font-medium hover:text-primary transition-colors"
                href="#"
              >
                Account
              </Link>
            </div>
            <button className="flex items-center justify-center overflow-hidden rounded-lg h-10 bg-[#f0f2f4] text-[#111418] hover:bg-gray-200 transition-colors gap-2 text-sm font-bold min-w-0 px-3">
              <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
            </button>
          </div>
          <button className="md:hidden flex items-center justify-center rounded-lg h-10 w-10 bg-[#f0f2f4] text-[#111418]">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>

        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
              {/* Breadcrumbs */}
              <div className="flex flex-wrap gap-2 px-4 py-2">
                <Link className="text-[#617589] text-sm font-medium hover:underline" href="#">
                  My Orders
                </Link>
                <span className="text-[#617589] text-sm font-medium">/</span>
                <span className="text-[#111418] text-sm font-medium">Order #BN-49201</span>
              </div>

              {/* Header Section */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-4 pb-6 pt-4">
                <div>
                  <h1 className="text-[#111418] text-3xl font-bold leading-tight tracking-tight">
                    Order #BN-49201
                  </h1>
                  <p className="text-[#617589] text-sm mt-1">Placed on October 24, 2023</p>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex items-center justify-center gap-2 rounded-lg h-10 border border-[#dbe0e6] bg-white px-4 text-sm font-bold text-[#111418] hover:bg-gray-50 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">receipt</span>
                    Invoice
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center justify-center gap-2 rounded-lg h-10 border border-[#dbe0e6] bg-white px-4 text-sm font-bold text-[#111418] hover:bg-gray-50 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">help</span>
                    Need Help?
                  </Button>
                </div>
              </div>

              {/* Timeline Horizontal */}
              <div className="px-4 mb-10 w-full overflow-x-auto pb-4">
                <div className="min-w-[600px] flex items-center justify-between relative">
                  {/* Progress Line Background */}
                  <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -z-10 -translate-y-1/2 rounded"></div>

                  {/* Step 1: Placed */}
                  <div className="flex flex-col items-center gap-2 bg-white px-2 z-10">
                    <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-sm font-bold">check</span>
                    </div>
                    <p className="text-sm font-semibold text-[#111418]">Order Placed</p>
                  </div>

                  {/* Connector Active */}
                  <div
                    className="flex-1 h-[2px] bg-primary absolute left-0 top-1/2 -translate-y-1/2 z-0"
                    style={{ width: '50%' }}
                  ></div>

                  {/* Step 2: Processing */}
                  <div className="flex flex-col items-center gap-2 bg-white px-2 z-10">
                    <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-sm font-bold">check</span>
                    </div>
                    <p className="text-sm font-semibold text-[#111418]">Processing</p>
                  </div>

                  {/* Step 3: Shipped (Current) */}
                  <div className="flex flex-col items-center gap-2 bg-white px-2 z-10">
                    <div className="size-8 rounded-full border-2 border-primary bg-white text-primary flex items-center justify-center shadow-sm ring-4 ring-blue-50">
                      <span className="material-symbols-outlined text-sm filled">
                        local_shipping
                      </span>
                    </div>
                    <p className="text-sm font-bold text-primary">Shipped</p>
                  </div>

                  {/* Step 4: Delivered */}
                  <div className="flex flex-col items-center gap-2 bg-white px-2 z-10 opacity-60">
                    <div className="size-8 rounded-full border border-gray-300 bg-white text-gray-400 flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">inventory_2</span>
                    </div>
                    <p className="text-sm font-medium text-gray-500">Delivered</p>
                  </div>
                </div>
              </div>

              {/* Main Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
                {/* Left Column: Items & Details */}
                <div className="lg:col-span-2 flex flex-col gap-8">
                  {/* Product List */}
                  <div className="flex flex-col gap-6">
                    <h3 className="text-lg font-bold text-[#111418]">Items in Shipment</h3>

                    {/* Item 1 */}
                    <div className="flex gap-4 p-4 border rounded-xl border-[#e5e7eb] bg-white hover:border-primary/30 transition-colors">
                      <div className="w-20 h-28 shrink-0 overflow-hidden rounded-md bg-gray-100 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 to-blue-700 opacity-90"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-white/80 font-serif italic text-xs p-2 text-center">
                          The Great Gatsby
                        </div>
                      </div>
                      <div className="flex flex-col flex-1 justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="text-base font-bold text-[#111418]">The Great Gatsby</h4>
                            <p className="text-base font-bold text-[#111418]">$12.99</p>
                          </div>
                          <p className="text-sm text-[#617589]">F. Scott Fitzgerald</p>
                          <p className="text-xs text-[#617589] mt-1">Hardcover</p>
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                          <p className="text-sm font-medium text-[#111418]">Qty: 1</p>
                          <button className="text-sm font-medium text-primary hover:underline">
                            Buy Again
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex gap-4 p-4 border rounded-xl border-[#e5e7eb] bg-white hover:border-primary/30 transition-colors">
                      <div className="w-20 h-28 shrink-0 overflow-hidden rounded-md bg-gray-100 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-yellow-500 opacity-90"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-white/90 font-sans font-bold text-xs p-2 text-center uppercase">
                          Atomic Habits
                        </div>
                      </div>
                      <div className="flex flex-col flex-1 justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="text-base font-bold text-[#111418]">Atomic Habits</h4>
                            <p className="text-base font-bold text-[#111418]">$24.00</p>
                          </div>
                          <p className="text-sm text-[#617589]">James Clear</p>
                          <p className="text-xs text-[#617589] mt-1">Paperback</p>
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                          <p className="text-sm font-medium text-[#111418]">Qty: 2</p>
                          <button className="text-sm font-medium text-primary hover:underline">
                            Buy Again
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Details Columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    {/* Shipping Address */}
                    <div>
                      <h3 className="text-sm font-bold text-[#111418] mb-3 uppercase tracking-wider">
                        Shipping Address
                      </h3>
                      <div className="p-4 rounded-xl border border-[#e5e7eb] bg-white h-full">
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-gray-400 mt-1">
                            location_on
                          </span>
                          <div>
                            <p className="text-sm font-bold text-[#111418]">Jane Doe</p>
                            <p className="text-sm text-[#617589] mt-1">123 Library Lane</p>
                            <p className="text-sm text-[#617589]">Booktown, NY 10012</p>
                            <p className="text-sm text-[#617589]">United States</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div>
                      <h3 className="text-sm font-bold text-[#111418] mb-3 uppercase tracking-wider">
                        Payment Method
                      </h3>
                      <div className="p-4 rounded-xl border border-[#e5e7eb] bg-white h-full">
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-gray-400 mt-1">
                            credit_card
                          </span>
                          <div>
                            <p className="text-sm font-bold text-[#111418]">Visa ending in 4242</p>
                            <p className="text-sm text-[#617589] mt-1">Expires 12/25</p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="material-symbols-outlined text-green-600 text-[18px]">
                                check_circle
                              </span>
                              <span className="text-xs font-medium text-green-700">
                                Payment Successful
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Summary */}
                <div className="lg:col-span-1">
                  <div className="sticky top-6">
                    <div className="bg-[#F9FAFB] rounded-xl p-6 border border-[#f0f2f4]">
                      <h3 className="text-lg font-bold text-[#111418] mb-4">Order Summary</h3>
                      <div className="flex flex-col gap-3 pb-4 border-b border-[#e5e7eb]">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-[#617589]">Subtotal</span>
                          <span className="text-sm font-medium text-[#111418]">$60.99</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-[#617589]">Shipping</span>
                          <span className="text-sm font-medium text-green-600">Free</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-[#617589]">Tax</span>
                          <span className="text-sm font-medium text-[#111418]">$5.49</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-4">
                        <span className="text-base font-bold text-[#111418]">Total</span>
                        <span className="text-xl font-bold text-primary">$66.48</span>
                      </div>
                      <Button
                        size="lg"
                        className="w-full h-11 flex items-center justify-center gap-2 rounded-lg bg-primary text-white font-bold text-sm hover:bg-blue-600 transition-colors shadow-sm mb-3"
                      >
                        Track Shipment
                      </Button>
                      <p className="text-xs text-[#617589] text-center leading-relaxed">
                        Need to return an item?{' '}
                        <Link className="text-primary hover:underline" href="#">
                          Start a return
                        </Link>{' '}
                        within 30 days of delivery.
                      </p>
                    </div>

                    {/* Help Card */}
                    <div className="mt-6 p-4 rounded-xl border border-[#e5e7eb] bg-white flex items-center gap-4">
                      <div className="size-10 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                        <span className="material-symbols-outlined">support_agent</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#111418]">Customer Support</h4>
                        <p className="text-xs text-[#617589]">Available 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer spacer */}
              <div className="h-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

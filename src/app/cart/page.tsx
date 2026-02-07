'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

interface CartItem {
  id: number;
  title: string;
  author: string;
  format: string;
  price: number;
  quantity: number;
  image: string;
}

export default function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      title: 'The Midnight Library',
      author: 'Matt Haig',
      format: 'Hardcover',
      price: 14.99,
      quantity: 1,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD0bEaRH3eBDNf2OFF2m5xjEuR8QWXjVcjktnhxDBTNJmWSO21ZPPrrBfcYYGVchEhG9K_ybYH2oZel8le1PeoFOY9db76VFqkIsx37wrwEK5WVXB_M1QkQugZwXavkrk6F7gMzxmar3faBN8HBIoaL61V5VJMIY-Ug-AbROMn8b9WJ4_ednzBYwC5HEZIJ8f3yo1PYCRK4PtTuz-nWRB4XRJyShIR-HuaeAbobWZEHvwTneqWW4_Sp4Su3nqJNLdQFSGZyU_ux7Yg',
    },
    {
      id: 2,
      title: 'Atomic Habits',
      author: 'James Clear',
      format: 'Paperback',
      price: 18.5,
      quantity: 2,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDRbX0R_GPwdirrAFTi99TtJvKo2TQyjaj2lCrPJnN2OlbIW9Svi5D3ABIz0KQ4sy7IGagufiJtcNMqBZ9CMlG2zE88pkxPSePqq09WqmMPO9ACrL7995e_gjQtWx8o3BUJTrpU6Jbhwb16pm8eeYZs-mh9LkfZ8vhDPbT6ThwxJEiALU1JUwfH-xcbPJPxOWzAgwg-IGy6YqnLJ72WDoMTqhaeeB_unpz8vdT2jo-Ap7OJJqSyixtWzYxxveGjlvrdibU0Uzffezg',
    },
    {
      id: 3,
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      format: 'Hardcover',
      price: 22.0,
      quantity: 1,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDRiHE4zPu8ViC26kBe1EKyNUbAlXCkxHU0ndn5a0j_0KZF6TyQRpF4_mplI3dzeDcOhzcymYYgts0fnpZhJU9wteU2Mz1pGanWpH1qiZX5ZcUi9tIO1IDA64P5lrNw5mvmm5mJdj1uKuLPdBg7KqO2mC-O0HHqaIiFFgKdtoO4hZs3Vl2B3_llXXmIUZ3es9G2sO6unCTIV7bNeYTyo08OWsIYXIPpu2bmsXSXimvVpG0f9UqqC067omL11F9X5L9qGp4i3feG1-0',
    },
  ]);

  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.0;
  const tax = subtotal * 0.0825;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white dark:bg-[#101922] text-[#111418] font-display min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e5e7eb] bg-white/95 backdrop-blur px-6 py-3 lg:px-10">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-[#111418]">
            <div className="size-8 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">auto_stories</span>
            </div>
            <h2 className="text-[#111418] text-xl font-bold leading-tight tracking-[-0.015em]">
              BookNow
            </h2>
          </div>
          <div className="hidden lg:flex items-center gap-9">
            <Link
              className="text-[#111418] text-sm font-medium hover:text-primary transition-colors leading-normal"
              href="#"
            >
              Home
            </Link>
            <Link
              className="text-[#111418] text-sm font-medium hover:text-primary transition-colors leading-normal"
              href="#"
            >
              Best Sellers
            </Link>
            <Link
              className="text-[#111418] text-sm font-medium hover:text-primary transition-colors leading-normal"
              href="#"
            >
              New Arrivals
            </Link>
            <Link
              className="text-[#111418] text-sm font-medium hover:text-primary transition-colors leading-normal"
              href="#"
            >
              Fiction
            </Link>
            <Link
              className="text-[#111418] text-sm font-medium hover:text-primary transition-colors leading-normal"
              href="#"
            >
              Non-Fiction
            </Link>
          </div>
        </div>
        <div className="flex flex-1 justify-end gap-6 items-center">
          <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-full h-full border border-[#e5e7eb] overflow-hidden">
              <div className="text-[#6b7280] flex border-none bg-white items-center justify-center pl-4 border-r-0">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-[#111418] focus:outline-0 focus:ring-0 border-none bg-white focus:border-none h-full placeholder:text-[#6b7280] px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal"
                placeholder="Search books..."
              />
            </div>
          </label>
          <button className="relative flex items-center justify-center rounded-full size-10 bg-white border border-[#e5e7eb] hover:bg-gray-50 text-[#111418] transition-colors">
            <span className="material-symbols-outlined text-[24px]">shopping_cart</span>
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
              {cartItems.length}
            </span>
          </button>
          <button className="lg:hidden flex items-center justify-center rounded-full size-10 bg-white border border-[#e5e7eb] text-[#111418]">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 layout-container flex flex-col">
        <div className="px-4 lg:px-40 flex flex-1 justify-center py-10">
          <div className="layout-content-container flex flex-col w-full max-w-[1200px] flex-1">
            <h1 className="text-[#111418] text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] mb-8">
              Shopping Cart ({cartItems.length} Items)
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Cart Items List */}
              <div className="lg:col-span-8 flex flex-col gap-8">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="group flex flex-col sm:flex-row gap-6 pb-8 border-b border-[#e5e7eb]"
                  >
                    <div className="w-full sm:w-32 flex-shrink-0">
                      <div
                        className="aspect-[2/3] w-full rounded-lg bg-gray-100 bg-cover bg-center shadow-sm"
                        style={{ backgroundImage: `url("${item.image}")` }}
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h3 className="text-lg font-bold text-[#111418] leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-[#6b7280] text-sm mt-1">{item.author}</p>
                          <p className="text-xs font-medium text-[#6b7280]/70 mt-1 uppercase tracking-wide">
                            {item.format}
                          </p>
                        </div>
                        <p className="text-lg font-bold text-[#111418]">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center gap-6">
                          {/* Quantity Selector */}
                          <div className="flex items-center h-10 rounded-full border border-[#e5e7eb] bg-white px-1">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="size-8 flex items-center justify-center rounded-full text-primary hover:bg-gray-50 transition-colors"
                            >
                              <span className="material-symbols-outlined text-[20px]">remove</span>
                            </button>
                            <input
                              className="w-10 text-center border-none bg-transparent p-0 text-sm font-semibold text-[#111418] focus:ring-0"
                              readOnly
                              type="text"
                              value={item.quantity}
                            />
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="size-8 flex items-center justify-center rounded-full text-primary hover:bg-gray-50 transition-colors"
                            >
                              <span className="material-symbols-outlined text-[20px]">add</span>
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-sm font-medium text-[#6b7280] hover:text-red-500 transition-colors flex items-center gap-1"
                          >
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                            <span className="hidden sm:inline">Remove</span>
                          </button>
                        </div>
                        <button className="text-sm font-medium text-primary hover:underline">
                          Save for later
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Continue Shopping Link */}
                <div className="pt-4">
                  <Link
                    className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-lg">arrow_back</span>
                    Continue Shopping
                  </Link>
                </div>
              </div>

              {/* Right Column: Order Summary */}
              <div className="lg:col-span-4">
                <div className="sticky top-24 rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-[#111418] mb-6">Order Summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <p className="text-[#6b7280] text-sm">Subtotal</p>
                      <p className="text-[#111418] font-medium">${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-[#6b7280] text-sm">Estimated Shipping</p>
                      <p className="text-[#111418] font-medium">${shipping.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-[#6b7280] text-sm">Tax</p>
                      <p className="text-[#111418] font-medium">${tax.toFixed(2)}</p>
                    </div>
                    <div className="my-6 border-t border-[#e5e7eb]"></div>
                    <div className="flex justify-between items-center mb-6">
                      <p className="text-[#111418] text-lg font-bold">Total</p>
                      <p className="text-primary text-2xl font-black tracking-tight">
                        ${total.toFixed(2)}
                      </p>
                    </div>

                    {/* Promo Code */}
                    <div className="mb-6">
                      <label className="block text-xs font-semibold text-[#6b7280] uppercase mb-2">
                        Promo Code
                      </label>
                      <div className="flex w-full items-stretch rounded-lg h-11 border border-[#e5e7eb] overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                        <Input
                          className="flex w-full min-w-0 flex-1 resize-none border-none bg-white focus:outline-0 focus:ring-0 px-3 text-sm text-[#111418] placeholder:text-[#6b7280] h-full rounded-none"
                          placeholder="Enter code"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <button className="bg-gray-100 px-4 text-sm font-bold text-[#111418] hover:bg-gray-200 transition-colors border-l border-[#e5e7eb]">
                          Apply
                        </button>
                      </div>
                    </div>

                    <Button
                      size="lg"
                      className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors shadow-sm"
                    >
                      Proceed to Checkout
                    </Button>

                    <div className="flex items-center justify-center gap-2 mt-4 text-[#6b7280]">
                      <span className="material-symbols-outlined text-lg">lock</span>
                      <span className="text-xs font-medium">Secure Checkout</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-[#e5e7eb] bg-white py-8 mt-auto">
        <div className="layout-container px-4 lg:px-40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#6b7280]">© 2023 BookNow, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link className="text-sm text-[#6b7280] hover:text-[#111418]" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm text-[#6b7280] hover:text-[#111418]" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm text-[#6b7280] hover:text-[#111418]" href="#">
              Help Center
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

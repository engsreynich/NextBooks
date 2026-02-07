'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function BookDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedFormat, setSelectedFormat] = useState('hardcover');

  return (
    <div className="bg-white text-[#111418] antialiased">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
       

        <main className="flex-1 flex justify-center py-6 md:py-10">
          <div className="layout-content-container flex flex-col max-w-[1100px] w-full px-4 md:px-8">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap gap-2 pb-6">
              <Link className="text-[#617589] text-sm font-medium hover:text-primary" href="#">
                Home
              </Link>
              <span className="text-[#617589] text-sm font-medium">/</span>
              <Link className="text-[#617589] text-sm font-medium hover:text-primary" href="#">
                Books
              </Link>
              <span className="text-[#617589] text-sm font-medium">/</span>
              <Link className="text-[#617589] text-sm font-medium hover:text-primary" href="#">
                Fiction
              </Link>
              <span className="text-[#617589] text-sm font-medium">/</span>
              <span className="text-[#111418] text-sm font-medium">The Midnight Library</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
              {/* Left Column: Product Gallery */}
              <div className="md:col-span-5 flex flex-col gap-6">
                <div className="w-full aspect-[2/3] bg-gray-100 rounded-lg overflow-hidden relative shadow-sm group">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtTnuTBQ0Q08aoTKKQ-gO6GkwlxNlks_zvz9WeySuP-pT17aXqBjO9kJ2WeI_JFq68WBJfwaEerUXtUlt0GNBZIGD7ygy_3ZZXGX8NgN_5GqkdhLogBKasFBREjULzyrtKBhD_d1ebH6LBt_S6Ai-ZuRVd2pEJjHaobsiVbTE5JM8Zl1EJ8VqkkYql7E7jAdCzuYtycPysaJVesIo0422bXxtKqD7K14wO9Zb9mjc38MguBwWcS4pYZ1eiZ4esUCv7S1nN6tFB0-I")',
                    }}
                  ></div>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                  <button className="shrink-0 w-20 h-28 rounded-md overflow-hidden border-2 border-primary cursor-pointer">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB8pLOfGxwLA8hWxlPezwp85NAwdpgpPA_9b1KLBb9oVN3RvL3YGVOUsYjlDWUMF8WokcYB7VJj6_sflHAMLhjdf5GlWs6e8vKZSZ9aaN6Z7WHr8xg0upN6JIETpc0IyvNDodQnSRMKTzpQ7Jz3zzrL8lyyCNvGd8_WBJRFO52G3GHhlLdRHvPPK8FHgjrP05Ve6svXlEXUtRH1sA7wsoOwPb0rw4pD5w90aLxDQCis3TeQEjktrtZ9HrPUUPHp-HGkg4OuK8GLJIs")',
                      }}
                    ></div>
                  </button>
                  <button className="shrink-0 w-20 h-28 rounded-md overflow-hidden border border-transparent hover:border-gray-300 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqe-7ZcJFlwTn9b8wL-6jQunpGwxtG3RjFJJ81RiirrQYAevxh0lWQZYXK2sBjaKGixYuI5UgV9-j69Uv3CYulRzZ5W4J6JQ2cxlvmN7k2zCG1DLlFsT_rzCHRE7dd3pPblRQabhrTo-fGG40QK0JLPH8EZ0ZJ-cF7_xdaNmCdlRR_Y7VpeM20r7TG-NB49kFnOmfIgZ3kQ--vo7UptMXhn9wZnQOW9HaMgTC6qx6d2vmnzBu5PFS8EWSSUj_QAxj2r5HMIy6Lgx4")',
                      }}
                    ></div>
                  </button>
                  <button className="shrink-0 w-20 h-28 rounded-md overflow-hidden border border-transparent hover:border-gray-300 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZ3V-X6SGZ2Lre4DErUCkX5w5wsPWnpUBIiJH4Y1knq65kVJx3aSBTA0dL_CCSiuF5FC6sJXj3V98N2U1CPXDUu5YGQ6zx8JF98DEMWefKaV5iacLAH3EtpCSqSkUOgbmPvZILpWiGfSptFGduF1KF9Z4CsiPtvO_jr_hnu03OVinfPeI5F9gDfyVm-MPXQZ2LZ8Nes8Jx9Jr9pQJoBWU0DuGf8QWX2sJxV21lMhAAsGVKh0eb0y0ISXfyaxg5O5QeDjyN7-cYV3s")',
                      }}
                    ></div>
                  </button>
                </div>
              </div>

              {/* Right Column: Product Details */}
              <div className="md:col-span-7 flex flex-col gap-8">
                {/* Header Info */}
                <div className="flex flex-col gap-4">
                  <h1 className="text-[#111418] text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                    The Midnight Library
                  </h1>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-base">
                    <p className="text-[#617589]">
                      by{' '}
                      <Link className="text-primary font-semibold hover:underline" href="#">
                        Matt Haig
                      </Link>
                    </p>
                    <span className="hidden sm:block text-gray-300">|</span>
                    <div className="flex items-center gap-2">
                      <div className="flex text-primary">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`material-symbols-outlined filled text-[18px] ${
                              i === 4 ? 'opacity-50' : ''
                            }`}
                          >
                            star
                          </span>
                        ))}
                      </div>
                      <span className="text-[#617589] text-sm font-medium">
                        4.8 (2,453 reviews)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3">
                  <p className="text-[#111418] text-4xl font-black tracking-tight">$19.99</p>
                  <p className="text-[#617589] text-xl line-through">$24.99</p>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-green-700 text-sm font-bold">
                    Save 20%
                  </span>
                </div>

                {/* Format Selection */}
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-semibold text-[#111418]">Format</label>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedFormat('hardcover')}
                      className={`px-6 py-3 rounded-lg border-2 font-semibold text-sm transition-all ${
                        selectedFormat === 'hardcover'
                          ? 'border-primary bg-blue-50 text-primary'
                          : 'border-[#dbe0e6] text-[#111418] hover:border-gray-300'
                      }`}
                    >
                      Hardcover
                    </button>
                    <button
                      onClick={() => setSelectedFormat('paperback')}
                      className={`px-6 py-3 rounded-lg border-2 font-semibold text-sm transition-all ${
                        selectedFormat === 'paperback'
                          ? 'border-primary bg-blue-50 text-primary'
                          : 'border-[#dbe0e6] text-[#111418] hover:border-gray-300'
                      }`}
                    >
                      Paperback
                    </button>
                    <button
                      onClick={() => setSelectedFormat('ebook')}
                      className={`px-6 py-3 rounded-lg border-2 font-semibold text-sm transition-all ${
                        selectedFormat === 'ebook'
                          ? 'border-primary bg-blue-50 text-primary'
                          : 'border-[#dbe0e6] text-[#111418] hover:border-gray-300'
                      }`}
                    >
                      E-book
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-4">
                    <label className="text-sm font-semibold text-[#111418]">Qty:</label>
                    <div className="flex items-center border border-[#dbe0e6] rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-2 text-[#617589] hover:text-[#111418] transition-colors"
                      >
                        <span className="material-symbols-outlined text-[20px]">remove</span>
                      </button>
                      <span className="px-6 py-2 font-semibold text-[#111418] border-x border-[#dbe0e6]">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-2 text-[#617589] hover:text-[#111418] transition-colors"
                      >
                        <span className="material-symbols-outlined text-[20px]">add</span>
                      </button>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="flex-1 bg-primary text-white hover:bg-blue-600 h-12 font-bold text-base shadow-md"
                  >
                    <span className="material-symbols-outlined mr-2">shopping_cart</span>
                    Add to Cart
                  </Button>
                </div>

                {/* Additional Info */}
                <div className="flex flex-wrap gap-6 pt-4 border-t border-[#f0f2f4]">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-green-600">check_circle</span>
                    <span className="text-[#617589]">In Stock</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-primary">local_shipping</span>
                    <span className="text-[#617589]">Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-primary">autorenew</span>
                    <span className="text-[#617589]">Easy Returns</span>
                  </div>
                </div>

                {/* Expandable Sections */}
                <div className="flex flex-col gap-4 pt-4">
                  <details className="flex flex-col rounded-lg border border-[#dbe0e6] bg-white px-5 py-3 group">
                    <summary className="flex cursor-pointer items-center justify-between gap-6 outline-none">
                      <p className="text-[#111418] text-base font-semibold leading-normal">
                        Description
                      </p>
                      <span className="material-symbols-outlined text-[#617589] transition-transform duration-200 group-open:rotate-180">
                        expand_more
                      </span>
                    </summary>
                    <div className="text-[#617589] text-sm leading-relaxed pt-4 pb-2">
                      <p>
                        Nora Seed finds herself in a magical library where each book offers her a
                        chance to live a different life. Faced with the possibility of changing her
                        past regrets, Nora must decide what truly makes life meaningful.
                      </p>
                      <br />
                      <p>
                        This dazzling novel about the choices that go into a life well lived is a
                        New York Times Bestseller and a Good Morning America Book Club Pick.
                      </p>
                    </div>
                  </details>

                  <details className="flex flex-col rounded-lg border border-[#dbe0e6] bg-white px-5 py-3 group">
                    <summary className="flex cursor-pointer items-center justify-between gap-6 outline-none">
                      <p className="text-[#111418] text-base font-semibold leading-normal">
                        Product Details
                      </p>
                      <span className="material-symbols-outlined text-[#617589] transition-transform duration-200 group-open:rotate-180">
                        expand_more
                      </span>
                    </summary>
                    <div className="grid grid-cols-2 gap-y-2 text-sm pt-4 pb-2">
                      <div className="text-[#617589]">Publisher</div>
                      <div className="text-[#111418] font-medium text-right">Viking</div>
                      <div className="text-[#617589]">Publication Date</div>
                      <div className="text-[#111418] font-medium text-right">Sep 29, 2020</div>
                      <div className="text-[#617589]">Pages</div>
                      <div className="text-[#111418] font-medium text-right">304</div>
                      <div className="text-[#617589]">ISBN</div>
                      <div className="text-[#111418] font-medium text-right">978-0525559474</div>
                    </div>
                  </details>

                  <details className="flex flex-col rounded-lg border border-[#dbe0e6] bg-white px-5 py-3 group">
                    <summary className="flex cursor-pointer items-center justify-between gap-6 outline-none">
                      <p className="text-[#111418] text-base font-semibold leading-normal">
                        Author Bio
                      </p>
                      <span className="material-symbols-outlined text-[#617589] transition-transform duration-200 group-open:rotate-180">
                        expand_more
                      </span>
                    </summary>
                    <div className="text-[#617589] text-sm leading-relaxed pt-4 pb-2">
                      <p>
                        Matt Haig is the author of the New York Times Bestseller The Midnight
                        Library, as well as How to Stop Time, The Humans, and The Radleys. He has
                        also written the memoir Reasons to Stay Alive.
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-20 border-t border-[#f0f2f4] pt-12">
              <h3 className="text-2xl font-bold text-[#111418] mb-8">Customer Reviews</h3>
              <div className="flex flex-col md:flex-row gap-12">
                {/* Summary */}
                <div className="flex flex-col gap-6 md:w-1/3">
                  <div className="flex items-end gap-4">
                    <p className="text-[#111418] text-6xl font-black leading-none tracking-tight">
                      4.8
                    </p>
                    <div className="flex flex-col gap-1 pb-1">
                      <div className="flex text-primary">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`material-symbols-outlined filled text-[24px] ${
                              i === 4 ? 'opacity-50' : ''
                            }`}
                          >
                            star
                          </span>
                        ))}
                      </div>
                      <p className="text-[#617589] text-sm font-medium">Based on 2,453 reviews</p>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="flex flex-col gap-3 w-full">
                    {[
                      { stars: 5, percent: 77 },
                      { stars: 4, percent: 15 },
                      { stars: 3, percent: 5 },
                      { stars: 2, percent: 2 },
                      { stars: 1, percent: 1 },
                    ].map((item) => (
                      <div key={item.stars} className="flex items-center gap-3 text-sm">
                        <span className="text-[#111418] font-medium w-3">{item.stars}</span>
                        <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#f0f2f4]">
                          <div
                            className="rounded-full bg-primary"
                            style={{ width: `${item.percent}%` }}
                          ></div>
                        </div>
                        <span className="text-[#617589] w-8 text-right">{item.percent}%</span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-2 w-full h-10 border border-[#dbe0e6] rounded-lg text-[#111418] font-medium text-sm hover:bg-[#f0f2f4] transition-colors">
                    Write a Review
                  </button>
                </div>

                {/* Individual Reviews */}
                <div className="flex-1 flex flex-col gap-6">
                  <div className="flex flex-col gap-3 pb-6 border-b border-[#f0f2f4]">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col gap-1">
                        <p className="text-[#111418] font-bold text-sm">Life changing read</p>
                        <div className="flex text-primary text-xs">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="material-symbols-outlined filled text-[16px]">
                              star
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-[#617589] text-xs">2 days ago</p>
                    </div>
                    <p className="text-[#617589] text-sm leading-normal">
                      I absolutely loved this book. It made me reflect on my own life choices in a
                      way that wasn&apos;t heavy or depressing, but uplifting. Highly recommend for
                      anyone feeling stuck.
                    </p>
                    <p className="text-[#111418] text-xs font-medium">Sarah J.</p>
                  </div>

                  <div className="flex flex-col gap-3 pb-6 border-b border-[#f0f2f4]">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col gap-1">
                        <p className="text-[#111418] font-bold text-sm">Beautiful concept</p>
                        <div className="flex text-primary text-xs">
                          {[...Array(4)].map((_, i) => (
                            <span key={i} className="material-symbols-outlined filled text-[16px]">
                              star
                            </span>
                          ))}
                          <span className="material-symbols-outlined text-[16px]">star</span>
                        </div>
                      </div>
                      <p className="text-[#617589] text-xs">1 week ago</p>
                    </div>
                    <p className="text-[#617589] text-sm leading-normal">
                      The idea of the library is fascinating. The pacing was a bit slow in the
                      middle, but the ending made it all worth it.
                    </p>
                    <p className="text-[#111418] text-xs font-medium">Michael T.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

interface Order {
  id: string;
  date: string;
  title: string;
  image: string;
  total: number;
  status: 'Shipped' | 'Delivered' | 'Processing' | 'Cancelled';
}

export default function OrderHistoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [timeFilter, setTimeFilter] = useState('Last 30 days');

  const orders: Order[] = [
    {
      id: '#ORD-8821',
      date: 'Oct 24, 2023',
      title: 'The Midnight Library',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD0bEaRH3eBDNf2OFF2m5xjEuR8QWXjVcjktnhxDBTNJmWSO21ZPPrrBfcYYGVchEhG9K_ybYH2oZel8le1PeoFOY9db76VFqkIsx37wrwEK5WVXB_M1QkQugZwXavkrk6F7gMzxmar3faBN8HBIoaL61V5VJMIY-Ug-AbROMn8b9WJ4_ednzBYwC5HEZIJ8f3yo1PYCRK4PtTuz-nWRB4XRJyShIR-HuaeAbobWZEHvwTneqWW4_Sp4Su3nqJNLdQFSGZyU_ux7Yg',
      total: 19.99,
      status: 'Shipped',
    },
    {
      id: '#ORD-7781',
      date: 'Sep 12, 2023',
      title: '1984',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAa4117BYnCMrc-n-G3uREmtx3EiuD7PZ6qyrubNSR-FF-OhT3FHWMZPn7K3_fXEOhZJ4-3EsKo0SlPLl2myp77WMj0DB_ePYECQr_uMu2JQyL5mEBiYh2H8JsSFSDyEOHxLDf9MW9Wc0BQHfDA2zERLQO8RjmxXn5eprRmYrsA5cSLjCnJEdMoBWs--K81_TXxwnGv5HTPkYH1W6rZxiiHL4HlKViiUcFVHTtkBdQNQvmchHDnIxTihoWVOoQPQzkSr9e_vySYtbs',
      total: 12.5,
      status: 'Delivered',
    },
    {
      id: '#ORD-7760',
      date: 'Aug 05, 2023',
      title: 'Dune',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDS7JMKm1dZfQgLwWjYF8yWHS-8Wq3GuOD8qH-_T776WybUCIXLLZOh9uPlirn0NBJOuzg7ySwQir3IKx7b3oHum0UV9cknmVdhPg9a-j-MbsCC_RjKLz73AWyfLzLWXYtQ06cCQO5AeUyEwgAgfdJ_J_lCADUCuA8JgpMZVvF-j4Qdmd2iF_yQwhCKZkOFBrTUYW5jVa-zVkl3HlpD51Nx9J0PrIxKyQto4xr8tHdZkO4vEX9TnE0WYm5i4tXTX0EBU-WBOUBPyiA',
      total: 25.0,
      status: 'Processing',
    },
    {
      id: '#ORD-7521',
      date: 'Jul 22, 2023',
      title: 'Project Hail Mary',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAQbcUsQDf34k5q2LyDfr08z0gv86u5BG1Jli78nEtjuStRmiH0IFQhutILdoM2bTpxyIokswLfoENZutFu-2gjtnZuh8bEWJUvU3c2ATH2POQyxgoZ8_y3jho6xU3UHtRxVGyQlOAvkCA88nP4DXK99turiF9dnVFinCvizuVpcdNXnd8tcG8865uOQwS2RW4p336oh_xRVx0GJXtTBnTkxrM2mzyjHxJC2iQZsF23_D684nMU2O3kDXJcR_4C-Wfj1eKy78b1-3Q',
      total: 28.99,
      status: 'Delivered',
    },
    {
      id: '#ORD-7100',
      date: 'Jun 15, 2023',
      title: 'Thinking, Fast and Slow',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBXu5xDzlD-kgfAa6WrgiReT3hF4tVM166zGp5WrsO9rAvwF_TyffiyiJ4uE-5FN9B0gLp9zQ-6e_GlIjP3N8zen1Mn4TrSRL6I5DrQB6ebHy3XEZgPNJFxSAF0oJRuS_riHLV1ApteQKyzlcMU2wuwjmJKBNV4Djc6khtr7In10cfLR2lD5Tw16An_enAO5QPekr3LgtBTWo3kCJSyU_N3xSMzRtwc0gERhrIcSxKGJV5h4RmKJ8AxAKX6kGamTA3SjuS_sfobV_E',
      total: 18.5,
      status: 'Cancelled',
    },
  ];

  const getStatusStyle = (status: Order['status']) => {
    const styles = {
      Shipped: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200',
      Delivered: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200',
      Processing: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200',
      Cancelled: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200',
    };
    return styles[status];
  };

  const getStatusDotColor = (status: Order['status']) => {
    const colors = {
      Shipped: 'bg-blue-600 dark:bg-blue-400',
      Delivered: 'bg-green-600 dark:bg-green-400',
      Processing: 'bg-orange-500 dark:bg-orange-400',
      Cancelled: 'bg-red-600 dark:bg-red-400',
    };
    return colors[status];
  };

  return (
    <div className="bg-white dark:bg-[#101922] text-[#111418] dark:text-white font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
       

        {/* Main Content */}
        <main className="flex-1 flex justify-center py-8 px-4 sm:px-10 bg-white dark:bg-[#101922]">
          <div className="flex flex-col max-w-[1100px] flex-1 w-full">
            {/* Breadcrumbs */}
            <nav className="flex flex-wrap gap-2 py-4 text-sm">
              <Link
                className="text-[#617589] hover:text-primary font-medium leading-normal transition-colors"
                href="#"
              >
                Home
              </Link>
              <span className="text-[#617589] font-medium leading-normal">/</span>
              <Link
                className="text-[#617589] hover:text-primary font-medium leading-normal transition-colors"
                href="#"
              >
                Account
              </Link>
              <span className="text-[#617589] font-medium leading-normal">/</span>
              <span className="text-[#111418] dark:text-white font-medium leading-normal">
                Order History
              </span>
            </nav>

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 py-6">
              <div className="flex flex-col gap-2">
                <h1 className="text-[#111418] dark:text-white text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
                  Order History
                </h1>
                <p className="text-[#617589] text-base font-normal leading-normal">
                  View and manage your past book purchases
                </p>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 py-4 mb-4">
              <div className="relative flex-1 min-w-[280px] max-w-[400px]">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="material-symbols-outlined text-[#617589]">search</span>
                </div>
                <Input
                  className="block w-full p-3 pl-10 text-sm text-[#111418] dark:text-white border border-[#dbe0e6] dark:border-gray-700 rounded-lg bg-white dark:bg-[#1e2a36] focus:ring-primary focus:border-primary placeholder:text-[#617589]"
                  placeholder="Search by Order ID or Book Title"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="relative w-full sm:w-60">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="material-symbols-outlined text-[#617589]">filter_list</span>
                </div>
                <select
                  className="block w-full p-3 pl-10 text-sm text-[#111418] dark:text-white border border-[#dbe0e6] dark:border-gray-700 rounded-lg bg-white dark:bg-[#1e2a36] focus:ring-primary focus:border-primary appearance-none cursor-pointer"
                  value={timeFilter}
                  onChange={(e) => setTimeFilter(e.target.value)}
                >
                  <option>Last 30 days</option>
                  <option>Last 3 months</option>
                  <option>2023</option>
                  <option>All time</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="material-symbols-outlined text-[#617589]">expand_more</span>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="w-full overflow-hidden rounded-lg border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1e2a36] shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-[#617589]">
                  <thead className="bg-[#f9fafb] dark:bg-[#16212b] text-[#111418] dark:text-white font-semibold">
                    <tr>
                      <th className="px-6 py-3 whitespace-nowrap">Order ID</th>
                      <th className="px-6 py-3 whitespace-nowrap">Date</th>
                      <th className="px-6 py-3">Book</th>
                      <th className="px-6 py-3 whitespace-nowrap">Total</th>
                      <th className="px-6 py-3 whitespace-nowrap">Status</th>
                      <th className="px-6 py-3 text-right whitespace-nowrap">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr
                        key={order.id}
                        className="bg-white dark:bg-[#1e2a36] hover:bg-gray-50 dark:hover:bg-[#253240] transition-colors group"
                      >
                        <td className="px-6 py-4 font-medium text-[#111418] dark:text-white whitespace-nowrap">
                          {order.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-10 h-14 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden shrink-0 bg-cover bg-center"
                              style={{
                                backgroundImage: `url('${order.image}')`,
                              }}
                            ></div>
                            <span className="line-clamp-2">{order.title}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-medium text-[#111418] dark:text-white whitespace-nowrap">
                          ${order.total.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                              order.status
                            )}`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${getStatusDotColor(
                                order.status
                              )}`}
                            ></span>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap">
                          <button className="text-primary hover:text-blue-700 dark:hover:text-blue-400 font-semibold text-sm transition-colors hover:underline">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination Footer */}
              <div className="flex items-center justify-between px-6 py-4 bg-white dark:bg-[#1e2a36] border-t border-[#dbe0e6] dark:border-gray-700">
                <span className="text-sm text-[#617589]">Showing 1-5 of 24 orders</span>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="px-3 py-1.5 border border-[#dbe0e6] dark:border-gray-600 rounded text-sm font-medium text-[#617589] dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50"
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    className="px-3 py-1.5 border border-[#dbe0e6] dark:border-gray-600 rounded text-sm font-medium text-[#111418] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingCart, BookOpen, User, Menu } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-white px-4 py-3 md:px-10">
      <div className="flex items-center gap-4">
        <BookOpen className="h-8 w-8 text-primary" />
        <h2 className="text-xl font-bold">BookNow</h2>
      </div>

      <nav className="hidden md:flex gap-6">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <Link href="/books" className="hover:text-primary">
          Books
        </Link>
        <Link href="/orders" className="hover:text-primary">
          My Orders
        </Link>
        <Link href="/account" className="hover:text-primary">
          Account
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2">
          <Input placeholder="Search books..." className="w-64" />
        </div>
        <Button variant="ghost" size="icon">
          <ShoppingCart className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}

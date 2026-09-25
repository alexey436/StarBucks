import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WeMakeSection } from './components/WeMakeSection';
import { ProductsSection } from './components/ProductsSection';
import { EventsSection } from './components/EventsSection';
import { ContactsSection } from './components/ContactsSection';
import { Footer } from './components/Footer';
import {
  CookingProcessModal,
  OrderCoffeeModal,
  EventDetailsModal,
  CartDrawer,
  ProductItem,
  CartItem,
} from './components/Modals';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCookingOpen, setIsCookingOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<{
    id: string;
    title: string;
    description: string;
    promoCode?: string;
  } | null>(null);

  const handleAddToCart = (product: ProductItem, milk: string, syrup: string, size: string) => {
    setCart((prev) => {
      const existing = prev.find(
        (i) => i.id === product.id && i.selectedMilk === milk && i.selectedSyrup === syrup && i.volume === size
      );
      if (existing) {
        return prev.map((i) => (i === existing ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [
        ...prev,
        {
          ...product,
          volume: size,
          quantity: 1,
          selectedMilk: milk,
          selectedSyrup: syrup,
        },
      ];
    });
  };

  const handleRemoveFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleScrollToMenu = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToEvents = () => {
    const el = document.getElementById('events');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#111413] text-white selection:bg-[#00a862] selection:text-white antialiased font-sans">
      <Navbar
        cartCount={cart.reduce((sum, i) => sum + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectCoffee={handleScrollToMenu}
      />

      <main>
        <HeroSection
          onSelectCoffee={handleScrollToMenu}
          onMoreDetails={handleScrollToEvents}
        />

        <WeMakeSection onOpenCookingProcess={() => setIsCookingOpen(true)} />

        <ProductsSection onSelectProduct={(p) => setSelectedProduct(p)} />

        <EventsSection onSelectEvent={(ev) => setSelectedEvent(ev)} />

        <ContactsSection />
      </main>

      <Footer
        onSelectCoffee={handleScrollToMenu}
        onMoreDetails={handleScrollToEvents}
        onOpenCookingProcess={() => setIsCookingOpen(true)}
      />

      {/* Interactive Modals & Cart Drawer */}
      <CookingProcessModal
        isOpen={isCookingOpen}
        onClose={() => setIsCookingOpen(false)}
      />

      <OrderCoffeeModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <EventDetailsModal
        event={selectedEvent}
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onRemove={handleRemoveFromCart}
        onClear={handleClearCart}
      />
    </div>
  );
}

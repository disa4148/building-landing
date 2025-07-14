'use client';

import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/src/shared/ui/sheet';
import { cn } from '@/src/shared/lib/utils';

import css from './Header.module.scss';

const navItems = [
  { label: 'Главная', href: '/' },
  { label: 'Стоимость', href: '/price' },
  { label: 'Каталог цветов', href: '/colors' },
  { label: 'О нас', href: '#about' },
  { label: 'Портфолио', href: '#works' },
  { label: 'Этапы работ', href: '#process' },
  { label: 'Преимущества', href: '#features' },
];

const Header = (): JSX.Element => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(
    null,
  );
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setScrollDirection('down');
    } else if (currentScrollY < lastScrollY - 20) {
      setScrollDirection('up');
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleNavClick = (href: string) => {
    setIsSheetOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <header
      className={cn(css.header, {
        [css.hide]: scrollDirection === 'down',
        [css.visible]: scrollDirection === 'up',
      })}
    >
      <div className={css.logo}>ЛОГО</div>

      <nav className={css.nav}>
        <div className={css.items}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(css.item)}
              onClick={(e) => {
                if (item.href.startsWith('#')) {
                  e.preventDefault();
                  handleNavClick(item.href);
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <button className={css.burger} aria-label="Открыть меню">
              <Menu />
            </button>
          </SheetTrigger>
          <SheetContent side="top" className={css.sheetContent}>
            <SheetHeader className={css.sheetHeader}>
              <div className={css.sheetTitleContainer}>
                <SheetTitle className={css.sheetTitle}>Навигация</SheetTitle>
                <SheetClose asChild>
                  <button className={css.closeButton} aria-label="Закрыть меню">
                    <X />
                  </button>
                </SheetClose>
              </div>
            </SheetHeader>

            <nav className={css.sheetNav}>
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={css.sheetItem}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;

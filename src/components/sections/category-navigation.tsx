import Link from 'next/link';
import { Button } from '@/components/ui/button';

const categories = [
  { name: 'Snacks', href: '/collection/snacks' },
  { name: 'Bath & Body', href: '/collection/bath-body' },
  { name: 'Household', href: '/collection/cleaning' },
  { name: 'Reusables', href: '/collection/reusables' },
  { name: 'Oils, Vinegars & Honey', href: '/collection/oils-vinegars-honey' },
  { name: 'Nuts & Seeds', href: '/collection/nuts-seeds' },
  { name: 'Coffee & Tea', href: '/collection/coffee-tea' },
  { name: 'Superfoods', href: '/collection/superfoods' },
];

const CategoryNavigation = () => {
  return (
    <section className="bg-background py-24 px-8 relative overflow-hidden">
      <div className="container flex flex-col items-center">
        <div className="relative">
          <ul className="text-center space-y-4">
            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  href={category.href}
                  className="font-display text-primary font-normal leading-[1.2] tracking-[-0.02em] text-[2rem] md:text-[3rem] lg:text-[4rem] transition-colors hover:text-text-dark-coral"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16">
          <Button
            variant="outline"
            className="border-primary text-primary rounded-full px-8 py-3 text-xl font-normal h-auto hover:bg-primary hover:text-primary-foreground"
            style={{
              paddingTop: '0.75rem',
              paddingBottom: '0.75rem',
              paddingLeft: '2rem',
              paddingRight: '2rem',
              fontSize: '1.25rem',
            }}
          >
            More +
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryNavigation;
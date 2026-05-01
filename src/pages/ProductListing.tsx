import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

const benefits = [
  {
    id: 'about',
    title: 'UK Grown Trees',
    text: 'Farm fresh British grown trees, sustainably sourced',
    icon: (
      <path d="M20 7L12 18H16L10 27H30L24 18H28L20 7ZM17 31H23" />
    ),
  },
  {
    id: 'delivery',
    title: 'Delivery Available',
    text: 'Fast and reliable delivery straight to your door',
    icon: (
      <path d="M8 24H26V14H8V24ZM26 18H32L36 22V24H26V18ZM13 29A3 3 0 1 0 13 23A3 3 0 0 0 13 29ZM31 29A3 3 0 1 0 31 23A3 3 0 0 0 31 29Z" />
    ),
  },
  {
    id: 'contact',
    title: 'Tree Stand Included',
    text: 'Every tree comes with a sturdy tree stand',
    icon: (
      <path d="M19 8H21V19H27L30 29H10L13 19H19V8ZM16 8H24" />
    ),
  },
];

export const ProductListing: React.FC = () => {
  return (
    <main
      className="min-h-screen bg-[#fff7ea] bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: "url('/images/cozy-shop-background.png')" }}
    >
      <div className="mx-auto flex w-full max-w-[1980px] flex-col items-center px-8 py-8">
        <section className="max-w-lg pb-8 text-center">
          <h1 className="font-serif text-5xl font-bold text-[#0B3D14] md:text-6xl">
            Celebrate the season with the perfect tree
          </h1>

          <div className="my-6 w-full flex items-center justify-center gap-3 text-[#8a6a35] h-12">
            <span className="h-px flex-1 bg-[#c8a168]" />
            <span className="text-xl">✦</span>
            <span className="h-px flex-1 bg-[#c8a168]" />
          </div>

          <div className="mx-auto grid grid-cols-1 gap-6 text-center justify-center md:grid-cols-[repeat(3,14rem)] mb-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} id={benefit.id} className="flex flex-col items-center justify-center">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#bfd6ad] bg-[#f6fbf1]/80">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 40 40"
                    className="h-9 w-9 fill-none stroke-[#183b17] stroke-[2.2] stroke-linecap-round stroke-linejoin-round"
                  >
                    {benefit.icon}
                  </svg>
                </span>
                <span className="max-w-64">
                  <h2 className="font-serif text-xl font-bold text-[#183b17]">{benefit.title}</h2>
                  <p className="mt-1 text-base leading-5 text-[#3f3427]">{benefit.text}</p>
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="my-15 flex w-full max-w-7xl items-center justify-center gap-4 h-12" >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8a6a35] to-[#8a6a35]" />
          <span className="text-sm text-[#C41E3A]">✦</span>
          <span className="h-2 w-24 rounded-full bg-[#dfeecf] ring-1 ring-[#bfd6ad]" />
          <span className="text-sm text-[#C41E3A]">✦</span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#8a6a35] to-[#8a6a35]" />
        </div>

        <section className="grid w-full max-w-[1320px] grid-cols-1 justify-center gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </div>
    </main>
  );
};

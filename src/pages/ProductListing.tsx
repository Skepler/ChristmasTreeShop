import { useState } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

const benefits = [
  {
    id: 'uk-grown-summary',
    title: 'UK Grown Trees',
    text: 'Farm fresh British grown trees, sustainably sourced',
    icon: (
      <path d="M20 7L12 18H16L10 27H30L24 18H28L20 7ZM17 31H23" />
    ),
  },
  {
    id: 'delivery-summary',
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

interface StatusMarkProps {
  isComplete: boolean;
}

const StatusMark: React.FC<StatusMarkProps> = ({ isComplete }) => (
  <span
    className={`absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border-2 ${
      isComplete
        ? 'border-[#0B5E1A] bg-[#e8f5e8] text-[#0B5E1A]'
        : 'border-[#C41E3A] bg-[#fff0f2] text-[#C41E3A]'
    }`}
    aria-label={isComplete ? 'Complete' : 'Incomplete'}
  >
    {isComplete ? (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M5 12.5L10 17.5L19 6.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ) : (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M7 7L17 17M17 7L7 17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )}
  </span>
);

export const ProductListing: React.FC = () => {
  const [selectedTreeId, setSelectedTreeId] = useState('');
  const [selectedTreeSize, setSelectedTreeSize] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [address, setAddress] = useState({
    name: '',
    street: '',
    city: '',
    postcode: '',
  });

  const selectedTree = products.find((product) => String(product.id) === selectedTreeId);
  const featuredTrees = products.slice(0, 4);
  const treeSelectionComplete = Boolean(selectedTreeId && selectedTreeSize);
  const deliveryDateComplete = Boolean(deliveryDate);
  const addressComplete = Object.values(address).every((value) => value.trim().length > 0);

  return (
    <main
      className="min-h-screen bg-[#fff7ea] bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: "url('/images/cozy-shop-background.png')" }}
    >
      <div className="mx-auto flex w-full  flex-col items-center px-8 py-8">
        <span id="shop" className="scroll-mt-36" />
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

          <div className="my-6 w-full flex items-center justify-center gap-3 text-[#8a6a35] h-12">
            <span className="h-px flex-1 bg-[#c8a168]" />
            <span className="text-xl">✦</span>
            <span className="h-px flex-1 bg-[#c8a168]" />
          </div>

        <section
          id="delivery"
          className="mt-16 w-full max-w-6xl scroll-mt-32 rounded-xl border border-[#e3c99f] bg-[#fff8ec]/95 px-8 py-10 text-center shadow-sm"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C41E3A]">Delivery</p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-[#0B3D14]">
            Delivery made simple
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#3f3427]">
            Pick your favourite tree, choose a delivery week, and we will bring it fresh to your home with care.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="relative flex min-h-80 flex-col items-center rounded-lg border border-[#d8c4a3] bg-[#fffdf8] p-5 pb-16">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B3D14] font-serif text-xl font-bold text-white">
                1
              </span>
              <h3 className="mt-4 font-serif text-xl font-bold text-[#183b17]">Pick your tree</h3>
              <p className="mt-2 text-sm leading-6 text-[#3f3427]">
                Choose a tree type and size for your home.
              </p>

              <div className="mt-5 w-full space-y-4 text-left">
                <label className="block text-sm font-bold text-[#183b17]" htmlFor="delivery-tree">
                  Tree type
                </label>
                <select
                  id="delivery-tree"
                  value={selectedTreeId}
                  onChange={(event) => {
                    setSelectedTreeId(event.target.value);
                    setSelectedTreeSize('');
                  }}
                  className="w-full rounded-md border border-[#d8c4a3] bg-white px-3 py-2 text-sm text-[#3f3427] focus:border-[#0B5E1A] focus:outline-none"
                >
                  <option value="">Choose a tree</option>
                  {featuredTrees.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>

                <label className="block text-sm font-bold text-[#183b17]" htmlFor="delivery-size">
                  Size
                </label>
                <select
                  id="delivery-size"
                  value={selectedTreeSize}
                  onChange={(event) => setSelectedTreeSize(event.target.value)}
                  disabled={!selectedTree}
                  className="w-full rounded-md border border-[#d8c4a3] bg-white px-3 py-2 text-sm text-[#3f3427] focus:border-[#0B5E1A] focus:outline-none disabled:bg-[#f5ead8] disabled:text-[#8a7b68]"
                >
                  <option value="">Choose a size</option>
                  {selectedTree?.sizes.map((size) => (
                    <option key={size.value} value={size.value}>
                      {size.label}
                    </option>
                  ))}
                </select>
              </div>

              <StatusMark isComplete={treeSelectionComplete} />
            </div>

            <div className="relative flex min-h-80 flex-col items-center rounded-lg border border-[#d8c4a3] bg-[#fffdf8] p-5 pb-16">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B3D14] font-serif text-xl font-bold text-white">
                2
              </span>
              <h3 className="mt-4 font-serif text-xl font-bold text-[#183b17]">Choose your delivery window</h3>
              <p className="mt-2 text-sm leading-6 text-[#3f3427]">
                Pick the exact day you would like your tree delivered.
              </p>

              <div className="mt-5 w-full text-left">
                <label className="block text-sm font-bold text-[#183b17]" htmlFor="delivery-date">
                  Delivery day
                </label>
                <input
                  id="delivery-date"
                  type="date"
                  value={deliveryDate}
                  onChange={(event) => setDeliveryDate(event.target.value)}
                  className="mt-2 w-full rounded-md border border-[#d8c4a3] bg-white px-3 py-2 text-sm text-[#3f3427] focus:border-[#0B5E1A] focus:outline-none"
                />
                {deliveryDate && (
                  <p className="mt-3 rounded-md bg-[#f6fbf1] px-3 py-2 text-sm text-[#183b17]">
                    Selected delivery day: {deliveryDate}
                  </p>
                )}
              </div>

              <StatusMark isComplete={deliveryDateComplete} />
            </div>

            <div className="relative flex min-h-80 flex-col items-center rounded-lg border border-[#d8c4a3] bg-[#fffdf8] p-5 pb-16">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B3D14] font-serif text-xl font-bold text-white">
                3
              </span>
              <h3 className="mt-4 font-serif text-xl font-bold text-[#183b17]">We bring it to your door</h3>
              <p className="mt-2 text-sm leading-6 text-[#3f3427]">
                Add the delivery address for your Christmas tree.
              </p>

              <div className="mt-5 grid w-full grid-cols-1 gap-3 text-left">
                <input
                  aria-label="Full name"
                  placeholder="Full name"
                  value={address.name}
                  onChange={(event) => setAddress({ ...address, name: event.target.value })}
                  className="rounded-md border border-[#d8c4a3] bg-white px-3 py-2 text-sm text-[#3f3427] focus:border-[#0B5E1A] focus:outline-none"
                />
                <input
                  aria-label="Street address"
                  placeholder="Street address"
                  value={address.street}
                  onChange={(event) => setAddress({ ...address, street: event.target.value })}
                  className="rounded-md border border-[#d8c4a3] bg-white px-3 py-2 text-sm text-[#3f3427] focus:border-[#0B5E1A] focus:outline-none"
                />
                <input
                  aria-label="City"
                  placeholder="City"
                  value={address.city}
                  onChange={(event) => setAddress({ ...address, city: event.target.value })}
                  className="rounded-md border border-[#d8c4a3] bg-white px-3 py-2 text-sm text-[#3f3427] focus:border-[#0B5E1A] focus:outline-none"
                />
                <input
                  aria-label="Postcode"
                  placeholder="Postcode"
                  value={address.postcode}
                  onChange={(event) => setAddress({ ...address, postcode: event.target.value })}
                  className="rounded-md border border-[#d8c4a3] bg-white px-3 py-2 text-sm text-[#3f3427] focus:border-[#0B5E1A] focus:outline-none"
                />
              </div>

              <StatusMark isComplete={addressComplete} />
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mt-16 w-full max-w-6xl scroll-mt-32 rounded-xl border border-[#e3c99f] bg-[#fff8ec]/95 px-8 py-10 text-center shadow-sm"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C41E3A]">About</p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-[#0B3D14]">
            A Christmas tradition grown with care
          </h2>

          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-base leading-7 text-[#3f3427]">
            <p>
              Christmas Tree Shop began as a small family tradition: choosing fresh trees for friends,
              neighbours, and anyone who wanted their home to feel properly festive.
            </p>
            <p>
              What started with a few carefully selected trees has grown into a seasonal shop built on
              friendly service, reliable delivery, and the simple joy of helping families find the tree
              that feels just right.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-lg border border-[#d8c4a3] bg-[#fffdf8] p-5">
              <h3 className="font-serif text-xl font-bold text-[#183b17]">Family tradition</h3>
              <p className="mt-2 text-sm leading-6 text-[#3f3427]">
                Built from the kind of holiday ritual that makes December feel special.
              </p>
            </div>

            <div className="rounded-lg border border-[#d8c4a3] bg-[#fffdf8] p-5">
              <h3 className="font-serif text-xl font-bold text-[#183b17]">Carefully chosen trees</h3>
              <p className="mt-2 text-sm leading-6 text-[#3f3427]">
                Every tree is selected for freshness, shape, and a warm festive presence.
              </p>
            </div>

            <div className="rounded-lg border border-[#d8c4a3] bg-[#fffdf8] p-5">
              <h3 className="font-serif text-xl font-bold text-[#183b17]">Delivered with care</h3>
              <p className="mt-2 text-sm leading-6 text-[#3f3427]">
                From shop to doorstep, each order is handled with calm seasonal care.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

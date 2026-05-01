export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B3D14] text-white">
      <div className="mx-auto grid w-full max-w-7xl place-items-center gap-8 px-6 py-10 text-center md:grid-cols-3">
        <div className="max-w-xs">
          <h2 className="font-serif text-2xl font-bold">Christmas Tree Shop</h2>
          <p className="mt-3 text-sm leading-6 text-white/80">
            Beautiful trees, warm service, and festive delivery for your home.
          </p>
        </div>

        <div className="max-w-xs">
          <h3 className="font-semibold uppercase tracking-wide text-white/90">Opening Hours</h3>
          <p className="mt-3 text-sm text-white/80">Monday - Saturday: 9:00 - 18:00</p>
          <p className="mt-1 text-sm text-white/80">Sunday: 10:00 - 16:00</p>
        </div>

        <div className="max-w-xs">
          <h3 className="font-semibold uppercase tracking-wide text-white/90">Contact</h3>
          <p className="mt-3 text-sm text-white/80">hello@christmastreeshop.co.uk</p>
          <p className="mt-1 text-sm text-white/80">Free UK mainland delivery</p>
        </div>
      </div>

      <div className="border-t border-white/15 px-6 py-4 text-center text-sm text-white/70">
        &copy; 2026 Christmas Tree Shop. All rights reserved.
      </div>
    </footer>
  );
};

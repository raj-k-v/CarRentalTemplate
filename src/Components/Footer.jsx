export default function Footer() {
  return (
    <div id="end" className="w-full  pt-30 bg-[#1f1f1f] text-gray-300">
   

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* Left Column */}
        <div>
          <div className="flex items-center gap-4 mb-100">
            <div className="w-16 h-16 rounded-xl bg-[#F4B041] text-black font-extrabold grid place-items-center shadow-lg">
              RR
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">RENT RIDE</h3>
              <p className="text-gray-400 mt-1 leading-tight">
                123 Anywhere St.<br />
                Any City, ST 12345
              </p>
            </div>
          </div>

          <div className="space-y-2 text-gray-400">
            <p>(123) 456-7890</p>
            <p>hello@email.example</p>
            <p>@riderentals</p>
          </div>
        </div>

        {/* Center Column */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-4">Rental Hours</h3>

          <div className="space-y-6 text-gray-400">
            <div>
              <p className="text-white font-semibold">Tuesday to Saturday</p>
              <p>6:00 am to 10:00 pm</p>
            </div>

            <div>
              <p className="text-white font-semibold">Sunday</p>
              <p>8:00 am to 9:00 pm</p>
              <p>Closed on Mondays</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-4">Stay Connected</h3>

          <div className="flex gap-6 text-gray-400 text-lg">
            <a href="#" className="hover:text-white">@instagram</a>
            <a href="#" className="hover:text-white">@twitter</a>
            <a href="#" className="hover:text-white">@facebook</a>
          </div>

          <div className="mt-6">
            <p className="font-semibold text-white">Need help?</p>
            <p className="text-gray-400">
              support@email.example <br /> +1 (555) 123-4567
            </p>
          </div>  
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 text-gray-500 text-sm flex justify-between max-w-7xl mx-auto px-6">
        <p>© {new Date().getFullYear()} Ride Rentals. All rights reserved.</p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-[#F4B041]">Privacy</a>
          <a href="#" className="hover:text-[#F4B041]">Terms</a>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";

export default function BookingInteractive() {
  const carTypes = ["Economy", "Compact", "Sedan", "SUV", "Luxury"]; 
  const locations = ["New York", "Los Angeles", "Chicago", "Miami", "Dallas"];

  const [carType, setCarType] = useState(carTypes[0]);
  const [pickupLocation, setPickupLocation] = useState(locations[0]);
  const [dropoffLocation, setDropoffLocation] = useState(locations[0]);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //ye page reload nhi hoga form submit krne pr and not scroll to top
    setError("");

    // validation
    if (!pickupDate || !returnDate) {
      setError("Please choose both pickup and return dates.");
      return;
    }

    const p = new Date(pickupDate);
    const r = new Date(returnDate);

    if (r < p) {
      setError("Return date must be the same or later than pick-up date.");
      return;
    }

    alert(
      `Booking:\nCar: ${carType}\nPickup: ${pickupLocation} on ${pickupDate}\nDropoff: ${dropoffLocation} on ${returnDate}`
    );
  };

  return (
    <>  
    <section className=" pb-18 inset-0 bg-black/20">

      <div className="relative z-10 max-w-6xl mx-auto p-15 flex flex-col tracking-widest text-center">
        <p className="text-[#f5b754] tracking-[1em] text-sm mb-3">RENT NOW</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">Book Auto Rental</h1>
      </div>

      {/* Interactive booking bar */}
      <div className="relative z-20 mb-12">
        <div className="max-w-6xl mx-auto px-6">
          <form
            onSubmit={handleSubmit}
            className="bg-[#1f1f1f] mt-5 p-2 backdrop-blur-sm rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.6)] "
          >
            <div className="flex flex-col md:flex-row items-center">
              {/* car type */}
              <div className="min-w-[180px] border-r  border-white/10 items-center px-4 py-4 flex  gap-4">
                
                <select
                  id="carType"
                  value={carType}
                  onChange={(e) => setCarType(e.target.value)}
                  className="bg-transparent text-center text-gray-300 w-full"
                >
                  {carTypes.map((c) => (
                    <option  key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* pickup location */}
              <div className="min-w-[180px] border-r  border-white/10 items-center px-4 py-4 flex  gap-4">
                <select
                  id="pickupLocation"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="bg-transparent text-center text-gray-300 focus:outline-none w-full"
                >
                  {locations.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>

              {/* pickup date */}
              <div className="min-w-[180px] border-r  border-white/10 items-center px-4 py-4 flex  gap-4">
                <label htmlFor="pickupDate" className="sr-only">
                  Pick Up Date
                </label>
                <input
                  id="pickupDate"
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="bg-transparent text-center text-gray-300 w-full"
                />

              </div>

              {/* dropoff location */}
              <div className="min-w-[180px] border-r  border-white/10 items-center px-4 py-4 flex  gap-4">
                <select
                  id="dropoffLocation"
                  value={dropoffLocation}
                  onChange={(e) => setDropoffLocation(e.target.value)}
                  className="bg-transparent text-center text-gray-300 focus:outline-none w-full"
                >
                  {locations.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>

              {/* return date */}
              <div className="min-w-[180px] border-r  border-white/10 items-center px-4 py-4 flex  gap-4">
                <input
                  id="returnDate"
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="bg-transparent text-center text-gray-300 focus:outline-none w-full"
                />
              </div>

              {/* submit */}
              <div className="px-4  mx-auto py-4">
                <button
                  type="submit"
                  className="bg-[#f5b754] text-black  px-6 py-3 rounded-full shadow-md hover:scale-[1.06]  cursor-pointer transiton-all duration-300 "
                >
                  Rent Now
                </button>
              </div>
            </div>
          </form>
          
            
          {/* error message */}
          <div className="text-red-400 mt-3 w-full h-10 text-center">{error}</div> 

          
        </div>
      </div>
    </section>
  </>
  );
}

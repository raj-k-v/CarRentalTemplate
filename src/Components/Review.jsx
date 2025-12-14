import "./Review.css";


const testimonials = [
  {
    text:
      "Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta urnase mauris in the interdum.",
  },
  {
    text:
      "Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta urnase mauris in the interdum.",
  },
  {
    text:
      "Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta urnase mauris in the interdum.",
  },
  {
    text:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
  },
  {
    text:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  }
  

];

function Review() {
  //
  const slides = [...testimonials, ...testimonials];

  return (
    <div className="p-32">
      {/* LEFT SECTION */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            We Are More Than <br />
            <span className="text-[#edaa3e]">A Car Rental Company</span>
          </h2>

          <p className="text-gray-300 mt-5 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Animi, magnam!
          </p>

          <a
            href="#"
            className="inline-block mt-8 font-light text-black transition duration-300 rounded-full bg-[#f5b754] cursor-pointer hover:border px-7 py-4 border-[#f5b754] border hover:border-white hover:text-black hover:bg-white group"
          >
            Read More
            <span className="inline-block ml-2 transition-transform duration-500 group-hover:rotate-45">
              ↗
            </span>
          </a>
        </div>
      </div>

      {/* TESTIMONIALS — INFINITE SLIDER */}
      <div className="mt-20">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <p className="text-[#f5b754] tracking-[1em] text-sm mb-2">
            TESTIMONIALS
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            What Clients Say
          </h2>
        </div>

        {/* Slider */}
      <div className="overflow-hidden">
        <div className="testimonial-track">
          {slides.map((item, i) => (
            <div key={i} className="w-1/3 p-4 shrink-0">
              <div
                className="
                  bg-[#1f1f1f] rounded-2xl p-8 min-h-[260px]
                  shadow-[0_6px_30px_rgba(0,0,0,0.6)]
                  transition-all duration-500 
                  hover:-translate-y-3
                  hover:shadow-[0_10px_40px_rgba(0,0,0,0.85)]
                  hover:bg-[#242424]
                "
              >
                <div className="text-[#f5b754] text-6xl mb-4">“</div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
 
      </div>
    </div>
  );
}

export default Review;

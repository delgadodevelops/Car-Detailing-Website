// PaintCorrection.js
import React from "react";

const PaintCorrection = () => {
  return (
    <div className=" ">
      <div className="container mx-auto my-8 p-8 rounded-md shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-8">Paint Correction</h1>
          <p className="text-lg mb-20">
           
Step into Foam Experts Detailing, the intersection of automotive excellence and precision. Enhance your vehicle's allure with our premium Car Paint Correction Service. Our adept detailing artisans employ cutting-edge techniques and superior products to eliminate imperfections like swirl marks and scratches, revealing a brilliant, showroom-ready finish. At Foam Experts Detailing, we boast meticulous craftsmanship and an unyielding commitment to excellence. Rely on us to rejuvenate your vehicle's paintwork, ensuring it shines with a brilliance that exceeds expectations. Embark on the ultimate automotive detailing journey – opt for Foam Experts Detailing for an impeccable transformation.
          </p>
        </div>

        <div className="mb-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Packages</h1>
          <h2 className="text-2xl font-bold">Entry-Level Package</h2>
          <img
            src="/images/Paint Correction Stage 1.jpg"
            alt="Package 1"
            className="w-full h-48 object-cover mb-4 rounded-md shadow"
          />
          <p>
          With our entry-level package, we execute a meticulous single-step paint correction procedure utilizing a gentle compound. This method effectively eliminates a majority of minor scratches and swirl marks from your vehicle's paint surface. Not only does this meticulous process restore your car's original luster, but it also revitalizes the overall appearance of your vehicle's paint finish. To further safeguard the newly corrected surface, we apply a high-quality sealant at the end of the process. This sealant not only enhances the gloss and depth of the paint but also provides lasting protection against environmental elements, ensuring a longer-lasting, showroom-quality finish for your vehicle.          </p>
          <p className="font-bold">Cars & Midsize: $400 | Oversize Vehicles: $500 </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold">Premium Package</h2>
          <img
            src="/images/Paint Correction Stage 2.jpeg"
            alt="Package 2"
            className="w-full h-48 object-cover mb-4 rounded-md shadow"
          />
          <p>
          In our exclusive premium package, we precisely execute a comprehensive three-step paint correction process. The initial step involves the application of a potent abrasive compound designed to effectively eliminate deep scratches and imperfections present in your vehicle's paint. Following this, in the second step, a sophisticated polishing compound is carefully applied to address finer scratches, restoring your vehicle's paint to a showroom-quality shine. To conclude the process, we apply a high-quality sealant, providing long-lasting protection and enhancing the overall luster of your vehicle's finish.
          </p>
          <p className="font-bold">Cars & Midsize: $800 | Oversize Vehicles: $1000</p>
        </div>
      </div>
    </div>
  );
};

export default PaintCorrection;


import React from "react";
import LazyLoad from "react-lazy-load";
const GallerySection = () => {
  return (
    <div className="mt-14 w-[79%] mx-auto">
      {/* this is the food gallery section */}
      <div>
        <h2 className="text-xl font-bold sm:text-2xl"> Recent Photo Shoots</h2>

        <p className="text-xl font-bold sm:text-2xl  text-[#72BFDC] mb-10">
          <small>Check Gallery</small>
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/7NBmZC1/gallery-2.jpg"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/WNrR7nv/gallery12.jpg"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/JB3w3GX/gallery1.jpg"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/F7scXBw/gallery-3.jpg"
                alt=""
              />
            </LazyLoad>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/644x3Nd/gallery-20.jpg0"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/3cxBRmn/gallery-4.jpg"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/4sBrg1K/gallery-5.jpg"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/ss7N9Td/gallery-6.jpg"
                alt=""
              />
            </LazyLoad>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/VBrv672/gallery-7.jpg"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/Q628DbS/gallery-19.jpg0"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/zHQZGfs/gallery-8.jpg"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/nzHpGyF/gallery-10.jpg0"
                alt=""
              />
            </LazyLoad>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/jVgfxV2/gallery-17.jpg0"
                alt=""
              />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.ibb.co/cXhV7R2/gallery-16.jpg0"
                alt=""
              />
            </LazyLoad>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;

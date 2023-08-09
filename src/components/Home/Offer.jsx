const Offer = () => {
  return (
    <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900">
      <div className="container mx-auto p-16 bg-[#23c483]">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-64 text-white">
          <div>
            <h2 className="text-center text-6xl font-bold">
              Up to
              <br className="sm:hidden" />
              50% Off
            </h2>
          </div>
          <div className="space-x-2 text-center py-2 lg:py-0">
            <span>Plus free shipping! Use code:</span>
            <span className="font-bold text-lg">MOOSE</span>
          </div>
          <div>
            <a
              href="#"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;

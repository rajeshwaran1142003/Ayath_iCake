import React from 'react';

const MasterCourse: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Master Baking Class</h1>
            <p className="text-lg md:text-xl text-gray-700 mt-4">
              Our Master Baking Class is designed for those who want to perfect their craft. You will learn professional techniques, creating everything from elegant pastries to sophisticated multi-layered cakes.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img src="/img/design.png?v=2" alt="Master Baking" className="w-full h-[320px] md:h-[420px] object-cover" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* COURSE CONTENT GRID */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Cakes & Sponges</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Vanilla sponge</li>
                <li>Chocolate sponge</li>
                <li>Black forest cake</li>
                <li>Strawberry glaze cake</li>
                <li>Chocolate Truffle Cake</li>
                <li>Tender coconut cake</li>
                <li>Twoteir wedding Cake</li>
                <li>Rosamalai cake</li>
                <li>Fordant theme cake</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Icings</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Whipped Cream Icing</li>
                <li>Butter Cream Icing</li>
                <li>Fondant Icing</li>
                <li>Chocolate Ganache</li>
                <li>Glaze Icing</li>
                <li>Cream Cheese Icing</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Cookies</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Salt Cookies</li>
                <li>Coconut cookie</li>
                <li>Cosak cookie</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Desserts</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Brownie</li>
                <li>Jes cakes</li>
                <li>Cupcake</li>
                <li>Tea cake</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Breads & Buns</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Korean cheese buns</li>
                <li>Garlic bread</li>
                <li>Pizza</li>
                <li>Donut</li>
                <li>Coconut bun</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Additional Skills</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Puff making veg & non-veg</li>
                <li>Chocolate making: 10 types</li>
                <li>Ice cream 10 varieties</li>
                <li>Macarons (French)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* COURSE DETAILS SIDEBAR */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm sticky top-24">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Course Details</h3>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold">Duration:</span> 12 days</p>
              <p><span className="font-semibold">Type:</span> Hands-on</p>
              <p><span className="font-semibold">Schedule:</span> 10:30 am to 2 pm</p>
              <p><span className="font-semibold">Level:</span> Advanced</p>
              <p><span className="font-semibold">Certificate:</span> Included</p>
            </div>
            <a
              href="https://wa.me/918248477869?text=Hi!%20I%20want%20to%20enroll%20in%20the%20Master%20Baking%20Class."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3 text-white font-semibold hover:from-pink-600 hover:to-rose-600 transition"
            >
              Enroll Now
            </a>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default MasterCourse;



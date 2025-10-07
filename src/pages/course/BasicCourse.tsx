import React from 'react';

const BasicCourse: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Basic Baking Class</h1>
            <p className="text-lg md:text-xl text-gray-700 mt-4">
              Perfect for beginners, our Basic Baking Class will teach you the fundamentals of baking. You'll learn to create delicious cakes, cookies, brownies, and more, with step-by-step guidance.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img src="/img/design(4).png?v=2" alt="Basic Baking" className="w-full h-[320px] md:h-[420px] object-cover" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* COURSE CONTENT GRID */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Cakes</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Black floral cake</li>
                <li>Kurt & Krimp cake</li>
                <li>Culage cake</li>
                <li>Butler Scotch cake</li>
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
            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:col-span-2">
              <h3 className="font-semibold text-gray-900 mb-3">Cookies</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 columns-1 sm:columns-2">
                <li>Coconut cookie</li>
                <li>Salt cookie</li>
                <li>Cosak cookie</li>
              </ul>
            </div>
          </div>
        </div>

        {/* COURSE DETAILS SIDEBAR */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm sticky top-24">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Course Details</h3>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold">Duration:</span> 3 days</p>
              <p><span className="font-semibold">Type:</span> Hands-on</p>
              <p><span className="font-semibold">Schedule:</span> 10:30 am to 2 pm</p>
              <p><span className="font-semibold">Level:</span> Beginner</p>
              <p><span className="font-semibold">Certificate:</span> Included</p>
            </div>
            <a
              href="https://wa.me/918248477869?text=Hi!%20I%20want%20to%20enroll%20in%20the%20Basic%20Baking%20Class."
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

export default BasicCourse;



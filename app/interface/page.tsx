'use client'

export default function InterfacePage() {
  const images = [
    { src: '/totalPayables.png', label: 'Total Payables' },
    { src: '/totalRecivables.png', label: 'Total Receivables' },
    { src: '/top5Customers.png', label: 'Top 5 Customers' },
    { src: '/top5Supliers.png', label: 'Top 5 Suppliers' },
  ];

  return (
    <div className="min-h-screen p-8 bg-white">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-center">User Interface</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.label}
            className="w-full h-auto rounded-2xl transition-all duration-300 ease-in-out
                       hover:scale-105 hover:shadow-2xl cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}
import { XIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const collections = [
  {
    id: 1,
    name: 'The Elegance Collection',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 2,
    name: 'Urban Explorer Series',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 3,
    name: 'Artisan Crafted',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 4,
    name: 'Limited Edition',
    image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
];

const CollectionPreview = () => {
  const [selectedCollection, setSelectedCollection] = useState<number | null>(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const showPreviewModalRef = useRef<HTMLDivElement>(null);

  const handlePreviewClick = (id: number) => {
    setSelectedCollection(id);
    setShowPreviewModal(true);
  };

  const selectedItem = collections.find(item => item.id === selectedCollection);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showPreviewModalRef.current && !showPreviewModalRef.current.contains(event.target as Node)) {
        setShowPreviewModal(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [])

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Collections Preview</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            A glimpse of our upcoming luxury footwear collections, crafted with precision and designed for distinction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden rounded-lg shadow-lg h-80 cursor-pointer"
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 group-hover:translate-y-0">
                <h3 className="text-xl font-semibold mb-2">{collection.name}</h3>
                <div className="flex items-center">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    Coming Soon
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  className="bg-white text-black px-6 py-2 rounded-full font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                  onClick={() => handlePreviewClick(collection.id)}
                >
                  Preview
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {showPreviewModal && selectedItem && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div ref={showPreviewModalRef} className="bg-white text-black rounded-2xl max-w-4xl w-full p-6 md:p-8 relative animate-fade-in overflow-auto scrollbar-thin max-h-[90vh]">
            <button
              onClick={() => setShowPreviewModal(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-black"
            >
              <XIcon />
            </button>

            <h3 className="text-2xl font-bold mb-6">{selectedItem.name}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">{selectedItem.name}</h4>
                <p className="text-neutral-600 mb-4">
                  Our {selectedItem.name.toLowerCase()} combines timeless design with modern craftsmanship. Each pair is handcrafted using premium materials sourced from the finest tanneries in Italy.
                </p>
                <div className="mb-6">
                  <h5 className="font-medium mb-2">Highlights:</h5>
                  <ul className="list-disc pl-5 space-y-1 text-neutral-600">
                    <li>Full-grain Italian leather</li>
                    <li>Hand-stitched details</li>
                    <li>Custom-designed comfort insoles</li>
                    <li>Exclusive colorways</li>
                    <li>Limited production run</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-neutral-500">Starting from</span>
                    <p className="text-2xl font-bold">$299</p>
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-neutral-100 rounded-full text-sm font-medium">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200">
              <h4 className="text-lg font-semibold mb-4">More from this collection</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {collections.filter(c => c.id !== selectedItem.id).map(collection => (
                  <img
                    key={collection.id}
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-40 object-cover rounded-lg cursor-pointer"
                    onClick={() => {
                      setSelectedCollection(collection.id);
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowPreviewModal(false)}
                className="bg-black text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-neutral-800 transition-all duration-300"
              >
                Back to Collections
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CollectionPreview;
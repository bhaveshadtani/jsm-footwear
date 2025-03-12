import { useState, useEffect } from 'react';
import { Instagram, Heart, Share2, XIcon, MessageCircle } from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CopyIcon, FacebookIcon, TwitterIcon, WhatsAppIcon } from './AllSvg';

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption: string;
  timestamp: string;
  like_count: number;
  comments_count: number;
}

const InstagramFeed = () => {
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
  const [isInstagramPostError, setIsInstagramPostError] = useState<boolean>(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareCaption, setShareCaption] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Fetch Instagram posts
  useEffect(() => {
    fetchInstagramPosts();
  }, []);

  useEffect(() => {
    // Detect if the device is touch-enabled
    const checkTouchDevice = () => {
      setIsTouchDevice(window.matchMedia("(hover: none)").matches);
    };

    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);

    return () => window.removeEventListener("resize", checkTouchDevice);
  }, []);

  const fetchInstagramPosts = async () => {
    try {
      // In a real implementation, you would call your backend API that handles Instagram API authentication
      // For this demo, we'll simulate the API response with our sample data

      // Sample data (in a real app, this would come from the Instagram API)
      const samplePosts: InstagramPost[] = [
        {
          id: '1',
          media_url: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          permalink: 'https://instagram.com/p/sample1',
          caption: 'Sneak peek at our upcoming collection. #LuxuryFootwear',
          timestamp: '2025-01-15T12:30:00Z',
          like_count: 1243,
          comments_count: 89
        },
        {
          id: '2',
          media_url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          permalink: 'https://instagram.com/p/sample2',
          caption: 'Craftsmanship in every stitch. #ArtisanShoes',
          timestamp: '2025-02-14T10:15:00Z',
          like_count: 2156,
          comments_count: 134
        },
        {
          id: '3',
          media_url: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          permalink: 'https://instagram.com/p/sample3',
          caption: 'Elegance meets comfort. #PremiumDesign',
          timestamp: '2025-02-13T15:45:00Z',
          like_count: 1876,
          comments_count: 102
        },
        {
          id: '4',
          media_url: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          permalink: 'https://instagram.com/p/sample4',
          caption: 'Urban style redefined. #StreetLuxury',
          timestamp: '2024-01-12T09:20:00Z',
          like_count: 3421,
          comments_count: 215
        },
        {
          id: '5',
          media_url: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          permalink: 'https://instagram.com/p/sample5',
          caption: 'Performance meets style. #AthleticLuxury',
          timestamp: '2025-01-11T14:10:00Z',
          like_count: 2987,
          comments_count: 178
        },
        {
          id: '6',
          media_url: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          permalink: 'https://instagram.com/p/sample6',
          caption: 'Icons never go out of style. #ClassicDesign',
          timestamp: '2025-02-10T11:30:00Z',
          like_count: 4532,
          comments_count: 267
        },
        {
          id: '7',
          media_url: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          permalink: 'https://instagram.com/p/sample7',
          caption: 'Every detail matters. #PrecisionCrafted',
          timestamp: '2025-02-09T16:45:00Z',
          like_count: 2134,
          comments_count: 145
        },
        {
          id: '8',
          media_url: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          permalink: 'https://instagram.com/p/sample8',
          caption: 'Limited edition, unlimited style. #ExclusiveRelease',
          timestamp: '2025-02-08T13:20:00Z',
          like_count: 3765,
          comments_count: 198
        },
        {
          id: '9',
          media_url: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          permalink: 'https://instagram.com/p/sample9',
          caption: 'Step into the future. #InnovativeDesign',
          timestamp: '2025-03-11T17:49:00Z',
          like_count: 2876,
          comments_count: 156
        }
      ];

      setInstagramPosts(samplePosts);
    } catch (err) {
      console.error('Error fetching Instagram posts:', err);
      setIsInstagramPostError(true);
    }
  };

  const handleShare = (caption: string) => {
    setShareCaption(caption);
    setShowShareModal(true);
  };

  const handleSharePlatform = (platform: string) => {
    let shareUrl = '';
    const currentUrl = window.location.href;
    const encodedText = encodeURIComponent(`${shareCaption} - Check out our latest collection!`);
    const encodedUrl = encodeURIComponent(currentUrl);

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodedText}%20${encodedUrl}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(`${shareCaption} - ${currentUrl}`);
        toast.success('Link copied to clipboard!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
        });
        setShowShareModal(false);
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
      setShowShareModal(false);
    }
  };

  // Format date to relative time (e.g., "2 days ago")
  const formatRelativeTime = (timestamp: string) => {
    const date = new Date(timestamp.replace('Z', ''));
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) {
      return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
    }

    const diffInMonths = Math.floor(diffInDays / 30);
    return `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''} ago`;
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Collection</h2>
            <p className="text-neutral-600 max-w-3xl">
              From versatile sneakers to timeless formal shoes, our collection offers a style for every occasion. Whether you're looking for casual ease or sports-ready performance, you’ll find footwear that combines both durability and flair. Shop now and make your next step your best one yet!
            </p>
          </div>
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <a
              href={`https://instagram.com/${import.meta.env.VITE_INSTAGRAM_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              <Instagram size={20} />
              {`Follow @${import.meta.env.VITE_INSTAGRAM_USERNAME}`}
            </a>
          </div>
        </div>
        {!isInstagramPostError && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              onClick={() => window.open(post.permalink, "_blank")}
            >
              <img
                src={post.media_url}
                alt={post.caption}
                className="w-full h-full object-cover object-center transition-transform duration-700"
              />

              {/* Apply opacity-100 for touch devices, else keep hover effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent 
                    ${isTouchDevice ? "opacity-100" : "opacity-0 group-hover:opacity-100"} 
                    transition-opacity duration-300 flex flex-col justify-end p-4`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex-shrink-0"></div>
                  <div>
                    <p className="text-white text-sm font-medium">{`@${import.meta.env.VITE_INSTAGRAM_USERNAME}`}</p>
                    <p className="text-white/70 text-xs">{formatRelativeTime(post.timestamp)}</p>
                  </div>
                </div>
                <p className="text-white text-sm mb-3">{post.caption}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-white" aria-label="Like post">
                      <Heart size={18} />
                      <span>{post.like_count}</span>
                    </button>
                    <button className="flex items-center gap-1 text-white" aria-label="Comment on post">
                      <MessageCircle size={18} />
                      <span>{post.comments_count}</span>
                    </button>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare(post.caption);
                    }}
                    className="text-white hover:text-gray-300 transition-colors p-2"
                    aria-label="Share post"
                  >
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>}
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white text-black rounded-2xl max-w-md w-full p-6 md:p-8 relative animate-fade-in">
            <button
              onClick={() => setShowShareModal(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-black"
              aria-label="Close share modal"
            >
              <XIcon />
            </button>

            <h3 className="text-2xl font-bold mb-4">Share This Post</h3>
            <p className="mb-6 text-neutral-600">{shareCaption}</p>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleSharePlatform('facebook')}
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FacebookIcon />
                Facebook
              </button>

              <button
                onClick={() => handleSharePlatform('twitter')}
                className="flex items-center justify-center gap-2 bg-sky-500 text-white px-4 py-3 rounded-lg hover:bg-sky-600 transition-colors"
              >
                <TwitterIcon />
                Twitter
              </button>

              <button
                onClick={() => handleSharePlatform('whatsapp')}
                className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                <WhatsAppIcon />
                WhatsApp
              </button>

              <button
                onClick={() => handleSharePlatform('copy')}
                className="flex items-center justify-center gap-2 bg-neutral-800 text-white px-4 py-3 rounded-lg hover:bg-neutral-900 transition-colors"
              >
                <CopyIcon />
                Copy Link
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InstagramFeed;
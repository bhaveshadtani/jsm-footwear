import { useState, useEffect } from 'react';
import { Instagram, Heart, MessageCircle, Share2, RefreshCw } from 'lucide-react';
import axios from 'axios';

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption: string;
  timestamp: string;
  likes: number;
  comments: number;
}

const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [likedPosts, setLikedPosts] = useState<string[]>([]);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<{[key: string]: string[]}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareCaption, setShareCaption] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  // Fetch Instagram posts
  useEffect(() => {
    fetchInstagramPosts();
  }, []);

  const fetchInstagramPosts = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // In a real implementation, you would call your backend API that handles Instagram API authentication
      // For this demo, we'll simulate the API response with our sample data
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Sample data (in a real app, this would come from the Instagram API)
      const samplePosts: InstagramPost[] = [
        {
          id: '1',
          media_url: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          permalink: 'https://instagram.com/p/sample1',
          caption: 'Sneak peek at our upcoming collection. #LuxuryFootwear',
          timestamp: '2025-04-15T12:30:00Z',
          likes: 1243,
          comments: 89
        },
        {
          id: '2',
          media_url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          permalink: 'https://instagram.com/p/sample2',
          caption: 'Craftsmanship in every stitch. #ArtisanShoes',
          timestamp: '2025-04-14T10:15:00Z',
          likes: 2156,
          comments: 134
        },
        {
          id: '3',
          media_url: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          permalink: 'https://instagram.com/p/sample3',
          caption: 'Elegance meets comfort. #PremiumDesign',
          timestamp: '2025-04-13T15:45:00Z',
          likes: 1876,
          comments: 102
        },
        {
          id: '4',
          media_url: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          permalink: 'https://instagram.com/p/sample4',
          caption: 'Urban style redefined. #StreetLuxury',
          timestamp: '2025-04-12T09:20:00Z',
          likes: 3421,
          comments: 215
        },
        {
          id: '5',
          media_url: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          permalink: 'https://instagram.com/p/sample5',
          caption: 'Performance meets style. #AthleticLuxury',
          timestamp: '2025-04-11T14:10:00Z',
          likes: 2987,
          comments: 178
        },
        {
          id: '6',
          media_url: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          permalink: 'https://instagram.com/p/sample6',
          caption: 'Icons never go out of style. #ClassicDesign',
          timestamp: '2025-04-10T11:30:00Z',
          likes: 4532,
          comments: 267
        },
        {
          id: '7',
          media_url: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          permalink: 'https://instagram.com/p/sample7',
          caption: 'Every detail matters. #PrecisionCrafted',
          timestamp: '2025-04-09T16:45:00Z',
          likes: 2134,
          comments: 145
        },
        {
          id: '8',
          media_url: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          permalink: 'https://instagram.com/p/sample8',
          caption: 'Limited edition, unlimited style. #ExclusiveRelease',
          timestamp: '2025-04-08T13:20:00Z',
          likes: 3765,
          comments: 198
        },
        {
          id: '9',
          media_url: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          permalink: 'https://instagram.com/p/sample9',
          caption: 'Step into the future. #InnovativeDesign',
          timestamp: '2025-04-07T10:15:00Z',
          likes: 2876,
          comments: 156
        }
      ];
      
      setPosts(samplePosts);
    } catch (err) {
      console.error('Error fetching Instagram posts:', err);
      setError('Failed to load Instagram posts. Please try again later.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchInstagramPosts();
  };

  const handleLike = (id: string) => {
    if (likedPosts.includes(id)) {
      setLikedPosts(likedPosts.filter(postId => postId !== id));
    } else {
      setLikedPosts([...likedPosts, id]);
    }
  };

  const handleShare = (caption: string) => {
    setShareCaption(caption);
    setShowShareModal(true);
  };

  const handleSharePlatform = (platform: string) => {
    // Simulate sharing to different platforms
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
        alert('Link copied to clipboard!');
        setShowShareModal(false);
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
      setShowShareModal(false);
    }
  };

  const handleCommentClick = (id: string) => {
    setSelectedPost(id);
    setShowCommentModal(true);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPost || !commentText.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const updatedComments = {
        ...comments,
        [selectedPost]: [...(comments[selectedPost] || []), commentText]
      };
      
      setComments(updatedComments);
      setCommentText('');
      setIsSubmitting(false);
    }, 500);
  };

  // Format date to relative time (e.g., "2 days ago")
  const formatRelativeTime = (timestamp: string) => {
    const date = new Date(timestamp);
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

  const selectedPostData = selectedPost ? posts.find(post => post.id === selectedPost) : null;

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Follow Our Journey</h2>
            <p className="text-neutral-600 max-w-2xl">
              Join our community of fashion enthusiasts and stay updated with our latest releases and behind-the-scenes content.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <button 
              onClick={handleRefresh}
              disabled={loading || refreshing}
              className={`flex items-center gap-2 bg-neutral-100 text-neutral-800 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                (loading || refreshing) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-200'
              }`}
              aria-label="Refresh Instagram feed"
            >
              <RefreshCw size={18} className={refreshing ? 'animate-spin' : ''} />
              {refreshing ? 'Refreshing...' : 'Refresh'}
            </button>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              <Instagram size={20} />
              Follow @footwear
            </a>
          </div>
        </div>
        
        {loading && !refreshing ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 border-4 border-neutral-200 border-t-neutral-800 rounded-full animate-spin mb-4"></div>
            <p className="text-neutral-600">Loading Instagram feed...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-800 mb-4">{error}</p>
            <button 
              onClick={handleRefresh}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {posts.map((post) => (
              <div 
                key={post.id} 
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <img 
                  src={post.media_url} 
                  alt={post.caption} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex-shrink-0"></div>
                    <div>
                      <p className="text-white text-sm font-medium">@footwear</p>
                      <p className="text-white/70 text-xs">{formatRelativeTime(post.timestamp)}</p>
                    </div>
                  </div>
                  <p className="text-white text-sm mb-3">{post.caption}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => handleLike(post.id)}
                        className="flex items-center gap-1 text-white"
                        aria-label={likedPosts.includes(post.id) ? "Unlike post" : "Like post"}
                      >
                        <Heart 
                          size={18} 
                          fill={likedPosts.includes(post.id) ? "white" : "none"} 
                          className={likedPosts.includes(post.id) ? "text-red-500" : "text-white"}
                        />
                        <span>{likedPosts.includes(post.id) ? post.likes + 1 : post.likes}</span>
                      </button>
                      <button 
                        className="flex items-center gap-1 text-white"
                        onClick={() => handleCommentClick(post.id)}
                        aria-label="Comment on post"
                      >
                        <MessageCircle size={18} />
                        <span>{post.comments + (comments[post.id]?.length || 0)}</span>
                      </button>
                    </div>
                    <button 
                      onClick={() => handleShare(post.caption)}
                      className="text-white hover:text-gray-300 transition-colors"
                      aria-label="Share post"
                    >
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
                <a 
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 opacity-0"
                  aria-label="View on Instagram"
                >
                  View on Instagram
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Comment Modal */}
      {showCommentModal && selectedPostData && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white text-black rounded-2xl max-w-2xl w-full p-6 md:p-8 relative animate-fade-in">
            <button 
              onClick={() => setShowCommentModal(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-black"
              aria-label="Close comment modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <h3 className="text-2xl font-bold mb-6">Comments</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img 
                  src={selectedPostData.media_url} 
                  alt="Post" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-neutral-200 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium">@footwear</p>
                      <p className="text-neutral-500 text-xs">{formatRelativeTime(selectedPostData.timestamp)}</p>
                    </div>
                  </div>
                  <p className="text-neutral-800">{selectedPostData.caption}</p>
                </div>
              </div>
              <div>
                <div className="border-b border-neutral-200 pb-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Comments ({selectedPostData.comments + (comments[selectedPostData.id]?.length || 0)})</h4>
                    <span className="text-sm text-neutral-500">{formatRelativeTime(selectedPostData.timestamp)}</span>
                  </div>
                </div>
                
                <div className="max-h-60 overflow-y-auto space-y-4 mb-4">
                  {/* Default comments */}
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-8 h-8 rounded-full bg-neutral-200 flex-shrink-0"></div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium">user{Math.floor(Math.random() * 1000)}</p>
                          <span className="text-xs text-neutral-500">{Math.floor(Math.random() * 24) + 1}h ago</span>
                        </div>
                        <p className="text-sm text-neutral-600">Amazing design! Can't wait for the release.</p>
                      </div>
                    </div>
                  ))}
                  
                  {/* User added comments */}
                  {comments[selectedPostData.id]?.map((comment, index) => (
                    <div key={`user-${index}`} className="flex items-start gap-2">
                      <div className="w-8 h-8 rounded-full bg-neutral-800 flex-shrink-0"></div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium">You</p>
                          <span className="text-xs text-neutral-500">Just now</span>
                        </div>
                        <p className="text-sm text-neutral-600">{comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <form onSubmit={handleCommentSubmit} className="mt-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="Add a comment..."
                      className="flex-1 px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting || !commentText.trim()}
                      className={`bg-black text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        isSubmitting || !commentText.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-800'
                      }`}
                    >
                      {isSubmitting ? 'Posting...' : 'Post'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white text-black rounded-2xl max-w-md w-full p-6 md:p-8 relative animate-fade-in">
            <button 
              onClick={() => setShowShareModal(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-black"
              aria-label="Close share modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <h3 className="text-2xl font-bold mb-4">Share This Post</h3>
            <p className="mb-6 text-neutral-600">{shareCaption}</p>
            
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => handleSharePlatform('facebook')}
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                Facebook
              </button>
              
              <button 
                onClick={() => handleSharePlatform('twitter')}
                className="flex items-center justify-center gap-2 bg-sky-500 text-white px-4 py-3 rounded-lg hover:bg-sky-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
                Twitter
              </button>
              
              <button 
                onClick={() => handleSharePlatform('whatsapp')}
                className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                </svg>
                WhatsApp
              </button>
              
              <button 
                onClick={() => handleSharePlatform('copy')}
                className="flex items-center justify-center gap-2 bg-neutral-800 text-white px-4 py-3 rounded-lg hover:bg-neutral-900 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
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
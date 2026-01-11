import { useCallback } from 'react';
import { trackEvent } from '../utils/analytics';
import { 
  trackFBEvent, 
  trackFBViewContent, 
  trackFBAddToCart, 
  trackFBLead, 
  trackFBContact,
  trackFBInitiateCheckout,
  trackFBPurchase 
} from '../utils/facebookPixel';

/**
 * Custom hook for tracking user interactions across Google Analytics and Facebook Pixel
 */
export const useTracking = () => {
  
  // Track button clicks
  const trackButtonClick = useCallback((buttonName: string, location?: string) => {
    trackEvent('button_click', 'engagement', `${buttonName}${location ? `_${location}` : ''}`);
  }, []);

  // Track form submissions
  const trackFormSubmit = useCallback((formName: string) => {
    trackEvent('form_submit', 'conversion', formName);
    trackFBLead(formName);
  }, []);

  // Track product views
  const trackProductView = useCallback((productName: string, category?: string, value?: number) => {
    trackEvent('view_item', 'ecommerce', productName, value);
    trackFBViewContent(productName, category, value);
  }, []);

  // Track contact interactions
  const trackContactClick = useCallback(() => {
    trackEvent('contact_click', 'engagement', 'contact_button');
    trackFBContact();
  }, []);

  // Track consultation requests
  const trackConsultationRequest = useCallback(() => {
    trackEvent('consultation_request', 'conversion', 'consultation_modal');
    trackFBLead('Consultation Request');
  }, []);

  // Track phone call clicks
  const trackPhoneClick = useCallback(() => {
    trackEvent('phone_click', 'engagement', 'phone_number');
  }, []);

  // Track email clicks
  const trackEmailClick = useCallback(() => {
    trackEvent('email_click', 'engagement', 'email_address');
  }, []);

  // Track social media clicks
  const trackSocialClick = useCallback((platform: string) => {
    trackEvent('social_click', 'engagement', platform);
  }, []);

  // Track gallery image views
  const trackGalleryView = useCallback((imageName: string) => {
    trackEvent('gallery_view', 'engagement', imageName);
  }, []);

  // Track blog post views
  const trackBlogView = useCallback((postTitle: string) => {
    trackEvent('blog_view', 'content', postTitle);
  }, []);

  // Track downloads
  const trackDownload = useCallback((fileName: string) => {
    trackEvent('download', 'engagement', fileName);
  }, []);

  // Track video plays
  const trackVideoPlay = useCallback((videoName: string) => {
    trackEvent('video_play', 'engagement', videoName);
  }, []);

  // Track add to cart (if e-commerce is added later)
  const trackAddToCart = useCallback((productName: string, value: number) => {
    trackEvent('add_to_cart', 'ecommerce', productName, value);
    trackFBAddToCart(productName, value);
  }, []);

  // Track checkout initiation
  const trackCheckoutStart = useCallback((value: number, numItems: number) => {
    trackEvent('begin_checkout', 'ecommerce', 'checkout', value);
    trackFBInitiateCheckout(value, numItems);
  }, []);

  // Track purchases
  const trackPurchaseComplete = useCallback((value: number, orderId?: string) => {
    trackEvent('purchase', 'ecommerce', orderId || 'order', value);
    trackFBPurchase(value);
  }, []);

  // Track custom events
  const trackCustomEvent = useCallback((eventName: string, category: string, label?: string, value?: number) => {
    trackEvent(eventName, category, label, value);
    trackFBEvent(eventName, { label, value });
  }, []);

  return {
    trackButtonClick,
    trackFormSubmit,
    trackProductView,
    trackContactClick,
    trackConsultationRequest,
    trackPhoneClick,
    trackEmailClick,
    trackSocialClick,
    trackGalleryView,
    trackBlogView,
    trackDownload,
    trackVideoPlay,
    trackAddToCart,
    trackCheckoutStart,
    trackPurchaseComplete,
    trackCustomEvent,
  };
};

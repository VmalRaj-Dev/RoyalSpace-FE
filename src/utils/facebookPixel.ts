// Facebook Pixel utilities
export const FB_PIXEL_ID = import.meta.env.VITE_FB_PIXEL_ID || '1134681322066147';

// Initialize Facebook Pixel
export const initFacebookPixel = () => {
  if (typeof window !== 'undefined' && FB_PIXEL_ID !== 'YOUR_PIXEL_ID') {
    // Facebook Pixel Code
    (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    );

    window.fbq('init', FB_PIXEL_ID);
    window.fbq('track', 'PageView');
  }
};

// Track page views
export const trackFBPageView = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// Track custom events
export const trackFBEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

// Standard Facebook events
export const trackFBViewContent = (contentName: string, contentCategory?: string, value?: number) => {
  trackFBEvent('ViewContent', {
    content_name: contentName,
    content_category: contentCategory,
    value: value,
    currency: 'INR',
  });
};

export const trackFBAddToCart = (contentName: string, value: number) => {
  trackFBEvent('AddToCart', {
    content_name: contentName,
    value: value,
    currency: 'INR',
  });
};

export const trackFBInitiateCheckout = (value: number, numItems: number) => {
  trackFBEvent('InitiateCheckout', {
    value: value,
    currency: 'INR',
    num_items: numItems,
  });
};

export const trackFBPurchase = (value: number, currency: string = 'INR') => {
  trackFBEvent('Purchase', {
    value: value,
    currency: currency,
  });
};

export const trackFBLead = (contentName?: string) => {
  trackFBEvent('Lead', {
    content_name: contentName,
  });
};

export const trackFBContact = () => {
  trackFBEvent('Contact');
};

// Declare global types
declare global {
  interface Window {
    fbq: (...args: any[]) => void;
    _fbq: any;
  }
}

# 🧪 Complete Testing Guide - RSpace Interiors

## 🎯 How to Test Everything After Build

This guide shows you how to test **Google Analytics**, **Facebook Pixel**, **Google Tag Manager**, and **Email functionality** both locally and after building.

---

## 📋 Pre-Testing Checklist

### 1. Install Dependencies
```bash
npm install
```

### 2. Verify Environment Variables
Check `.env` file contains:
```env
VITE_GA_MEASUREMENT_ID=G-2XJZRHDM36
VITE_FB_PIXEL_ID=1134681322066147
VITE_GTM_ID=GTM-WKWTDB24
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 🔧 Local Testing (Development Mode)

### Step 1: Start Development Server
```bash
npm run dev
```

### Step 2: Open Browser
- URL: http://localhost:5173
- Open DevTools: Press `F12` or `Ctrl+Shift+I`

### Step 3: Test Google Analytics

**Method 1: Network Tab**
1. In DevTools, go to **Network** tab
2. Filter by: `google-analytics.com` or `collect`
3. Navigate through pages
4. You should see requests to Google Analytics

**Method 2: Console**
1. In DevTools **Console** tab
2. Type: `window.gtag`
3. Should show: `function gtag(){...}`
4. Type: `window.dataLayer`
5. Should show array with events

**Method 3: Real-Time Reports**
1. Go to: https://analytics.google.com/
2. Navigate to: Reports → Realtime
3. Open your website in another tab
4. You should see your visit in real-time!

### Step 4: Test Facebook Pixel

**Method 1: Facebook Pixel Helper (Recommended)**
1. Install extension: [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. Visit your site
3. Click the extension icon
4. Should show:
   - ✅ Pixel ID: 1134681322066147
   - ✅ PageView event
   - ✅ Status: Active

**Method 2: Network Tab**
1. In DevTools → Network tab
2. Filter by: `facebook.net` or `fbevents`
3. Navigate pages
4. Should see Facebook Pixel requests

**Method 3: Console**
1. In Console tab
2. Type: `window.fbq`
3. Should show: `function fbq(){...}`

**Method 4: Facebook Events Manager**
1. Go to: https://business.facebook.com/events_manager
2. Select your Pixel (1134681322066147)
3. Click "Test Events"
4. Enter your website URL
5. Navigate your site
6. See events in real-time!

### Step 5: Test Google Tag Manager

**Method 1: Network Tab**
1. In DevTools → Network tab
2. Filter by: `googletagmanager.com`
3. Should see GTM requests on page load

**Method 2: GTM Preview Mode**
1. Go to: https://tagmanager.google.com/
2. Open your container (GTM-WKWTDB24)
3. Click "Preview" button
4. Enter: http://localhost:5173
5. Click "Connect"
6. New window opens showing all tags firing

**Method 3: Console**
1. Type: `window.dataLayer`
2. Should show array with GTM events

### Step 6: Test Email Functionality

**Test Contact Form:**
1. Go to: http://localhost:5173/contact
2. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Phone: +91 9876543210
   - Subject: Test Submission
   - Message: This is a test message
3. Click "Send Message"
4. Check browser console:
   - Should see: "Contact Form Submission: {...}"
   - Should see: "Email sent successfully" (if EmailJS configured)
   - OR "EmailJS not configured" (if not set up yet)
5. Check info@royalfur.in inbox (if EmailJS configured)

**Test Consultation Form:**
1. Click "Get Free Quote" button (in footer or hero)
2. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Phone: +91 9876543210
   - Service: Select any option
   - Message: Optional
3. Click "Get Consultation"
4. Check console for success message
5. Check email inbox

---

## 🏗️ Production Build Testing

### Step 1: Build the Project
```bash
npm run build
```

This creates optimized production files in the `dist` folder.

### Step 2: Preview Production Build
```bash
npm run preview
```

This starts a local server with the production build.

### Step 3: Open Preview
- URL: http://localhost:4173 (or shown in terminal)
- Open DevTools (F12)

### Step 4: Test Everything Again

**Repeat all tests from Local Testing section above**, but using the preview URL.

**Key Differences in Production:**
- Code is minified
- All tracking should still work
- Performance is better
- No development warnings

---

## 📊 Detailed Testing Procedures

### Test 1: Page View Tracking

**What to Test:**
- Every page visit is tracked

**How to Test:**
1. Open DevTools → Network tab
2. Visit homepage
3. Check for GA4 and Facebook requests
4. Navigate to: /about
5. Check for new tracking requests
6. Navigate to: /contact
7. Check for new tracking requests

**Expected Result:**
- ✅ GA4 request on each page
- ✅ Facebook PageView on each page
- ✅ GTM dataLayer updated

### Test 2: Form Submission Tracking

**What to Test:**
- Form submissions tracked as "Lead" conversions

**How to Test:**
1. Open DevTools → Network tab
2. Go to contact page
3. Fill and submit form
4. Look for tracking requests with "event=form_submit" or "Lead"

**Expected Result:**
- ✅ GA4 form_submit event
- ✅ Facebook Lead event
- ✅ Email sent (if EmailJS configured)
- ✅ Success message shown

### Test 3: Button Click Tracking

**What to Test:**
- Important button clicks are tracked

**How to Test:**
1. Click "Get Free Quote" button
2. Check console for tracking logs
3. Click phone number
4. Check for tracking
5. Click email address
6. Check for tracking

**Expected Result:**
- ✅ Events logged to console
- ✅ Tracking requests sent

### Test 4: Google Tag Manager Tags

**What to Test:**
- All GTM tags fire correctly

**How to Test:**
1. Use GTM Preview Mode (see above)
2. Navigate through pages
3. Submit forms
4. Click buttons
5. Check which tags fire in preview window

**Expected Result:**
- ✅ Page view tags fire on navigation
- ✅ Event tags fire on interactions
- ✅ No errors in preview

---

## 🔍 Verification Checklist

### Before Deployment:
- [ ] `npm install` runs without errors
- [ ] `npm run dev` starts successfully
- [ ] All pages load without errors
- [ ] No console errors
- [ ] Google Analytics tracking works
- [ ] Facebook Pixel tracking works
- [ ] Google Tag Manager loads
- [ ] Contact form submits successfully
- [ ] Consultation form submits successfully
- [ ] Email functionality works (if configured)
- [ ] Privacy Policy page loads
- [ ] Terms & Conditions page loads
- [ ] All social media links work
- [ ] Sitemap accessible: /sitemap.xml

### Production Build:
- [ ] `npm run build` completes successfully
- [ ] `npm run preview` works
- [ ] All tracking still works in preview
- [ ] Forms still work in preview
- [ ] No errors in production build
- [ ] Performance is good

### After Deployment:
- [ ] Live site loads correctly
- [ ] Google Analytics Real-Time shows data
- [ ] Facebook Events Manager shows events
- [ ] GTM Preview connects to live site
- [ ] Forms send emails
- [ ] Google Search Console verifies site
- [ ] Sitemap submitted to GSC

---

## 🎯 Testing Tools & Extensions

### Required:
1. **Facebook Pixel Helper**
   - Install: https://chrome.google.com/webstore/detail/facebook-pixel-helper/
   - Shows Pixel status and events

2. **Google Tag Assistant**
   - Install: https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/
   - Shows Google tags on page

### Optional but Helpful:
3. **React Developer Tools**
   - Install: https://chrome.google.com/webstore/detail/react-developer-tools/
   - Debug React components

4. **Redux DevTools** (if using Redux)
   - Install: https://chrome.google.com/webstore/detail/redux-devtools/

---

## 📧 Email Testing

### Without EmailJS (Development):
- Forms collect data
- Data logged to console
- Success message shown
- **No actual email sent**

### With EmailJS (Production):
1. Set up EmailJS account (see EMAILJS_SETUP_GUIDE.md)
2. Add credentials to `.env`
3. Restart server
4. Submit form
5. Check inbox: info@royalfur.in

### Test Email Template:
1. Go to EmailJS dashboard
2. Click "Email Templates"
3. Click "Test" button
4. Enter test data
5. Send test email
6. Verify formatting

---

## 🐛 Common Issues & Solutions

### Issue: Google Analytics not tracking
**Solutions:**
1. Check `.env` has: `VITE_GA_MEASUREMENT_ID=G-2XJZRHDM36`
2. Restart dev server
3. Clear browser cache
4. Check Network tab for errors
5. Verify GA4 property is active

### Issue: Facebook Pixel not working
**Solutions:**
1. Check `.env` has: `VITE_FB_PIXEL_ID=1134681322066147`
2. Install Facebook Pixel Helper
3. Check for ad blockers (disable for testing)
4. Verify Pixel is active in Events Manager

### Issue: GTM not loading
**Solutions:**
1. Check `index.html` has GTM code
2. Verify GTM ID: GTM-WKWTDB24
3. Check Network tab for GTM requests
4. Verify container is published in GTM dashboard

### Issue: Forms not sending emails
**Solutions:**
1. Check EmailJS configuration
2. Verify `.env` has correct IDs
3. Check browser console for errors
4. Verify EmailJS service is connected
5. Check EmailJS usage limits

### Issue: Build fails
**Solutions:**
1. Run: `npm install`
2. Delete `node_modules` and reinstall
3. Check for TypeScript errors
4. Run: `npm run build` and check errors

---

## 📊 Success Indicators

### You'll know everything works when:

**Google Analytics:**
- ✅ Real-Time reports show your visits
- ✅ Network tab shows GA4 requests
- ✅ No errors in console

**Facebook Pixel:**
- ✅ Pixel Helper shows green checkmark
- ✅ Events Manager shows PageView events
- ✅ Lead events appear after form submission

**Google Tag Manager:**
- ✅ GTM Preview connects successfully
- ✅ All tags show "Fired" status
- ✅ dataLayer contains events

**Email:**
- ✅ Forms submit successfully
- ✅ Success message appears
- ✅ Email received at info@royalfur.in
- ✅ Console shows "Email sent successfully"

**Overall:**
- ✅ No errors in browser console
- ✅ All pages load quickly
- ✅ Forms work smoothly
- ✅ Tracking data appears in dashboards

---

## 🚀 Final Pre-Launch Checklist

- [ ] All tracking IDs verified
- [ ] EmailJS configured and tested
- [ ] All forms tested and working
- [ ] Google Analytics receiving data
- [ ] Facebook Pixel receiving events
- [ ] GTM tags all firing
- [ ] Privacy Policy accessible
- [ ] Terms & Conditions accessible
- [ ] Sitemap accessible
- [ ] All social links working
- [ ] Contact info correct everywhere
- [ ] Build completes without errors
- [ ] Preview works perfectly
- [ ] No console errors
- [ ] Performance is good

---

## 📞 Support

**Google Analytics:**
- Dashboard: https://analytics.google.com/
- Help: https://support.google.com/analytics

**Facebook Pixel:**
- Events Manager: https://business.facebook.com/events_manager
- Help: https://www.facebook.com/business/help

**Google Tag Manager:**
- Dashboard: https://tagmanager.google.com/
- Help: https://support.google.com/tagmanager

**EmailJS:**
- Dashboard: https://dashboard.emailjs.com/
- Docs: https://www.emailjs.com/docs/

---

**Status**: ✅ Ready for Testing  
**Time Needed**: ~15-20 minutes for complete testing  
**Tools Required**: Browser DevTools + Facebook Pixel Helper

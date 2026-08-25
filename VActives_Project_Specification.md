# VActives Website — Full Project Implementation Specification

> **نوع المستند:** شرح تنفيذي تفصيلي للمشروع  
> **المشروع:** VActives Website  
> **الهدف:** توضيح كل ما سيتم تنفيذه، وما لن يتم تنفيذه، وما يحتاجه المطور من العميل، وكيف سيتم بناء المشروع واختباره ورفعه وتسليمه.  
> **المصادر الأساسية:**  
> 1. `VActives_Website_Requirements_Brief.docx`  
> 2. `VActives Website-Agreement.pdf`  
>
> **مهم:** أي بند مذكور تحت عنوان **متطلب رسمي** مصدره المستندات المتفق عليها.  
> أي بند مذكور تحت عنوان **قرار تقني مقترح/معتمد للتنفيذ** هو اختيار هندسي لتنفيذ المتطلبات بأبسط وأفضل شكل، وليس Feature إضافية خارج الـScope.

---

# 1. ملخص المشروع

VActives هي وكالة توظيف افتراضي مقرها مصر، وهدف الموقع هو تقديم الشركة بصورة احترافية للعملاء الدوليين، خصوصًا في:

- الولايات المتحدة الأمريكية
- المملكة المتحدة
- كندا
- أستراليا

الموقع ليس Job Portal كامل، وليس نظام توظيف داخلي، وليس Dashboard، وليس CRM.

هو **Marketing + Lead Generation Website** هدفه الأساسي:

1. تعريف العميل بـVActives.
2. شرح الخدمات.
3. عرض الأدوار التي تقوم الشركة بالتوظيف لها.
4. شرح طريقة العمل.
5. عرض الأسعار بصورة مبدئية/معتمدة من العميل.
6. بناء الثقة.
7. تحويل الزائر إلى Lead من خلال:
   - Start Hiring
   - Book a Discovery Call
   - Hiring Inquiry Form
   - Referral Form
   - WhatsApp / Email / LinkedIn

---

# 2. حدود المشروع الرسمية Scope

## 2.1 عدد الصفحات

**متطلب رسمي:**  
الموقع يجب أن يتكون من **صفحتين إلى ثلاث صفحات كحد أقصى**.

**القرار المعتمد للتنفيذ:**  
سيتم تنفيذ الموقع كـ **3 صفحات رئيسية**:

1. Home
2. Services & Pricing
3. Contact / Start Hiring

هذا الاختيار هو الأقرب للـRecommended Structure الموجود في ملف المتطلبات، وهو أفضل من دمج كل شيء في Landing Page طويلة جدًا.

---

# 3. الصفحات النهائية للموقع

## 3.1 Page 1 — Home

الغرض من الصفحة الرئيسية هو:

- تقديم البراند.
- شرح VActives في ثوانٍ.
- توضيح الأسواق المستهدفة.
- توضيح أنواع العملاء.
- عرض الوظائف/الأدوار.
- شرح طريقة التوظيف.
- بناء الثقة.
- دفع العميل لاتخاذ Action.

### 3.1.1 Header / Navigation

سيحتوي الـHeader على:

- VActives Logo.
- روابط تنقل.
- CTA رئيسي.

الروابط المقترحة:

- Home
- About
- Roles
- How It Works
- Pricing
- Referral
- Testimonials
- Contact

**السلوك:**

- Sticky Header.
- يعمل Desktop / Tablet / Mobile.
- Mobile Hamburger Menu.
- CTA واضح حتى على الموبايل.

### 3.1.2 Hero Section

أهم جزء في الموقع.

**Headline:**

> Build a Reliable Remote Team Without the Hiring Guesswork.

**Supporting text:**

> VActives helps startups and small businesses hire skilled, English-speaking virtual professionals for sales, administration, customer service, and operations.

**CTA 1:** Start Hiring  
**CTA 2:** Book a Discovery Call

**المطلوب تصميميًا:**

- Headline واضح جدًا.
- Supporting copy قصير.
- CTA Primary.
- CTA Secondary.
- Professional visual.
- استخدام اللوجو بصورة صحيحة.
- تجنب شكل Call Center Stock Photo التقليدي.

### 3.1.3 Trust / Markets Bar

عرض الأسواق:

- USA
- UK
- Canada
- Australia

ممكن إضافة:

> Remote recruitment from Egypt for global teams.

### 3.1.4 About VActives

النقاط التي يجب أن تظهر:

- VActives وكالة توظيف افتراضي.
- مقرها مصر.
- تعمل مع شركات دولية.
- تركز على نتائج الأعمال، وليس مجرد إرسال CVs.
- عملية التوظيف تشمل Role clarification, Sourcing, Screening, Communication check, Practical assessment, Interview coordination, Replacement support.

### 3.1.5 Who We Serve

Cards للعملاء المستهدفين:

1. Real Estate
2. B2B / Sales
3. Property Management
4. Startups
5. Small Businesses

### 3.1.6 Roles We Recruit

سيتم عمل Responsive Grid / Cards للأدوار:

1. Cold Caller / Appointment Setter
2. Lead Manager / CRM Manager
3. Acquisition Manager
4. Disposition Manager
5. Virtual Assistant
6. Transaction Coordinator
7. Customer Service Representative
8. Email Manager
9. Executive Assistant
10. Property Management VA

كل عنصر يحتوي على:

- Role title.
- Short outcome statement.

والتفاصيل الأكبر تكون في Services & Pricing.

### 3.1.7 How It Works

العملية مكونة من 6 خطوات:

1. Discovery
2. Role Brief
3. Sourcing
4. Screening
5. Assessment
6. Shortlist & Hire

**Desktop:** Horizontal Process / Stepper.  
**Mobile:** Vertical Timeline.

#### Discovery
فهم Business goal, Daily tasks, Tools, Schedule, Budget, Success measures.

#### Role Brief
تحويل الاحتياج إلى Role scorecard وCandidate profile.

#### Sourcing
البحث في قنوات المواهب المناسبة.

#### Screening
فحص Experience, English, Reliability, Availability, Compensation fit.

#### Assessment
اختبارات عملية مثل Scenario, Writing test, Tool check, Call simulation.

#### Shortlist & Hire
العميل يقابل أفضل المرشحين ويختار الأنسب.

### 3.1.8 Why Choose VActives

- Outcome-Based Hiring
- Role-Specific Screening
- English & Communication Checks
- Practical Assessments
- International Time-Zone Coverage
- Replacement Support

### 3.1.9 Testimonials

- 3 إلى 6 Testimonials.
- لا يتم نشر Testimonials وهمية.
- يجب اعتمادها من العميل.
- أثناء Staging يمكن استخدام Placeholder واضح.

يفضل أن يحتوي كل Testimonial على:

- Client name
- Role
- Company
- Country
- Business problem
- VActives contribution
- Result

### 3.1.10 Final CTA

- Start Hiring
- Book a Discovery Call

---

## 3.2 Page 2 — Services & Pricing

### 3.2.1 Service Overview

توضيح أن VActives تدير عملية التوظيف من Intake حتى وصول Candidate جاهز للـOnboarding.

### 3.2.2 Role Catalogue

يفضل أن يظهر لكل وظيفة:

- Role name
- Main responsibilities
- Typical KPIs
- Ideal industries
- Part-time / Full-time possibility

### 3.2.3 What Is Included

الخدمة تشمل:

- Role intake
- Sourcing
- Screening
- English check
- Practical assessment
- Shortlist
- Interview coordination
- Replacement support

### 3.2.4 Pricing

الأسعار الموجودة في الـRequirements هي Indicative، ويجب أن يعتمد العميل الأسعار النهائية قبل Launch.

#### Part-Time Support
- 20 hours/week
- $600–$900/month

#### Full-Time Dedicated Support
- 40 hours/week
- $950–$1,900/month

#### Recruitment Setup
- One-time
- From $299

#### Indicative Role Pricing

- Cold Caller / Appointment Setter: $950–$1,300
- Lead Manager / CRM Manager: $1,100–$1,450
- Acquisition Manager: $1,300–$1,800
- Disposition Manager: $1,400–$1,900
- Transaction Coordinator: $1,250–$1,700
- Customer Service / Email Manager: $900–$1,200
- Executive Assistant / General VA: $850–$1,250
- Property Management VA: $1,000–$1,450

يتم إضافة Disclaimer أن السعر النهائي يعتمد على Seniority, Required working hours, Time zone, Tools, Commission structure, Training, Replacement terms.

### 3.2.5 Hiring Timeline

المتوقع **7–14 Business Days** لمعظم الأدوار، مع توضيح أن المدة تعتمد على Complexity وClient response time وRole requirements.

### 3.2.6 Replacement Support

عرض فكرة 30-day replacement support مع توضيح أنها Subject to final service agreement وتعتمد على تعاون العميل والشروط النهائية.

### 3.2.7 Referral Program

شرح:

- من يستطيع عمل Referral؟
- كيف يرسل Referral؟
- متى تصبح المكافأة مستحقة؟
- كيف يتم الدفع؟

قيمة المكافأة وشروطها النهائية يجب أن يرسلها العميل.

### 3.2.8 FAQ

Accordion للأسئلة الأساسية:

- Where is VActives based?
- Which markets do you support?
- How quickly can you present candidates?
- How are candidates assessed?
- Can candidates work in our time zone?
- Do you provide a replacement?
- Are software and tools included?
- Can you recruit a role not listed?

---

## 3.3 Page 3 — Contact / Start Hiring

### 3.3.1 Start Hiring Introduction

شرح ما يحدث بعد إرسال الطلب:

1. VActives تراجع البيانات.
2. يتم التواصل مع العميل.
3. يمكن حجز Discovery Call.
4. تبدأ مرحلة Role Discovery.

### 3.3.2 Client Hiring Inquiry Form

#### Fields

- Full Name — Required
- Work Email — Required + Email validation
- Phone / WhatsApp — حسب القرار النهائي
- Company Name — Required
- Company Website — Optional + URL validation
- Country / Market — Required
- Industry — Required
- Role Needed — Required + Multi-select
- Employment Schedule — Required
- Required Time Zone / Shift — Required
- Desired Start Date — Optional
- Estimated Budget — Required
- Main Business Problem — Required
- Daily Tasks — Optional but recommended
- Tools Currently Used — Optional
- How Did You Hear About Us? — Optional
- Preferred Contact Method — Required
- Consent Checkbox — Required

---

# 4. Hiring Form — Submission Workflow

عند الضغط على Submit:

1. Front-end validation.
2. إرسال البيانات للـServerless API.
3. Server-side validation.
4. Spam check.
5. رفض الطلب لو البيانات Invalid.
6. إرسال Notification لـVActives.
7. إرسال Confirmation للعميل.
8. إظهار Success State.
9. عرض CTA لحجز Discovery Call.
10. Optional: تخزين الـLead إذا تم الاتفاق لاحقًا على ذلك.

---

# 5. Referral Form

الحقول:

- Referrer Full Name — Required
- Referrer Email — Required
- Referrer Phone / WhatsApp — Optional
- Relationship to VActives
- Referred Person Name — Required
- Referred Company — Required
- Referred Email or Phone — At least one required
- Company Country / Market — Required
- Hiring Need / Context — Recommended
- Consent / Confirmation — Required

---

# 6. Candidate Application

**لن يتم إنشاء Candidate Portal.**

سيكون هناك زر:

> Join Our Talent Network

الزر يفتح External Form أو Existing ATS page، والرابط يرسله العميل.

---

# 7. ما لن يتم تنفيذه في Phase One

هذه البنود خارج الـScope:

- Login
- Signup
- Client accounts
- Candidate accounts
- Dashboard
- Admin panel
- Applicant Tracking System من الصفر
- AI Candidate Matching
- Payment Gateway
- Subscription Checkout
- Complex Salary Calculator
- Live Chat staffed by agents
- Large Job Board
- Multi-language website
- Employee monitoring
- Payroll
- Time tracking
- Custom CRM
- Large CMS
- Blog migration

أي طلب جديد من هذا النوع يحتاج Scope جديد وتكلفة جديدة ومدة جديدة واتفاق كتابي.

---

# 8. Frontend Technical Stack

## 8.1 متطلب رسمي

الاتفاق ينص على استخدام **Vue.js**.

## 8.2 القرار التقني المعتمد

- Vue 3
- Vite
- Vue Router
- Tailwind CSS
- JavaScript
- Git
- GitHub

---

# 9. لماذا Vue 3؟

- متفق عليه.
- مناسب لموقع Marketing صغير.
- Component-based.
- سريع.
- سهل الصيانة.
- مناسب للـReusable Components.
- يتيح Form UX جيد بدون Framework ثقيل.

---

# 10. لماذا Vite؟

Vite مسؤول عن Development server, Build, Asset optimization, Fast HMR وProduction bundling.

---

# 11. Vue Router

Routes المقترحة:

```text
/
/services
/start-hiring
```

مع Route للـ404.

---

# 12. Tailwind CSS

قرار تنفيذي وليس Requirement رسمي.

الهدف:

- سرعة تنفيذ UI.
- Consistent spacing.
- Responsive utilities.
- تقليل CSS repetition.
- سهولة بناء Design System.

---

# 13. Project Structure

```text
vactives-website/
│
├── public/
│   ├── favicon/
│   ├── robots.txt
│   └── social-preview/
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── logo/
│   ├── components/
│   │   ├── common/
│   │   ├── forms/
│   │   ├── cards/
│   │   └── sections/
│   ├── data/
│   │   ├── roles.js
│   │   ├── pricing.js
│   │   ├── faqs.js
│   │   └── testimonials.js
│   ├── pages/
│   │   ├── Home.vue
│   │   ├── Services.vue
│   │   ├── StartHiring.vue
│   │   └── NotFound.vue
│   ├── router/
│   ├── styles/
│   ├── App.vue
│   └── main.js
│
├── api/
│   ├── hiring.js
│   └── referral.js
│
├── .env.example
├── package.json
└── README.md
```

---

# 14. Reusable Components

- Navbar
- Footer
- PrimaryButton
- SecondaryButton
- SectionHeading
- RoleCard
- IndustryCard
- PricingCard
- TestimonialCard
- FAQItem
- ProcessStep
- Input
- Select
- MultiSelect
- Textarea
- Checkbox
- FormError
- SuccessState

---

# 15. Data-Driven Content

يفضل تخزين الأدوار والأسعار والأسئلة والشهادات في:

```text
src/data/roles.js
src/data/pricing.js
src/data/faqs.js
src/data/testimonials.js
```

الفائدة:

- تعديل المحتوى بسهولة.
- تقليل الأخطاء.
- إعادة استخدام نفس البيانات.
- عدم الحاجة إلى CMS في Phase One.

---

# 16. Design Direction

الـRequirements تطلب Style:

- Modern
- Clean
- Energetic
- Professional
- Spacious

مع تجنب:

- Clutter
- Excessive animation
- Generic call-center appearance
- Heavy page builders
- Visual noise

---

# 17. Brand

سيتم استخدام:

- Approved VActives Logo
- Brand Colors
- Favicon
- Social Preview Image

يجب طلب SVG (الأفضل) أو Transparent PNG عالي الجودة.

ممنوع Redraw, Recolor, Stretch, Crop أو Add effects بدون اعتماد.

---

# 18. Brand Colors

لو العميل يرسل HEX codes سيتم استخدامها.

إذا لم يكن لديهم Brand Guide، يتم استخراج الألوان من اللوجو وإرسال Palette لهم للاعتماد.

---

# 19. Typography

يتم اختيار Font احترافي ومقروء ومناسب للـEnglish، مع تثبيت Heading scale, Body scale, Line height وFont weights ضمن Design System.

---

# 20. Responsive Design

الموقع يعمل على Desktop, Tablet, Mobile.

أحجام اختبار تقريبية:

- 1440px
- 1280px
- 1024px
- 768px
- 430px
- 390px
- 375px

لا يوجد Horizontal scroll, Overlap, Clipping, Unreadable text, Broken cards أو Broken forms.

---

# 21. Mobile UX

Mobile أولوية، مع مراعاة Touch targets, Button height, Form input size, Hamburger navigation, Single-column forms عند الحاجة, Vertical timeline وStacked pricing cards.

---

# 22. Animations

مسموح:

- Light entrance effects.
- Hover effects.
- Smooth scrolling.
- Small transitions.

مع تجنب Excessive motion, Heavy parallax, Long loading animations وAutoplay video، واحترام `prefers-reduced-motion`.

---

# 23. Backend Architecture

## متطلب رسمي

Minimal Backend فقط للـForms.

## القرار التقني المعتمد

**Serverless Architecture**.

---

# 24. Backend Hosting

**الاقتراح المعتمد للتنفيذ: Vercel Serverless Functions**

```text
User
  ↓
Vue Frontend
  ↓
Vercel
  ↓
Serverless API
  ├── /api/hiring
  └── /api/referral
  ↓
Validation + Anti-Spam
  ↓
Email Service
```

---

# 25. لماذا Serverless؟

- المشروع صغير.
- لا يحتاج Backend دائم.
- لا يوجد Login.
- لا يوجد Database requirement أساسي.
- يحتاج فقط Form processing.
- يحتاج Secret keys بعيدًا عن Frontend.
- Deployment بسيط.

---

# 26. Email Service

**قرار تقني مقترح: Resend**.

Hiring Form يرسل:

1. Internal email إلى VActives.
2. Confirmation email إلى صاحب الطلب.

Referral Form يرسل Internal notification وOptional confirmation.

---

# 27. Environment Variables

Secret keys لا توضع في Frontend.

مثال:

```text
RESEND_API_KEY=
VACTIVES_FORM_EMAIL=
TURNSTILE_SECRET_KEY=
```

---

# 28. Form Security

- Front-end validation.
- Server-side validation.
- Spam protection.
- HTTPS.
- No exposed secrets.
- Clear error messages.
- Clear success messages.

---

# 29. Spam Protection

الـRequirement يسمح بـHoneypot أو CAPTCHA أو Rate limiting.

**القرار المقترح:** Cloudflare Turnstile + basic server-side protections.

---

# 30. Rate Limiting

الهدف منع Form spam, Repeated submissions وAbuse بدون بناء Enterprise Security System.

---

# 31. Database

Storage اختياري في Phase One.

الشكل المبدئي:

```text
Form → API → Email → Success
```

إذا طلب العميل Lead Storage لاحقًا يمكن استخدام Supabase أو Approved CRM أو Spreadsheet بعد تحديد الـScope.

---

# 32. Domain

الدومين هو اسم الموقع، مثال:

```text
vactives.com
```

الدومين ليس Hosting.

العميل مسؤول عن شراء الدومين، تكلفته وملكية حساب الـRegistrar.

---

# 33. Hosting

الـHosting هو المكان الذي يعمل عليه الموقع.

**الاقتراح:** Vercel.

يمكن أن يعمل الموقع مبدئيًا على `project-name.vercel.app`، لكن الأفضل للـProduction استخدام Custom Domain.

---

# 34. Vercel vs Domain

- Vercel يستضيف الموقع.
- Domain هو اسم الموقع الاحترافي.

يمكن تشغيل الموقع بدون Domain خاص، لكنه غير مفضل كـProduction Brand.

---

# 35. Google Search

وجود Custom Domain ليس وحده ما يجعل الموقع يظهر في Google.

سيتم تجهيز الموقع تقنيًا للـIndexing، لكن لا توجد ضمانات Ranking ولا يجوز وعد العميل بأنه سيكون النتيجة الأولى.

---

# 36. SEO

سيتم تنفيذ:

- Unique title لكل صفحة.
- Meta description.
- One H1 per page.
- H2/H3 hierarchy.
- Clean URLs.
- Open Graph tags.
- Canonical URLs.
- XML sitemap.
- robots.txt.
- Structured data.
- Alt text.
- Semantic HTML.

---

# 37. Suggested URL Structure

```text
/
/services
/start-hiring
```

---

# 38. Structured Data

Schema مناسب مثل:

- Organization
- ProfessionalService
- EmploymentAgency

حيث يكون مناسبًا.

---

# 39. SEO Keyword Themes

- Virtual recruitment agency
- Hire virtual assistants
- Remote talent for real estate
- Cold caller recruitment
- Lead manager recruitment
- Property management virtual assistant
- Executive assistant recruitment
- Remote customer service hiring

بدون Keyword Stuffing.

---

# 40. Performance

- Image optimization.
- WebP / AVIF حيث مناسب.
- Lazy loading.
- Minimize unused CSS.
- Minimize unused JS.
- Avoid autoplay video.
- Avoid giant background assets.
- Mobile performance priority.

---

# 41. Images

الصور تمثل Remote work, Recruitment, International teams وBusiness operations، مع تجنب صور Call Center cliché والAssets الثقيلة.

---

# 42. Accessibility

- Keyboard navigation.
- Visible focus states.
- Form labels.
- Alt text.
- Semantic headings.
- Contrast.
- Logical heading order.
- Reduced motion.
- Accessible buttons/links.

---

# 43. Footer

يحتوي على:

- Logo
- Brief description
- Navigation
- Contact details
- Markets served
- Social links
- Privacy link
- Terms link
- Copyright

---

# 44. WhatsApp

يمكن إضافة CTA داخل Contact وFloating WhatsApp button بشرط ألا يغطي المحتوى أو يضر Accessibility.

---

# 45. Discovery Call

لن يتم بناء Calendar System.

العميل يرسل Calendly أو Cal.com أو Google Scheduling أو أي Scheduling Tool معتمد، ويتم ربطه كـLink أو Embed.

---

# 46. Analytics

يتم تركيب Analytics بعد أن يحدد العميل الحساب.

**اقتراح التنفيذ:** GA4.

Events:

- Start Hiring clicks
- Discovery booking clicks
- WhatsApp clicks
- Email clicks
- Referral form start
- Referral form submit
- Hiring form start
- Hiring form submit

---

# 47. Analytics Ownership

الحساب يجب أن يكون Client-owned أو يتم نقله للعميل بالكامل.

---

# 48. Cookie Consent

إذا تم استخدام Tracking غير ضروري يتطلب Consent، يتم إضافة Cookie Notice / Consent Mechanism حسب الـSetup النهائي.

---

# 49. Legal Content

العميل يجب أن يوفر/يعتمد:

- Privacy Policy
- Terms of Use
- Referral Program Terms
- Required disclaimers

المطور مسؤول عن Implementation وLinking وCorrect display، وليس عن كتابة أو اعتماد Legal Advice.

---

# 50. Pages vs Legal Documents

لأن الاتفاق يحدد 2–3 صفحات رئيسية، لا يتم افتراض تلقائي أن Privacy وTerms وReferral Terms ستتحول إلى 3 صفحات إضافية كاملة بدون اتفاق.

يمكن تنفيذها بحسب الاتفاق النهائي كـSimple legal routes أو Modal أو External legal pages.

---

# 51. GitHub

سيتم استخدام GitHub لإدارة Source Code.

المقترح Repo باسم `vactives-website` أو نفس الـRepository الحالي.

أثناء التطوير يمكن أن يكون Repo على حساب المطور، وعند Handover يتم نقل الملكية أو توفير الوصول الكامل للعميل حسب الاتفاق.

---

# 52. Git Workflow

المشروع صغير، لذلك يمكن الاكتفاء بـ`main` أو استخدام `main` + `develop` إذا احتجنا Staging منفصل.

---

# 53. Commit Style

أمثلة:

```text
feat: build home hero section
feat: add roles grid
feat: implement hiring inquiry form
fix: resolve mobile navbar overflow
style: refine pricing cards
chore: configure SEO metadata
```

---

# 54. Client Assets Required

## Brand
- Approved Logo SVG
- Transparent PNG
- Favicon source إن وجد
- Brand colors / HEX codes إن وجدت
- Logo usage preferences

## Contact
- Business email
- Phone / WhatsApp
- LinkedIn
- Social links
- Business hours

## Domain / Hosting
- Domain registrar decision
- Domain
- Hosting approval

## Scheduling
- Discovery call link
- Meeting availability

## Pricing
- Final plans
- Final price ranges
- Inclusions
- Exclusions
- Currency
- Taxes if applicable

## Referral
- Reward
- Eligibility
- Payout trigger
- Payment method
- Duplicate referral rule
- Legal terms

## Testimonials
- Approved wording
- Name
- Company
- Role
- Country
- Photo/logo permission
- Written permission

## Legal
- Privacy Policy
- Terms
- Referral Terms
- Disclaimers

## Forms
- Destination inbox

## Candidate
- External Candidate Form link

## Analytics
- Approved analytics account/access

## Approval
- One decision-maker for final approval

---

# 55. ما يمكن للمطور البدء فيه بدون العميل

- GitHub repo.
- Vue setup.
- Vite.
- Router.
- Tailwind.
- Folder structure.
- Reusable components.
- 3-page routing.
- Placeholder content.
- Form UI.
- Front-end validation structure.
- FAQ component.
- Cards.
- Responsive grid.
- 404.
- Base SEO architecture.
- Accessibility structure.
- Local development.

---

# 56. ما لا يفضل إقفاله قبل استلام بيانات العميل

- Logo usage.
- Brand colors.
- Final pricing.
- Testimonials.
- Contact details.
- WhatsApp.
- Business email.
- Discovery call link.
- Referral reward.
- Legal copy.
- Candidate application link.
- Analytics.
- Production domain.
- Production email sender setup.

---

# 57. Design Approval Workflow

1. Structure approval.
2. Desktop visual direction.
3. Mobile visual direction.
4. Component consistency.
5. Content hierarchy.
6. CTA placement.

---

# 58. Recommended Project Stages

## Stage 1 — Discovery

تأكيد Logo, Colors, Domain, Content, Pricing, Forms, Referral terms وTechnical approach.

## Stage 2 — Wireframe

اعتماد Navigation, Page order, Section order, Content hierarchy وCTA placement.

## Stage 3 — Visual Design

اعتماد Desktop direction, Mobile direction, Colors, Typography, Cards, Buttons وForms.

## Stage 4 — Development

تنفيذ Vue structure, Components, Routing, Data files, Responsive UI, Forms وAPI endpoints.

## Stage 5 — Content Review

العميل يراجع Copy, Prices, Testimonials, Contact details وLegal links.

## Stage 6 — QA

اختبار Responsive, Accessibility, Forms, SEO, Speed وBrowser compatibility.

## Stage 7 — Launch & Handover

Deploy, Connect domain, Verify forms, Verify analytics, Transfer credentials, Provide source وProvide notes.

---

# 59. Testing Plan

## Brand Test

- Logo clear.
- Correct proportions.
- Correct colors.
- No distortion.

## Navigation Test

اختبار Header links, Footer links, Anchor links, CTA وSocial links على Desktop, Tablet وMobile.

## Responsive Test

التأكد من عدم وجود Clipping, Overlap, Horizontal scroll, Tiny text أوBroken controls.

## Form Test

### Hiring Form
- Required fields.
- Invalid email.
- Invalid URL.
- Empty fields.
- Spam test.
- Successful submission.
- API error.
- Email notification.
- Confirmation email.

### Referral Form
نفس السيناريوهات المناسبة.

---

# 60. Email Test

التأكد أن:

- VActives inbox يستقبل.
- Prospect confirmation يصل.
- Secrets لا تظهر.
- Subject واضح.
- Content readable.

---

# 61. SEO Test

اختبار Titles, Descriptions, H1, Canonical, Sitemap, robots.txt, Open Graph وStructured data.

---

# 62. Performance Test

- Large images.
- Image formats.
- Lazy loading.
- JS size.
- CSS.
- Mobile loading.

---

# 63. Accessibility Test

- Tab navigation.
- Focus visibility.
- Form labels.
- Alt text.
- Heading order.
- Color contrast.

---

# 64. Security Test

- HTTPS.
- Secrets server-side.
- Spam protection.
- Server validation.
- Environment variables.
- No API keys in Git.

---

# 65. Browser Testing

اختبار الإصدارات الحديثة قدر الإمكان من:

- Chrome
- Safari
- Edge
- Firefox
- Mobile Safari
- Chrome Android

---

# 66. Deployment

**المقترح:** Vercel.

```text
GitHub Repo
   ↓
Vercel Project
   ↓
Build Vue App
   ↓
Deploy Frontend + Serverless APIs
   ↓
Attach Custom Domain
```

---

# 67. Domain Connection

العميل يملك Domain، ويتم ضبط DNS ليشير إلى Vercel.

بعدها يعمل الموقع على Custom Domain بدل رابط `vercel.app`.

---

# 68. HTTPS

يتم التأكد من:

- HTTPS شغال.
- HTTP redirects to HTTPS.
- Forms تستخدم HTTPS.

---

# 69. Ownership

في نهاية المشروع يجب أن تكون ملكية Domain, Hosting, Analytics, Code repository وThird-party service accounts للعميل أو يتم نقلها إليه بالكامل.

---

# 70. Handover

التسليم يشمل:

- Working website.
- Source code.
- Deployment notes.
- Access ownership.
- Basic content-editing guide.
- Credentials transfer.
- 30-day bug-fix support.

---

# 71. Support Period

طبقًا للاتفاق: **30 يوم بعد التسليم لإصلاح أخطاء البرمجة الناتجة عن التنفيذ.**

لا تشمل:

- New pages.
- New features.
- New integrations.
- New content production.
- Redesign.
- Scope expansion.

---

# 72. Revisions

السعر يشمل **جولتين تعديلات بسيطة** داخل الـScope.

أمثلة تعديل بسيط:

- Text adjustment.
- Spacing.
- Minor colors.
- Button wording.
- ترتيب محدود داخل Section.

أمثلة تعديل كبير:

- إضافة صفحة.
- إضافة Dashboard.
- تغيير Architecture.
- إضافة Job Board.
- إعادة تصميم الموقع بالكامل.
- إضافة Login.
- Integration جديد كبير.

التعديل الكبير يحتاج اتفاق جديد.

---

# 73. Timeline

طبقًا للاتفاق:

- Start date: 22 August 2026.
- Target: حوالي شهر.
- Maximum target: شهر ونصف.
- بشرط استلام العميل للمواد والملاحظات في الوقت.

إذا تأخر العميل في Content أوFeedback أوApproval أوAssets، فمدة المشروع تمتد بنفس مدة التأخير.

---

# 74. Project Payment

إجمالي قيمة المشروع: **15,000 EGP**.

1. 5,000 EGP عند بدء العمل.
2. 5,000 EGP عند الانتهاء وقبل التسليم النهائي.
3. 5,000 EGP خلال 30 يومًا كحد أقصى من تاريخ التسليم.

---

# 75. Client Responsibilities

العميل مسؤول عن:

- Logo
- Text
- Images
- Pricing
- Contact details
- Account links
- Feedback
- Approvals
- Domain cost
- Hosting cost
- Paid third-party services

إلا إذا تم الاتفاق كتابيًا على غير ذلك.

---

# 76. Developer Responsibilities

المطور مسؤول عن:

- Design implementation.
- Vue development.
- Responsive UI.
- Basic SEO.
- Basic performance.
- Forms.
- Secure form processing.
- Linking client-provided content.
- Deployment.
- Source code.
- Bug-fix support.

---

# 77. Important Scope Rule

أي Feature غير موجود في Requirements أوAgreement أوWritten approval يعتبر **Out of Scope**.

---

# 78. Features Summary

يمكن تلخيص التنفيذ إلى Feature Groups:

1. Responsive Navbar
2. Sticky Header
3. Mobile Menu
4. Hero
5. CTA System
6. Market/Trust Bar
7. About Section
8. Audience/Industry Cards
9. Roles Grid
10. How It Works
11. Why Choose Us
12. Testimonials
13. Services Overview
14. Role Catalogue
15. Pricing
16. Timeline
17. Replacement Support
18. Referral Program
19. FAQ Accordion
20. Hiring Inquiry Form
21. Referral Form
22. Discovery Call Link
23. Direct Contact Links
24. Candidate External Link
25. Form Validation
26. Server-Side Form Handler
27. Anti-Spam
28. Email Notifications
29. Success/Error States
30. SEO Metadata
31. Sitemap
32. robots.txt
33. Structured Data
34. Analytics Events
35. Accessibility Basics
36. Performance Optimization
37. 404 Page
38. Deployment
39. Domain Connection
40. Handover

**مهم:** هذه قائمة تنفيذية وليست 40 Feature تعاقدية مستقلة.

---

# 79. Final Architecture

```text
                        ┌────────────────────────┐
                        │     Custom Domain      │
                        │     vactives.com       │
                        └───────────┬────────────┘
                                    │
                                    ▼
                        ┌────────────────────────┐
                        │         Vercel         │
                        └───────────┬────────────┘
                                    │
                 ┌──────────────────┴─────────────────┐
                 │                                    │
                 ▼                                    ▼
        ┌─────────────────┐                 ┌─────────────────┐
        │  Vue 3 Frontend │                 │ Serverless APIs │
        │  + Vue Router   │                 │ /api/hiring     │
        │  + Tailwind     │                 │ /api/referral   │
        └─────────────────┘                 └────────┬────────┘
                                                    │
                          ┌─────────────────────────┼──────────────────────────┐
                          │                         │                          │
                          ▼                         ▼                          ▼
                     Validation               Anti-Spam                  Resend
                     Server Side              Turnstile                  Email
```

---

# 80. Optional Future Architecture

إذا تم طلب Lead Storage لاحقًا:

```text
Form
 ↓
Serverless API
 ├── Email
 └── Database / CRM
```

مثل Supabase أوApproved CRM، لكن هذا ليس شرطًا أساسيًا في Phase One.

---

# 81. Launch Approval Checklist

- [ ] Logo approved
- [ ] Brand colors approved
- [ ] Domain confirmed
- [ ] Hosting confirmed
- [ ] Business email confirmed
- [ ] WhatsApp confirmed
- [ ] Discovery call link confirmed
- [ ] Pricing approved
- [ ] Referral reward approved
- [ ] Referral terms approved
- [ ] Testimonials verified
- [ ] Privacy Policy approved
- [ ] Terms approved
- [ ] Forms tested
- [ ] Inbox tested
- [ ] Mobile layout approved
- [ ] Analytics verified
- [ ] SEO verified
- [ ] HTTPS verified
- [ ] Source code ready
- [ ] Ownership transfer ready

---

# 82. Developer Implementation Checklist

## Setup
- [ ] Create GitHub repository
- [ ] Initialize Vue 3 + Vite
- [ ] Install Vue Router
- [ ] Configure Tailwind CSS
- [ ] Create folder structure
- [ ] Create base layout

## Global UI
- [ ] Navbar
- [ ] Mobile menu
- [ ] Footer
- [ ] Buttons
- [ ] Typography
- [ ] Spacing system
- [ ] Container system
- [ ] Focus states

## Home
- [ ] Hero
- [ ] Trust bar
- [ ] About
- [ ] Who we serve
- [ ] Roles
- [ ] How it works
- [ ] Why choose us
- [ ] Testimonials
- [ ] Final CTA

## Services
- [ ] Service overview
- [ ] Role catalogue
- [ ] Included services
- [ ] Pricing
- [ ] Timeline
- [ ] Replacement support
- [ ] Referral section
- [ ] FAQ

## Contact
- [ ] Start Hiring intro
- [ ] Hiring Form
- [ ] Discovery Call
- [ ] Contact links
- [ ] Referral Form
- [ ] Candidate CTA
- [ ] Consent UI

## Backend
- [ ] Hiring API
- [ ] Referral API
- [ ] Server validation
- [ ] Email integration
- [ ] Anti-spam
- [ ] Error handling
- [ ] Success handling
- [ ] Environment variables

## SEO
- [ ] Titles
- [ ] Meta descriptions
- [ ] H1 structure
- [ ] Canonicals
- [ ] Sitemap
- [ ] robots.txt
- [ ] Open Graph
- [ ] Structured Data

## Performance
- [ ] Optimize images
- [ ] Lazy load
- [ ] Check bundle
- [ ] Mobile performance

## Accessibility
- [ ] Keyboard
- [ ] Focus
- [ ] Labels
- [ ] Alt text
- [ ] Heading order
- [ ] Contrast
- [ ] Reduced motion

## QA
- [ ] Desktop
- [ ] Tablet
- [ ] Mobile
- [ ] Forms
- [ ] Emails
- [ ] Spam protection
- [ ] Links
- [ ] SEO
- [ ] Analytics
- [ ] Browser test

## Launch
- [ ] Vercel deployment
- [ ] Connect custom domain
- [ ] HTTPS
- [ ] Production env vars
- [ ] Production form test
- [ ] Production analytics test

## Handover
- [ ] Source code
- [ ] Repo ownership
- [ ] Hosting access
- [ ] Domain confirmed
- [ ] Analytics ownership
- [ ] Third-party services ownership
- [ ] Deployment notes
- [ ] Content editing notes
- [ ] 30-day bug support starts

---

# 83. Client Request Checklist — What We Need From VActives

- [ ] Original approved logo (SVG preferred)
- [ ] Transparent PNG logo
- [ ] Brand HEX colors if available
- [ ] Favicon asset if available
- [ ] Business email
- [ ] Form destination inbox
- [ ] WhatsApp / phone
- [ ] LinkedIn
- [ ] Social links
- [ ] Business hours
- [ ] Final pricing
- [ ] Pricing inclusions/exclusions
- [ ] Currency confirmation
- [ ] Referral reward
- [ ] Referral terms
- [ ] Approved testimonials
- [ ] Privacy Policy
- [ ] Terms of Use
- [ ] Referral Terms if required
- [ ] Candidate application link
- [ ] Discovery call link
- [ ] Domain decision
- [ ] Hosting approval
- [ ] Analytics account/access
- [ ] Final content approver

---

# 84. Definition of Done

المشروع يعتبر مكتملًا عندما:

1. الصفحات الثلاث تعمل.
2. الـResponsive سليم.
3. كل الـSections المطلوبة موجودة.
4. Hiring Form يعمل.
5. Referral Form يعمل.
6. Emails تصل.
7. Spam protection يعمل.
8. لا توجد Secrets في Frontend.
9. SEO الأساسي موجود.
10. Analytics المتفق عليه يعمل.
11. روابط التواصل صحيحة.
12. الأسعار والمحتوى معتمدة.
13. Legal links موجودة.
14. Domain/Hosting Production يعمل.
15. Source code جاهز للتسليم.
16. Client review تمت.
17. الملاحظات داخل الجولتين تم تنفيذها.
18. Handover تم.
19. Ownership نقلت للعميل بعد استكمال شروط التسليم والدفع.
20. يبدأ بعدها 30-day bug-fix support.

---

# 85. Final Technical Decisions Snapshot

```text
Project Type:       Marketing + Lead Generation Website

Pages:              3
                    Home
                    Services & Pricing
                    Contact / Start Hiring

Frontend:           Vue 3
Build Tool:         Vite
Routing:            Vue Router
Styling:            Tailwind CSS
Language:           JavaScript

Backend:            Minimal Serverless Backend
Hosting:            Vercel
Serverless APIs:    Vercel Functions

Email:              Resend (recommended implementation choice)
Spam Protection:    Cloudflare Turnstile (recommended implementation choice)

Database:           None initially
Optional Storage:   Supabase / approved CRM if later requested

Analytics:          Approved analytics account
Suggested:          GA4

SEO:                Technical + On-page basics

Authentication:     None
Dashboard:          None
Payment:            None
Job Portal:         None
ATS:                None
CMS:                None
CRM:                None in Phase One

Repository:         GitHub
Production Domain:  Client-owned custom domain
Support:            30 days bug fixes
Revisions:          2 simple revision rounds
```

---

# 86. Scope Protection Note

هذا الملف لا يضيف التزامات جديدة على الاتفاق الأصلي.

الهدف منه هو **تحويل المتطلبات والاتفاق إلى خطة تنفيذ واضحة**.

أي قرار تقني مثل Tailwind CSS, Vercel, Resend, Cloudflare Turnstile أوSupabase كحل اختياري هو وسيلة لتنفيذ الـScope وليس توسيعًا للـScope.

وفي حالة ظهور Requirement جديد غير موجود في المستندات الأصلية، يتم تقييمه منفصلًا قبل تنفيذه.

---

# 87. Source Reference Map

## Website Requirements Brief
يحدد:

- هدف الموقع.
- الجمهور.
- 2–3 صفحات.
- الأقسام.
- الأدوار.
- النصوص.
- الأسعار المبدئية.
- الـForms.
- Minimal Backend.
- Security.
- UX.
- SEO.
- Analytics.
- Testing.
- Client inputs.
- Out of Scope.

## Website Agreement
يحدد:

- Vue.js.
- Responsive.
- 2–3 صفحات.
- Forms.
- Basic SEO / performance.
- Source code.
- Out-of-scope protection.
- Timeline.
- Payment.
- Revisions.
- Support.
- Client responsibilities.
- Ownership.

---

# End of Specification

**VActives Website — Full Project Implementation Specification**

هذا المستند هو المرجع التنفيذي التفصيلي أثناء بناء المشروع، ويُستخدم للتأكد أن التنفيذ يظل داخل نطاق الاتفاق والمتطلبات المعتمدة.

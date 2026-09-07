import './PaymentMethods.css';

// Authentic, pixel-perfect logos matching reference picture
const PayPalLogo = () => (
  <svg viewBox="0 0 100 100" width="34" height="34" fill="none">
    <path
      d="M32 78L40.2 26C40.6 23.4 42.8 21.5 45.4 21.5H62.8C73.2 21.5 79.5 26.6 77.8 36.4C76.2 46.2 68.6 52.8 59.4 52.8H48.8L44.8 78H32Z"
      fill="#003087"
    />
    <path
      d="M40.5 86L46.8 46.4C47.1 44.4 48.8 42.9 50.8 42.9H64.2C72.2 42.9 77.1 47.9 75.8 55.4C74.6 63 68.7 68.1 61.6 68.1H53.5L49.3 94.6C49.1 96.1 47.8 97.2 46.2 97.2H35.4L40.5 86Z"
      fill="#0079C1"
    />
    <path
      d="M48.8 52.8L46.8 65.5H57.5C64.6 65.5 70.5 60.4 71.7 52.8H48.8Z"
      fill="#001C64"
      opacity="0.3"
    />
  </svg>
);

const GooglePayLogo = () => (
  <svg viewBox="0 0 120 50" width="46" height="20" fill="none">
    <path
      d="M17.8 22.1v4.8h11.5c-.5 2.8-2.2 5.1-4.8 6.6l7.7 6c4.5-4.2 7.1-10.4 7.1-17.4 0-1.2-.1-2.4-.3-3.5H17.8v3.5z"
      fill="#4285F4"
    />
    <path
      d="M17.8 42c6.5 0 11.9-2.1 15.9-5.8l-7.7-6c-2.2 1.5-5 2.3-8.2 2.3-6.3 0-11.7-4.2-13.6-10l-8 6.2c4 7.9 12.1 13.3 21.6 13.3z"
      fill="#34A853"
    />
    <path
      d="M4.2 22.5c-.5-1.5-.8-3.1-.8-4.8s.3-3.3.8-4.8l-8-6.2C-5.5 10.3-6.5 14-6.5 17.7s1 7.4 2.7 11l8-6.2z"
      fill="#FBBC05"
      transform="translate(10, 7)"
    />
    <path
      d="M17.8 9.3c3.5 0 6.7 1.2 9.2 3.6l6.9-6.9C29.7 2.2 24.3 0 17.8 0 8.3 0 .2 5.4-3.8 13.3l8 6.2c1.9-5.8 7.3-10.2 13.6-10.2z"
      fill="#EA4335"
    />
    <path
      d="M50.5 8h6.2c3 0 5.4.8 7 2.3 1.7 1.5 2.5 3.5 2.5 6 0 2.6-.8 4.6-2.5 6.1-1.7 1.5-4 2.3-7 2.3h-2.9v11.8h-3.3V8zm6 13.5c1.9 0 3.4-.5 4.4-1.4 1-.9 1.5-2.2 1.5-3.8 0-1.6-.5-2.9-1.5-3.8-1-.9-2.5-1.4-4.4-1.4h-2.7v10.4h2.7z"
      fill="#3C4043"
    />
    <path
      d="M74.8 19.4c2.2 0 4 .6 5.3 1.7 1.3 1.1 1.9 2.7 1.9 4.6v10.8h-3.2v-2.5h-.1c-1.4 2-3.2 3-5.5 3-2 0-3.6-.6-4.9-1.8-1.2-1.2-1.9-2.7-1.9-4.4 0-1.9.7-3.4 2-4.5 1.3-1.1 3.1-1.6 5.3-1.6 1.9 0 3.5.3 4.8 1v-.7c0-1-.4-2.1-1.3-2.8-.9-.7-1.9-1.1-3.2-1.1-2 0-3.5.8-4.7 2.5l-2.6-1.6c1.7-2.3 4.5-3.6 8.1-3.6zm-5.1 12.3c0 .8.4 1.5 1.1 2 .7.5 1.6.8 2.6.8 1.4 0 2.7-.5 3.8-1.6 1.1-1 1.6-2.3 1.6-3.6-1-.8-2.4-1.1-4.1-1.1-1.3 0-2.4.3-3.3.9-.9.6-1.5 1.5-1.5 2.7z"
      fill="#3C4043"
    />
    <path
      d="M93.8 19.9l-11.2 25.8h-3.4l4.2-9.1-7.4-16.7h3.6l5.4 12.9h.1l5.2-12.9h3.5z"
      fill="#3C4043"
    />
  </svg>
);

const VisaLogo = () => (
  <svg viewBox="0 0 60 22" width="46" height="17" fill="none">
    <text
      x="2"
      y="18"
      fill="#1A1F71"
      fontStyle="italic"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="900"
      fontSize="22"
      letterSpacing="1"
    >
      VISA
    </text>
  </svg>
);

const MastercardLogo = () => (
  <svg viewBox="0 0 72 45" width="42" height="26" fill="none">
    <circle cx="24" cy="22.5" r="20" fill="#EB001B" />
    <circle cx="48" cy="22.5" r="20" fill="#F79E1B" />
    <path
      d="M36 7.4a20 20 0 0 1 0 30.2 20 20 0 0 1 0-30.2z"
      fill="#FF5F00"
    />
  </svg>
);

const CryptoCubeLogo = () => (
  <svg viewBox="0 0 60 60" width="34" height="34" fill="none">
    <path
      d="M30 6L51 18L30 30L9 18L30 6Z"
      fill="#2A2E3D"
      stroke="#1E232E"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M9 18L30 30V54L9 42V18Z"
      fill="#1C1F2A"
      stroke="#151720"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M30 30L51 18V42L30 54V30Z"
      fill="#3D4255"
      stroke="#2A2E3D"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <line x1="30" y1="6" x2="30" y2="30" stroke="#4F566B" strokeWidth="1" opacity="0.4" />
    <circle cx="30" cy="30" r="3" fill="#F97316" />
  </svg>
);

const ApplePayLogo = () => (
  <svg viewBox="0 0 90 40" width="44" height="20" fill="#000000">
    <path d="M15.2 13.9c-.8 1-2.1 1.7-3.4 1.6-.2-1.3.4-2.7 1.1-3.6.8-1 2.2-1.7 3.3-1.7.3 1.3-.3 2.7-1 3.7zm2.4 1.8c-1.9-.1-3.5 1.1-4.4 1.1-.9 0-2.3-1-3.8-1-2 0-3.8 1.1-4.8 2.9-2.1 3.6-.5 9 1.5 12 1 1.5 2.2 3.1 3.8 3 1.6-.1 2.2-1 4.1-1s2.4 1 4.1 1c1.7 0 2.7-1.5 3.7-3 1.2-1.7 1.7-3.4 1.7-3.5-.1 0-3.3-1.3-3.3-5 0-3.1 2.5-4.6 2.6-4.7-1.4-2.1-3.6-2.3-4.4-2.4l-.8.6z" />
    <path d="M37.3 11h6.6c3.2 0 5.6.8 7.3 2.4 1.7 1.5 2.6 3.7 2.6 6.3 0 2.7-.9 4.8-2.6 6.4-1.7 1.6-4.1 2.4-7.3 2.4h-3.1v10.5h-3.5V11zm6.4 14.4c2 0 3.6-.5 4.6-1.5s1.6-2.4 1.6-4.1c0-1.7-.5-3.1-1.6-4.1s-2.6-1.5-4.6-1.5h-2.9v11.2h2.9z" />
    <path d="M62.6 22.8c2.4 0 4.2.6 5.6 1.8 1.4 1.2 2 2.8 2 4.8v9.6h-3.4v-2.3h-.1c-1.4 1.8-3.3 2.7-5.7 2.7-2.1 0-3.8-.6-5.1-1.7-1.3-1.1-2-2.5-2-4.2 0-1.8.7-3.3 2.1-4.4 1.4-1.1 3.2-1.6 5.5-1.6 2 0 3.6.3 4.9.9v-.7c0-1-.4-1.9-1.3-2.5-.9-.6-1.9-.9-3.2-.9-2 0-3.6.8-4.8 2.3l-2.4-1.6c1.6-2.1 4.2-3.1 7.9-3.1zm-4.7 11.2c0 .8.4 1.5 1.1 2 .7.5 1.6.8 2.6.8 1.4 0 2.7-.5 3.8-1.6 1.1-1 1.6-2.3 1.6-3.6-1-.8-2.4-1.1-4.1-1.1-1.3 0-2.4.3-3.3.9-.9.6-1.7 1.4-1.7 2.6z" />
    <path d="M82.8 23.3l-11.4 25.8h-3.6l4.3-9.3-7.5-16.5h3.8l5.5 12.8h.1l5.3-12.8h3.5z" />
  </svg>
);

const StripeLogo = () => (
  <svg viewBox="0 0 54 22" width="42" height="18" fill="none">
    <text
      x="0"
      y="17"
      fill="#635BFF"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="800"
      fontSize="18"
      letterSpacing="-0.5"
    >
      stripe
    </text>
  </svg>
);

const BkashLogo = () => (
  <svg viewBox="0 0 70 60" width="36" height="30" fill="none">
    <path d="M35 5L15 25H35L45 15L35 5Z" fill="#E2136E" />
    <path d="M15 25L5 45L25 35L15 25Z" fill="#D12053" />
    <path d="M35 25L25 55L45 35H35Z" fill="#C4165E" />
    <path d="M45 35L65 25L50 20L45 35Z" fill="#E2136E" />
    <path d="M35 25L45 35L50 20L35 25Z" fill="#A8104B" />
  </svg>
);

const NagadLogo = () => (
  <svg viewBox="0 0 60 60" width="34" height="34" fill="none">
    <circle cx="30" cy="30" r="28" fill="#F7941D" fillOpacity="0.12" />
    <path
      d="M30 10C24 16 18 24 18 32C18 39 23 45 30 45C37 45 42 39 42 32C42 24 36 16 30 10Z"
      fill="#F15A24"
    />
    <path
      d="M30 22C27 26 24 30 24 34C24 38 27 41 30 41C33 41 36 38 36 34C36 30 33 26 30 22Z"
      fill="#FFD200"
    />
  </svg>
);

const RocketLogo = () => (
  <svg viewBox="0 0 60 60" width="34" height="34" fill="none">
    <path
      d="M30 8C30 8 20 20 20 36C20 44 25 48 30 48C35 48 40 44 40 36C40 20 30 8 30 8Z"
      fill="#8B00A0"
    />
    <circle cx="30" cy="26" r="5" fill="#FFFFFF" />
    <path d="M22 36L14 44H23L25 39" fill="#8B00A0" />
    <path d="M38 36L46 44H37L35 39" fill="#8B00A0" />
    <path d="M28 48L30 54L32 48Z" fill="#F15A24" />
  </svg>
);

const AmexLogo = () => (
  <svg viewBox="0 0 56 22" width="40" height="17" fill="none">
    <rect width="56" height="22" rx="3" fill="#006FCF" />
    <text
      x="5"
      y="16"
      fill="#FFFFFF"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="900"
      fontSize="11.5"
      letterSpacing="1.5"
    >
      AMEX
    </text>
  </svg>
);

const rotatingPaymentMethods = [
  { name: 'PayPal', icon: <PayPalLogo /> },
  { name: 'Google Pay', icon: <GooglePayLogo /> },
  { name: 'Stripe', icon: <StripeLogo /> },
  { name: 'Visa', icon: <VisaLogo /> },
  { name: 'Mastercard', icon: <MastercardLogo /> },
  { name: 'Crypto Web3', icon: <CryptoCubeLogo /> },
  { name: 'Apple Pay', icon: <ApplePayLogo /> },
  { name: 'bKash', icon: <BkashLogo /> },
  { name: 'Nagad', icon: <NagadLogo /> },
  { name: 'Rocket', icon: <RocketLogo /> },
  { name: 'Amex', icon: <AmexLogo /> },
];

export default function PaymentMethods() {
  const totalItems = rotatingPaymentMethods.length;

  return (
    <section className="payment" id="payment">
      <div className="container">
        {/* Header matching the design */}
        <div className="payment__header">
          <div className="payment__badge-wrapper">
            <span className="payment__badge-text">Payment Methods</span>
            <div className="payment__badge-divider">
              <span className="payment__badge-dot"></span>
            </div>
          </div>

          <h2 className="payment__title">
            Multiple Payment <span className="payment__title-accent">Methods</span>
          </h2>

          <p className="payment__desc">
            We accept Visa, Mastercard, American Express, Bikash, Nagad, Rocket, and more, so you
            are never stuck at checkout. Deposits are instant, and you can start with as little as
            $1, which means there is no reason to wait before placing your first order.
          </p>
        </div>
      </div>

      {/* Orbit & World Map Stage */}
      <div className="payment__stage">
        {/* Detailed World Map Silhouette in soft peach */}
        <div className="payment__world-map" aria-hidden="true">
          <svg
            viewBox="0 0 1000 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="payment__map-svg"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* North America */}
            <path
              d="M75 55 C110 50, 145 42, 195 52 C225 58, 255 70, 260 92 C265 110, 245 125, 230 140 C215 155, 205 178, 195 200 C185 220, 168 230, 150 228 C135 225, 125 205, 115 190 C105 175, 82 175, 68 160 C55 145, 62 120, 72 105 C80 92, 60 70, 75 55 Z"
              fill="#fed7aa"
              fillOpacity="0.75"
            />
            {/* Alaska / Archipelago */}
            <path
              d="M38 72 C52 62, 70 70, 65 82 C58 92, 42 90, 32 80 Z"
              fill="#fed7aa"
              fillOpacity="0.7"
            />
            {/* Greenland */}
            <path
              d="M275 32 C310 28, 340 38, 335 58 C330 78, 305 88, 280 72 C270 62, 265 42, 275 32 Z"
              fill="#fed7aa"
              fillOpacity="0.65"
            />
            {/* South America */}
            <path
              d="M205 235 C232 240, 262 258, 268 288 C274 318, 258 355, 238 390 C222 415, 206 422, 195 408 C185 390, 190 355, 185 325 C180 295, 170 265, 185 245 C192 235, 198 234, 205 235 Z"
              fill="#fed7aa"
              fillOpacity="0.75"
            />
            {/* Europe */}
            <path
              d="M450 68 C485 58, 520 62, 530 82 C540 102, 515 118, 495 128 C475 138, 455 132, 440 122 C425 112, 430 78, 450 68 Z"
              fill="#fed7aa"
              fillOpacity="0.75"
            />
            {/* UK & Ireland */}
            <path
              d="M418 78 C428 72, 438 80, 432 90 C426 98, 416 96, 412 86 Z"
              fill="#fed7aa"
              fillOpacity="0.7"
            />
            {/* Africa */}
            <path
              d="M450 152 C485 148, 530 162, 545 198 C560 232, 550 278, 530 318 C510 358, 480 378, 465 368 C450 358, 450 322, 440 282 C430 242, 415 198, 430 172 C438 158, 442 155, 450 152 Z"
              fill="#fed7aa"
              fillOpacity="0.75"
            />
            {/* Madagascar */}
            <path
              d="M555 308 C565 302, 570 312, 565 332 C560 348, 550 348, 550 328 Z"
              fill="#fed7aa"
              fillOpacity="0.7"
            />
            {/* Asia Main Continent */}
            <path
              d="M540 58 C600 42, 690 48, 760 72 C810 92, 840 132, 820 168 C800 202, 750 212, 715 232 C680 252, 630 242, 600 212 C570 182, 545 172, 535 142 C525 112, 510 72, 540 58 Z"
              fill="#fed7aa"
              fillOpacity="0.75"
            />
            {/* Japan */}
            <path
              d="M850 118 C865 108, 875 122, 865 142 C855 158, 840 152, 845 132 Z"
              fill="#fed7aa"
              fillOpacity="0.7"
            />
            {/* India & SE Asia */}
            <path
              d="M625 168 C655 162, 675 182, 670 218 C665 242, 640 262, 620 248 C605 232, 610 192, 625 168 Z"
              fill="#fed7aa"
              fillOpacity="0.75"
            />
            {/* Australia & Oceania */}
            <path
              d="M730 278 C775 268, 815 292, 820 328 C825 362, 790 392, 750 388 C710 382, 695 348, 705 318 C715 288, 720 282, 730 278 Z"
              fill="#fed7aa"
              fillOpacity="0.75"
            />
            {/* New Zealand */}
            <path
              d="M840 358 C850 352, 855 362, 850 378 C845 388, 835 388, 835 372 Z"
              fill="#fed7aa"
              fillOpacity="0.7"
            />
          </svg>
        </div>

        {/* Concentric Arcs / Glowing Dome Layers */}
        <div className="payment__dome" aria-hidden="true">
          <div className="payment__dome-fill"></div>
          <div className="payment__dome-inner-fill"></div>
          <div className="payment__dome-arc payment__dome-arc--outer"></div>
          <div className="payment__dome-arc payment__dome-arc--mid"></div>
          <div className="payment__dome-arc payment__dome-arc--inner"></div>
        </div>

        {/* Rotating Items Orbit Track */}
        <div className="payment__orbit-wrapper">
          <div className="payment__orbit-rotator" role="region" aria-label="Rotating Payment Methods">
            {rotatingPaymentMethods.map((method, index) => {
              const angle = (360 / totalItems) * index;
              return (
                <div
                  key={method.name}
                  className="payment__orbit-node"
                  style={{
                    '--item-angle': `${angle}deg`,
                  }}
                >
                  <div className="payment__counter-angle">
                    <div className="payment__counter-rotator">
                      <div className="payment__badge-card" tabIndex="0" title={method.name}>
                        <div className="payment__badge-icon">{method.icon}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Large Translucent Watermark Text */}
        <div className="payment__watermark" aria-hidden="true">
          MULTIPLE PAYMENTS
        </div>
      </div>
    </section>
  );
}

import { IconProps } from './icons.type';

export function BootstrapIcon({ size }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 200 200"
    >
      <g clipPath="url(#clip0_104_7)">
        <path
          fill="url(#paint0_linear_104_7)"
          d="M153.125 0H46.875C20.987 0 0 20.987 0 46.875v106.25C0 179.013 20.987 200 46.875 200h106.25C179.013 200 200 179.013 200 153.125V46.875C200 20.987 179.013 0 153.125 0z"
        />
        <g filter="url(#filter0_d_104_7)">
          <path
            fill="url(#paint1_linear_104_7)"
            d="M103.102 153.248c23.184 0 37.155-11.353 37.155-30.076 0-14.154-9.968-24.4-24.77-26.023v-.589c10.875-1.77 19.408-11.869 19.408-23.147 0-16.07-12.686-26.538-32.02-26.538h-43.5v106.373h43.727zm-26.81-92.883h22.505c12.234 0 19.182 5.455 19.182 15.333 0 10.542-8.081 16.439-22.731 16.439H76.29V60.365zm0 79.393v-35.015h22.353c16.011 0 24.318 5.897 24.318 17.397 0 11.499-8.08 17.618-23.336 17.618H76.291z"
          />
          <path
            stroke="#fff"
            strokeWidth="3.125"
            d="M103.102 153.248c23.184 0 37.155-11.353 37.155-30.076 0-14.154-9.968-24.4-24.77-26.023v-.589c10.875-1.77 19.408-11.869 19.408-23.147 0-16.07-12.686-26.538-32.02-26.538h-43.5v106.373h43.727zm-26.81-92.883h22.505c12.234 0 19.182 5.455 19.182 15.333 0 10.542-8.081 16.439-22.731 16.439H76.29V60.365zm0 79.393v-35.015h22.353c16.011 0 24.318 5.897 24.318 17.397 0 11.499-8.08 17.618-23.336 17.618H76.291z"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_104_7"
          width="134.007"
          height="159.498"
          x="32.813"
          y="26.563"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="6.25" />
          <feGaussianBlur stdDeviation="12.5" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_104_7" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_104_7" result="shape" />
        </filter>
        <linearGradient
          id="paint0_linear_104_7"
          x1="0"
          x2="200"
          y1="0"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9013FE" />
          <stop offset="1" stopColor="#6B11F4" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_104_7"
          x1="67.026"
          x2="116.048"
          y1="53.877"
          y2="136.784"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#F1E5FC" />
        </linearGradient>
        <clipPath id="clip0_104_7">
          <path fill="#fff" d="M0 0H200V200H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

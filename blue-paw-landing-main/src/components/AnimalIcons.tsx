// Animal SVG Icons Component
export const CowIcon = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Cow body */}
    <ellipse cx="50" cy="60" rx="30" ry="25" fill="currentColor" opacity="0.8" />
    {/* Cow head */}
    <ellipse cx="50" cy="35" rx="20" ry="18" fill="currentColor" opacity="0.9" />
    {/* Ears */}
    <ellipse cx="35" cy="30" rx="6" ry="8" fill="currentColor" />
    <ellipse cx="65" cy="30" rx="6" ry="8" fill="currentColor" />
    {/* Horns */}
    <path d="M 32 25 Q 30 15 35 20" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M 68 25 Q 70 15 65 20" stroke="currentColor" strokeWidth="2" fill="none" />
    {/* Eyes */}
    <circle cx="45" cy="32" r="2" fill="white" />
    <circle cx="55" cy="32" r="2" fill="white" />
    {/* Nose */}
    <ellipse cx="50" cy="40" rx="4" ry="3" fill="white" opacity="0.7" />
    {/* Spots */}
    <ellipse cx="40" cy="55" rx="5" ry="6" fill="white" opacity="0.3" />
    <ellipse cx="60" cy="65" rx="4" ry="5" fill="white" opacity="0.3" />
  </svg>
);

export const HenIcon = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Hen body */}
    <ellipse cx="50" cy="60" rx="22" ry="28" fill="currentColor" opacity="0.9" />
    {/* Hen head */}
    <circle cx="50" cy="30" r="18" fill="currentColor" opacity="0.95" />
    {/* Comb */}
    <path
      d="M 45 20 Q 50 10 55 20"
      fill="currentColor"
      opacity="0.8"
    />
    <path
      d="M 48 18 Q 50 8 52 18"
      fill="currentColor"
      opacity="0.8"
    />
    <path
      d="M 51 18 Q 50 8 48 18"
      fill="currentColor"
      opacity="0.8"
    />
    {/* Beak */}
    <path d="M 50 35 L 45 40 L 50 38 Z" fill="orange" />
    {/* Wattle */}
    <ellipse cx="42" cy="38" rx="3" ry="5" fill="red" opacity="0.8" />
    {/* Eye */}
    <circle cx="55" cy="28" r="3" fill="white" />
    <circle cx="55" cy="28" r="1.5" fill="black" />
    {/* Wing */}
    <ellipse cx="40" cy="55" rx="8" ry="12" fill="currentColor" opacity="0.7" />
    {/* Tail feathers */}
    <path d="M 70 50 Q 80 45 75 60" fill="currentColor" opacity="0.8" />
    <path d="M 72 55 Q 82 50 77 65" fill="currentColor" opacity="0.7" />
    {/* Legs */}
    <rect x="45" y="85" width="3" height="10" fill="orange" />
    <rect x="52" y="85" width="3" height="10" fill="orange" />
  </svg>
);

export const FishIcon = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Fish body */}
    <ellipse cx="50" cy="50" rx="30" ry="20" fill="currentColor" opacity="0.9" />
    {/* Fish tail */}
    <path
      d="M 20 50 Q 10 40 15 50 Q 10 60 20 50"
      fill="currentColor"
      opacity="0.8"
    />
    {/* Fish head */}
    <ellipse cx="65" cy="50" rx="12" ry="15" fill="currentColor" opacity="0.95" />
    {/* Eye */}
    <circle cx="68" cy="48" r="4" fill="white" />
    <circle cx="68" cy="48" r="2" fill="black" />
    {/* Fins - top */}
    <path
      d="M 45 35 Q 50 25 55 35"
      fill="currentColor"
      opacity="0.7"
    />
    {/* Fins - bottom */}
    <path
      d="M 45 65 Q 50 75 55 65"
      fill="currentColor"
      opacity="0.7"
    />
    {/* Scales pattern */}
    <path
      d="M 40 45 Q 42 47 40 49 Q 42 51 40 53"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      opacity="0.3"
    />
    <path
      d="M 50 45 Q 52 47 50 49 Q 52 51 50 53"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      opacity="0.3"
    />
  </svg>
);


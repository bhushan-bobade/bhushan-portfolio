"use client"

export function AnimatedAvatar() {
  return (
    <div className="relative w-40 h-40 mx-auto">
      <svg
        width="160"
        height="160"
        viewBox="0 0 160 160"
        className="animate-float-gentle"
        style={{
          filter: "drop-shadow(0 8px 32px rgba(0, 0, 0, 0.3))",
        }}
      >
        {/* Background Circle */}
        <circle
          cx="80"
          cy="80"
          r="75"
          fill="url(#backgroundGradient)"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="2"
        />

        {/* Face */}
        <ellipse cx="80" cy="85" rx="35" ry="40" fill="#D4A574" className="animate-pulse-subtle" />

        {/* Hair */}
        <path
          d="M45 65 Q50 45 80 50 Q110 45 115 65 Q115 75 110 80 L105 75 Q100 70 95 72 L90 70 Q85 68 80 70 Q75 68 70 70 L65 72 Q60 70 55 75 L50 80 Q45 75 45 65 Z"
          fill="#9S1810"
          className="animate-sway"
        />

        {/* Hair Details */}
        <path
          d="M55 60 Q60 55 70 58 Q75 56 80 58 Q85 56 90 58 Q95 55 100 60"
          stroke="#1A0F08"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />

        {/* Eyes */}
        <g className="animate-blink">
          <ellipse cx="70" cy="80" rx="4" ry="5" fill="#2C1810" />
          <ellipse cx="90" cy="80" rx="4" ry="5" fill="#2C1810" />
          <circle cx="71" cy="78" r="1" fill="#FFFFFF" opacity="0.8" />
          <circle cx="91" cy="78" r="1" fill="#FFFFFF" opacity="0.8" />
        </g>

        {/* Eyebrows */}
        <path d="M65 72 Q70 70 75 72" stroke="#2C1810" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M85 72 Q90 70 95 72" stroke="#2C1810" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Nose */}
        <ellipse cx="80" cy="88" rx="2" ry="3" fill="#C49660" opacity="0.6" />

        {/* Mouth */}
        <path
          d="M75 95 Q80 98 85 95"
          stroke="#A67C52"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="animate-smile"
        />

        {/* Facial Hair/Beard */}
        <path
          d="M65 100 Q70 105 80 105 Q90 105 95 100 Q95 110 90 115 Q85 118 80 118 Q75 118 70 115 Q65 110 65 100 Z"
          fill="#2C1810"
          opacity="0.8"
        />

        {/* Shirt */}
        <rect x="50" y="120" width="60" height="40" fill="#4ECDC4" rx="8" />

        {/* Shirt Stripes */}
        <rect x="50" y="130" width="60" height="4" fill="#2E8B8B" opacity="0.7" />
        <rect x="50" y="140" width="60" height="4" fill="#2E8B8B" opacity="0.7" />

        {/* Shirt Collar */}
        <path d="M70 120 L80 125 L90 120 L85 130 L75 130 Z" fill="#3BA8A0" />

        {/* Floating Sparkles */}
        <g className="animate-sparkle">
          <circle cx="30" cy="40" r="1.5" fill="#FFD700" opacity="0.8" />
          <circle cx="130" cy="60" r="1" fill="#FFD700" opacity="0.6" />
          <circle cx="25" cy="100" r="1" fill="#87CEEB" opacity="0.7" />
          <circle cx="135" cy="120" r="1.5" fill="#87CEEB" opacity="0.5" />
        </g>

        {/* Gradients */}
        <defs>
          <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(135, 206, 235, 0.1)" />
            <stop offset="50%" stopColor="rgba(78, 205, 196, 0.1)" />
            <stop offset="100%" stopColor="rgba(255, 215, 0, 0.1)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Elements */}
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full border-2 border-gray-900 shadow-lg animate-pulse"></div>
    </div>
  )
}

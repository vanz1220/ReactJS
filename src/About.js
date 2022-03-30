import React from 'react'
import AnimatedText from 'react-animated-text-content';

export default function About() {
  return (
  <div class="About-Height">
    
    <h1 class="wew">
      <AnimatedText
        type="chars" // animate words or chars
        animation={{
          x: '200px',
          y: '-20px',
          scale: 1.1,
          ease: 'ease-in-out',
        }}
        animationType="float"
        interval={0.1}
        duration={3.0}
        tag="p"
        className="animated-paragraph"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
      >
        I LOVE REACT JS
      </AnimatedText>
    </h1>
  </div>
  )
}

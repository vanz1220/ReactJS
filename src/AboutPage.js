import React from 'react'
import AnimatedText from 'react-animated-text-content';

export default function AboutPage() {
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
        animationType="diagonal"
        interval={0.2}
        duration={2.5}
        tag="p"
        className="animated-paragraph"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
      >
        It is not our differences that divide us.
      </AnimatedText>
      <AnimatedText
        type="chars" // animate words or chars
        animation={{
          x: '200px',
          y: '-20px',
          scale: 1.1,
          ease: 'ease-in-out',
        }}
        animationType="diagonal"
        interval={0.2}
        duration={2.5}
        tag="p"
        className="animated-paragraph"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
      >
      It is our inability to recognize, accept,
      </AnimatedText>
      <AnimatedText
        type="chars" // animate words or chars
        animation={{
          x: '200px',
          y: '-20px',
          scale: 1.1,
          ease: 'ease-in-out',
        }}
        animationType="diagonal"
        interval={0.2}
        duration={2.5}
        tag="p"
        className="animated-paragraph"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
      >
      It is our inability to recognize, accept,
      </AnimatedText>
    </h1>
  </div>
  )
}

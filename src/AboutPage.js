import React from 'react'
import { Random } from 'react-animated-text';

export default function AboutPage() {
  return (
    <div class="About-Height">
    <h1 class="wew">
    <Random
      text="It is not our differences that divide us."
      iterations={1}
      effect="verticalFadeIn"
      effectChange={2}
      effectDirection="up"
    />
    <Random
      text="It is our inability to recognize, accept,"
      iterations={1}
      effect="verticalFadeIn"
      effectChange={2}
      effectDirection="up"
    />
    <Random
      text="and celebrate those differences. - Audre Lorde"
      iterations={1}
      effect="verticalFadeIn"
      effectChange={2}
      effectDirection="up"
    />
    </h1>
  </div>
  )
}

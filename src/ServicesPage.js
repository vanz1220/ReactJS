import React from 'react'
import { Random } from 'react-animated-text';

export default function ServicesPage() {
  return (
    <div class="About-Height">
    <h1 class="wew">
    <Random
      text="Services."
      iterations={1}
      effect="verticalFadeIn"
      effectChange={2}
      effectDirection="up"
    />
    </h1>
  </div>
  )
}

'use client'

import { Image } from '@tamagui/image'

export default function AHomeScreen() {
  return <>
    <Image
    source={
      {
        uri: 'https://placekitten.com/200/300',
        width: 200,
        height: 300
      }
    }
    />
  </>
}

// don't import from here, that's handled already
// instead this is just setting types for this folder

import { config } from '@tamagui/config/v2'
import { createTamagui } from 'tamagui'

type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default createTamagui(config)

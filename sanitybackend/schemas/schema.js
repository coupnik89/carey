
import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import image from './Image'
import video from './Video'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    image, video
  ]),
})

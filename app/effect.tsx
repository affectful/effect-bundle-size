import * as Array from 'effect/Array'
import * as Schema from 'effect/Schema'
import { pipe } from 'effect/Function'
import { View } from 'react-native'

const Message = Schema.Array(Schema.String)

export default function Page() {
  const msgDecode = Schema.decodeSync(Message)(['effect', 'test'])
  const message = pipe(
    msgDecode,
    Array.map(s => s.toUpperCase()),
    Array.join(' '),
  )
  
  return (
    <View>
      {message}
    </View>
  )
}
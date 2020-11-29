import { mergeDeepRight, reduce } from 'ramda'

import GraphQLJSON from 'graphql-type-json'
import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date'

const types = {
  JSON: GraphQLJSON,
  DateTime: GraphQLDateTime,
  Date: GraphQLDate,
  Time: GraphQLTime
}

const mergeDeepAll = reduce(mergeDeepRight, {} as any)
const resolvers: any = mergeDeepAll([
  types,
])


export default resolvers

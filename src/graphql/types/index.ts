import { mergeTypeDefs } from "@graphql-tools/merge";
import userType from './userType';

// https://www.graphql-tools.com/docs/schema-merging

export const types = [
  userType
];

export default mergeTypeDefs(types);

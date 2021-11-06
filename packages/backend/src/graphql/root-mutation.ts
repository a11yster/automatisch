import { GraphQLObjectType } from 'graphql';
import createConnection from './mutations/create-connection';
import createAuthData from './mutations/create-auth-data';
import updateConnection from './mutations/update-connection';
import resetConnection from './mutations/reset-connection';
import verifyConnection from './mutations/verify-connection';
import deleteConnection from './mutations/delete-connection';
import createStep from './mutations/create-step';

const rootMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createConnection,
    createAuthData,
    updateConnection,
    resetConnection,
    verifyConnection,
    deleteConnection,
    createStep,
  }
});

export default rootMutation;
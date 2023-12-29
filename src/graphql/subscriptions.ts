/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePost = /* GraphQL */ `subscription OnCreatePost(
  $filter: ModelSubscriptionPostFilterInput
  $author: String
) {
  onCreatePost(filter: $filter, author: $author) {
    id
    type
    createdAt
    updatedAt
    title
    description
    author
    authorName
    published
    tags
    picture
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost(
  $filter: ModelSubscriptionPostFilterInput
  $author: String
) {
  onUpdatePost(filter: $filter, author: $author) {
    id
    type
    createdAt
    updatedAt
    title
    description
    author
    authorName
    published
    tags
    picture
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost(
  $filter: ModelSubscriptionPostFilterInput
  $author: String
) {
  onDeletePost(filter: $filter, author: $author) {
    id
    type
    createdAt
    updatedAt
    title
    description
    author
    authorName
    published
    tags
    picture
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;

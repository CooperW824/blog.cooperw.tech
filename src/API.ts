/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  title: string,
  description: string,
  author: string,
  tags?: Array< string | null > | null,
  picture?: string | null,
};

export type ModelPostConditionInput = {
  updatedAt?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  author?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  createdAt: string,
  updatedAt: string,
  title: string,
  description: string,
  author: string,
  tags?: Array< string | null > | null,
  picture?: string | null,
};

export type UpdatePostInput = {
  id: string,
  createdAt: string,
  updatedAt?: string | null,
  title?: string | null,
  description?: string | null,
  author?: string | null,
  tags?: Array< string | null > | null,
  picture?: string | null,
};

export type DeletePostInput = {
  id: string,
  createdAt: string,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  author?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
  picture?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    createdAt: string,
    updatedAt: string,
    title: string,
    description: string,
    author: string,
    tags?: Array< string | null > | null,
    picture?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    createdAt: string,
    updatedAt: string,
    title: string,
    description: string,
    author: string,
    tags?: Array< string | null > | null,
    picture?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    createdAt: string,
    updatedAt: string,
    title: string,
    description: string,
    author: string,
    tags?: Array< string | null > | null,
    picture?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
  createdAt: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    createdAt: string,
    updatedAt: string,
    title: string,
    description: string,
    author: string,
    tags?: Array< string | null > | null,
    picture?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  id?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      createdAt: string,
      updatedAt: string,
      title: string,
      description: string,
      author: string,
      tags?: Array< string | null > | null,
      picture?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  author?: string | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    createdAt: string,
    updatedAt: string,
    title: string,
    description: string,
    author: string,
    tags?: Array< string | null > | null,
    picture?: string | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  author?: string | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    createdAt: string,
    updatedAt: string,
    title: string,
    description: string,
    author: string,
    tags?: Array< string | null > | null,
    picture?: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  author?: string | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    createdAt: string,
    updatedAt: string,
    title: string,
    description: string,
    author: string,
    tags?: Array< string | null > | null,
    picture?: string | null,
  } | null,
};

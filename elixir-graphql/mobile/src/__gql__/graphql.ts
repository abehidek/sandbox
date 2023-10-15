/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type RootMutationType = {
  __typename?: 'RootMutationType';
  createTodoItem: Scalars['Boolean'];
  toggleTodoItem?: Maybe<TodoItem>;
};


export type RootMutationTypeCreateTodoItemArgs = {
  content: Scalars['String'];
};


export type RootMutationTypeToggleTodoItemArgs = {
  id: Scalars['ID'];
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  hello?: Maybe<Scalars['String']>;
  test?: Maybe<Scalars['String']>;
  todoItems: Array<Maybe<TodoItem>>;
};

export type TodoItem = {
  __typename?: 'TodoItem';
  content: Scalars['String'];
  id: Scalars['ID'];
  isCompleted: Scalars['Boolean'];
};

export type GetTodoItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodoItemsQuery = { __typename?: 'RootQueryType', todoItems: Array<{ __typename?: 'TodoItem', id: string, content: string, isCompleted: boolean } | null> };

export type ToggleTodoItemMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ToggleTodoItemMutation = { __typename?: 'RootMutationType', toggleTodoItem?: { __typename?: 'TodoItem', content: string, id: string, isCompleted: boolean } | null };


export const GetTodoItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTodoItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todoItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<GetTodoItemsQuery, GetTodoItemsQueryVariables>;
export const ToggleTodoItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"toggleTodoItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleTodoItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<ToggleTodoItemMutation, ToggleTodoItemMutationVariables>;
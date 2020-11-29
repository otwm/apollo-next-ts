/* 544afe043b28ca1bf979d11c70a00f2f220d87de
 * This file is automatically generated by graphql-let. */

import * as Apollo from '@apollo/client';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};
export declare enum TodoStatus {
    Todo = "TODO",
    Doing = "DOING",
    Done = "DONE"
}
export declare type Todo = {
    __typename?: 'Todo';
    id: Scalars['ID'];
    description: Scalars['String'];
    status: TodoStatus;
};
export declare type Query = {
    __typename?: 'Query';
    getTodo?: Maybe<Todo>;
};
export declare type QueryGetTodoArgs = {
    todoInput?: Maybe<GetTodoInput>;
};
export declare type GetTodoInput = {
    status?: Maybe<TodoStatus>;
};
export declare type GetTodoQueryVariables = Exact<{
    todoInput?: Maybe<GetTodoInput>;
}>;
export declare type GetTodoQuery = ({
    __typename?: 'Query';
} & {
    getTodo?: Maybe<({
        __typename?: 'Todo';
    } & Pick<Todo, 'id'>)>;
});
export declare const GetTodoDocument: Apollo.DocumentNode;
/**
 * __useGetTodoQuery__
 *
 * To run a query within a React component, call `useGetTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoQuery({
 *   variables: {
 *      todoInput: // value for 'todoInput'
 *   },
 * });
 */
export declare function useGetTodoQuery(baseOptions?: Apollo.QueryHookOptions<GetTodoQuery, GetTodoQueryVariables>): Apollo.QueryResult<GetTodoQuery, Exact<{
    todoInput?: GetTodoInput;
}>>;
export declare function useGetTodoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodoQuery, GetTodoQueryVariables>): Apollo.QueryTuple<GetTodoQuery, Exact<{
    todoInput?: GetTodoInput;
}>>;
export declare type GetTodoQueryHookResult = ReturnType<typeof useGetTodoQuery>;
export declare type GetTodoLazyQueryHookResult = ReturnType<typeof useGetTodoLazyQuery>;
export declare type GetTodoQueryResult = Apollo.QueryResult<GetTodoQuery, GetTodoQueryVariables>;

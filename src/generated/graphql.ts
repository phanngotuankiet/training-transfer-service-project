import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "test_db" */
  delete_test_db?: Maybe<Test_Db_Mutation_Response>;
  /** delete single row from the table: "test_db" */
  delete_test_db_by_pk?: Maybe<Test_Db>;
  /** insert data into the table: "test_db" */
  insert_test_db?: Maybe<Test_Db_Mutation_Response>;
  /** insert a single row into the table: "test_db" */
  insert_test_db_one?: Maybe<Test_Db>;
  /** update data of the table: "test_db" */
  update_test_db?: Maybe<Test_Db_Mutation_Response>;
  /** update single row of the table: "test_db" */
  update_test_db_by_pk?: Maybe<Test_Db>;
};

/** mutation root */
export type Mutation_RootDelete_Test_DbArgs = {
  where: Test_Db_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Test_Db_By_PkArgs = {
  test_id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootInsert_Test_DbArgs = {
  objects: Array<Test_Db_Insert_Input>;
  on_conflict?: InputMaybe<Test_Db_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Test_Db_OneArgs = {
  object: Test_Db_Insert_Input;
  on_conflict?: InputMaybe<Test_Db_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_Test_DbArgs = {
  _inc?: InputMaybe<Test_Db_Inc_Input>;
  _set?: InputMaybe<Test_Db_Set_Input>;
  where: Test_Db_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Test_Db_By_PkArgs = {
  _inc?: InputMaybe<Test_Db_Inc_Input>;
  _set?: InputMaybe<Test_Db_Set_Input>;
  pk_columns: Test_Db_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "test_db" */
  test_db: Array<Test_Db>;
  /** fetch aggregated fields from the table: "test_db" */
  test_db_aggregate: Test_Db_Aggregate;
  /** fetch data from the table: "test_db" using primary key columns */
  test_db_by_pk?: Maybe<Test_Db>;
};

export type Query_RootTest_DbArgs = {
  distinct_on?: InputMaybe<Array<Test_Db_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Test_Db_Order_By>>;
  where?: InputMaybe<Test_Db_Bool_Exp>;
};

export type Query_RootTest_Db_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Db_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Test_Db_Order_By>>;
  where?: InputMaybe<Test_Db_Bool_Exp>;
};

export type Query_RootTest_Db_By_PkArgs = {
  test_id: Scalars['Int']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "test_db" */
  test_db: Array<Test_Db>;
  /** fetch aggregated fields from the table: "test_db" */
  test_db_aggregate: Test_Db_Aggregate;
  /** fetch data from the table: "test_db" using primary key columns */
  test_db_by_pk?: Maybe<Test_Db>;
};

export type Subscription_RootTest_DbArgs = {
  distinct_on?: InputMaybe<Array<Test_Db_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Test_Db_Order_By>>;
  where?: InputMaybe<Test_Db_Bool_Exp>;
};

export type Subscription_RootTest_Db_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Db_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Test_Db_Order_By>>;
  where?: InputMaybe<Test_Db_Bool_Exp>;
};

export type Subscription_RootTest_Db_By_PkArgs = {
  test_id: Scalars['Int']['input'];
};

/** columns and relationships of "test_db" */
export type Test_Db = {
  __typename?: 'test_db';
  test_id: Scalars['Int']['output'];
  test_name?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "test_db" */
export type Test_Db_Aggregate = {
  __typename?: 'test_db_aggregate';
  aggregate?: Maybe<Test_Db_Aggregate_Fields>;
  nodes: Array<Test_Db>;
};

/** aggregate fields of "test_db" */
export type Test_Db_Aggregate_Fields = {
  __typename?: 'test_db_aggregate_fields';
  avg?: Maybe<Test_Db_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Test_Db_Max_Fields>;
  min?: Maybe<Test_Db_Min_Fields>;
  stddev?: Maybe<Test_Db_Stddev_Fields>;
  stddev_pop?: Maybe<Test_Db_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Test_Db_Stddev_Samp_Fields>;
  sum?: Maybe<Test_Db_Sum_Fields>;
  var_pop?: Maybe<Test_Db_Var_Pop_Fields>;
  var_samp?: Maybe<Test_Db_Var_Samp_Fields>;
  variance?: Maybe<Test_Db_Variance_Fields>;
};

/** aggregate fields of "test_db" */
export type Test_Db_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Test_Db_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Test_Db_Avg_Fields = {
  __typename?: 'test_db_avg_fields';
  test_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "test_db". All fields are combined with a logical 'AND'. */
export type Test_Db_Bool_Exp = {
  _and?: InputMaybe<Array<Test_Db_Bool_Exp>>;
  _not?: InputMaybe<Test_Db_Bool_Exp>;
  _or?: InputMaybe<Array<Test_Db_Bool_Exp>>;
  test_id?: InputMaybe<Int_Comparison_Exp>;
  test_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "test_db" */
export enum Test_Db_Constraint {
  /** unique or primary key constraint */
  TestDbPkey = 'test_db_pkey',
}

/** input type for incrementing numeric columns in table "test_db" */
export type Test_Db_Inc_Input = {
  test_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "test_db" */
export type Test_Db_Insert_Input = {
  test_id?: InputMaybe<Scalars['Int']['input']>;
  test_name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Test_Db_Max_Fields = {
  __typename?: 'test_db_max_fields';
  test_id?: Maybe<Scalars['Int']['output']>;
  test_name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Test_Db_Min_Fields = {
  __typename?: 'test_db_min_fields';
  test_id?: Maybe<Scalars['Int']['output']>;
  test_name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "test_db" */
export type Test_Db_Mutation_Response = {
  __typename?: 'test_db_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Test_Db>;
};

/** on conflict condition type for table "test_db" */
export type Test_Db_On_Conflict = {
  constraint: Test_Db_Constraint;
  update_columns?: Array<Test_Db_Update_Column>;
  where?: InputMaybe<Test_Db_Bool_Exp>;
};

/** Ordering options when selecting data from "test_db". */
export type Test_Db_Order_By = {
  test_id?: InputMaybe<Order_By>;
  test_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test_db */
export type Test_Db_Pk_Columns_Input = {
  test_id: Scalars['Int']['input'];
};

/** select columns of table "test_db" */
export enum Test_Db_Select_Column {
  /** column name */
  TestId = 'test_id',
  /** column name */
  TestName = 'test_name',
}

/** input type for updating data in table "test_db" */
export type Test_Db_Set_Input = {
  test_id?: InputMaybe<Scalars['Int']['input']>;
  test_name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Test_Db_Stddev_Fields = {
  __typename?: 'test_db_stddev_fields';
  test_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Test_Db_Stddev_Pop_Fields = {
  __typename?: 'test_db_stddev_pop_fields';
  test_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Test_Db_Stddev_Samp_Fields = {
  __typename?: 'test_db_stddev_samp_fields';
  test_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Test_Db_Sum_Fields = {
  __typename?: 'test_db_sum_fields';
  test_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "test_db" */
export enum Test_Db_Update_Column {
  /** column name */
  TestId = 'test_id',
  /** column name */
  TestName = 'test_name',
}

/** aggregate var_pop on columns */
export type Test_Db_Var_Pop_Fields = {
  __typename?: 'test_db_var_pop_fields';
  test_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Test_Db_Var_Samp_Fields = {
  __typename?: 'test_db_var_samp_fields';
  test_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Test_Db_Variance_Fields = {
  __typename?: 'test_db_variance_fields';
  test_id?: Maybe<Scalars['Float']['output']>;
};

export type MyQueryQueryVariables = Exact<{ [key: string]: never }>;

export type MyQueryQuery = {
  __typename?: 'query_root';
  test_db: Array<{ __typename?: 'test_db'; test_name?: string | null }>;
};

export const MyQueryDocument = gql`
  query MyQuery {
    test_db {
      test_name
    }
  }
`;

/**
 * __useMyQueryQuery__
 *
 * To run a query within a React component, call `useMyQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<MyQueryQuery, MyQueryQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MyQueryQuery, MyQueryQueryVariables>(
    MyQueryDocument,
    options,
  );
}
export function useMyQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MyQueryQuery,
    MyQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MyQueryQuery, MyQueryQueryVariables>(
    MyQueryDocument,
    options,
  );
}
export function useMyQuerySuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    MyQueryQuery,
    MyQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MyQueryQuery, MyQueryQueryVariables>(
    MyQueryDocument,
    options,
  );
}
export type MyQueryQueryHookResult = ReturnType<typeof useMyQueryQuery>;
export type MyQueryLazyQueryHookResult = ReturnType<typeof useMyQueryLazyQuery>;
export type MyQuerySuspenseQueryHookResult = ReturnType<
  typeof useMyQuerySuspenseQuery
>;
export type MyQueryQueryResult = Apollo.QueryResult<
  MyQueryQuery,
  MyQueryQueryVariables
>;

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
  numeric: { input: any; output: any };
  timestamptz: { input: any; output: any };
};

export type AuthAdminOutput = {
  __typename?: 'AuthAdminOutput';
  name: Scalars['String']['output'];
  role: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type AuthOutput = {
  __typename?: 'AuthOutput';
  name: Scalars['String']['output'];
  token: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type CancelBookingOutput = {
  __typename?: 'CancelBookingOutput';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['Int']['output'];
  note?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

export type DataInsertBookingInput = {
  bookingDate?: InputMaybe<Scalars['timestamptz']['input']>;
  itineraryId?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type DataInsertBookingOutput = {
  __typename?: 'DataInsertBookingOutput';
  bookingDate?: Maybe<Scalars['timestamptz']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
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

export type UpdateBookingInput = {
  bookingDate?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBookingOutput = {
  __typename?: 'UpdateBookingOutput';
  bookingDate?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** columns and relationships of "bookings" */
export type Bookings = {
  __typename?: 'bookings';
  booking_date: Scalars['timestamptz']['output'];
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['Int']['output'];
  /** An object relationship */
  itinerary: Itinerary;
  itinerary_id: Scalars['Int']['output'];
  note?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int']['output'];
};

/** aggregated selection of "bookings" */
export type Bookings_Aggregate = {
  __typename?: 'bookings_aggregate';
  aggregate?: Maybe<Bookings_Aggregate_Fields>;
  nodes: Array<Bookings>;
};

export type Bookings_Aggregate_Bool_Exp = {
  count?: InputMaybe<Bookings_Aggregate_Bool_Exp_Count>;
};

export type Bookings_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Bookings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Bookings_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "bookings" */
export type Bookings_Aggregate_Fields = {
  __typename?: 'bookings_aggregate_fields';
  avg?: Maybe<Bookings_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Bookings_Max_Fields>;
  min?: Maybe<Bookings_Min_Fields>;
  stddev?: Maybe<Bookings_Stddev_Fields>;
  stddev_pop?: Maybe<Bookings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bookings_Stddev_Samp_Fields>;
  sum?: Maybe<Bookings_Sum_Fields>;
  var_pop?: Maybe<Bookings_Var_Pop_Fields>;
  var_samp?: Maybe<Bookings_Var_Samp_Fields>;
  variance?: Maybe<Bookings_Variance_Fields>;
};

/** aggregate fields of "bookings" */
export type Bookings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bookings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "bookings" */
export type Bookings_Aggregate_Order_By = {
  avg?: InputMaybe<Bookings_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bookings_Max_Order_By>;
  min?: InputMaybe<Bookings_Min_Order_By>;
  stddev?: InputMaybe<Bookings_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bookings_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bookings_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bookings_Sum_Order_By>;
  var_pop?: InputMaybe<Bookings_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bookings_Var_Samp_Order_By>;
  variance?: InputMaybe<Bookings_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "bookings" */
export type Bookings_Arr_Rel_Insert_Input = {
  data: Array<Bookings_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Bookings_On_Conflict>;
};

/** aggregate avg on columns */
export type Bookings_Avg_Fields = {
  __typename?: 'bookings_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  itinerary_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "bookings" */
export type Bookings_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  itinerary_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "bookings". All fields are combined with a logical 'AND'. */
export type Bookings_Bool_Exp = {
  _and?: InputMaybe<Array<Bookings_Bool_Exp>>;
  _not?: InputMaybe<Bookings_Bool_Exp>;
  _or?: InputMaybe<Array<Bookings_Bool_Exp>>;
  booking_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  itinerary?: InputMaybe<Itinerary_Bool_Exp>;
  itinerary_id?: InputMaybe<Int_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "bookings" */
export enum Bookings_Constraint {
  /** unique or primary key constraint on columns "id" */
  BookingsPkey = 'bookings_pkey',
}

/** input type for incrementing numeric columns in table "bookings" */
export type Bookings_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  itinerary_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "bookings" */
export type Bookings_Insert_Input = {
  booking_date?: InputMaybe<Scalars['timestamptz']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  itinerary?: InputMaybe<Itinerary_Obj_Rel_Insert_Input>;
  itinerary_id?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Bookings_Max_Fields = {
  __typename?: 'bookings_max_fields';
  booking_date?: Maybe<Scalars['timestamptz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  itinerary_id?: Maybe<Scalars['Int']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "bookings" */
export type Bookings_Max_Order_By = {
  booking_date?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  itinerary_id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Bookings_Min_Fields = {
  __typename?: 'bookings_min_fields';
  booking_date?: Maybe<Scalars['timestamptz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  itinerary_id?: Maybe<Scalars['Int']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "bookings" */
export type Bookings_Min_Order_By = {
  booking_date?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  itinerary_id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "bookings" */
export type Bookings_Mutation_Response = {
  __typename?: 'bookings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Bookings>;
};

/** on_conflict condition type for table "bookings" */
export type Bookings_On_Conflict = {
  constraint: Bookings_Constraint;
  update_columns?: Array<Bookings_Update_Column>;
  where?: InputMaybe<Bookings_Bool_Exp>;
};

/** Ordering options when selecting data from "bookings". */
export type Bookings_Order_By = {
  booking_date?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  itinerary?: InputMaybe<Itinerary_Order_By>;
  itinerary_id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: bookings */
export type Bookings_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "bookings" */
export enum Bookings_Select_Column {
  /** column name */
  BookingDate = 'booking_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  ItineraryId = 'itinerary_id',
  /** column name */
  Note = 'note',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "bookings" */
export type Bookings_Set_Input = {
  booking_date?: InputMaybe<Scalars['timestamptz']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  itinerary_id?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Bookings_Stddev_Fields = {
  __typename?: 'bookings_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  itinerary_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "bookings" */
export type Bookings_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  itinerary_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Bookings_Stddev_Pop_Fields = {
  __typename?: 'bookings_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  itinerary_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "bookings" */
export type Bookings_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  itinerary_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Bookings_Stddev_Samp_Fields = {
  __typename?: 'bookings_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  itinerary_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "bookings" */
export type Bookings_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  itinerary_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "bookings" */
export type Bookings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Bookings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Bookings_Stream_Cursor_Value_Input = {
  booking_date?: InputMaybe<Scalars['timestamptz']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  itinerary_id?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Bookings_Sum_Fields = {
  __typename?: 'bookings_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  itinerary_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "bookings" */
export type Bookings_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  itinerary_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "bookings" */
export enum Bookings_Update_Column {
  /** column name */
  BookingDate = 'booking_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  ItineraryId = 'itinerary_id',
  /** column name */
  Note = 'note',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

export type Bookings_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Bookings_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Bookings_Set_Input>;
  /** filter the rows which have to be updated */
  where: Bookings_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Bookings_Var_Pop_Fields = {
  __typename?: 'bookings_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  itinerary_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "bookings" */
export type Bookings_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  itinerary_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Bookings_Var_Samp_Fields = {
  __typename?: 'bookings_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  itinerary_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "bookings" */
export type Bookings_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  itinerary_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Bookings_Variance_Fields = {
  __typename?: 'bookings_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  itinerary_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "bookings" */
export type Bookings_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  itinerary_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "cities" */
export type Cities = {
  __typename?: 'cities';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  descr?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  img?: Maybe<Scalars['String']['output']>;
  isactive?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  locations: Array<Locations>;
  /** An aggregate relationship */
  locations_aggregate: Locations_Aggregate;
  name: Scalars['String']['output'];
  /** An array relationship */
  routes: Array<Routes>;
  /** An aggregate relationship */
  routes_aggregate: Routes_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** columns and relationships of "cities" */
export type CitiesLocationsArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};

/** columns and relationships of "cities" */
export type CitiesLocations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};

/** columns and relationships of "cities" */
export type CitiesRoutesArgs = {
  distinct_on?: InputMaybe<Array<Routes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Routes_Order_By>>;
  where?: InputMaybe<Routes_Bool_Exp>;
};

/** columns and relationships of "cities" */
export type CitiesRoutes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Routes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Routes_Order_By>>;
  where?: InputMaybe<Routes_Bool_Exp>;
};

/** aggregated selection of "cities" */
export type Cities_Aggregate = {
  __typename?: 'cities_aggregate';
  aggregate?: Maybe<Cities_Aggregate_Fields>;
  nodes: Array<Cities>;
};

/** aggregate fields of "cities" */
export type Cities_Aggregate_Fields = {
  __typename?: 'cities_aggregate_fields';
  avg?: Maybe<Cities_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Cities_Max_Fields>;
  min?: Maybe<Cities_Min_Fields>;
  stddev?: Maybe<Cities_Stddev_Fields>;
  stddev_pop?: Maybe<Cities_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cities_Stddev_Samp_Fields>;
  sum?: Maybe<Cities_Sum_Fields>;
  var_pop?: Maybe<Cities_Var_Pop_Fields>;
  var_samp?: Maybe<Cities_Var_Samp_Fields>;
  variance?: Maybe<Cities_Variance_Fields>;
};

/** aggregate fields of "cities" */
export type Cities_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Cities_Avg_Fields = {
  __typename?: 'cities_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "cities". All fields are combined with a logical 'AND'. */
export type Cities_Bool_Exp = {
  _and?: InputMaybe<Array<Cities_Bool_Exp>>;
  _not?: InputMaybe<Cities_Bool_Exp>;
  _or?: InputMaybe<Array<Cities_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  descr?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  img?: InputMaybe<String_Comparison_Exp>;
  isactive?: InputMaybe<Boolean_Comparison_Exp>;
  locations?: InputMaybe<Locations_Bool_Exp>;
  locations_aggregate?: InputMaybe<Locations_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  routes?: InputMaybe<Routes_Bool_Exp>;
  routes_aggregate?: InputMaybe<Routes_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "cities" */
export enum Cities_Constraint {
  /** unique or primary key constraint on columns "id" */
  CitiesPkey = 'cities_pkey',
}

/** input type for incrementing numeric columns in table "cities" */
export type Cities_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "cities" */
export type Cities_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  descr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  locations?: InputMaybe<Locations_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  routes?: InputMaybe<Routes_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Cities_Max_Fields = {
  __typename?: 'cities_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  descr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  img?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Cities_Min_Fields = {
  __typename?: 'cities_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  descr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  img?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "cities" */
export type Cities_Mutation_Response = {
  __typename?: 'cities_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Cities>;
};

/** input type for inserting object relation for remote table "cities" */
export type Cities_Obj_Rel_Insert_Input = {
  data: Cities_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Cities_On_Conflict>;
};

/** on_conflict condition type for table "cities" */
export type Cities_On_Conflict = {
  constraint: Cities_Constraint;
  update_columns?: Array<Cities_Update_Column>;
  where?: InputMaybe<Cities_Bool_Exp>;
};

/** Ordering options when selecting data from "cities". */
export type Cities_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  descr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img?: InputMaybe<Order_By>;
  isactive?: InputMaybe<Order_By>;
  locations_aggregate?: InputMaybe<Locations_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  routes_aggregate?: InputMaybe<Routes_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cities */
export type Cities_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "cities" */
export enum Cities_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Descr = 'descr',
  /** column name */
  Id = 'id',
  /** column name */
  Img = 'img',
  /** column name */
  Isactive = 'isactive',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "cities" */
export type Cities_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  descr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Cities_Stddev_Fields = {
  __typename?: 'cities_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Cities_Stddev_Pop_Fields = {
  __typename?: 'cities_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Cities_Stddev_Samp_Fields = {
  __typename?: 'cities_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "cities" */
export type Cities_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cities_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cities_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  descr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Cities_Sum_Fields = {
  __typename?: 'cities_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "cities" */
export enum Cities_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Descr = 'descr',
  /** column name */
  Id = 'id',
  /** column name */
  Img = 'img',
  /** column name */
  Isactive = 'isactive',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Cities_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Cities_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cities_Set_Input>;
  /** filter the rows which have to be updated */
  where: Cities_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Cities_Var_Pop_Fields = {
  __typename?: 'cities_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Cities_Var_Samp_Fields = {
  __typename?: 'cities_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Cities_Variance_Fields = {
  __typename?: 'cities_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** columns and relationships of "itinerary" */
export type Itinerary = {
  __typename?: 'itinerary';
  /** An array relationship */
  bookings: Array<Bookings>;
  /** An aggregate relationship */
  bookings_aggregate: Bookings_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['Int']['output'];
  isactive?: Maybe<Scalars['Boolean']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  option: Options;
  option_id: Scalars['Int']['output'];
  price: Scalars['numeric']['output'];
  /** An object relationship */
  provider: Providers;
  provider_id: Scalars['Int']['output'];
  /** An object relationship */
  route: Routes;
  route_id: Scalars['Int']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  vehicle_type: Vehicle_Types;
  vehicle_types_id: Scalars['Int']['output'];
};

/** columns and relationships of "itinerary" */
export type ItineraryBookingsArgs = {
  distinct_on?: InputMaybe<Array<Bookings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bookings_Order_By>>;
  where?: InputMaybe<Bookings_Bool_Exp>;
};

/** columns and relationships of "itinerary" */
export type ItineraryBookings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bookings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bookings_Order_By>>;
  where?: InputMaybe<Bookings_Bool_Exp>;
};

/** aggregated selection of "itinerary" */
export type Itinerary_Aggregate = {
  __typename?: 'itinerary_aggregate';
  aggregate?: Maybe<Itinerary_Aggregate_Fields>;
  nodes: Array<Itinerary>;
};

export type Itinerary_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Itinerary_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Itinerary_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Itinerary_Aggregate_Bool_Exp_Count>;
};

export type Itinerary_Aggregate_Bool_Exp_Bool_And = {
  arguments: Itinerary_Select_Column_Itinerary_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Itinerary_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Itinerary_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Itinerary_Select_Column_Itinerary_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Itinerary_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Itinerary_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Itinerary_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Itinerary_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "itinerary" */
export type Itinerary_Aggregate_Fields = {
  __typename?: 'itinerary_aggregate_fields';
  avg?: Maybe<Itinerary_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Itinerary_Max_Fields>;
  min?: Maybe<Itinerary_Min_Fields>;
  stddev?: Maybe<Itinerary_Stddev_Fields>;
  stddev_pop?: Maybe<Itinerary_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Itinerary_Stddev_Samp_Fields>;
  sum?: Maybe<Itinerary_Sum_Fields>;
  var_pop?: Maybe<Itinerary_Var_Pop_Fields>;
  var_samp?: Maybe<Itinerary_Var_Samp_Fields>;
  variance?: Maybe<Itinerary_Variance_Fields>;
};

/** aggregate fields of "itinerary" */
export type Itinerary_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Itinerary_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "itinerary" */
export type Itinerary_Aggregate_Order_By = {
  avg?: InputMaybe<Itinerary_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Itinerary_Max_Order_By>;
  min?: InputMaybe<Itinerary_Min_Order_By>;
  stddev?: InputMaybe<Itinerary_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Itinerary_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Itinerary_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Itinerary_Sum_Order_By>;
  var_pop?: InputMaybe<Itinerary_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Itinerary_Var_Samp_Order_By>;
  variance?: InputMaybe<Itinerary_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "itinerary" */
export type Itinerary_Arr_Rel_Insert_Input = {
  data: Array<Itinerary_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Itinerary_On_Conflict>;
};

/** aggregate avg on columns */
export type Itinerary_Avg_Fields = {
  __typename?: 'itinerary_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  option_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  provider_id?: Maybe<Scalars['Float']['output']>;
  route_id?: Maybe<Scalars['Float']['output']>;
  vehicle_types_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "itinerary" */
export type Itinerary_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  provider_id?: InputMaybe<Order_By>;
  route_id?: InputMaybe<Order_By>;
  vehicle_types_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "itinerary". All fields are combined with a logical 'AND'. */
export type Itinerary_Bool_Exp = {
  _and?: InputMaybe<Array<Itinerary_Bool_Exp>>;
  _not?: InputMaybe<Itinerary_Bool_Exp>;
  _or?: InputMaybe<Array<Itinerary_Bool_Exp>>;
  bookings?: InputMaybe<Bookings_Bool_Exp>;
  bookings_aggregate?: InputMaybe<Bookings_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  isactive?: InputMaybe<Boolean_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  option?: InputMaybe<Options_Bool_Exp>;
  option_id?: InputMaybe<Int_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  provider?: InputMaybe<Providers_Bool_Exp>;
  provider_id?: InputMaybe<Int_Comparison_Exp>;
  route?: InputMaybe<Routes_Bool_Exp>;
  route_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vehicle_type?: InputMaybe<Vehicle_Types_Bool_Exp>;
  vehicle_types_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "itinerary" */
export enum Itinerary_Constraint {
  /** unique or primary key constraint on columns "id" */
  ItineraryPkey = 'itinerary_pkey',
}

/** input type for incrementing numeric columns in table "itinerary" */
export type Itinerary_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  option_id?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  provider_id?: InputMaybe<Scalars['Int']['input']>;
  route_id?: InputMaybe<Scalars['Int']['input']>;
  vehicle_types_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "itinerary" */
export type Itinerary_Insert_Input = {
  bookings?: InputMaybe<Bookings_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  option?: InputMaybe<Options_Obj_Rel_Insert_Input>;
  option_id?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  provider?: InputMaybe<Providers_Obj_Rel_Insert_Input>;
  provider_id?: InputMaybe<Scalars['Int']['input']>;
  route?: InputMaybe<Routes_Obj_Rel_Insert_Input>;
  route_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  vehicle_type?: InputMaybe<Vehicle_Types_Obj_Rel_Insert_Input>;
  vehicle_types_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Itinerary_Max_Fields = {
  __typename?: 'itinerary_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  option_id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  provider_id?: Maybe<Scalars['Int']['output']>;
  route_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  vehicle_types_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "itinerary" */
export type Itinerary_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  provider_id?: InputMaybe<Order_By>;
  route_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle_types_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Itinerary_Min_Fields = {
  __typename?: 'itinerary_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  option_id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  provider_id?: Maybe<Scalars['Int']['output']>;
  route_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  vehicle_types_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "itinerary" */
export type Itinerary_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  provider_id?: InputMaybe<Order_By>;
  route_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle_types_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "itinerary" */
export type Itinerary_Mutation_Response = {
  __typename?: 'itinerary_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Itinerary>;
};

/** input type for inserting object relation for remote table "itinerary" */
export type Itinerary_Obj_Rel_Insert_Input = {
  data: Itinerary_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Itinerary_On_Conflict>;
};

/** on_conflict condition type for table "itinerary" */
export type Itinerary_On_Conflict = {
  constraint: Itinerary_Constraint;
  update_columns?: Array<Itinerary_Update_Column>;
  where?: InputMaybe<Itinerary_Bool_Exp>;
};

/** Ordering options when selecting data from "itinerary". */
export type Itinerary_Order_By = {
  bookings_aggregate?: InputMaybe<Bookings_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isactive?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  option?: InputMaybe<Options_Order_By>;
  option_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  provider?: InputMaybe<Providers_Order_By>;
  provider_id?: InputMaybe<Order_By>;
  route?: InputMaybe<Routes_Order_By>;
  route_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle_type?: InputMaybe<Vehicle_Types_Order_By>;
  vehicle_types_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: itinerary */
export type Itinerary_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "itinerary" */
export enum Itinerary_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Isactive = 'isactive',
  /** column name */
  Note = 'note',
  /** column name */
  OptionId = 'option_id',
  /** column name */
  Price = 'price',
  /** column name */
  ProviderId = 'provider_id',
  /** column name */
  RouteId = 'route_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VehicleTypesId = 'vehicle_types_id',
}

/** select "itinerary_aggregate_bool_exp_bool_and_arguments_columns" columns of table "itinerary" */
export enum Itinerary_Select_Column_Itinerary_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Isactive = 'isactive',
}

/** select "itinerary_aggregate_bool_exp_bool_or_arguments_columns" columns of table "itinerary" */
export enum Itinerary_Select_Column_Itinerary_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Isactive = 'isactive',
}

/** input type for updating data in table "itinerary" */
export type Itinerary_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  option_id?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  provider_id?: InputMaybe<Scalars['Int']['input']>;
  route_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  vehicle_types_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Itinerary_Stddev_Fields = {
  __typename?: 'itinerary_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  option_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  provider_id?: Maybe<Scalars['Float']['output']>;
  route_id?: Maybe<Scalars['Float']['output']>;
  vehicle_types_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "itinerary" */
export type Itinerary_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  provider_id?: InputMaybe<Order_By>;
  route_id?: InputMaybe<Order_By>;
  vehicle_types_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Itinerary_Stddev_Pop_Fields = {
  __typename?: 'itinerary_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  option_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  provider_id?: Maybe<Scalars['Float']['output']>;
  route_id?: Maybe<Scalars['Float']['output']>;
  vehicle_types_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "itinerary" */
export type Itinerary_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  provider_id?: InputMaybe<Order_By>;
  route_id?: InputMaybe<Order_By>;
  vehicle_types_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Itinerary_Stddev_Samp_Fields = {
  __typename?: 'itinerary_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  option_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  provider_id?: Maybe<Scalars['Float']['output']>;
  route_id?: Maybe<Scalars['Float']['output']>;
  vehicle_types_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "itinerary" */
export type Itinerary_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  provider_id?: InputMaybe<Order_By>;
  route_id?: InputMaybe<Order_By>;
  vehicle_types_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "itinerary" */
export type Itinerary_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Itinerary_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Itinerary_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  option_id?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  provider_id?: InputMaybe<Scalars['Int']['input']>;
  route_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  vehicle_types_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Itinerary_Sum_Fields = {
  __typename?: 'itinerary_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  option_id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  provider_id?: Maybe<Scalars['Int']['output']>;
  route_id?: Maybe<Scalars['Int']['output']>;
  vehicle_types_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "itinerary" */
export type Itinerary_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  provider_id?: InputMaybe<Order_By>;
  route_id?: InputMaybe<Order_By>;
  vehicle_types_id?: InputMaybe<Order_By>;
};

/** update columns of table "itinerary" */
export enum Itinerary_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Isactive = 'isactive',
  /** column name */
  Note = 'note',
  /** column name */
  OptionId = 'option_id',
  /** column name */
  Price = 'price',
  /** column name */
  ProviderId = 'provider_id',
  /** column name */
  RouteId = 'route_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VehicleTypesId = 'vehicle_types_id',
}

export type Itinerary_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Itinerary_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Itinerary_Set_Input>;
  /** filter the rows which have to be updated */
  where: Itinerary_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Itinerary_Var_Pop_Fields = {
  __typename?: 'itinerary_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  option_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  provider_id?: Maybe<Scalars['Float']['output']>;
  route_id?: Maybe<Scalars['Float']['output']>;
  vehicle_types_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "itinerary" */
export type Itinerary_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  provider_id?: InputMaybe<Order_By>;
  route_id?: InputMaybe<Order_By>;
  vehicle_types_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Itinerary_Var_Samp_Fields = {
  __typename?: 'itinerary_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  option_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  provider_id?: Maybe<Scalars['Float']['output']>;
  route_id?: Maybe<Scalars['Float']['output']>;
  vehicle_types_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "itinerary" */
export type Itinerary_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  provider_id?: InputMaybe<Order_By>;
  route_id?: InputMaybe<Order_By>;
  vehicle_types_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Itinerary_Variance_Fields = {
  __typename?: 'itinerary_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  option_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  provider_id?: Maybe<Scalars['Float']['output']>;
  route_id?: Maybe<Scalars['Float']['output']>;
  vehicle_types_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "itinerary" */
export type Itinerary_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  provider_id?: InputMaybe<Order_By>;
  route_id?: InputMaybe<Order_By>;
  vehicle_types_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "locations" */
export type Locations = {
  __typename?: 'locations';
  /** An object relationship */
  city: Cities;
  city_id: Scalars['Int']['output'];
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['Int']['output'];
  isactive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  /** An array relationship */
  routes: Array<Routes>;
  /** An array relationship */
  routesByStartLocation: Array<Routes>;
  /** An aggregate relationship */
  routesByStartLocation_aggregate: Routes_Aggregate;
  /** An aggregate relationship */
  routes_aggregate: Routes_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** columns and relationships of "locations" */
export type LocationsRoutesArgs = {
  distinct_on?: InputMaybe<Array<Routes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Routes_Order_By>>;
  where?: InputMaybe<Routes_Bool_Exp>;
};

/** columns and relationships of "locations" */
export type LocationsRoutesByStartLocationArgs = {
  distinct_on?: InputMaybe<Array<Routes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Routes_Order_By>>;
  where?: InputMaybe<Routes_Bool_Exp>;
};

/** columns and relationships of "locations" */
export type LocationsRoutesByStartLocation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Routes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Routes_Order_By>>;
  where?: InputMaybe<Routes_Bool_Exp>;
};

/** columns and relationships of "locations" */
export type LocationsRoutes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Routes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Routes_Order_By>>;
  where?: InputMaybe<Routes_Bool_Exp>;
};

/** aggregated selection of "locations" */
export type Locations_Aggregate = {
  __typename?: 'locations_aggregate';
  aggregate?: Maybe<Locations_Aggregate_Fields>;
  nodes: Array<Locations>;
};

export type Locations_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Locations_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Locations_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Locations_Aggregate_Bool_Exp_Count>;
};

export type Locations_Aggregate_Bool_Exp_Bool_And = {
  arguments: Locations_Select_Column_Locations_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Locations_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Locations_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Locations_Select_Column_Locations_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Locations_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Locations_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Locations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Locations_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "locations" */
export type Locations_Aggregate_Fields = {
  __typename?: 'locations_aggregate_fields';
  avg?: Maybe<Locations_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Locations_Max_Fields>;
  min?: Maybe<Locations_Min_Fields>;
  stddev?: Maybe<Locations_Stddev_Fields>;
  stddev_pop?: Maybe<Locations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Locations_Stddev_Samp_Fields>;
  sum?: Maybe<Locations_Sum_Fields>;
  var_pop?: Maybe<Locations_Var_Pop_Fields>;
  var_samp?: Maybe<Locations_Var_Samp_Fields>;
  variance?: Maybe<Locations_Variance_Fields>;
};

/** aggregate fields of "locations" */
export type Locations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Locations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "locations" */
export type Locations_Aggregate_Order_By = {
  avg?: InputMaybe<Locations_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Locations_Max_Order_By>;
  min?: InputMaybe<Locations_Min_Order_By>;
  stddev?: InputMaybe<Locations_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Locations_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Locations_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Locations_Sum_Order_By>;
  var_pop?: InputMaybe<Locations_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Locations_Var_Samp_Order_By>;
  variance?: InputMaybe<Locations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "locations" */
export type Locations_Arr_Rel_Insert_Input = {
  data: Array<Locations_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Locations_On_Conflict>;
};

/** aggregate avg on columns */
export type Locations_Avg_Fields = {
  __typename?: 'locations_avg_fields';
  city_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "locations" */
export type Locations_Avg_Order_By = {
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "locations". All fields are combined with a logical 'AND'. */
export type Locations_Bool_Exp = {
  _and?: InputMaybe<Array<Locations_Bool_Exp>>;
  _not?: InputMaybe<Locations_Bool_Exp>;
  _or?: InputMaybe<Array<Locations_Bool_Exp>>;
  city?: InputMaybe<Cities_Bool_Exp>;
  city_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  isactive?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  routes?: InputMaybe<Routes_Bool_Exp>;
  routesByStartLocation?: InputMaybe<Routes_Bool_Exp>;
  routesByStartLocation_aggregate?: InputMaybe<Routes_Aggregate_Bool_Exp>;
  routes_aggregate?: InputMaybe<Routes_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "locations" */
export enum Locations_Constraint {
  /** unique or primary key constraint on columns "id" */
  LocationsPkey = 'locations_pkey',
}

/** input type for incrementing numeric columns in table "locations" */
export type Locations_Inc_Input = {
  city_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "locations" */
export type Locations_Insert_Input = {
  city?: InputMaybe<Cities_Obj_Rel_Insert_Input>;
  city_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  routes?: InputMaybe<Routes_Arr_Rel_Insert_Input>;
  routesByStartLocation?: InputMaybe<Routes_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Locations_Max_Fields = {
  __typename?: 'locations_max_fields';
  city_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "locations" */
export type Locations_Max_Order_By = {
  city_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Locations_Min_Fields = {
  __typename?: 'locations_min_fields';
  city_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "locations" */
export type Locations_Min_Order_By = {
  city_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "locations" */
export type Locations_Mutation_Response = {
  __typename?: 'locations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Locations>;
};

/** input type for inserting object relation for remote table "locations" */
export type Locations_Obj_Rel_Insert_Input = {
  data: Locations_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Locations_On_Conflict>;
};

/** on_conflict condition type for table "locations" */
export type Locations_On_Conflict = {
  constraint: Locations_Constraint;
  update_columns?: Array<Locations_Update_Column>;
  where?: InputMaybe<Locations_Bool_Exp>;
};

/** Ordering options when selecting data from "locations". */
export type Locations_Order_By = {
  city?: InputMaybe<Cities_Order_By>;
  city_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isactive?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  routesByStartLocation_aggregate?: InputMaybe<Routes_Aggregate_Order_By>;
  routes_aggregate?: InputMaybe<Routes_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: locations */
export type Locations_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "locations" */
export enum Locations_Select_Column {
  /** column name */
  CityId = 'city_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Isactive = 'isactive',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** select "locations_aggregate_bool_exp_bool_and_arguments_columns" columns of table "locations" */
export enum Locations_Select_Column_Locations_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Isactive = 'isactive',
}

/** select "locations_aggregate_bool_exp_bool_or_arguments_columns" columns of table "locations" */
export enum Locations_Select_Column_Locations_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Isactive = 'isactive',
}

/** input type for updating data in table "locations" */
export type Locations_Set_Input = {
  city_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Locations_Stddev_Fields = {
  __typename?: 'locations_stddev_fields';
  city_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "locations" */
export type Locations_Stddev_Order_By = {
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Locations_Stddev_Pop_Fields = {
  __typename?: 'locations_stddev_pop_fields';
  city_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "locations" */
export type Locations_Stddev_Pop_Order_By = {
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Locations_Stddev_Samp_Fields = {
  __typename?: 'locations_stddev_samp_fields';
  city_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "locations" */
export type Locations_Stddev_Samp_Order_By = {
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "locations" */
export type Locations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Locations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Locations_Stream_Cursor_Value_Input = {
  city_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Locations_Sum_Fields = {
  __typename?: 'locations_sum_fields';
  city_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "locations" */
export type Locations_Sum_Order_By = {
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "locations" */
export enum Locations_Update_Column {
  /** column name */
  CityId = 'city_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Isactive = 'isactive',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Locations_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Locations_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Locations_Set_Input>;
  /** filter the rows which have to be updated */
  where: Locations_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Locations_Var_Pop_Fields = {
  __typename?: 'locations_var_pop_fields';
  city_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "locations" */
export type Locations_Var_Pop_Order_By = {
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Locations_Var_Samp_Fields = {
  __typename?: 'locations_var_samp_fields';
  city_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "locations" */
export type Locations_Var_Samp_Order_By = {
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Locations_Variance_Fields = {
  __typename?: 'locations_variance_fields';
  city_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "locations" */
export type Locations_Variance_Order_By = {
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** actionInsertBooking */
  actionInsertBooking?: Maybe<DataInsertBookingOutput>;
  /** actionLogin */
  actionLogin?: Maybe<AuthOutput>;
  /** cancelBooking */
  cancelBooking?: Maybe<CancelBookingOutput>;
  /** delete data from the table: "bookings" */
  delete_bookings?: Maybe<Bookings_Mutation_Response>;
  /** delete single row from the table: "bookings" */
  delete_bookings_by_pk?: Maybe<Bookings>;
  /** delete data from the table: "cities" */
  delete_cities?: Maybe<Cities_Mutation_Response>;
  /** delete single row from the table: "cities" */
  delete_cities_by_pk?: Maybe<Cities>;
  /** delete data from the table: "itinerary" */
  delete_itinerary?: Maybe<Itinerary_Mutation_Response>;
  /** delete single row from the table: "itinerary" */
  delete_itinerary_by_pk?: Maybe<Itinerary>;
  /** delete data from the table: "locations" */
  delete_locations?: Maybe<Locations_Mutation_Response>;
  /** delete single row from the table: "locations" */
  delete_locations_by_pk?: Maybe<Locations>;
  /** delete data from the table: "options" */
  delete_options?: Maybe<Options_Mutation_Response>;
  /** delete single row from the table: "options" */
  delete_options_by_pk?: Maybe<Options>;
  /** delete data from the table: "providers" */
  delete_providers?: Maybe<Providers_Mutation_Response>;
  /** delete single row from the table: "providers" */
  delete_providers_by_pk?: Maybe<Providers>;
  /** delete data from the table: "routes" */
  delete_routes?: Maybe<Routes_Mutation_Response>;
  /** delete single row from the table: "routes" */
  delete_routes_by_pk?: Maybe<Routes>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "vehicle_types" */
  delete_vehicle_types?: Maybe<Vehicle_Types_Mutation_Response>;
  /** delete single row from the table: "vehicle_types" */
  delete_vehicle_types_by_pk?: Maybe<Vehicle_Types>;
  /** insert data into the table: "bookings" */
  insert_bookings?: Maybe<Bookings_Mutation_Response>;
  /** insert a single row into the table: "bookings" */
  insert_bookings_one?: Maybe<Bookings>;
  /** insert data into the table: "cities" */
  insert_cities?: Maybe<Cities_Mutation_Response>;
  /** insert a single row into the table: "cities" */
  insert_cities_one?: Maybe<Cities>;
  /** insert data into the table: "itinerary" */
  insert_itinerary?: Maybe<Itinerary_Mutation_Response>;
  /** insert a single row into the table: "itinerary" */
  insert_itinerary_one?: Maybe<Itinerary>;
  /** insert data into the table: "locations" */
  insert_locations?: Maybe<Locations_Mutation_Response>;
  /** insert a single row into the table: "locations" */
  insert_locations_one?: Maybe<Locations>;
  /** insert data into the table: "options" */
  insert_options?: Maybe<Options_Mutation_Response>;
  /** insert a single row into the table: "options" */
  insert_options_one?: Maybe<Options>;
  /** insert data into the table: "providers" */
  insert_providers?: Maybe<Providers_Mutation_Response>;
  /** insert a single row into the table: "providers" */
  insert_providers_one?: Maybe<Providers>;
  /** insert data into the table: "routes" */
  insert_routes?: Maybe<Routes_Mutation_Response>;
  /** insert a single row into the table: "routes" */
  insert_routes_one?: Maybe<Routes>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "vehicle_types" */
  insert_vehicle_types?: Maybe<Vehicle_Types_Mutation_Response>;
  /** insert a single row into the table: "vehicle_types" */
  insert_vehicle_types_one?: Maybe<Vehicle_Types>;
  /** loginAdmin */
  loginAdmin: AuthAdminOutput;
  updateBookingAction?: Maybe<UpdateBookingOutput>;
  /** update data of the table: "bookings" */
  update_bookings?: Maybe<Bookings_Mutation_Response>;
  /** update single row of the table: "bookings" */
  update_bookings_by_pk?: Maybe<Bookings>;
  /** update multiples rows of table: "bookings" */
  update_bookings_many?: Maybe<Array<Maybe<Bookings_Mutation_Response>>>;
  /** update data of the table: "cities" */
  update_cities?: Maybe<Cities_Mutation_Response>;
  /** update single row of the table: "cities" */
  update_cities_by_pk?: Maybe<Cities>;
  /** update multiples rows of table: "cities" */
  update_cities_many?: Maybe<Array<Maybe<Cities_Mutation_Response>>>;
  /** update data of the table: "itinerary" */
  update_itinerary?: Maybe<Itinerary_Mutation_Response>;
  /** update single row of the table: "itinerary" */
  update_itinerary_by_pk?: Maybe<Itinerary>;
  /** update multiples rows of table: "itinerary" */
  update_itinerary_many?: Maybe<Array<Maybe<Itinerary_Mutation_Response>>>;
  /** update data of the table: "locations" */
  update_locations?: Maybe<Locations_Mutation_Response>;
  /** update single row of the table: "locations" */
  update_locations_by_pk?: Maybe<Locations>;
  /** update multiples rows of table: "locations" */
  update_locations_many?: Maybe<Array<Maybe<Locations_Mutation_Response>>>;
  /** update data of the table: "options" */
  update_options?: Maybe<Options_Mutation_Response>;
  /** update single row of the table: "options" */
  update_options_by_pk?: Maybe<Options>;
  /** update multiples rows of table: "options" */
  update_options_many?: Maybe<Array<Maybe<Options_Mutation_Response>>>;
  /** update data of the table: "providers" */
  update_providers?: Maybe<Providers_Mutation_Response>;
  /** update single row of the table: "providers" */
  update_providers_by_pk?: Maybe<Providers>;
  /** update multiples rows of table: "providers" */
  update_providers_many?: Maybe<Array<Maybe<Providers_Mutation_Response>>>;
  /** update data of the table: "routes" */
  update_routes?: Maybe<Routes_Mutation_Response>;
  /** update single row of the table: "routes" */
  update_routes_by_pk?: Maybe<Routes>;
  /** update multiples rows of table: "routes" */
  update_routes_many?: Maybe<Array<Maybe<Routes_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "vehicle_types" */
  update_vehicle_types?: Maybe<Vehicle_Types_Mutation_Response>;
  /** update single row of the table: "vehicle_types" */
  update_vehicle_types_by_pk?: Maybe<Vehicle_Types>;
  /** update multiples rows of table: "vehicle_types" */
  update_vehicle_types_many?: Maybe<
    Array<Maybe<Vehicle_Types_Mutation_Response>>
  >;
};

/** mutation root */
export type Mutation_RootActionInsertBookingArgs = {
  dataInsertBooking: DataInsertBookingInput;
};

/** mutation root */
export type Mutation_RootActionLoginArgs = {
  token: Scalars['String']['input'];
  tokenGetPhone?: InputMaybe<Scalars['String']['input']>;
};

/** mutation root */
export type Mutation_RootCancelBookingArgs = {
  bookingId: Scalars['Int']['input'];
  reason: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootDelete_BookingsArgs = {
  where: Bookings_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Bookings_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_CitiesArgs = {
  where: Cities_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Cities_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_ItineraryArgs = {
  where: Itinerary_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Itinerary_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_LocationsArgs = {
  where: Locations_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Locations_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_OptionsArgs = {
  where: Options_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Options_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_ProvidersArgs = {
  where: Providers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Providers_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_RoutesArgs = {
  where: Routes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Routes_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Vehicle_TypesArgs = {
  where: Vehicle_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Vehicle_Types_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootInsert_BookingsArgs = {
  objects: Array<Bookings_Insert_Input>;
  on_conflict?: InputMaybe<Bookings_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Bookings_OneArgs = {
  object: Bookings_Insert_Input;
  on_conflict?: InputMaybe<Bookings_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CitiesArgs = {
  objects: Array<Cities_Insert_Input>;
  on_conflict?: InputMaybe<Cities_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Cities_OneArgs = {
  object: Cities_Insert_Input;
  on_conflict?: InputMaybe<Cities_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ItineraryArgs = {
  objects: Array<Itinerary_Insert_Input>;
  on_conflict?: InputMaybe<Itinerary_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Itinerary_OneArgs = {
  object: Itinerary_Insert_Input;
  on_conflict?: InputMaybe<Itinerary_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_LocationsArgs = {
  objects: Array<Locations_Insert_Input>;
  on_conflict?: InputMaybe<Locations_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Locations_OneArgs = {
  object: Locations_Insert_Input;
  on_conflict?: InputMaybe<Locations_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_OptionsArgs = {
  objects: Array<Options_Insert_Input>;
  on_conflict?: InputMaybe<Options_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Options_OneArgs = {
  object: Options_Insert_Input;
  on_conflict?: InputMaybe<Options_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ProvidersArgs = {
  objects: Array<Providers_Insert_Input>;
  on_conflict?: InputMaybe<Providers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Providers_OneArgs = {
  object: Providers_Insert_Input;
  on_conflict?: InputMaybe<Providers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_RoutesArgs = {
  objects: Array<Routes_Insert_Input>;
  on_conflict?: InputMaybe<Routes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Routes_OneArgs = {
  object: Routes_Insert_Input;
  on_conflict?: InputMaybe<Routes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Vehicle_TypesArgs = {
  objects: Array<Vehicle_Types_Insert_Input>;
  on_conflict?: InputMaybe<Vehicle_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Vehicle_Types_OneArgs = {
  object: Vehicle_Types_Insert_Input;
  on_conflict?: InputMaybe<Vehicle_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootLoginAdminArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

/** mutation root */
export type Mutation_RootUpdateBookingActionArgs = {
  updateBookingData: UpdateBookingInput;
};

/** mutation root */
export type Mutation_RootUpdate_BookingsArgs = {
  _inc?: InputMaybe<Bookings_Inc_Input>;
  _set?: InputMaybe<Bookings_Set_Input>;
  where: Bookings_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Bookings_By_PkArgs = {
  _inc?: InputMaybe<Bookings_Inc_Input>;
  _set?: InputMaybe<Bookings_Set_Input>;
  pk_columns: Bookings_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Bookings_ManyArgs = {
  updates: Array<Bookings_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_CitiesArgs = {
  _inc?: InputMaybe<Cities_Inc_Input>;
  _set?: InputMaybe<Cities_Set_Input>;
  where: Cities_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Cities_By_PkArgs = {
  _inc?: InputMaybe<Cities_Inc_Input>;
  _set?: InputMaybe<Cities_Set_Input>;
  pk_columns: Cities_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Cities_ManyArgs = {
  updates: Array<Cities_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ItineraryArgs = {
  _inc?: InputMaybe<Itinerary_Inc_Input>;
  _set?: InputMaybe<Itinerary_Set_Input>;
  where: Itinerary_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Itinerary_By_PkArgs = {
  _inc?: InputMaybe<Itinerary_Inc_Input>;
  _set?: InputMaybe<Itinerary_Set_Input>;
  pk_columns: Itinerary_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Itinerary_ManyArgs = {
  updates: Array<Itinerary_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_LocationsArgs = {
  _inc?: InputMaybe<Locations_Inc_Input>;
  _set?: InputMaybe<Locations_Set_Input>;
  where: Locations_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Locations_By_PkArgs = {
  _inc?: InputMaybe<Locations_Inc_Input>;
  _set?: InputMaybe<Locations_Set_Input>;
  pk_columns: Locations_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Locations_ManyArgs = {
  updates: Array<Locations_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_OptionsArgs = {
  _inc?: InputMaybe<Options_Inc_Input>;
  _set?: InputMaybe<Options_Set_Input>;
  where: Options_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Options_By_PkArgs = {
  _inc?: InputMaybe<Options_Inc_Input>;
  _set?: InputMaybe<Options_Set_Input>;
  pk_columns: Options_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Options_ManyArgs = {
  updates: Array<Options_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ProvidersArgs = {
  _inc?: InputMaybe<Providers_Inc_Input>;
  _set?: InputMaybe<Providers_Set_Input>;
  where: Providers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Providers_By_PkArgs = {
  _inc?: InputMaybe<Providers_Inc_Input>;
  _set?: InputMaybe<Providers_Set_Input>;
  pk_columns: Providers_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Providers_ManyArgs = {
  updates: Array<Providers_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_RoutesArgs = {
  _inc?: InputMaybe<Routes_Inc_Input>;
  _set?: InputMaybe<Routes_Set_Input>;
  where: Routes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Routes_By_PkArgs = {
  _inc?: InputMaybe<Routes_Inc_Input>;
  _set?: InputMaybe<Routes_Set_Input>;
  pk_columns: Routes_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Routes_ManyArgs = {
  updates: Array<Routes_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Vehicle_TypesArgs = {
  _inc?: InputMaybe<Vehicle_Types_Inc_Input>;
  _set?: InputMaybe<Vehicle_Types_Set_Input>;
  where: Vehicle_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Vehicle_Types_By_PkArgs = {
  _inc?: InputMaybe<Vehicle_Types_Inc_Input>;
  _set?: InputMaybe<Vehicle_Types_Set_Input>;
  pk_columns: Vehicle_Types_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Vehicle_Types_ManyArgs = {
  updates: Array<Vehicle_Types_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** columns and relationships of "options" */
export type Options = {
  __typename?: 'options';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['Int']['output'];
  isactive?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  itineraries: Array<Itinerary>;
  /** An aggregate relationship */
  itineraries_aggregate: Itinerary_Aggregate;
  round_type: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** columns and relationships of "options" */
export type OptionsItinerariesArgs = {
  distinct_on?: InputMaybe<Array<Itinerary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Itinerary_Order_By>>;
  where?: InputMaybe<Itinerary_Bool_Exp>;
};

/** columns and relationships of "options" */
export type OptionsItineraries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Itinerary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Itinerary_Order_By>>;
  where?: InputMaybe<Itinerary_Bool_Exp>;
};

/** aggregated selection of "options" */
export type Options_Aggregate = {
  __typename?: 'options_aggregate';
  aggregate?: Maybe<Options_Aggregate_Fields>;
  nodes: Array<Options>;
};

/** aggregate fields of "options" */
export type Options_Aggregate_Fields = {
  __typename?: 'options_aggregate_fields';
  avg?: Maybe<Options_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Options_Max_Fields>;
  min?: Maybe<Options_Min_Fields>;
  stddev?: Maybe<Options_Stddev_Fields>;
  stddev_pop?: Maybe<Options_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Options_Stddev_Samp_Fields>;
  sum?: Maybe<Options_Sum_Fields>;
  var_pop?: Maybe<Options_Var_Pop_Fields>;
  var_samp?: Maybe<Options_Var_Samp_Fields>;
  variance?: Maybe<Options_Variance_Fields>;
};

/** aggregate fields of "options" */
export type Options_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Options_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Options_Avg_Fields = {
  __typename?: 'options_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "options". All fields are combined with a logical 'AND'. */
export type Options_Bool_Exp = {
  _and?: InputMaybe<Array<Options_Bool_Exp>>;
  _not?: InputMaybe<Options_Bool_Exp>;
  _or?: InputMaybe<Array<Options_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  isactive?: InputMaybe<Boolean_Comparison_Exp>;
  itineraries?: InputMaybe<Itinerary_Bool_Exp>;
  itineraries_aggregate?: InputMaybe<Itinerary_Aggregate_Bool_Exp>;
  round_type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "options" */
export enum Options_Constraint {
  /** unique or primary key constraint on columns "id" */
  OptionsPkey = 'options_pkey',
}

/** input type for incrementing numeric columns in table "options" */
export type Options_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "options" */
export type Options_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  itineraries?: InputMaybe<Itinerary_Arr_Rel_Insert_Input>;
  round_type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Options_Max_Fields = {
  __typename?: 'options_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  round_type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Options_Min_Fields = {
  __typename?: 'options_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  round_type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "options" */
export type Options_Mutation_Response = {
  __typename?: 'options_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Options>;
};

/** input type for inserting object relation for remote table "options" */
export type Options_Obj_Rel_Insert_Input = {
  data: Options_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Options_On_Conflict>;
};

/** on_conflict condition type for table "options" */
export type Options_On_Conflict = {
  constraint: Options_Constraint;
  update_columns?: Array<Options_Update_Column>;
  where?: InputMaybe<Options_Bool_Exp>;
};

/** Ordering options when selecting data from "options". */
export type Options_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isactive?: InputMaybe<Order_By>;
  itineraries_aggregate?: InputMaybe<Itinerary_Aggregate_Order_By>;
  round_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: options */
export type Options_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "options" */
export enum Options_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Isactive = 'isactive',
  /** column name */
  RoundType = 'round_type',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "options" */
export type Options_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  round_type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Options_Stddev_Fields = {
  __typename?: 'options_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Options_Stddev_Pop_Fields = {
  __typename?: 'options_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Options_Stddev_Samp_Fields = {
  __typename?: 'options_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "options" */
export type Options_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Options_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Options_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  round_type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Options_Sum_Fields = {
  __typename?: 'options_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "options" */
export enum Options_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Isactive = 'isactive',
  /** column name */
  RoundType = 'round_type',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Options_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Options_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Options_Set_Input>;
  /** filter the rows which have to be updated */
  where: Options_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Options_Var_Pop_Fields = {
  __typename?: 'options_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Options_Var_Samp_Fields = {
  __typename?: 'options_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Options_Variance_Fields = {
  __typename?: 'options_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
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

/** columns and relationships of "providers" */
export type Providers = {
  __typename?: 'providers';
  address?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['Int']['output'];
  isactive: Scalars['Boolean']['output'];
  /** An array relationship */
  itineraries: Array<Itinerary>;
  /** An aggregate relationship */
  itineraries_aggregate: Itinerary_Aggregate;
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  telegram_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** columns and relationships of "providers" */
export type ProvidersItinerariesArgs = {
  distinct_on?: InputMaybe<Array<Itinerary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Itinerary_Order_By>>;
  where?: InputMaybe<Itinerary_Bool_Exp>;
};

/** columns and relationships of "providers" */
export type ProvidersItineraries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Itinerary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Itinerary_Order_By>>;
  where?: InputMaybe<Itinerary_Bool_Exp>;
};

/** aggregated selection of "providers" */
export type Providers_Aggregate = {
  __typename?: 'providers_aggregate';
  aggregate?: Maybe<Providers_Aggregate_Fields>;
  nodes: Array<Providers>;
};

/** aggregate fields of "providers" */
export type Providers_Aggregate_Fields = {
  __typename?: 'providers_aggregate_fields';
  avg?: Maybe<Providers_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Providers_Max_Fields>;
  min?: Maybe<Providers_Min_Fields>;
  stddev?: Maybe<Providers_Stddev_Fields>;
  stddev_pop?: Maybe<Providers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Providers_Stddev_Samp_Fields>;
  sum?: Maybe<Providers_Sum_Fields>;
  var_pop?: Maybe<Providers_Var_Pop_Fields>;
  var_samp?: Maybe<Providers_Var_Samp_Fields>;
  variance?: Maybe<Providers_Variance_Fields>;
};

/** aggregate fields of "providers" */
export type Providers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Providers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Providers_Avg_Fields = {
  __typename?: 'providers_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "providers". All fields are combined with a logical 'AND'. */
export type Providers_Bool_Exp = {
  _and?: InputMaybe<Array<Providers_Bool_Exp>>;
  _not?: InputMaybe<Providers_Bool_Exp>;
  _or?: InputMaybe<Array<Providers_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  isactive?: InputMaybe<Boolean_Comparison_Exp>;
  itineraries?: InputMaybe<Itinerary_Bool_Exp>;
  itineraries_aggregate?: InputMaybe<Itinerary_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  phone_number?: InputMaybe<String_Comparison_Exp>;
  telegram_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "providers" */
export enum Providers_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProvidersPkey = 'providers_pkey',
}

/** input type for incrementing numeric columns in table "providers" */
export type Providers_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "providers" */
export type Providers_Insert_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  itineraries?: InputMaybe<Itinerary_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  telegram_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Providers_Max_Fields = {
  __typename?: 'providers_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  telegram_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Providers_Min_Fields = {
  __typename?: 'providers_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  telegram_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "providers" */
export type Providers_Mutation_Response = {
  __typename?: 'providers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Providers>;
};

/** input type for inserting object relation for remote table "providers" */
export type Providers_Obj_Rel_Insert_Input = {
  data: Providers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Providers_On_Conflict>;
};

/** on_conflict condition type for table "providers" */
export type Providers_On_Conflict = {
  constraint: Providers_Constraint;
  update_columns?: Array<Providers_Update_Column>;
  where?: InputMaybe<Providers_Bool_Exp>;
};

/** Ordering options when selecting data from "providers". */
export type Providers_Order_By = {
  address?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isactive?: InputMaybe<Order_By>;
  itineraries_aggregate?: InputMaybe<Itinerary_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  telegram_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: providers */
export type Providers_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "providers" */
export enum Providers_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Isactive = 'isactive',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  TelegramId = 'telegram_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "providers" */
export type Providers_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  telegram_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Providers_Stddev_Fields = {
  __typename?: 'providers_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Providers_Stddev_Pop_Fields = {
  __typename?: 'providers_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Providers_Stddev_Samp_Fields = {
  __typename?: 'providers_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "providers" */
export type Providers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Providers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Providers_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  telegram_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Providers_Sum_Fields = {
  __typename?: 'providers_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "providers" */
export enum Providers_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Isactive = 'isactive',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  TelegramId = 'telegram_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Providers_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Providers_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Providers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Providers_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Providers_Var_Pop_Fields = {
  __typename?: 'providers_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Providers_Var_Samp_Fields = {
  __typename?: 'providers_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Providers_Variance_Fields = {
  __typename?: 'providers_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  bookings: Array<Bookings>;
  /** An aggregate relationship */
  bookings_aggregate: Bookings_Aggregate;
  /** fetch data from the table: "bookings" using primary key columns */
  bookings_by_pk?: Maybe<Bookings>;
  /** fetch data from the table: "cities" */
  cities: Array<Cities>;
  /** fetch aggregated fields from the table: "cities" */
  cities_aggregate: Cities_Aggregate;
  /** fetch data from the table: "cities" using primary key columns */
  cities_by_pk?: Maybe<Cities>;
  /** fetch data from the table: "itinerary" */
  itinerary: Array<Itinerary>;
  /** fetch aggregated fields from the table: "itinerary" */
  itinerary_aggregate: Itinerary_Aggregate;
  /** fetch data from the table: "itinerary" using primary key columns */
  itinerary_by_pk?: Maybe<Itinerary>;
  /** An array relationship */
  locations: Array<Locations>;
  /** An aggregate relationship */
  locations_aggregate: Locations_Aggregate;
  /** fetch data from the table: "locations" using primary key columns */
  locations_by_pk?: Maybe<Locations>;
  /** fetch data from the table: "options" */
  options: Array<Options>;
  /** fetch aggregated fields from the table: "options" */
  options_aggregate: Options_Aggregate;
  /** fetch data from the table: "options" using primary key columns */
  options_by_pk?: Maybe<Options>;
  /** fetch data from the table: "providers" */
  providers: Array<Providers>;
  /** fetch aggregated fields from the table: "providers" */
  providers_aggregate: Providers_Aggregate;
  /** fetch data from the table: "providers" using primary key columns */
  providers_by_pk?: Maybe<Providers>;
  /** An array relationship */
  routes: Array<Routes>;
  /** An aggregate relationship */
  routes_aggregate: Routes_Aggregate;
  /** fetch data from the table: "routes" using primary key columns */
  routes_by_pk?: Maybe<Routes>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "vehicle_types" */
  vehicle_types: Array<Vehicle_Types>;
  /** fetch aggregated fields from the table: "vehicle_types" */
  vehicle_types_aggregate: Vehicle_Types_Aggregate;
  /** fetch data from the table: "vehicle_types" using primary key columns */
  vehicle_types_by_pk?: Maybe<Vehicle_Types>;
};

export type Query_RootBookingsArgs = {
  distinct_on?: InputMaybe<Array<Bookings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bookings_Order_By>>;
  where?: InputMaybe<Bookings_Bool_Exp>;
};

export type Query_RootBookings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bookings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bookings_Order_By>>;
  where?: InputMaybe<Bookings_Bool_Exp>;
};

export type Query_RootBookings_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootCitiesArgs = {
  distinct_on?: InputMaybe<Array<Cities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cities_Order_By>>;
  where?: InputMaybe<Cities_Bool_Exp>;
};

export type Query_RootCities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cities_Order_By>>;
  where?: InputMaybe<Cities_Bool_Exp>;
};

export type Query_RootCities_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootItineraryArgs = {
  distinct_on?: InputMaybe<Array<Itinerary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Itinerary_Order_By>>;
  where?: InputMaybe<Itinerary_Bool_Exp>;
};

export type Query_RootItinerary_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Itinerary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Itinerary_Order_By>>;
  where?: InputMaybe<Itinerary_Bool_Exp>;
};

export type Query_RootItinerary_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootLocationsArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};

export type Query_RootLocations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};

export type Query_RootLocations_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootOptionsArgs = {
  distinct_on?: InputMaybe<Array<Options_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Options_Order_By>>;
  where?: InputMaybe<Options_Bool_Exp>;
};

export type Query_RootOptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Options_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Options_Order_By>>;
  where?: InputMaybe<Options_Bool_Exp>;
};

export type Query_RootOptions_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootProvidersArgs = {
  distinct_on?: InputMaybe<Array<Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Providers_Order_By>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};

export type Query_RootProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Providers_Order_By>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};

export type Query_RootProviders_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootRoutesArgs = {
  distinct_on?: InputMaybe<Array<Routes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Routes_Order_By>>;
  where?: InputMaybe<Routes_Bool_Exp>;
};

export type Query_RootRoutes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Routes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Routes_Order_By>>;
  where?: InputMaybe<Routes_Bool_Exp>;
};

export type Query_RootRoutes_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootVehicle_TypesArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Types_Order_By>>;
  where?: InputMaybe<Vehicle_Types_Bool_Exp>;
};

export type Query_RootVehicle_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Types_Order_By>>;
  where?: InputMaybe<Vehicle_Types_Bool_Exp>;
};

export type Query_RootVehicle_Types_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** columns and relationships of "routes" */
export type Routes = {
  __typename?: 'routes';
  /** An object relationship */
  city: Cities;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  end_location: Scalars['Int']['output'];
  /** An object relationship */
  endlocation: Locations;
  from_city: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isactive?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  itineraries: Array<Itinerary>;
  /** An aggregate relationship */
  itineraries_aggregate: Itinerary_Aggregate;
  start_location: Scalars['Int']['output'];
  /** An object relationship */
  startlocation: Locations;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** columns and relationships of "routes" */
export type RoutesItinerariesArgs = {
  distinct_on?: InputMaybe<Array<Itinerary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Itinerary_Order_By>>;
  where?: InputMaybe<Itinerary_Bool_Exp>;
};

/** columns and relationships of "routes" */
export type RoutesItineraries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Itinerary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Itinerary_Order_By>>;
  where?: InputMaybe<Itinerary_Bool_Exp>;
};

/** aggregated selection of "routes" */
export type Routes_Aggregate = {
  __typename?: 'routes_aggregate';
  aggregate?: Maybe<Routes_Aggregate_Fields>;
  nodes: Array<Routes>;
};

export type Routes_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Routes_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Routes_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Routes_Aggregate_Bool_Exp_Count>;
};

export type Routes_Aggregate_Bool_Exp_Bool_And = {
  arguments: Routes_Select_Column_Routes_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Routes_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Routes_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Routes_Select_Column_Routes_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Routes_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Routes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Routes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Routes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "routes" */
export type Routes_Aggregate_Fields = {
  __typename?: 'routes_aggregate_fields';
  avg?: Maybe<Routes_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Routes_Max_Fields>;
  min?: Maybe<Routes_Min_Fields>;
  stddev?: Maybe<Routes_Stddev_Fields>;
  stddev_pop?: Maybe<Routes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Routes_Stddev_Samp_Fields>;
  sum?: Maybe<Routes_Sum_Fields>;
  var_pop?: Maybe<Routes_Var_Pop_Fields>;
  var_samp?: Maybe<Routes_Var_Samp_Fields>;
  variance?: Maybe<Routes_Variance_Fields>;
};

/** aggregate fields of "routes" */
export type Routes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Routes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "routes" */
export type Routes_Aggregate_Order_By = {
  avg?: InputMaybe<Routes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Routes_Max_Order_By>;
  min?: InputMaybe<Routes_Min_Order_By>;
  stddev?: InputMaybe<Routes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Routes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Routes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Routes_Sum_Order_By>;
  var_pop?: InputMaybe<Routes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Routes_Var_Samp_Order_By>;
  variance?: InputMaybe<Routes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "routes" */
export type Routes_Arr_Rel_Insert_Input = {
  data: Array<Routes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Routes_On_Conflict>;
};

/** aggregate avg on columns */
export type Routes_Avg_Fields = {
  __typename?: 'routes_avg_fields';
  end_location?: Maybe<Scalars['Float']['output']>;
  from_city?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  start_location?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "routes" */
export type Routes_Avg_Order_By = {
  end_location?: InputMaybe<Order_By>;
  from_city?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  start_location?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "routes". All fields are combined with a logical 'AND'. */
export type Routes_Bool_Exp = {
  _and?: InputMaybe<Array<Routes_Bool_Exp>>;
  _not?: InputMaybe<Routes_Bool_Exp>;
  _or?: InputMaybe<Array<Routes_Bool_Exp>>;
  city?: InputMaybe<Cities_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  end_location?: InputMaybe<Int_Comparison_Exp>;
  endlocation?: InputMaybe<Locations_Bool_Exp>;
  from_city?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  isactive?: InputMaybe<Boolean_Comparison_Exp>;
  itineraries?: InputMaybe<Itinerary_Bool_Exp>;
  itineraries_aggregate?: InputMaybe<Itinerary_Aggregate_Bool_Exp>;
  start_location?: InputMaybe<Int_Comparison_Exp>;
  startlocation?: InputMaybe<Locations_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "routes" */
export enum Routes_Constraint {
  /** unique or primary key constraint on columns "id" */
  RoutesPkey = 'routes_pkey',
}

/** input type for incrementing numeric columns in table "routes" */
export type Routes_Inc_Input = {
  end_location?: InputMaybe<Scalars['Int']['input']>;
  from_city?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  start_location?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "routes" */
export type Routes_Insert_Input = {
  city?: InputMaybe<Cities_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_location?: InputMaybe<Scalars['Int']['input']>;
  endlocation?: InputMaybe<Locations_Obj_Rel_Insert_Input>;
  from_city?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  itineraries?: InputMaybe<Itinerary_Arr_Rel_Insert_Input>;
  start_location?: InputMaybe<Scalars['Int']['input']>;
  startlocation?: InputMaybe<Locations_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Routes_Max_Fields = {
  __typename?: 'routes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  end_location?: Maybe<Scalars['Int']['output']>;
  from_city?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  start_location?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "routes" */
export type Routes_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  end_location?: InputMaybe<Order_By>;
  from_city?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  start_location?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Routes_Min_Fields = {
  __typename?: 'routes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  end_location?: Maybe<Scalars['Int']['output']>;
  from_city?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  start_location?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "routes" */
export type Routes_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  end_location?: InputMaybe<Order_By>;
  from_city?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  start_location?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "routes" */
export type Routes_Mutation_Response = {
  __typename?: 'routes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Routes>;
};

/** input type for inserting object relation for remote table "routes" */
export type Routes_Obj_Rel_Insert_Input = {
  data: Routes_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Routes_On_Conflict>;
};

/** on_conflict condition type for table "routes" */
export type Routes_On_Conflict = {
  constraint: Routes_Constraint;
  update_columns?: Array<Routes_Update_Column>;
  where?: InputMaybe<Routes_Bool_Exp>;
};

/** Ordering options when selecting data from "routes". */
export type Routes_Order_By = {
  city?: InputMaybe<Cities_Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  end_location?: InputMaybe<Order_By>;
  endlocation?: InputMaybe<Locations_Order_By>;
  from_city?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isactive?: InputMaybe<Order_By>;
  itineraries_aggregate?: InputMaybe<Itinerary_Aggregate_Order_By>;
  start_location?: InputMaybe<Order_By>;
  startlocation?: InputMaybe<Locations_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: routes */
export type Routes_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "routes" */
export enum Routes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  EndLocation = 'end_location',
  /** column name */
  FromCity = 'from_city',
  /** column name */
  Id = 'id',
  /** column name */
  Isactive = 'isactive',
  /** column name */
  StartLocation = 'start_location',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** select "routes_aggregate_bool_exp_bool_and_arguments_columns" columns of table "routes" */
export enum Routes_Select_Column_Routes_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Isactive = 'isactive',
}

/** select "routes_aggregate_bool_exp_bool_or_arguments_columns" columns of table "routes" */
export enum Routes_Select_Column_Routes_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Isactive = 'isactive',
}

/** input type for updating data in table "routes" */
export type Routes_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_location?: InputMaybe<Scalars['Int']['input']>;
  from_city?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  start_location?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Routes_Stddev_Fields = {
  __typename?: 'routes_stddev_fields';
  end_location?: Maybe<Scalars['Float']['output']>;
  from_city?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  start_location?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "routes" */
export type Routes_Stddev_Order_By = {
  end_location?: InputMaybe<Order_By>;
  from_city?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  start_location?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Routes_Stddev_Pop_Fields = {
  __typename?: 'routes_stddev_pop_fields';
  end_location?: Maybe<Scalars['Float']['output']>;
  from_city?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  start_location?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "routes" */
export type Routes_Stddev_Pop_Order_By = {
  end_location?: InputMaybe<Order_By>;
  from_city?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  start_location?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Routes_Stddev_Samp_Fields = {
  __typename?: 'routes_stddev_samp_fields';
  end_location?: Maybe<Scalars['Float']['output']>;
  from_city?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  start_location?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "routes" */
export type Routes_Stddev_Samp_Order_By = {
  end_location?: InputMaybe<Order_By>;
  from_city?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  start_location?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "routes" */
export type Routes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Routes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Routes_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_location?: InputMaybe<Scalars['Int']['input']>;
  from_city?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  start_location?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Routes_Sum_Fields = {
  __typename?: 'routes_sum_fields';
  end_location?: Maybe<Scalars['Int']['output']>;
  from_city?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  start_location?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "routes" */
export type Routes_Sum_Order_By = {
  end_location?: InputMaybe<Order_By>;
  from_city?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  start_location?: InputMaybe<Order_By>;
};

/** update columns of table "routes" */
export enum Routes_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  EndLocation = 'end_location',
  /** column name */
  FromCity = 'from_city',
  /** column name */
  Id = 'id',
  /** column name */
  Isactive = 'isactive',
  /** column name */
  StartLocation = 'start_location',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Routes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Routes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Routes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Routes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Routes_Var_Pop_Fields = {
  __typename?: 'routes_var_pop_fields';
  end_location?: Maybe<Scalars['Float']['output']>;
  from_city?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  start_location?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "routes" */
export type Routes_Var_Pop_Order_By = {
  end_location?: InputMaybe<Order_By>;
  from_city?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  start_location?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Routes_Var_Samp_Fields = {
  __typename?: 'routes_var_samp_fields';
  end_location?: Maybe<Scalars['Float']['output']>;
  from_city?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  start_location?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "routes" */
export type Routes_Var_Samp_Order_By = {
  end_location?: InputMaybe<Order_By>;
  from_city?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  start_location?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Routes_Variance_Fields = {
  __typename?: 'routes_variance_fields';
  end_location?: Maybe<Scalars['Float']['output']>;
  from_city?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  start_location?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "routes" */
export type Routes_Variance_Order_By = {
  end_location?: InputMaybe<Order_By>;
  from_city?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  start_location?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  bookings: Array<Bookings>;
  /** An aggregate relationship */
  bookings_aggregate: Bookings_Aggregate;
  /** fetch data from the table: "bookings" using primary key columns */
  bookings_by_pk?: Maybe<Bookings>;
  /** fetch data from the table in a streaming manner: "bookings" */
  bookings_stream: Array<Bookings>;
  /** fetch data from the table: "cities" */
  cities: Array<Cities>;
  /** fetch aggregated fields from the table: "cities" */
  cities_aggregate: Cities_Aggregate;
  /** fetch data from the table: "cities" using primary key columns */
  cities_by_pk?: Maybe<Cities>;
  /** fetch data from the table in a streaming manner: "cities" */
  cities_stream: Array<Cities>;
  /** fetch data from the table: "itinerary" */
  itinerary: Array<Itinerary>;
  /** fetch aggregated fields from the table: "itinerary" */
  itinerary_aggregate: Itinerary_Aggregate;
  /** fetch data from the table: "itinerary" using primary key columns */
  itinerary_by_pk?: Maybe<Itinerary>;
  /** fetch data from the table in a streaming manner: "itinerary" */
  itinerary_stream: Array<Itinerary>;
  /** An array relationship */
  locations: Array<Locations>;
  /** An aggregate relationship */
  locations_aggregate: Locations_Aggregate;
  /** fetch data from the table: "locations" using primary key columns */
  locations_by_pk?: Maybe<Locations>;
  /** fetch data from the table in a streaming manner: "locations" */
  locations_stream: Array<Locations>;
  /** fetch data from the table: "options" */
  options: Array<Options>;
  /** fetch aggregated fields from the table: "options" */
  options_aggregate: Options_Aggregate;
  /** fetch data from the table: "options" using primary key columns */
  options_by_pk?: Maybe<Options>;
  /** fetch data from the table in a streaming manner: "options" */
  options_stream: Array<Options>;
  /** fetch data from the table: "providers" */
  providers: Array<Providers>;
  /** fetch aggregated fields from the table: "providers" */
  providers_aggregate: Providers_Aggregate;
  /** fetch data from the table: "providers" using primary key columns */
  providers_by_pk?: Maybe<Providers>;
  /** fetch data from the table in a streaming manner: "providers" */
  providers_stream: Array<Providers>;
  /** An array relationship */
  routes: Array<Routes>;
  /** An aggregate relationship */
  routes_aggregate: Routes_Aggregate;
  /** fetch data from the table: "routes" using primary key columns */
  routes_by_pk?: Maybe<Routes>;
  /** fetch data from the table in a streaming manner: "routes" */
  routes_stream: Array<Routes>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "vehicle_types" */
  vehicle_types: Array<Vehicle_Types>;
  /** fetch aggregated fields from the table: "vehicle_types" */
  vehicle_types_aggregate: Vehicle_Types_Aggregate;
  /** fetch data from the table: "vehicle_types" using primary key columns */
  vehicle_types_by_pk?: Maybe<Vehicle_Types>;
  /** fetch data from the table in a streaming manner: "vehicle_types" */
  vehicle_types_stream: Array<Vehicle_Types>;
};

export type Subscription_RootBookingsArgs = {
  distinct_on?: InputMaybe<Array<Bookings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bookings_Order_By>>;
  where?: InputMaybe<Bookings_Bool_Exp>;
};

export type Subscription_RootBookings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bookings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bookings_Order_By>>;
  where?: InputMaybe<Bookings_Bool_Exp>;
};

export type Subscription_RootBookings_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootBookings_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Bookings_Stream_Cursor_Input>>;
  where?: InputMaybe<Bookings_Bool_Exp>;
};

export type Subscription_RootCitiesArgs = {
  distinct_on?: InputMaybe<Array<Cities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cities_Order_By>>;
  where?: InputMaybe<Cities_Bool_Exp>;
};

export type Subscription_RootCities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cities_Order_By>>;
  where?: InputMaybe<Cities_Bool_Exp>;
};

export type Subscription_RootCities_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootCities_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Cities_Stream_Cursor_Input>>;
  where?: InputMaybe<Cities_Bool_Exp>;
};

export type Subscription_RootItineraryArgs = {
  distinct_on?: InputMaybe<Array<Itinerary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Itinerary_Order_By>>;
  where?: InputMaybe<Itinerary_Bool_Exp>;
};

export type Subscription_RootItinerary_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Itinerary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Itinerary_Order_By>>;
  where?: InputMaybe<Itinerary_Bool_Exp>;
};

export type Subscription_RootItinerary_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootItinerary_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Itinerary_Stream_Cursor_Input>>;
  where?: InputMaybe<Itinerary_Bool_Exp>;
};

export type Subscription_RootLocationsArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};

export type Subscription_RootLocations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};

export type Subscription_RootLocations_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootLocations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Locations_Stream_Cursor_Input>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};

export type Subscription_RootOptionsArgs = {
  distinct_on?: InputMaybe<Array<Options_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Options_Order_By>>;
  where?: InputMaybe<Options_Bool_Exp>;
};

export type Subscription_RootOptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Options_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Options_Order_By>>;
  where?: InputMaybe<Options_Bool_Exp>;
};

export type Subscription_RootOptions_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootOptions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Options_Stream_Cursor_Input>>;
  where?: InputMaybe<Options_Bool_Exp>;
};

export type Subscription_RootProvidersArgs = {
  distinct_on?: InputMaybe<Array<Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Providers_Order_By>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};

export type Subscription_RootProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Providers_Order_By>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};

export type Subscription_RootProviders_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootProviders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Providers_Stream_Cursor_Input>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};

export type Subscription_RootRoutesArgs = {
  distinct_on?: InputMaybe<Array<Routes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Routes_Order_By>>;
  where?: InputMaybe<Routes_Bool_Exp>;
};

export type Subscription_RootRoutes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Routes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Routes_Order_By>>;
  where?: InputMaybe<Routes_Bool_Exp>;
};

export type Subscription_RootRoutes_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootRoutes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Routes_Stream_Cursor_Input>>;
  where?: InputMaybe<Routes_Bool_Exp>;
};

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootVehicle_TypesArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Types_Order_By>>;
  where?: InputMaybe<Vehicle_Types_Bool_Exp>;
};

export type Subscription_RootVehicle_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Types_Order_By>>;
  where?: InputMaybe<Vehicle_Types_Bool_Exp>;
};

export type Subscription_RootVehicle_Types_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootVehicle_Types_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Vehicle_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Vehicle_Types_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  bookings: Array<Bookings>;
  /** An aggregate relationship */
  bookings_aggregate: Bookings_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isactive?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  zalo_id?: Maybe<Scalars['String']['output']>;
};

/** columns and relationships of "users" */
export type UsersBookingsArgs = {
  distinct_on?: InputMaybe<Array<Bookings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bookings_Order_By>>;
  where?: InputMaybe<Bookings_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersBookings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bookings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bookings_Order_By>>;
  where?: InputMaybe<Bookings_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  bookings?: InputMaybe<Bookings_Bool_Exp>;
  bookings_aggregate?: InputMaybe<Bookings_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  isactive?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  phone_number?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  zalo_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  bookings?: InputMaybe<Bookings_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  zalo_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  zalo_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  zalo_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  bookings_aggregate?: InputMaybe<Bookings_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isactive?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  zalo_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Isactive = 'isactive',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ZaloId = 'zalo_id',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  zalo_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  zalo_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Isactive = 'isactive',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ZaloId = 'zalo_id',
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "vehicle_types" */
export type Vehicle_Types = {
  __typename?: 'vehicle_types';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['Int']['output'];
  isactive?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  itineraries: Array<Itinerary>;
  /** An aggregate relationship */
  itineraries_aggregate: Itinerary_Aggregate;
  type: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** columns and relationships of "vehicle_types" */
export type Vehicle_TypesItinerariesArgs = {
  distinct_on?: InputMaybe<Array<Itinerary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Itinerary_Order_By>>;
  where?: InputMaybe<Itinerary_Bool_Exp>;
};

/** columns and relationships of "vehicle_types" */
export type Vehicle_TypesItineraries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Itinerary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Itinerary_Order_By>>;
  where?: InputMaybe<Itinerary_Bool_Exp>;
};

/** aggregated selection of "vehicle_types" */
export type Vehicle_Types_Aggregate = {
  __typename?: 'vehicle_types_aggregate';
  aggregate?: Maybe<Vehicle_Types_Aggregate_Fields>;
  nodes: Array<Vehicle_Types>;
};

/** aggregate fields of "vehicle_types" */
export type Vehicle_Types_Aggregate_Fields = {
  __typename?: 'vehicle_types_aggregate_fields';
  avg?: Maybe<Vehicle_Types_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Vehicle_Types_Max_Fields>;
  min?: Maybe<Vehicle_Types_Min_Fields>;
  stddev?: Maybe<Vehicle_Types_Stddev_Fields>;
  stddev_pop?: Maybe<Vehicle_Types_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vehicle_Types_Stddev_Samp_Fields>;
  sum?: Maybe<Vehicle_Types_Sum_Fields>;
  var_pop?: Maybe<Vehicle_Types_Var_Pop_Fields>;
  var_samp?: Maybe<Vehicle_Types_Var_Samp_Fields>;
  variance?: Maybe<Vehicle_Types_Variance_Fields>;
};

/** aggregate fields of "vehicle_types" */
export type Vehicle_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vehicle_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Vehicle_Types_Avg_Fields = {
  __typename?: 'vehicle_types_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "vehicle_types". All fields are combined with a logical 'AND'. */
export type Vehicle_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Vehicle_Types_Bool_Exp>>;
  _not?: InputMaybe<Vehicle_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Vehicle_Types_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  isactive?: InputMaybe<Boolean_Comparison_Exp>;
  itineraries?: InputMaybe<Itinerary_Bool_Exp>;
  itineraries_aggregate?: InputMaybe<Itinerary_Aggregate_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "vehicle_types" */
export enum Vehicle_Types_Constraint {
  /** unique or primary key constraint on columns "id" */
  VehicleTypesPkey = 'vehicle_types_pkey',
}

/** input type for incrementing numeric columns in table "vehicle_types" */
export type Vehicle_Types_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "vehicle_types" */
export type Vehicle_Types_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  itineraries?: InputMaybe<Itinerary_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Vehicle_Types_Max_Fields = {
  __typename?: 'vehicle_types_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Vehicle_Types_Min_Fields = {
  __typename?: 'vehicle_types_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "vehicle_types" */
export type Vehicle_Types_Mutation_Response = {
  __typename?: 'vehicle_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Vehicle_Types>;
};

/** input type for inserting object relation for remote table "vehicle_types" */
export type Vehicle_Types_Obj_Rel_Insert_Input = {
  data: Vehicle_Types_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Vehicle_Types_On_Conflict>;
};

/** on_conflict condition type for table "vehicle_types" */
export type Vehicle_Types_On_Conflict = {
  constraint: Vehicle_Types_Constraint;
  update_columns?: Array<Vehicle_Types_Update_Column>;
  where?: InputMaybe<Vehicle_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "vehicle_types". */
export type Vehicle_Types_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isactive?: InputMaybe<Order_By>;
  itineraries_aggregate?: InputMaybe<Itinerary_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vehicle_types */
export type Vehicle_Types_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "vehicle_types" */
export enum Vehicle_Types_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Isactive = 'isactive',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "vehicle_types" */
export type Vehicle_Types_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Vehicle_Types_Stddev_Fields = {
  __typename?: 'vehicle_types_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Vehicle_Types_Stddev_Pop_Fields = {
  __typename?: 'vehicle_types_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Vehicle_Types_Stddev_Samp_Fields = {
  __typename?: 'vehicle_types_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "vehicle_types" */
export type Vehicle_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vehicle_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vehicle_Types_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isactive?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Vehicle_Types_Sum_Fields = {
  __typename?: 'vehicle_types_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "vehicle_types" */
export enum Vehicle_Types_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Isactive = 'isactive',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Vehicle_Types_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vehicle_Types_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vehicle_Types_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vehicle_Types_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vehicle_Types_Var_Pop_Fields = {
  __typename?: 'vehicle_types_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Vehicle_Types_Var_Samp_Fields = {
  __typename?: 'vehicle_types_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Vehicle_Types_Variance_Fields = {
  __typename?: 'vehicle_types_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type GetBookingQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type GetBookingQuery = {
  __typename?: 'query_root';
  bookings_by_pk?: {
    __typename?: 'bookings';
    booking_date: any;
    created_at?: any | null;
    deleted_at?: any | null;
    id: number;
    itinerary_id: number;
    note?: string | null;
    status: string;
    updated_at?: any | null;
    itinerary: {
      __typename?: 'itinerary';
      created_at?: any | null;
      deleted_at?: any | null;
      id: number;
      isactive?: boolean | null;
      note?: string | null;
      price: any;
      provider_id: number;
      route_id: number;
      updated_at?: any | null;
      vehicle_types_id: number;
      option: { __typename?: 'options'; round_type: string; id: number };
      provider: {
        __typename?: 'providers';
        name: string;
        note?: string | null;
        phone_number?: string | null;
      };
      route: {
        __typename?: 'routes';
        city: {
          __typename?: 'cities';
          name: string;
          routes: Array<{
            __typename?: 'routes';
            id: number;
            end_location: number;
            start_location: number;
            from_city: number;
            startlocation: { __typename?: 'locations'; name: string };
            endlocation: { __typename?: 'locations'; name: string };
          }>;
        };
      };
      vehicle_type: { __typename?: 'vehicle_types'; type: string };
    };
    user: {
      __typename?: 'users';
      name?: string | null;
      phone_number?: string | null;
    };
  } | null;
};

export type MutationCancelBookingMutationVariables = Exact<{
  bookingId: Scalars['Int']['input'];
  reason: Scalars['String']['input'];
}>;

export type MutationCancelBookingMutation = {
  __typename?: 'mutation_root';
  cancelBooking?: {
    __typename?: 'CancelBookingOutput';
    id: number;
    note?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
  } | null;
};

export type MutationUpdateBookingMutationVariables = Exact<{
  bookingDate?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
}>;

export type MutationUpdateBookingMutation = {
  __typename?: 'mutation_root';
  updateBookingAction?: {
    __typename?: 'UpdateBookingOutput';
    id?: number | null;
    note?: string | null;
    bookingDate?: any | null;
    status?: string | null;
    updatedAt?: any | null;
  } | null;
};

export type GetAllCitiesQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllCitiesQuery = {
  __typename?: 'query_root';
  cities: Array<{
    __typename?: 'cities';
    img?: string | null;
    id: number;
    name: string;
    isactive?: boolean | null;
  }>;
};

export type GetCityByIdQueryVariables = Exact<{
  cityId: Scalars['Int']['input'];
}>;

export type GetCityByIdQuery = {
  __typename?: 'query_root';
  cities: Array<{
    __typename?: 'cities';
    img?: string | null;
    name: string;
    descr?: string | null;
  }>;
};

export type GetRouteByCityIdAnd4SeaterVehicleQueryVariables = Exact<{
  cityId: Scalars['Int']['input'];
}>;

export type GetRouteByCityIdAnd4SeaterVehicleQuery = {
  __typename?: 'query_root';
  routes: Array<{
    __typename?: 'routes';
    id: number;
    startlocation: { __typename?: 'locations'; name: string };
    endlocation: { __typename?: 'locations'; name: string };
    one_way: Array<{ __typename?: 'itinerary'; price: any }>;
    round_trip: Array<{ __typename?: 'itinerary'; price: any }>;
  }>;
};

export type LoginMutationVariables = Exact<{
  token: Scalars['String']['input'];
  tokenGetPhone?: InputMaybe<Scalars['String']['input']>;
}>;

export type LoginMutation = {
  __typename?: 'mutation_root';
  actionLogin?: {
    __typename?: 'AuthOutput';
    name: string;
    token: string;
    userId: string;
  } | null;
};

export type GetNameUserByIdQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;

export type GetNameUserByIdQuery = {
  __typename?: 'query_root';
  users: Array<{ __typename?: 'users'; name?: string | null }>;
};

export const GetBookingDocument = gql`
  query getBooking($id: Int!) {
    bookings_by_pk(id: $id) {
      booking_date
      created_at
      deleted_at
      id
      itinerary_id
      note
      status
      updated_at
      itinerary {
        created_at
        deleted_at
        id
        isactive
        note
        price
        provider_id
        route_id
        updated_at
        vehicle_types_id
        option {
          round_type
          id
        }
        provider {
          name
          note
          phone_number
        }
        route {
          city {
            name
            routes {
              id
              end_location
              start_location
              from_city
              startlocation {
                name
              }
              endlocation {
                name
              }
            }
          }
        }
        vehicle_type {
          type
        }
      }
      user {
        name
        phone_number
      }
    }
  }
`;

/**
 * __useGetBookingQuery__
 *
 * To run a query within a React component, call `useGetBookingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookingQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBookingQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetBookingQuery,
    GetBookingQueryVariables
  > &
    (
      | { variables: GetBookingQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBookingQuery, GetBookingQueryVariables>(
    GetBookingDocument,
    options,
  );
}
export function useGetBookingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBookingQuery,
    GetBookingQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBookingQuery, GetBookingQueryVariables>(
    GetBookingDocument,
    options,
  );
}
export function useGetBookingSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetBookingQuery,
    GetBookingQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetBookingQuery, GetBookingQueryVariables>(
    GetBookingDocument,
    options,
  );
}
export type GetBookingQueryHookResult = ReturnType<typeof useGetBookingQuery>;
export type GetBookingLazyQueryHookResult = ReturnType<
  typeof useGetBookingLazyQuery
>;
export type GetBookingSuspenseQueryHookResult = ReturnType<
  typeof useGetBookingSuspenseQuery
>;
export type GetBookingQueryResult = Apollo.QueryResult<
  GetBookingQuery,
  GetBookingQueryVariables
>;
export const MutationCancelBookingDocument = gql`
  mutation MutationCancelBooking($bookingId: Int!, $reason: String!) {
    cancelBooking(bookingId: $bookingId, reason: $reason) {
      id
      note
      status
      createdAt
      updatedAt
    }
  }
`;
export type MutationCancelBookingMutationFn = Apollo.MutationFunction<
  MutationCancelBookingMutation,
  MutationCancelBookingMutationVariables
>;

/**
 * __useMutationCancelBookingMutation__
 *
 * To run a mutation, you first call `useMutationCancelBookingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationCancelBookingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationCancelBookingMutation, { data, loading, error }] = useMutationCancelBookingMutation({
 *   variables: {
 *      bookingId: // value for 'bookingId'
 *      reason: // value for 'reason'
 *   },
 * });
 */
export function useMutationCancelBookingMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MutationCancelBookingMutation,
    MutationCancelBookingMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    MutationCancelBookingMutation,
    MutationCancelBookingMutationVariables
  >(MutationCancelBookingDocument, options);
}
export type MutationCancelBookingMutationHookResult = ReturnType<
  typeof useMutationCancelBookingMutation
>;
export type MutationCancelBookingMutationResult =
  Apollo.MutationResult<MutationCancelBookingMutation>;
export type MutationCancelBookingMutationOptions = Apollo.BaseMutationOptions<
  MutationCancelBookingMutation,
  MutationCancelBookingMutationVariables
>;
export const MutationUpdateBookingDocument = gql`
  mutation MutationUpdateBooking(
    $bookingDate: timestamptz
    $id: Int
    $note: String
    $status: String
  ) {
    updateBookingAction(
      updateBookingData: {
        bookingDate: $bookingDate
        id: $id
        note: $note
        status: $status
      }
    ) {
      id
      note
      bookingDate
      status
      updatedAt
    }
  }
`;
export type MutationUpdateBookingMutationFn = Apollo.MutationFunction<
  MutationUpdateBookingMutation,
  MutationUpdateBookingMutationVariables
>;

/**
 * __useMutationUpdateBookingMutation__
 *
 * To run a mutation, you first call `useMutationUpdateBookingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationUpdateBookingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationUpdateBookingMutation, { data, loading, error }] = useMutationUpdateBookingMutation({
 *   variables: {
 *      bookingDate: // value for 'bookingDate'
 *      id: // value for 'id'
 *      note: // value for 'note'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useMutationUpdateBookingMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MutationUpdateBookingMutation,
    MutationUpdateBookingMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    MutationUpdateBookingMutation,
    MutationUpdateBookingMutationVariables
  >(MutationUpdateBookingDocument, options);
}
export type MutationUpdateBookingMutationHookResult = ReturnType<
  typeof useMutationUpdateBookingMutation
>;
export type MutationUpdateBookingMutationResult =
  Apollo.MutationResult<MutationUpdateBookingMutation>;
export type MutationUpdateBookingMutationOptions = Apollo.BaseMutationOptions<
  MutationUpdateBookingMutation,
  MutationUpdateBookingMutationVariables
>;
export const GetAllCitiesDocument = gql`
  query GetAllCities {
    cities {
      img
      id
      name
      isactive
    }
  }
`;

/**
 * __useGetAllCitiesQuery__
 *
 * To run a query within a React component, call `useGetAllCitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCitiesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllCitiesQuery,
    GetAllCitiesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllCitiesQuery, GetAllCitiesQueryVariables>(
    GetAllCitiesDocument,
    options,
  );
}
export function useGetAllCitiesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllCitiesQuery,
    GetAllCitiesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllCitiesQuery, GetAllCitiesQueryVariables>(
    GetAllCitiesDocument,
    options,
  );
}
export function useGetAllCitiesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetAllCitiesQuery,
    GetAllCitiesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetAllCitiesQuery, GetAllCitiesQueryVariables>(
    GetAllCitiesDocument,
    options,
  );
}
export type GetAllCitiesQueryHookResult = ReturnType<
  typeof useGetAllCitiesQuery
>;
export type GetAllCitiesLazyQueryHookResult = ReturnType<
  typeof useGetAllCitiesLazyQuery
>;
export type GetAllCitiesSuspenseQueryHookResult = ReturnType<
  typeof useGetAllCitiesSuspenseQuery
>;
export type GetAllCitiesQueryResult = Apollo.QueryResult<
  GetAllCitiesQuery,
  GetAllCitiesQueryVariables
>;
export const GetCityByIdDocument = gql`
  query GetCityById($cityId: Int!) {
    cities(where: { id: { _eq: $cityId } }) {
      img
      name
      descr
    }
  }
`;

/**
 * __useGetCityByIdQuery__
 *
 * To run a query within a React component, call `useGetCityByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCityByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCityByIdQuery({
 *   variables: {
 *      cityId: // value for 'cityId'
 *   },
 * });
 */
export function useGetCityByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCityByIdQuery,
    GetCityByIdQueryVariables
  > &
    (
      | { variables: GetCityByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCityByIdQuery, GetCityByIdQueryVariables>(
    GetCityByIdDocument,
    options,
  );
}
export function useGetCityByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCityByIdQuery,
    GetCityByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCityByIdQuery, GetCityByIdQueryVariables>(
    GetCityByIdDocument,
    options,
  );
}
export function useGetCityByIdSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetCityByIdQuery,
    GetCityByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetCityByIdQuery, GetCityByIdQueryVariables>(
    GetCityByIdDocument,
    options,
  );
}
export type GetCityByIdQueryHookResult = ReturnType<typeof useGetCityByIdQuery>;
export type GetCityByIdLazyQueryHookResult = ReturnType<
  typeof useGetCityByIdLazyQuery
>;
export type GetCityByIdSuspenseQueryHookResult = ReturnType<
  typeof useGetCityByIdSuspenseQuery
>;
export type GetCityByIdQueryResult = Apollo.QueryResult<
  GetCityByIdQuery,
  GetCityByIdQueryVariables
>;
export const GetRouteByCityIdAnd4SeaterVehicleDocument = gql`
  query GetRouteByCityIdAnd4SeaterVehicle($cityId: Int!) {
    routes(where: { from_city: { _eq: $cityId } }) {
      startlocation {
        name
      }
      endlocation {
        name
      }
      one_way: itineraries(
        where: { option_id: { _eq: 1 }, _and: { vehicle_types_id: { _eq: 1 } } }
      ) {
        price
      }
      round_trip: itineraries(
        where: { option_id: { _eq: 2 }, _and: { vehicle_types_id: { _eq: 1 } } }
      ) {
        price
      }
      id
    }
  }
`;

/**
 * __useGetRouteByCityIdAnd4SeaterVehicleQuery__
 *
 * To run a query within a React component, call `useGetRouteByCityIdAnd4SeaterVehicleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRouteByCityIdAnd4SeaterVehicleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRouteByCityIdAnd4SeaterVehicleQuery({
 *   variables: {
 *      cityId: // value for 'cityId'
 *   },
 * });
 */
export function useGetRouteByCityIdAnd4SeaterVehicleQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetRouteByCityIdAnd4SeaterVehicleQuery,
    GetRouteByCityIdAnd4SeaterVehicleQueryVariables
  > &
    (
      | {
          variables: GetRouteByCityIdAnd4SeaterVehicleQueryVariables;
          skip?: boolean;
        }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetRouteByCityIdAnd4SeaterVehicleQuery,
    GetRouteByCityIdAnd4SeaterVehicleQueryVariables
  >(GetRouteByCityIdAnd4SeaterVehicleDocument, options);
}
export function useGetRouteByCityIdAnd4SeaterVehicleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRouteByCityIdAnd4SeaterVehicleQuery,
    GetRouteByCityIdAnd4SeaterVehicleQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetRouteByCityIdAnd4SeaterVehicleQuery,
    GetRouteByCityIdAnd4SeaterVehicleQueryVariables
  >(GetRouteByCityIdAnd4SeaterVehicleDocument, options);
}
export function useGetRouteByCityIdAnd4SeaterVehicleSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetRouteByCityIdAnd4SeaterVehicleQuery,
    GetRouteByCityIdAnd4SeaterVehicleQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetRouteByCityIdAnd4SeaterVehicleQuery,
    GetRouteByCityIdAnd4SeaterVehicleQueryVariables
  >(GetRouteByCityIdAnd4SeaterVehicleDocument, options);
}
export type GetRouteByCityIdAnd4SeaterVehicleQueryHookResult = ReturnType<
  typeof useGetRouteByCityIdAnd4SeaterVehicleQuery
>;
export type GetRouteByCityIdAnd4SeaterVehicleLazyQueryHookResult = ReturnType<
  typeof useGetRouteByCityIdAnd4SeaterVehicleLazyQuery
>;
export type GetRouteByCityIdAnd4SeaterVehicleSuspenseQueryHookResult =
  ReturnType<typeof useGetRouteByCityIdAnd4SeaterVehicleSuspenseQuery>;
export type GetRouteByCityIdAnd4SeaterVehicleQueryResult = Apollo.QueryResult<
  GetRouteByCityIdAnd4SeaterVehicleQuery,
  GetRouteByCityIdAnd4SeaterVehicleQueryVariables
>;
export const LoginDocument = gql`
  mutation Login($token: String!, $tokenGetPhone: String) {
    actionLogin(token: $token, tokenGetPhone: $tokenGetPhone) {
      name
      token
      userId
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      token: // value for 'token'
 *      tokenGetPhone: // value for 'tokenGetPhone'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options,
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const GetNameUserByIdDocument = gql`
  query getNameUserById($userId: Int!) {
    users(where: { id: { _eq: $userId } }) {
      name
    }
  }
`;

/**
 * __useGetNameUserByIdQuery__
 *
 * To run a query within a React component, call `useGetNameUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNameUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNameUserByIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetNameUserByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetNameUserByIdQuery,
    GetNameUserByIdQueryVariables
  > &
    (
      | { variables: GetNameUserByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetNameUserByIdQuery, GetNameUserByIdQueryVariables>(
    GetNameUserByIdDocument,
    options,
  );
}
export function useGetNameUserByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNameUserByIdQuery,
    GetNameUserByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetNameUserByIdQuery,
    GetNameUserByIdQueryVariables
  >(GetNameUserByIdDocument, options);
}
export function useGetNameUserByIdSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetNameUserByIdQuery,
    GetNameUserByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetNameUserByIdQuery,
    GetNameUserByIdQueryVariables
  >(GetNameUserByIdDocument, options);
}
export type GetNameUserByIdQueryHookResult = ReturnType<
  typeof useGetNameUserByIdQuery
>;
export type GetNameUserByIdLazyQueryHookResult = ReturnType<
  typeof useGetNameUserByIdLazyQuery
>;
export type GetNameUserByIdSuspenseQueryHookResult = ReturnType<
  typeof useGetNameUserByIdSuspenseQuery
>;
export type GetNameUserByIdQueryResult = Apollo.QueryResult<
  GetNameUserByIdQuery,
  GetNameUserByIdQueryVariables
>;

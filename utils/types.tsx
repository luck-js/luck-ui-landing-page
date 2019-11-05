export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  JSON: any,
  /** The `DateTime` scalar represents a date and time following the ISO 8601 standard */
  DateTime: any,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
  /** The `Long` scalar type represents 52-bit integers */
  Long: any,
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CreateHashtagInput = {
  data?: Maybe<HashtagInput>,
};

export type CreateHashtagPayload = {
  __typename?: 'createHashtagPayload',
  hashtag?: Maybe<Hashtag>,
};

export type CreatePostInput = {
  data?: Maybe<PostInput>,
};

export type CreatePostPayload = {
  __typename?: 'createPostPayload',
  post?: Maybe<Post>,
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>,
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload',
  role?: Maybe<UsersPermissionsRole>,
};

export type CreateUserInput = {
  data?: Maybe<UserInput>,
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload',
  user?: Maybe<UsersPermissionsUser>,
};


export type DeleteHashtagInput = {
  where?: Maybe<InputId>,
};

export type DeleteHashtagPayload = {
  __typename?: 'deleteHashtagPayload',
  hashtag?: Maybe<Hashtag>,
};

export type DeletePostInput = {
  where?: Maybe<InputId>,
};

export type DeletePostPayload = {
  __typename?: 'deletePostPayload',
  post?: Maybe<Post>,
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>,
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload',
  role?: Maybe<UsersPermissionsRole>,
};

export type DeleteUserInput = {
  where?: Maybe<InputId>,
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload',
  user?: Maybe<UsersPermissionsUser>,
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  sha256?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  mime?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  public_id?: Maybe<Scalars['String']>,
  related?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type EditHashtagInput = {
  name?: Maybe<Scalars['String']>,
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type EditPostInput = {
  title?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  isDraft?: Maybe<Scalars['Boolean']>,
  cover?: Maybe<Scalars['ID']>,
  coverPlaceholder?: Maybe<Scalars['ID']>,
  wideCover?: Maybe<Scalars['ID']>,
  wideCoverPlaceholder?: Maybe<Scalars['ID']>,
  description?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['DateTime']>,
  hashtags?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>,
  users?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  resetPasswordToken?: Maybe<Scalars['String']>,
  confirmed?: Maybe<Scalars['Boolean']>,
  blocked?: Maybe<Scalars['Boolean']>,
  role?: Maybe<Scalars['ID']>,
};

export type FileInput = {
  name: Scalars['String'],
  hash: Scalars['String'],
  sha256?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  mime: Scalars['String'],
  size: Scalars['String'],
  url: Scalars['String'],
  provider: Scalars['String'],
  public_id?: Maybe<Scalars['String']>,
  related?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type Hashtag = {
  __typename?: 'Hashtag',
  name: Scalars['String'],
  posts?: Maybe<Array<Maybe<Post>>>,
  _id: Scalars['ID'],
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};


export type HashtagPostsArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};

export type HashtagAggregator = {
  __typename?: 'HashtagAggregator',
  count?: Maybe<Scalars['Int']>,
  totalCount?: Maybe<Scalars['Int']>,
};

export type HashtagConnection = {
  __typename?: 'HashtagConnection',
  values?: Maybe<Array<Maybe<Hashtag>>>,
  groupBy?: Maybe<HashtagGroupBy>,
  aggregate?: Maybe<HashtagAggregator>,
};

export type HashtagConnection_Id = {
  __typename?: 'HashtagConnection_id',
  key?: Maybe<Scalars['ID']>,
  connection?: Maybe<HashtagConnection>,
};

export type HashtagConnectionCreatedAt = {
  __typename?: 'HashtagConnectionCreatedAt',
  key?: Maybe<Scalars['DateTime']>,
  connection?: Maybe<HashtagConnection>,
};

export type HashtagConnectionId = {
  __typename?: 'HashtagConnectionId',
  key?: Maybe<Scalars['ID']>,
  connection?: Maybe<HashtagConnection>,
};

export type HashtagConnectionName = {
  __typename?: 'HashtagConnectionName',
  key?: Maybe<Scalars['String']>,
  connection?: Maybe<HashtagConnection>,
};

export type HashtagConnectionUpdatedAt = {
  __typename?: 'HashtagConnectionUpdatedAt',
  key?: Maybe<Scalars['DateTime']>,
  connection?: Maybe<HashtagConnection>,
};

export type HashtagGroupBy = {
  __typename?: 'HashtagGroupBy',
  name?: Maybe<Array<Maybe<HashtagConnectionName>>>,
  _id?: Maybe<Array<Maybe<HashtagConnection_Id>>>,
  id?: Maybe<Array<Maybe<HashtagConnectionId>>>,
  createdAt?: Maybe<Array<Maybe<HashtagConnectionCreatedAt>>>,
  updatedAt?: Maybe<Array<Maybe<HashtagConnectionUpdatedAt>>>,
};

export type HashtagInput = {
  name: Scalars['String'],
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type InputId = {
  id: Scalars['ID'],
};



export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | Hashtag | CreateHashtagPayload | UpdateHashtagPayload | DeleteHashtagPayload | HashtagConnection | HashtagAggregator | HashtagGroupBy | HashtagConnectionName | HashtagConnection_Id | HashtagConnectionId | HashtagConnectionCreatedAt | HashtagConnectionUpdatedAt | Post | CreatePostPayload | UpdatePostPayload | DeletePostPayload | PostConnection | PostAggregator | PostGroupBy | PostConnectionTitle | PostConnectionContent | PostConnectionSlug | PostConnectionIsDraft | PostConnectionCover | PostConnectionCoverPlaceholder | PostConnectionWideCover | PostConnectionWideCoverPlaceholder | PostConnectionDescription | PostConnectionDate | PostConnection_Id | PostConnectionId | PostConnectionCreatedAt | PostConnectionUpdatedAt | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileGroupBy | UploadFileConnectionName | UploadFileConnectionHash | UploadFileConnectionSha256 | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionProvider | UploadFileConnectionPublic_Id | UploadFileConnection_Id | UploadFileConnectionId | UploadFileConnectionCreatedAt | UploadFileConnectionUpdatedAt | UsersPermissionsPermission | UsersPermissionsRole | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | UsersPermissionsRoleConnection_Id | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionCreatedAt | UsersPermissionsRoleConnectionUpdatedAt | UsersPermissionsUser | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnection_Id | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreatedAt | UsersPermissionsUserConnectionUpdatedAt;

export type Mutation = {
  __typename?: 'Mutation',
  createHashtag?: Maybe<CreateHashtagPayload>,
  updateHashtag?: Maybe<UpdateHashtagPayload>,
  deleteHashtag?: Maybe<DeleteHashtagPayload>,
  createPost?: Maybe<CreatePostPayload>,
  updatePost?: Maybe<UpdatePostPayload>,
  deletePost?: Maybe<DeletePostPayload>,
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>,
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>,
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>,
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>,
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>,
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>,
  upload: UploadFile,
  multipleUpload: Array<Maybe<UploadFile>>,
};


export type MutationCreateHashtagArgs = {
  input?: Maybe<CreateHashtagInput>
};


export type MutationUpdateHashtagArgs = {
  input?: Maybe<UpdateHashtagInput>
};


export type MutationDeleteHashtagArgs = {
  input?: Maybe<DeleteHashtagInput>
};


export type MutationCreatePostArgs = {
  input?: Maybe<CreatePostInput>
};


export type MutationUpdatePostArgs = {
  input?: Maybe<UpdatePostInput>
};


export type MutationDeletePostArgs = {
  input?: Maybe<DeletePostInput>
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>,
  ref?: Maybe<Scalars['String']>,
  field?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  file: Scalars['Upload']
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>,
  ref?: Maybe<Scalars['String']>,
  field?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  files: Array<Maybe<Scalars['Upload']>>
};

export type Post = {
  __typename?: 'Post',
  title: Scalars['String'],
  content: Scalars['String'],
  slug?: Maybe<Scalars['String']>,
  isDraft?: Maybe<Scalars['Boolean']>,
  cover?: Maybe<UploadFile>,
  coverPlaceholder?: Maybe<UploadFile>,
  wideCover?: Maybe<UploadFile>,
  wideCoverPlaceholder?: Maybe<UploadFile>,
  description: Scalars['String'],
  date: Scalars['DateTime'],
  hashtags?: Maybe<Array<Maybe<Hashtag>>>,
  _id: Scalars['ID'],
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};


export type PostHashtagsArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};

export type PostAggregator = {
  __typename?: 'PostAggregator',
  count?: Maybe<Scalars['Int']>,
  totalCount?: Maybe<Scalars['Int']>,
};

export type PostConnection = {
  __typename?: 'PostConnection',
  values?: Maybe<Array<Maybe<Post>>>,
  groupBy?: Maybe<PostGroupBy>,
  aggregate?: Maybe<PostAggregator>,
};

export type PostConnection_Id = {
  __typename?: 'PostConnection_id',
  key?: Maybe<Scalars['ID']>,
  connection?: Maybe<PostConnection>,
};

export type PostConnectionContent = {
  __typename?: 'PostConnectionContent',
  key?: Maybe<Scalars['String']>,
  connection?: Maybe<PostConnection>,
};

export type PostConnectionCover = {
  __typename?: 'PostConnectionCover',
  key?: Maybe<Scalars['ID']>,
  connection?: Maybe<PostConnection>,
};

export type PostConnectionCoverPlaceholder = {
  __typename?: 'PostConnectionCoverPlaceholder',
  key?: Maybe<Scalars['ID']>,
  connection?: Maybe<PostConnection>,
};

export type PostConnectionCreatedAt = {
  __typename?: 'PostConnectionCreatedAt',
  key?: Maybe<Scalars['DateTime']>,
  connection?: Maybe<PostConnection>,
};

export type PostConnectionDate = {
  __typename?: 'PostConnectionDate',
  key?: Maybe<Scalars['DateTime']>,
  connection?: Maybe<PostConnection>,
};

export type PostConnectionDescription = {
  __typename?: 'PostConnectionDescription',
  key?: Maybe<Scalars['String']>,
  connection?: Maybe<PostConnection>,
};

export type PostConnectionId = {
  __typename?: 'PostConnectionId',
  key?: Maybe<Scalars['ID']>,
  connection?: Maybe<PostConnection>,
};

export type PostConnectionIsDraft = {
  __typename?: 'PostConnectionIsDraft',
  key?: Maybe<Scalars['Boolean']>,
  connection?: Maybe<PostConnection>,
};

export type PostConnectionSlug = {
  __typename?: 'PostConnectionSlug',
  key?: Maybe<Scalars['String']>,
  connection?: Maybe<PostConnection>,
};

export type PostConnectionTitle = {
  __typename?: 'PostConnectionTitle',
  key?: Maybe<Scalars['String']>,
  connection?: Maybe<PostConnection>,
};

export type PostConnectionUpdatedAt = {
  __typename?: 'PostConnectionUpdatedAt',
  key?: Maybe<Scalars['DateTime']>,
  connection?: Maybe<PostConnection>,
};

export type PostConnectionWideCover = {
  __typename?: 'PostConnectionWideCover',
  key?: Maybe<Scalars['ID']>,
  connection?: Maybe<PostConnection>,
};

export type PostConnectionWideCoverPlaceholder = {
  __typename?: 'PostConnectionWideCoverPlaceholder',
  key?: Maybe<Scalars['ID']>,
  connection?: Maybe<PostConnection>,
};

export type PostGroupBy = {
  __typename?: 'PostGroupBy',
  title?: Maybe<Array<Maybe<PostConnectionTitle>>>,
  content?: Maybe<Array<Maybe<PostConnectionContent>>>,
  slug?: Maybe<Array<Maybe<PostConnectionSlug>>>,
  isDraft?: Maybe<Array<Maybe<PostConnectionIsDraft>>>,
  cover?: Maybe<Array<Maybe<PostConnectionCover>>>,
  coverPlaceholder?: Maybe<Array<Maybe<PostConnectionCoverPlaceholder>>>,
  wideCover?: Maybe<Array<Maybe<PostConnectionWideCover>>>,
  wideCoverPlaceholder?: Maybe<Array<Maybe<PostConnectionWideCoverPlaceholder>>>,
  description?: Maybe<Array<Maybe<PostConnectionDescription>>>,
  date?: Maybe<Array<Maybe<PostConnectionDate>>>,
  _id?: Maybe<Array<Maybe<PostConnection_Id>>>,
  id?: Maybe<Array<Maybe<PostConnectionId>>>,
  createdAt?: Maybe<Array<Maybe<PostConnectionCreatedAt>>>,
  updatedAt?: Maybe<Array<Maybe<PostConnectionUpdatedAt>>>,
};

export type PostInput = {
  title: Scalars['String'],
  content: Scalars['String'],
  slug?: Maybe<Scalars['String']>,
  isDraft?: Maybe<Scalars['Boolean']>,
  cover?: Maybe<Scalars['ID']>,
  coverPlaceholder?: Maybe<Scalars['ID']>,
  wideCover?: Maybe<Scalars['ID']>,
  wideCoverPlaceholder?: Maybe<Scalars['ID']>,
  description: Scalars['String'],
  date: Scalars['DateTime'],
  hashtags?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type Query = {
  __typename?: 'Query',
  hashtag?: Maybe<Hashtag>,
  hashtags?: Maybe<Array<Maybe<Hashtag>>>,
  hashtagsConnection?: Maybe<HashtagConnection>,
  post?: Maybe<Post>,
  posts?: Maybe<Array<Maybe<Post>>>,
  postsConnection?: Maybe<PostConnection>,
  files?: Maybe<Array<Maybe<UploadFile>>>,
  filesConnection?: Maybe<UploadFileConnection>,
  role?: Maybe<UsersPermissionsRole>,
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>,
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>,
  user?: Maybe<UsersPermissionsUser>,
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>,
  usersConnection?: Maybe<UsersPermissionsUserConnection>,
  me?: Maybe<UsersPermissionsMe>,
};


export type QueryHashtagArgs = {
  id: Scalars['ID']
};


export type QueryHashtagsArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type QueryHashtagsConnectionArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type QueryPostArgs = {
  id: Scalars['ID']
};


export type QueryPostsArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type QueryPostsConnectionArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type QueryRoleArgs = {
  id: Scalars['ID']
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type QueryUserArgs = {
  id: Scalars['ID']
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};

export type RoleInput = {
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>,
  users?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type UpdateHashtagInput = {
  where?: Maybe<InputId>,
  data?: Maybe<EditHashtagInput>,
};

export type UpdateHashtagPayload = {
  __typename?: 'updateHashtagPayload',
  hashtag?: Maybe<Hashtag>,
};

export type UpdatePostInput = {
  where?: Maybe<InputId>,
  data?: Maybe<EditPostInput>,
};

export type UpdatePostPayload = {
  __typename?: 'updatePostPayload',
  post?: Maybe<Post>,
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>,
  data?: Maybe<EditRoleInput>,
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload',
  role?: Maybe<UsersPermissionsRole>,
};

export type UpdateUserInput = {
  where?: Maybe<InputId>,
  data?: Maybe<EditUserInput>,
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload',
  user?: Maybe<UsersPermissionsUser>,
};


export type UploadFile = {
  __typename?: 'UploadFile',
  name: Scalars['String'],
  hash: Scalars['String'],
  sha256?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  mime: Scalars['String'],
  size: Scalars['String'],
  url: Scalars['String'],
  provider: Scalars['String'],
  public_id?: Maybe<Scalars['String']>,
  related?: Maybe<Array<Maybe<Morph>>>,
  _id: Scalars['ID'],
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator',
  count?: Maybe<Scalars['Int']>,
  totalCount?: Maybe<Scalars['Int']>,
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection',
  values?: Maybe<Array<Maybe<UploadFile>>>,
  groupBy?: Maybe<UploadFileGroupBy>,
  aggregate?: Maybe<UploadFileAggregator>,
};

export type UploadFileConnection_Id = {
  __typename?: 'UploadFileConnection_id',
  key?: Maybe<Scalars['ID']>,
  connection?: Maybe<UploadFileConnection>,
};

export type UploadFileConnectionCreatedAt = {
  __typename?: 'UploadFileConnectionCreatedAt',
  key?: Maybe<Scalars['DateTime']>,
  connection?: Maybe<UploadFileConnection>,
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt',
  key?: Maybe<Scalars['String']>,
  connection?: Maybe<UploadFileConnection>,
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash',
  key?: Maybe<Scalars['String']>,
  connection?: Maybe<UploadFileConnection>,
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId',
  key?: Maybe<Scalars['ID']>,
  connection?: Maybe<UploadFileConnection>,
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime',
  key?: Maybe<Scalars['String']>,
  connection?: Maybe<UploadFileConnection>,
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName',
  key?: Maybe<Scalars['String']>,
  connection?: Maybe<UploadFileConnection>,
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider',
  key?: Maybe<Scalars['String']>,
  connection?: Maybe<UploadFileConnection>,
};

export type UploadFileConnectionPublic_Id = {
  __typename?: 'UploadFileConnectionPublic_id',
  key?: Maybe<Scalars['String']>,
  connection?: Maybe<UploadFileConnection>,
};

export type UploadFileConnectionSha256 = {
  __typename?: 'UploadFileConnectionSha256',
  key?: Maybe<Scalars['String']>,
  connection?: Maybe<UploadFileConnection>,
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize',
  key?: Maybe<Scalars['String']>,
  connection?: Maybe<UploadFileConnection>,
};

export type UploadFileConnectionUpdatedAt = {
  __typename?: 'UploadFileConnectionUpdatedAt',
  key?: Maybe<Scalars['DateTime']>,
  connection?: Maybe<UploadFileConnection>,
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl',
  key?: Maybe<Scalars['String']>,
  connection?: Maybe<UploadFileConnection>,
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy',
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>,
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>,
  sha256?: Maybe<Array<Maybe<UploadFileConnectionSha256>>>,
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>,
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>,
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>,
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>,
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>,
  public_id?: Maybe<Array<Maybe<UploadFileConnectionPublic_Id>>>,
  _id?: Maybe<Array<Maybe<UploadFileConnection_Id>>>,
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>,
  createdAt?: Maybe<Array<Maybe<UploadFileConnectionCreatedAt>>>,
  updatedAt?: Maybe<Array<Maybe<UploadFileConnectionUpdatedAt>>>,
};

export type UserInput = {
  username: Scalars['String'],
  email: Scalars['String'],
  provider?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  resetPasswordToken?: Maybe<Scalars['String']>,
  confirmed?: Maybe<Scalars['Boolean']>,
  blocked?: Maybe<Scalars['Boolean']>,
  role?: Maybe<Scalars['ID']>,
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe',
  id: Scalars['ID'],
  username: Scalars['String'],
  email: Scalars['String'],
  confirmed?: Maybe<Scalars['Boolean']>,
  blocked?: Maybe<Scalars['Boolean']>,
  role?: Maybe<UsersPermissionsMeRole>,
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole',
  id: Scalars['ID'],
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission',
  type: Scalars['String'],
  controller: Scalars['String'],
  action: Scalars['String'],
  enabled: Scalars['Boolean'],
  policy?: Maybe<Scalars['String']>,
  role?: Maybe<UsersPermissionsRole>,
  _id: Scalars['ID'],
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole',
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>,
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>,
  _id: Scalars['ID'],
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator',
  count?: Maybe<Scalars['Int']>,
  totalCount?: Maybe<Scalars['Int']>,
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection',
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>,
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>,
  aggregate?: Maybe<UsersPermissionsRoleAggregator>,
};

export type UsersPermissionsRoleConnection_Id = {
  __typename?: 'UsersPermissionsRoleConnection_id',
  key?: Maybe<Scalars['ID']>,
  connection?: Maybe<UsersPermissionsRoleConnection>,
};

export type UsersPermissionsRoleConnectionCreatedAt = {
  __typename?: 'UsersPermissionsRoleConnectionCreatedAt',
  key?: Maybe<Scalars['DateTime']>,
  connection?: Maybe<UsersPermissionsRoleConnection>,
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription',
  key?: Maybe<Scalars['String']>,
  connection?: Maybe<UsersPermissionsRoleConnection>,
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId',
  key?: Maybe<Scalars['ID']>,
  connection?: Maybe<UsersPermissionsRoleConnection>,
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName',
  key?: Maybe<Scalars['String']>,
  connection?: Maybe<UsersPermissionsRoleConnection>,
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType',
  key?: Maybe<Scalars['String']>,
  connection?: Maybe<UsersPermissionsRoleConnection>,
};

export type UsersPermissionsRoleConnectionUpdatedAt = {
  __typename?: 'UsersPermissionsRoleConnectionUpdatedAt',
  key?: Maybe<Scalars['DateTime']>,
  connection?: Maybe<UsersPermissionsRoleConnection>,
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy',
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>,
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>,
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>,
  _id?: Maybe<Array<Maybe<UsersPermissionsRoleConnection_Id>>>,
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>,
  createdAt?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionCreatedAt>>>,
  updatedAt?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionUpdatedAt>>>,
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser',
  username: Scalars['String'],
  email: Scalars['String'],
  provider?: Maybe<Scalars['String']>,
  confirmed?: Maybe<Scalars['Boolean']>,
  blocked?: Maybe<Scalars['Boolean']>,
  role?: Maybe<UsersPermissionsRole>,
  _id: Scalars['ID'],
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator',
  count?: Maybe<Scalars['Int']>,
  totalCount?: Maybe<Scalars['Int']>,
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection',
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>,
  groupBy?: Maybe<UsersPermissionsUserGroupBy>,
  aggregate?: Maybe<UsersPermissionsUserAggregator>,
};

export type UsersPermissionsUserConnection_Id = {
  __typename?: 'UsersPermissionsUserConnection_id',
  key?: Maybe<Scalars['ID']>,
  connection?: Maybe<UsersPermissionsUserConnection>,
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked',
  key?: Maybe<Scalars['Boolean']>,
  connection?: Maybe<UsersPermissionsUserConnection>,
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed',
  key?: Maybe<Scalars['Boolean']>,
  connection?: Maybe<UsersPermissionsUserConnection>,
};

export type UsersPermissionsUserConnectionCreatedAt = {
  __typename?: 'UsersPermissionsUserConnectionCreatedAt',
  key?: Maybe<Scalars['DateTime']>,
  connection?: Maybe<UsersPermissionsUserConnection>,
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail',
  key?: Maybe<Scalars['String']>,
  connection?: Maybe<UsersPermissionsUserConnection>,
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId',
  key?: Maybe<Scalars['ID']>,
  connection?: Maybe<UsersPermissionsUserConnection>,
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider',
  key?: Maybe<Scalars['String']>,
  connection?: Maybe<UsersPermissionsUserConnection>,
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole',
  key?: Maybe<Scalars['ID']>,
  connection?: Maybe<UsersPermissionsUserConnection>,
};

export type UsersPermissionsUserConnectionUpdatedAt = {
  __typename?: 'UsersPermissionsUserConnectionUpdatedAt',
  key?: Maybe<Scalars['DateTime']>,
  connection?: Maybe<UsersPermissionsUserConnection>,
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername',
  key?: Maybe<Scalars['String']>,
  connection?: Maybe<UsersPermissionsUserConnection>,
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy',
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>,
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>,
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>,
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>,
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>,
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>,
  _id?: Maybe<Array<Maybe<UsersPermissionsUserConnection_Id>>>,
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>,
  createdAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreatedAt>>>,
  updatedAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdatedAt>>>,
};

export const userSwaggerSettings = {
  id: {
    description: 'User id(uuid)',
    example: '1',
    readOnly: true,
    uniqueItems: true,
    isArray: false,
  },
  login: {
    type: 'string',
    maxLength: 15,
    required: true,
    title: 'User login',
    description: 'User login for authorization',
    example: 'userLogin',
    uniqueItems: true,
    nullable: false,
  },
  password: {
    type: 'string',
    maxLength: 20,
    required: true,
    title: 'User password',
    description: 'User password for authorization',
    example: 'userPassword',
    uniqueItems: false,
    nullable: false,
  },
  email: {
    type: 'string',
    maxLength: 30,
    required: true,
    title: 'User email',
    description: 'User email',
    example: 'userLogin@user.com',
    uniqueItems: true,
    nullable: false,
  },
  role: {
    type: 'string',
    required: true,
    title: 'User role',
    description: 'User role in the system',
    example: ['Admin', 'User'],
    uniqueItems: false,
    nullable: false,
    isArray: true,
  },
  isBanned: {
    type: 'bool',
    required: true,
    title: 'Blocking a user',
    description: 'Is the user blocked in the system',
    example: false,
    uniqueItems: false,
    nullable: false,
  },
  profielId: {
    type: 'string',
    required: true,
    title: 'ProfileId',
    description: "Link to the user's profile ID",
    example: '1',
    uniqueItems: true,
    nullable: false,
  },
}

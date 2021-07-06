export const videoSwaggerSettings = {
  id: {
    description: 'Video id(uuid)',
    example: '1',
    readOnly: true,
    uniqueItems: true,
    isArray: false,
  },
  name: {
    type: 'string',
    maxLength: 15,
    required: true,
    title: 'Video title',
    description: 'Video name',
    example: 'userLogin',
    uniqueItems: true,
    nullable: false,
  },
}

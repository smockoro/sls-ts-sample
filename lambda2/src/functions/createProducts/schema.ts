export default {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    price: { type: 'string' },
    description: { type: 'string' },
    rating: { type: 'number' },
    canOrder: { type: 'boolean' },
    image: { type: 'string' },
    createdAt: { type: 'string' },
    updatedAt: { type: 'string' },
    deletedAt: { type: 'string' },
  },
  required: ['id'],
} as const;

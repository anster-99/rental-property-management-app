export const PROPERTIES = [
  {
    id: 'r1',
    name: '10 Downing St.',
    in: [
      { id: 'in1', name: 'Rent' },
      { id: 'in2', name: 'Late fees' },
      { id: 'in3', name: 'Pet fees' },
    ],
    out: [
      { id: 'out1', name: 'Taxes' },
      { id: 'out2', name: 'Property management fees' },
      { id: 'out3', name: 'Cleaning fees' },
      { id: 'out4', name: 'Event management' },
    ],
    categories: ['in', 'out'],
  },
  {
    id: 'r2',
    name: '221B Baker St.',
    in: [
      { id: 'in1', name: 'Rent - occupant 1' },
      { id: 'in2', name: 'Rent - occupant 2' },
      { id: 'in3', name: 'Damage fees charged to tenants' },
    ],
    out: [
      { id: 'out1', name: 'Property taxes' },
      { id: 'out2', name: 'House keeping' },
      { id: 'out3', name: 'Repairs' },
    ],
    categories: ['in', 'out'],
  },
  {
    id: 'r3',
    name: '742 Evergreen Terrace',
    in: [{ id: 'in1', name: 'Rent' }],
    out: [
      { id: 'out1', name: 'Mortgage payments' },
      { id: 'out2', name: 'Property taxes' },
      { id: 'out3', name: 'HOA fees' },
      { id: 'out4', name: 'Landscaping' },
    ],
    categories: ['in', 'out'],
  },
  {
    id: 'r4',
    name: 'Manderley, Cornwall',
    in: [{ id: 'in1', name: 'Rent' }],
    out: [
      { id: 'out1', name: 'Property taxes' },
      { id: 'out2', name: 'De-infestation services' },
    ],
    categories: ['in', 'out'],
  },
];

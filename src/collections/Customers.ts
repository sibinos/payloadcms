import { CollectionConfig } from 'payload/types';

const Customers: CollectionConfig = {
  slug: 'customers',
  auth:true,
  
  fields: [
    {
      name: 'first name',
      type: 'text',
      required:true
    },
    
    {
        name: 'last name',
        type: 'text',
        required:true
    }
  ]
}

export default Customers;
/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrder = /* GraphQL */ `
  subscription onCreateOrder(
    $PK: String!
    ) {
    onCreateOrder(PK: $PK) {
      GS1_PK
      LS1_SK
      status
      total
      discount
      deliveryType
      PK
      SK
      items {
        PK
        SK
        image
        name
        originalPrice
        price
        quantity
        variant
        variantKey
      }
      merchant {
        address
        name
        phone
      }
      user {
        address
        name
        phone
      }
    }
  }
`;
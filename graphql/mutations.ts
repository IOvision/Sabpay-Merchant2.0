export const updateOrderStatus = /* GraphQL */ `
  mutation updateOrderStatus($PK: String!, $SK: String!, $status: orderStatus!) {
    updateOrderStatus(PK: $PK, SK: $SK, status: $status) {
      PK
      SK
      status
    }
  }
`;

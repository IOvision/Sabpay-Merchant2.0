export const updateOrderStatus = /* GraphQL */ `
  mutation updateOrderStatus($SK: String!, $active: Int, $PK: String!, $status: orderStatus!) {
    updateOrderStatus(PK: $PK, SK: $SK, status: $status, active: $active) {
      status
      PK
      SK
    }
  }
`;

import {gql} from '@apollo/client';

// All Rights are reserved for Mohammad Labbafi

export const CREATE_COMMENT = gql`
mutation createComment(
    $name: String! 
    $email: String! 
    $text: String!
    $slug: String!
) {
  createComment(
    data: {
     name: $name 
     email: $email 
     text: $text 
     post: { connect: { slug: $slug }}
     }
  ){
    id
  }
}

`
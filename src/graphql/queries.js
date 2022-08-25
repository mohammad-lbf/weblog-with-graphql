import {gql} from '@apollo/client'

export const GET_BLOGS_INFO = gql`
query  {
  posts {
    author {
      avatar {
        url
      }
    }
    slug
    title
    id
    content {
      text
    }
    coverphoto {
      url
    }
  }
}

`

export const GET_AUTHOR_INFO = gql`
query MyQuery {
  authors {
    avatar {
      url
    }
    name
    slug
    filed
    description {
      html
    }
  }
}

`
export const GET_BLOG_INFO = gql`

query MyQuery($slug:String!) {
  post(where: {slug: $slug}) {
    author {
      filed
      name
      avatar {
        url
      }
    }
    title
    content {
      html
    }
    coverphoto {
      url
    }
    datePublished
  }
}


`
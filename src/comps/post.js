import React from 'react'
import styled from 'styled-components'

const PostContainer = styled.article`
margin-bottom: 30px;
padding: 30px;
background: var(--cream);
`

const PostHeading = styled.h2`
margin: 0 0 30px;
font-family: 'Montserrat', sans-serif;
font-size: 24px;
color: var(--gray);
`

const Post = ({ title, children }) => (
  <PostContainer>
    { title && <PostHeading>{title}</PostHeading> }
    {children}
  </PostContainer>
)

export default Post;
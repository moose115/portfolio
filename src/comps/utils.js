import styled from 'styled-components'

export const Container = styled.div`
margin: 0 auto;
padding: 30px 0;

@media(min-width: 400px) {
  max-width: 380px;
}
@media(min-width: 720px) {
  max-width: 700px;
}
@media(min-width: 1000px) {
  max-width: 960px;
}
@media(min-width: 1200px) {
  max-width: 1160px;
}
@media(min-width: 1400px) {
  max-width: 1360px;
}
`
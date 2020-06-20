import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.nav`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #387EF5;

  a {
    padding: 0 15px;
    color: #FFF;
  }
`

const Nav = () => (
  <Wrapper>
    <div>
      <Link href='/'><a>Home</a></Link> |
      <Link href='/add' prefetch><a>Add</a></Link>
    </div>
  </Wrapper>
)

export default Nav

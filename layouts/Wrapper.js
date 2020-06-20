import styled from 'styled-components'

const Wrapper = styled.main`
  background: lightgreen;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  padding: 0 20%;

  main {
    flex: 1;
    background: #fff;
  }
  
  table {
    width: 100%;
  }
  
  tr:nth-child(2n) {
    background: #eee;
  }
  
  .search-container {
    display: flex;
    margin: 8px 0;
  }
  
  .search-container--title {
    font-size: 16px;
    padding: 0 8px 0 4px;
  }
  
  .search-container--input {
    width: 100%;
  }
  
  th {
    padding-left: 4px;
  }
`

export default Wrapper

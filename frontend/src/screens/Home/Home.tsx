import { Container, Grid, Menu, Segment } from "semantic-ui-react"
import { ExchangeSection } from "../../sections/ExchangeSection"
import { WalletSection } from "../../sections/WalletSection"

const Home = () => {
  const headerHeight = "5em"
  return <>
    <Grid columns={1} style={{ height: "100vh" }}>
      <Menu fixed='top' inverted>
        <Container style={{ height: headerHeight, display: "flex", flexDirection: "row-reverse" }}>
          <ExchangeSection />
        </Container>
      </Menu>
      <Grid.Row stretched style={{ marginTop: headerHeight }}>
        <Grid.Column>
          <Segment style={{ width: "45em" }}><WalletSection /></Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
}

export default Home
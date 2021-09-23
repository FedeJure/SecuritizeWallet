import { Container, Grid, Menu, Segment } from "semantic-ui-react"
import { ExchangeSection } from "../../sections/ExchangeSection"
import { WalletBalanceSection } from "../../sections/WalletBalanceSection"
import { WalletSection } from "../../sections/WalletSection"

const Home = () => {
  const headerHeight = "5em"
  return <>
    <Menu fixed='top' inverted>
      <Container style={{ height: headerHeight, display: "flex", flexDirection: "row-reverse" }}>
        <ExchangeSection />
      </Container>
    </Menu>
    <Grid columns={1}>
      <Grid.Row stretched style={{ marginTop: headerHeight }} columns={2}>
        <Grid.Column>
          <Segment style={{ width: "fit-content" }}><WalletSection /></Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment><WalletBalanceSection /></Segment>
        </Grid.Column>
      </Grid.Row>

    </Grid>
  </>
}

export default Home
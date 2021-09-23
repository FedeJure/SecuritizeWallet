import { Container, Grid, Menu } from "semantic-ui-react"
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
    <Grid columns={1} style={{  height: "100%" }}>
      <Grid.Column>
        <Grid.Row style={{ marginTop: headerHeight, }} >
          <WalletSection />
        </Grid.Row>
        <Grid.Row stretched>
          <WalletBalanceSection />
        </Grid.Row>
      </Grid.Column>
    </Grid>
  </>
}

export default Home
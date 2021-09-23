import { useState } from "react"
import { Container, Divider, Grid, Image, Menu, Visibility } from "semantic-ui-react"
import { ExchangeSection } from "../../sections/ExchangeSection"
import { WalletBalanceSection } from "../../sections/WalletBalanceSection"
import { WalletSection } from "../../sections/WalletSection"

const Home = () => {
  const [mobile, setMobile] = useState(false)
  return <>
    <Visibility onUpdate={(_, { calculations }) => { setMobile(calculations.width <= 525) }}>
      <Menu inverted>

        {!mobile &&<Container><Image spaced src="https://securitize.io/dist/img/securitize-logo.svg" inline size="medium" /></Container>}

        <Container style={{ minHeight: "5em", display: "flex", flexDirection: "row-reverse" }}>
          <ExchangeSection />
        </Container>
      </Menu>
      <Grid container columns={1} style={{ height: "100%" }}>
        <Grid.Column>
          <Grid.Row >
            <Divider hidden />
            <WalletSection />
          </Grid.Row>
          <Divider hidden></Divider>
          <Grid.Row >
            <WalletBalanceSection />
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </Visibility>
  </>
}

export default Home
import { Grid, Segment } from "semantic-ui-react"
import { WalletSection } from "../../sections/WalletSection"

const Home = () => {
    return <Grid columns={1} style={{height: "100vh"}}>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment style={{width: "45em"}}><WalletSection /></Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
}

export default Home
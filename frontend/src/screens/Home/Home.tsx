import { Grid, Segment } from "semantic-ui-react"
import { WalletSection } from "../../sections/WalletSection"

const Home = () => {
    return <Grid columns={3} style={{height: "100vh"}}>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment><WalletSection /></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
        <Segment>3</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
}

export default Home
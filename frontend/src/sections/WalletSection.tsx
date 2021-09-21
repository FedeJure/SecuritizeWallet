import { Button, Form, Grid, Icon } from "semantic-ui-react"

export const WalletSection = () => {
    return <>
        <Grid columns={1} divided>
            <Grid.Row>
                <Grid.Column>
                    <Form >
                        <Form.Field inline style={{display: "flex", justifyContent: "center"}}>
                            <input placeholder='Wallet address' style={{width: "100%"}}/>
                            <Button primary animated="vertical" type='submit' circular>
                                <Button.Content hidden>Add</Button.Content>
                                <Button.Content visible>
                                    <Icon name='plus circle' />
                                </Button.Content>
                            </Button>
                        </Form.Field>

                    </Form>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
            </Grid.Row>
        </Grid>
    </>
}
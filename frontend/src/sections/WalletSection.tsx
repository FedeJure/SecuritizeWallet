import { Button, Form, Grid, Icon, List } from "semantic-ui-react"
import { WalletCard } from "../components/WalletCard"

const wallets = [{
    address: "0x2cvkljn1234fdjk131243",
    selected: true,
    old: false,
    favorite: false
},
{
    address: "0x2cvkljn1234fdjk131243",
    selected: false,
    old: true,
    favorite: true
},
{
    address: "0x2cvkljn1234fdjk131243",
    selected: false,
    old: false,
    favorite: false
}]

export const WalletSection = () => {
    return <>
        <Grid columns={1} divided>
            <Grid.Row>
                <Grid.Column>
                    <Form >
                        <Form.Field inline style={{ display: "flex", justifyContent: "center" }}>
                            <input placeholder='Wallet address' style={{ width: "100%" }} />
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
                <Grid.Column>

                    <List selection >

                        {wallets.map(wallet =>
                            <List.Item active={wallet.selected}>
                                <List.Icon name='ethereum' size='large' verticalAlign='middle' />
                                <List.Content>
                                    <WalletCard
                                        address={wallet.address}
                                        favorite={wallet.favorite}
                                        old={wallet.old}
                                        onSetFavorite={() => { }} />
                                </List.Content>
                            </List.Item>
                        )}
                    </List>
                </Grid.Column>

            </Grid.Row>
        </Grid>
    </>
}
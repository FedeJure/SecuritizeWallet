import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { Button, Dropdown, Label, Form, Grid, Icon, List } from "semantic-ui-react"
import { WalletCard } from "../components/WalletCard"
import { UserWallet } from "../modules/wallet/UserWallet"
import { loadWallets, setFavorite, setSelected } from "../modules/wallet/wallet.actions"
import { getUserWallets } from "../modules/wallet/wallet.selectors"
import { StoreState } from "../store"

const mapStateToProps = (state: StoreState) => {
    return {
        wallets: getUserWallets(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        loadWallets: () => loadWallets()(dispatch),
        setFavorite: (address: string, value: boolean) => setFavorite(address, value)(dispatch),
        setSelected: (address: string) => setSelected(address)(dispatch)
    }
}

interface Payload {
    wallets: UserWallet[],
    loadWallets: Function,
    setFavorite: (address: string, value: boolean) => void,
    setSelected: (address: string) => void
}

const tagOptions = [
    {
        key: 'Favorites',
        text: 'Favorites',
        value: 'Favorites',
        label: { color: 'orange', empty: true, circular: true },
    }
]

export const WalletSection = connect(mapStateToProps, mapDispatchToProps)(
    ({ wallets, loadWallets, setFavorite, setSelected }: Payload) => {
        const [order, setOrder] = useState<string | null>(null)

        useEffect(() => {
            loadWallets()
        }, [])

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
                        <Grid.Row >
                            <Label icon style={{ justifyContent: "center" }}>

                                <header>Order by...<Icon name='long arrow alternate down'></Icon></header>
                                <Dropdown selection clearable options={tagOptions} onChange={(e, v) => {
                                    setOrder(v.value ? v.value as string : null)
                                }} />
                            </Label>


                        </Grid.Row>
                        <List selection  >
                                {(order ? [...wallets].sort((w1, w2) => w1.favorite ? -1 : 1) : [...wallets].sort()).map(wallet =>
                                    <List.Item key={wallet.address} active={wallet.selected} onClick={() => setSelected(wallet.address)}>
                                        <List.Icon name='ethereum' size='large' verticalAlign='middle' />
                                        <List.Content >
                                            <WalletCard
                                                address={wallet.address}
                                                favorite={wallet.favorite}
                                                old={wallet.old}
                                                onSetFavorite={() => { setFavorite(wallet.address, !wallet.favorite) }} />
                                        </List.Content>
                                    </List.Item>
                                )}
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    })
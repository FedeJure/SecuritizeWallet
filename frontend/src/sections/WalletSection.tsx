import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { Button, Dropdown, Label, Form, Grid, Icon, List, Input, Dimmer, Loader, CardGroup, Card, Header, Segment, Container } from "semantic-ui-react"
import { WalletCard } from "../components/WalletCard"
import { Wallet } from "../modules/wallet/Wallet"
import { loadWallets, saveWallet, setFavorite, setSelected } from "../modules/wallet/wallet.actions"
import { getLoading, getUserWallets } from "../modules/wallet/wallet.selectors"
import { StoreState } from "../store"

const mapStateToProps = (state: StoreState) => {
    return {
        wallets: getUserWallets(state),
        loading: getLoading(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        loadWallets: () => loadWallets()(dispatch),
        setFavorite: (address: string, value: boolean) => setFavorite(address, value)(dispatch),
        setSelected: (address: string) => setSelected(address)(dispatch),
        saveWallet: (address: string) => saveWallet(address)(dispatch)
    }
}

interface Payload {
    loading: boolean,
    wallets: Wallet[],
    loadWallets: Function,
    setFavorite: (address: string, value: boolean) => void,
    setSelected: (address: string) => void,
    saveWallet: (address: string) => void
}

const tagOptions = [
    {
        key: 'Favorites',
        text: 'Favorites',
        value: 'Favorites',
        label: { color: 'orange', empty: true, circular: true },
    }
]

const ethWalletRegex = /^0x[a-fA-F0-9]{40}$/

export const WalletSection = connect(mapStateToProps, mapDispatchToProps)(
    ({ loading, wallets, loadWallets, setFavorite, setSelected, saveWallet }: Payload) => {
        const [order, setOrder] = useState<string | null>(null)
        const [walletAddress, setWalletAddress] = useState("")

        useEffect(() => {
            loadWallets()
        }, [])

        const handleAdd = () => {
            if (loading) return
            if (ethWalletRegex.test(walletAddress)) {
                saveWallet(walletAddress)
            }
        }

        return <>
            <Grid columns={1} divided>
                    <Container>
                            <Form onSubmit={() => handleAdd()}>
                                <Form.Field style={{ display: "flex", justifyContent: "center" }}>
                                    <Input disabled={loading} onChange={(v) => setWalletAddress(v.currentTarget.value)} placeholder='Wallet address' style={{ width: "100%" }} />
                                    <Button disabled={loading} primary animated="vertical" type='submit'>
                                        <Button.Content hidden>Add</Button.Content>
                                        <Button.Content visible>
                                            <Icon name='plus circle' size="big" style={{ margin: "0" }} />
                                        </Button.Content>
                                    </Button>
                                    <Label size="tiny" style={{ justifyContent: "center" }}>
                                        <header>Order by...<Icon name='long arrow alternate down'></Icon></header>
                                        <Dropdown  selection clearable options={tagOptions} onChange={(e, v) => {
                                            setOrder(v.value ? v.value as string : null)
                                        }} />
                                    </Label>
                                </Form.Field>
                            </Form>
                    </Container>


                <Grid.Row>

                    <Grid.Column>
                        <Grid.Row >



                        </Grid.Row>
                        <CardGroup centered selection style={{ overflowY: "auto", maxHeight: "25em" }}>
                            {loading && <Dimmer active inverted >
                                <Loader content='Loading' inverted />
                            </Dimmer>}
                            {(order ? [...wallets].sort((w1, w2) => w1.favorite ? -1 : 1) : [...wallets].sort()).map(wallet =>
                                <Card color={wallet.selected ? "yellow" : undefined} style={{ width: "fit-content" }} key={wallet.address} onClick={() => setSelected(wallet.address)}>

                                    <Card.Content >
                                        <Icon name='ethereum' size='large' verticalAlign='middle' />
                                        <WalletCard
                                            address={wallet.address}
                                            favorite={wallet.favorite}
                                            old={wallet.old}
                                            onSetFavorite={() => { setFavorite(wallet.address, !wallet.favorite) }} />
                                    </Card.Content>
                                </Card>
                            )}
                        </CardGroup>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    })
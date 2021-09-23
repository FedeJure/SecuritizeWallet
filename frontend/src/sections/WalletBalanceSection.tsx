import { connect } from "react-redux"
import { Dispatch } from "redux"
import { Card, CardGroup, Container, Divider, Icon, Message, Segment } from "semantic-ui-react"
import { Wallet } from "../modules/wallet/Wallet"
import { getSelectedWallet } from "../modules/wallet/wallet.selectors"
import { StoreState } from "../store"

const mapStateToProps = (state: StoreState) => {
    return {
        selectedWallet: getSelectedWallet(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {

    }
}

interface Payload {
    selectedWallet: Wallet | undefined
}

export const WalletBalanceSection = connect(mapStateToProps, mapDispatchToProps)(
    ({ selectedWallet }: Payload) => {
        return <>
            <Container placeholder size="massive" style={{ height: "15em" }}>
                {selectedWallet && selectedWallet.old && <><Segment.Inline >
                    <Message color="red" attached='bottom'>
                        <Icon name='warning sign' />
                        Wallet is old!
                    </Message>
                </Segment.Inline>
                    <Divider hidden></Divider></>}

                {selectedWallet && <CardGroup centered itemsPerRow={2} stackable>
                    <Card fluid>
                        <Segment placeholder></Segment>
                    </Card>
                    <Card fluid>
                        <Segment placeholder></Segment>
                    </Card>
                </CardGroup>}

            </Container>
        </>
    })
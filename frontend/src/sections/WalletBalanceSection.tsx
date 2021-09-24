import { useState } from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { Card, CardGroup, Container, Divider, Dropdown, Icon, Label, Message, Segment, Statistic } from "semantic-ui-react"
import { Currency } from "../modules/exchanger/Currency"
import { getDollarRate, getEuroRate } from "../modules/exchanger/exchange.selectors"
import { Wallet } from "../modules/wallet/Wallet"
import { getSelectedWallet } from "../modules/wallet/wallet.selectors"
import { StoreState } from "../store"

const mapStateToProps = (state: StoreState) => {
    return {
        selectedWallet: getSelectedWallet(state),
        dollarRate: getDollarRate(state),
        euroRate: getEuroRate(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {

    }
}

interface Payload {
    selectedWallet: Wallet | undefined,
    dollarRate: number,
    euroRate: number
}

const dropdownOptions = [
    {
        key: Currency.DOLLAR,
        text: Currency.DOLLAR,
        value: Currency.DOLLAR
    },
    {
        key: Currency.EURO,
        text: Currency.EURO,
        value: Currency.EURO
    }
]

export const WalletBalanceSection = connect(mapStateToProps, mapDispatchToProps)(
    ({ selectedWallet, dollarRate, euroRate }: Payload) => {
        const [currency, setCurrency] = useState<Currency>(Currency.DOLLAR)
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
                        <Segment placeholder>
                            <Segment.Inline>
                                <Label>
                                    <Icon name='info' /> Amount in wallet
                                </Label>
                            </Segment.Inline>

                            <Statistic size="tiny">
                                <Statistic.Value>{selectedWallet.balance}</Statistic.Value>
                                <Statistic.Label>ETH</Statistic.Label>
                            </Statistic>
                        </Segment>
                    </Card>
                    <Card fluid>
                        <Segment placeholder>
                            <Segment.Inline>
                                <Dropdown
                                    upward
                                    onChange={(t, v) => setCurrency(v.value as Currency)}
                                    placeholder='Select Friend'
                                    defaultValue={dropdownOptions[0].key}
                                    options={dropdownOptions}
                                />
                            </Segment.Inline>


                            {currency === Currency.DOLLAR ?
                                <Statistic size="tiny">
                                    <Statistic.Value>$ {selectedWallet.balance * dollarRate}</Statistic.Value>
                                </Statistic> :
                                <Statistic size="tiny">
                                    <Statistic.Value>€ {selectedWallet.balance * euroRate}</Statistic.Value>
                                </Statistic>
                            }
                        </Segment>
                    </Card>
                </CardGroup>}

            </Container>
        </>
    })
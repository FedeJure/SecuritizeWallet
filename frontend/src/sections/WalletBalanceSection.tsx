import { Header, Icon, Message, Segment } from "semantic-ui-react"

export const WalletBalanceSection = ({ }) => {
    return <>
        <Segment placeholder size="massive" style={{ height: "15em" }}>
            <Segment.Inline >
                <Message color="red" attached='bottom'>
                    <Icon name='warning sign' />
                    Wallet is old!
                </Message>
            </Segment.Inline>

        </Segment>
    </>
}